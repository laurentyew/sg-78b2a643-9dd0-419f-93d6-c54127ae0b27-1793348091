import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "@/lib/quiz/supabase-server";
import { buildBreakdown } from "@/lib/quiz/scoring";
import { hasUnlockCookie } from "@/lib/quiz/unlock-cookie";
import type {
  CommentType,
  MissedRoundRow,
  ModAction,
  ScoredAnswer,
} from "@/lib/quiz/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const playId = req.query.playId;
  if (typeof playId !== "string") {
    return res.status(400).json({ error: "invalid_play_id" });
  }

  if (!hasUnlockCookie(req, playId)) {
    return res.status(403).json({ error: "locked" });
  }

  const supabase = getServerSupabase();

  const { data: play } = await supabase
    .from("plays")
    .select("id")
    .eq("id", playId)
    .maybeSingle();

  if (!play) {
    return res.status(404).json({ error: "play_not_found" });
  }

  const { data: answers, error } = await supabase
    .from("play_answers")
    .select(
      "comment_id, action, ms, correct, comments(id, body, type, best_action, reason)",
    )
    .eq("play_id", playId);

  if (error || !answers) {
    return res.status(500).json({ error: "breakdown_unavailable" });
  }

  const typed = answers.map((row) => {
    const comment = row.comments as unknown as {
      id: string;
      body: string;
      type: CommentType;
      best_action: ModAction;
      reason: string;
    } | null;
    return {
      commentId: row.comment_id as string,
      action: (row.action ?? null) as ModAction | null,
      ms: row.ms as number,
      correct: Boolean(row.correct),
      type: (comment?.type ?? "spam") as CommentType,
      body: comment?.body ?? "",
      bestAction: (comment?.best_action ?? "hide") as ModAction,
      reason: comment?.reason ?? "",
    };
  });

  const byType = buildBreakdown(typed as ScoredAnswer[] & { type: CommentType }[]);

  const missed: MissedRoundRow[] = typed
    .filter((row) => !row.correct)
    .map((row) => ({
      body: row.body,
      yourAction: row.action,
      bestAction: row.bestAction,
      reason: row.reason,
    }));

  return res.status(200).json({ byType, missed });
}