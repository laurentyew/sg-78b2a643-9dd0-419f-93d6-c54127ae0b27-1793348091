import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getServerSupabase, getSiteUrl } from "@/lib/quiz/supabase-server";
import { rankFor, scorePlay, TOTAL_ROUNDS } from "@/lib/quiz/scoring";
import type { ScoredAnswer } from "@/lib/quiz/types";

const bodySchema = z.object({ playId: z.string().uuid() });

const MIN_ELAPSED_MS = 8000;

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

  const { playId } = parsed.data;
  const supabase = getServerSupabase();
  const site = getSiteUrl();

  const { data: play, error: playError } = await supabase
    .from("plays")
    .select("id, started_at, finished_at, score, total_ms, rank_key")
    .eq("id", playId)
    .maybeSingle();

  if (playError || !play) {
    return res.status(404).json({ error: "play_not_found" });
  }

  const shareUrl = site + "/tools/spot-the-spam-comment-quiz/r/" + playId;
  const ogImageUrl = site + "/api/og/" + playId;

  if (play.finished_at) {
    const rank = rankFor(play.score ?? 0);
    return res.status(200).json({
      score: play.score ?? 0,
      totalMs: play.total_ms ?? 0,
      rank: { key: play.rank_key ?? rank.key, title: rank.title },
      shareUrl,
      ogImageUrl,
    });
  }

  const { data: answers, error: answersError } = await supabase
    .from("play_answers")
    .select("comment_id, action, ms, correct")
    .eq("play_id", playId);

  if (answersError) {
    return res.status(500).json({ error: "answers_unavailable" });
  }

  if (!answers || answers.length < TOTAL_ROUNDS) {
    return res.status(400).json({ error: "incomplete_play" });
  }

  const startedAt = new Date(play.started_at).getTime();
  if (Date.now() - startedAt < MIN_ELAPSED_MS) {
    return res.status(400).json({ error: "too_fast" });
  }

  const scored: ScoredAnswer[] = answers.map((answer) => ({
    commentId: answer.comment_id as string,
    action: (answer.action ?? null) as ScoredAnswer["action"],
    ms: answer.ms as number,
    correct: Boolean(answer.correct),
  }));

  const { score, totalMs } = scorePlay(scored);
  const rank = rankFor(score);

  const { error: updateError } = await supabase
    .from("plays")
    .update({
      finished_at: new Date().toISOString(),
      score,
      total_ms: totalMs,
      rank_key: rank.key,
    })
    .eq("id", playId);

  if (updateError) {
    return res.status(500).json({ error: "finish_save_failed" });
  }

  return res.status(200).json({
    score,
    totalMs,
    rank,
    shareUrl,
    ogImageUrl,
  });
}