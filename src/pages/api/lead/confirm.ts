import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSupabase } from "@/lib/quiz/supabase-server";

const QUIZ_PATH = "/tools/spot-the-spam-comment-quiz";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const token = typeof req.query.token === "string" ? req.query.token.trim() : "";
  if (!token) {
    return res.redirect(302, QUIZ_PATH + "?confirmed=0");
  }

  try {
    const supabase = getServerSupabase();
    const { data } = await supabase
      .from("leads")
      .select("id, confirmed_at")
      .eq("confirm_token", token)
      .maybeSingle();

    if (!data) {
      return res.redirect(302, QUIZ_PATH + "?confirmed=0");
    }

    if (!data.confirmed_at) {
      await supabase
        .from("leads")
        .update({ confirmed_at: new Date().toISOString() })
        .eq("id", data.id);
    }

    return res.redirect(302, QUIZ_PATH + "?confirmed=1");
  } catch {
    return res.redirect(302, QUIZ_PATH + "?confirmed=0");
  }
}