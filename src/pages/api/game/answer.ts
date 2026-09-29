import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getServerSupabase } from "@/lib/quiz/supabase-server";
import { clampMs, isCorrect } from "@/lib/quiz/scoring";
import { rateLimit } from "@/lib/quiz/ratelimit";
import type { ModAction } from "@/lib/quiz/types";

const bodySchema = z.object({
  playId: z.string().uuid(),
  roundId: z.string().uuid(),
  action: z.enum(["keep", "hide", "reply", "ban"]).nullable(),
  ms: z.number(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const parsed = bodySchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "invalid_body" });
  }

  const { playId, roundId, action, ms } = parsed.data;

  const limiter = rateLimit("answer:" + playId, 60, 60 * 1000);
  if (!limiter.ok) {
    return res.status(429).json({ error: "rate_limited" });
  }

  const supabase = getServerSupabase();

  const { data: play, error: playError } = await supabase
    .from("plays")
    .select("id, round_ids, finished_at")
    .eq("id", playId)
    .maybeSingle();

  if (playError || !play) {
    return res.status(404).json({ error: "play_not_found" });
  }

  if (play.finished_at) {
    return res.status(409).json({ error: "play_finished" });
  }

  const roundIds = (play.round_ids ?? []) as string[];
  if (!roundIds.includes(roundId)) {
    return res.status(400).json({ error: "round_not_in_play" });
  }

  const { data: existing } = await supabase
    .from("play_answers")
    .select("comment_id")
    .eq("play_id", playId)
    .eq("comment_id", roundId)
    .maybeSingle();

  if (existing) {
    return res.status(409).json({ error: "already_answered" });
  }

  const { data: comment, error: commentError } = await supabase
    .from("comments")
    .select("id, best_action, alt_action, reason, is_trap")
    .eq("id", roundId)
    .maybeSingle();

  if (commentError || !comment) {
    return res.status(404).json({ error: "comment_not_found" });
  }

  const bestAction = comment.best_action as ModAction;
  const altAction = (comment.alt_action ?? null) as ModAction | null;
  const correct = isCorrect(action, bestAction, altAction);
  const clampedMs = clampMs(ms);

  const { error: answerError } = await supabase.from("play_answers").insert({
    play_id: playId,
    comment_id: roundId,
    action,
    ms: clampedMs,
    correct,
  });

  if (answerError) {
    return res.status(500).json({ error: "answer_save_failed" });
  }

  return res.status(200).json({
    correct,
    bestAction,
    reason: comment.reason,
    isTrap: comment.is_trap,
  });
}