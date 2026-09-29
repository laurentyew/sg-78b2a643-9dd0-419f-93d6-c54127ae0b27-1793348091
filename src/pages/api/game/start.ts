import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getServerSupabase } from "@/lib/quiz/supabase-server";
import { pickRounds } from "@/lib/quiz/rounds";
import { TIME_LIMIT_MS } from "@/lib/quiz/scoring";
import { rateLimit } from "@/lib/quiz/ratelimit";
import { clientIp, hashIp } from "@/lib/quiz/unlock-cookie";
import type { QuizComment } from "@/lib/quiz/types";

const bodySchema = z.object({
  sessionId: z.string().uuid(),
  utm: z.record(z.string()).optional(),
});

const SEEN_LOOKBACK = 5;

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

  const limiter = rateLimit("start:" + hashIp(clientIp(req)), 20, 60 * 60 * 1000);
  if (!limiter.ok) {
    return res.status(429).json({ error: "rate_limited" });
  }

  const supabase = getServerSupabase();
  const { sessionId, utm } = parsed.data;

  const { data: pastPlays } = await supabase
    .from("plays")
    .select("round_ids")
    .eq("session_id", sessionId)
    .order("started_at", { ascending: false })
    .limit(SEEN_LOOKBACK);

  const seenIds = (pastPlays ?? []).flatMap(
    (play) => (play.round_ids ?? []) as string[],
  );

  const { data: pool, error } = await supabase
    .from("comments")
    .select("*")
    .eq("active", true);

  if (error || !pool || pool.length < 10) {
    return res.status(503).json({ error: "content_unavailable" });
  }

  const rounds = pickRounds(pool as QuizComment[], seenIds);

  if (rounds.length < 10) {
    return res.status(503).json({ error: "content_unavailable" });
  }

  const { data: play, error: insertError } = await supabase
    .from("plays")
    .insert({
      session_id: sessionId,
      round_ids: rounds.map((round) => round.id),
      utm: utm ?? null,
      referrer: (req.headers.referer ?? null) as string | null,
      ip_hash: hashIp(clientIp(req)),
    })
    .select("id")
    .single();

  if (insertError || !play) {
    return res.status(500).json({ error: "play_create_failed" });
  }

  return res.status(200).json({
    playId: play.id,
    timeLimitMs: TIME_LIMIT_MS,
    rounds: rounds.map((round) => ({
      id: round.id,
      platform: round.platform,
      kind: round.kind,
      authorHandle: round.author_handle,
      body: round.body,
    })),
  });
}