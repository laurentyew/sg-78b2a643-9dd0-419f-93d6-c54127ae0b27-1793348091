import { ImageResponse } from "next/og";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "@/lib/quiz/supabase-server";
import { rankFor } from "@/lib/quiz/scoring";

const QUIZ_PATH = "/tools/spot-the-spam-comment-quiz";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const playId = String(req.query.playId ?? "");

  if (!playId) {
    res.status(404).json({ error: "not_found" });
    return;
  }

  try {
    const supabase = getServerSupabase();
    const { data } = await supabase
      .from("plays")
      .select("score, total_ms, finished_at")
      .eq("id", playId)
      .maybeSingle();

    if (!data || !data.finished_at || data.score === null) {
      res.status(404).json({ error: "not_found" });
      return;
    }

    const score = Number(data.score);
    const seconds = Math.max(1, Math.round(Number(data.total_ms ?? 0) / 1000));
    const rankTitle = rankFor(score).title;

    const image = new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#189183",
            padding: "64px",
            color: "#fffaf0",
          }}
        >
          <div style={{ display: "flex", fontSize: 34, letterSpacing: 2 }}>
            SOCIAL KIRIN
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 92,
                lineHeight: 1.05,
                fontWeight: 700,
              }}
            >
              {rankTitle}
            </div>
            <div style={{ display: "flex", fontSize: 60, color: "#ffd9a8" }}>
              {score}/10 in {seconds}s
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 32,
            }}
          >
            <div style={{ display: "flex" }}>Can you beat me?</div>
            <div style={{ display: "flex", color: "#ffd9a8" }}>{QUIZ_PATH}</div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    );

    const buffer = Buffer.from(await image.arrayBuffer());

    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
    res.status(200).send(buffer);
  } catch {
    res.redirect(302, "/og-image.png");
  }
}