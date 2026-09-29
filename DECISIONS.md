# Decisions

Choices made where `Moderator_Rush_Technical_Spec.md` is silent, plus stack adaptations.

## Stack adaptation
- The spec assumes the Next.js **App Router**. Social Kirin runs the **Pages Router** (Next 15.5), so per section 2's own instruction, sections 4, 5, 6, 8–13 are kept literally and sections 2, 3 and 7 are adapted:
  - Route handlers live at `src/pages/api/**` (default export, `NextApiRequest`/`NextApiResponse`).
  - `generateMetadata` becomes `next/head` via the existing `SEO` component.
  - Server-rendered SEO copy lives in `src/pages/tools/spot-the-spam-comment-quiz/index.tsx` via `getStaticProps`.
- Route group names (`app/tools/...`) become real file paths under `src/pages/`.

## Adapted from the spec's stack table
- **Upstash Redis**: no Upstash env vars exist in this project, so `lib/quiz/ratelimit.ts` uses an in-memory fixed-window limiter with the same limits (start 20/hour, answer 60/min per playId, lead 5/hour). Swapping in `@upstash/ratelimit` later is a one-file change.
- **PostHog**: `lib/quiz/track.ts` posts to the PostHog capture endpoint with `fetch` when `NEXT_PUBLIC_POSTHOG_KEY` is set, and console-logs in development otherwise. No SDK dependency added.
- **Resend**: called over HTTPS with `fetch` from `lib/quiz/email.ts` instead of the SDK, to avoid an unused dependency.
- **Turnstile**: not wired up. The spec marks it optional ("if lead spam appears"); the honeypot field is implemented.
- **Vitest**: scoring and round-selection logic are pure functions in `lib/quiz/` with a test suite run through `vitest`.

## Choices the spec left open
- **Sessions**: `sessionId` is a `crypto.randomUUID()` stored in `localStorage` under `socialKirinQuizSessionId`. The `ref` value is stored under `socialKirinQuizRef`, and the UTM source under `socialKirinQuizUtm` — nothing else is persisted client-side.
- **Cookie secret**: `COOKIE_SECRET` if set, otherwise the service-role key, otherwise a development constant. Set `COOKIE_SECRET` in production.
- **IP salt**: `IP_HASH_SALT` if set, otherwise a development constant.
- **Timed-out rounds** are stored with `action = null` and `ms = 6000`, matching the scoring rule.
- **Seen-comment memory** uses the last 5 plays for the same `sessionId`, matching "prefer comments the visitor has not seen in earlier plays".
- **`finish` idempotency** replays the stored `score`, `total_ms` and `rank_key` instead of recomputing.
- **Result page route** is `/tools/spot-the-spam-comment-quiz/r/[playId]`.
- **AI reveal** stays disabled until measured numbers exist. `AI_REVEAL_ENABLED` defaults to `false` and the fallback line is shown.

## Owner decisions still open (per section 13)
- Whether to enable the AI reveal (needs measured `AI_REVEAL_ACCURACY` and `AI_REVEAL_SECONDS`).
- The waitlist queue formula in section 4.
- Privacy policy and consent wording (PDPA / GDPR review).