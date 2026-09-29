import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import type { NextApiRequest } from "next";

export const UNLOCK_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

function secret(): string {
  return (
    process.env.COOKIE_SECRET ??
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    "social-kirin-dev-cookie-secret"
  );
}

export function cookieName(playId: string): string {
  return "mr_unlock_" + playId;
}

export function signPlay(playId: string): string {
  return createHmac("sha256", secret()).update(playId).digest("hex");
}

export function verifyPlay(playId: string, value: string | undefined): boolean {
  if (!value) return false;
  const expected = signPlay(playId);
  const a = Buffer.from(expected);
  const b = Buffer.from(value);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function hasUnlockCookie(req: NextApiRequest, playId: string): boolean {
  const raw = req.headers.cookie;
  if (!raw) return false;
  const target = cookieName(playId) + "=";
  const found = raw
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(target));
  if (!found) return false;
  return verifyPlay(playId, decodeURIComponent(found.slice(target.length)));
}

export function buildUnlockCookie(playId: string): string {
  const parts = [
    cookieName(playId) + "=" + signPlay(playId),
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=" + UNLOCK_COOKIE_MAX_AGE,
  ];
  if (process.env.NODE_ENV === "production") parts.push("Secure");
  return parts.join("; ");
}

export function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT ?? "social-kirin-dev-salt";
  return createHash("sha256").update(ip + salt).digest("hex");
}

export function clientIp(req: NextApiRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return (value ?? "").split(",")[0].trim() || "unknown";
}