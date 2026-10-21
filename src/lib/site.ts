export const CANONICAL_ORIGIN = "https://socialkirin.com";

const NON_PUBLIC_HOST = /(^|\.)(softgen\.dev|softgen\.ai|localhost|127\.0\.0\.1)$/i;

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (raw) {
    const cleaned = raw.replace(/\/+$/, "");
    try {
      const host = new URL(cleaned).hostname;
      if (!NON_PUBLIC_HOST.test(host)) {
        return cleaned;
      }
    } catch {
      return CANONICAL_ORIGIN;
    }
  }

  return CANONICAL_ORIGIN;
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return getSiteUrl() + (path.startsWith("/") ? path : "/" + path);
}