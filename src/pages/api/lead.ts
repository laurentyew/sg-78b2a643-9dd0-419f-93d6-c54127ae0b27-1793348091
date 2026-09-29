import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getServerSupabase, getSiteUrl } from "@/lib/quiz/supabase-server";
import { rateLimit } from "@/lib/quiz/ratelimit";
import {
  buildUnlockCookie,
  clientIp,
  hashIp,
} from "@/lib/quiz/unlock-cookie";
import {
  generateReferralCode,
  generateToken,
  isDisposableEmail,
  sendConfirmationEmail,
} from "@/lib/quiz/email";

const QUIZ_PATH = "/tools/spot-the-spam-comment-quiz";

const optionalString = z
  .string()
  .max(200)
  .optional()
  .nullable();

const bodySchema = z.object({
  playId: z.string().uuid().optional(),
  play_id: z.string().uuid().optional(),
  email: z.string().email().max(200),
  firstName: z.string().max(80).optional().nullable(),
  first_name: z.string().max(80).optional().nullable(),
  role: z.enum(["brand", "agency", "creator", "other"]),
  consent: z.literal(true),
  ref: optionalString,
  website: z.string().max(200).optional().nullable(),
});

function pickPlayId(body: z.infer<typeof bodySchema>): string {
  return body.playId ?? body.play_id ?? "";
}

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
    return res.status(400).json({ error: "invalid_request" });
  }

  const body = parsed.data;
  const siteUrl = getSiteUrl();

  if (body.website && body.website.trim().length > 0) {
    return res.status(200).json({ ok: true, referralUrl: siteUrl + QUIZ_PATH });
  }

  const limit = rateLimit("lead:" + hashIp(clientIp(req)), 5, 60 * 60 * 1000);
  if (!limit.ok) {
    return res.status(429).json({ error: "rate_limited" });
  }

  const email = body.email.trim().toLowerCase();
  if (isDisposableEmail(email)) {
    return res.status(400).json({ error: "disposable_email" });
  }

  const firstName =
    (body.firstName ?? body.first_name ?? "").toString().trim() || null;
  const playId = pickPlayId(body);

  try {
    const supabase = getServerSupabase();

    const { data: existing } = await supabase
      .from("leads")
      .select("id, referral_code, confirm_token")
      .eq("email", email)
      .maybeSingle();

    let referralCode = existing?.referral_code ?? null;
    let confirmToken = existing?.confirm_token ?? null;

    if (!existing) {
      const candidateCode = generateReferralCode();
      const candidateToken = generateToken();
      const referredBy =
        body.ref && body.ref !== candidateCode ? body.ref : null;

      const { error } = await supabase.from("leads").insert({
        email,
        first_name: firstName,
        role: body.role,
        play_id: playId || null,
        referral_code: candidateCode,
        referred_by: referredBy,
        consent_at: new Date().toISOString(),
        confirm_token: candidateToken,
      });

      if (error) {
        const { data: raced } = await supabase
          .from("leads")
          .select("referral_code, confirm_token")
          .eq("email", email)
          .maybeSingle();
        if (!raced) {
          return res.status(500).json({ error: "store_failed" });
        }
        referralCode = raced.referral_code;
        confirmToken = raced.confirm_token;
      } else {
        referralCode = candidateCode;
        confirmToken = candidateToken;
      }
    }

    if (referralCode && confirmToken) {
      await sendConfirmationEmail({
        email,
        firstName,
        confirmUrl: siteUrl + "/api/lead/confirm?token=" + confirmToken,
      });
    }

    if (playId) {
      res.setHeader("Set-Cookie", buildUnlockCookie(playId));
    }

    return res.status(200).json({
      ok: true,
      referralUrl: siteUrl + QUIZ_PATH + "?ref=" + (referralCode ?? ""),
    });
  } catch {
    return res.status(500).json({ error: "store_failed" });
  }
}