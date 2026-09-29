---
title: Email gate, waitlist and referral
status: done
priority: high
type: feature
tags: [quiz, leads, email]
created_by: agent
created_at: 2026-09-29T08:55:00Z
position: 9
---

## Notes
Playing and seeing the score are free. The email only unlocks the category breakdown and the referral link. Writes go through server routes only. Resend is used for the single confirmation email; if no Resend key is configured the lead still unlocks locally and the send is skipped.

## Checklist
- [ ] `EmailGate`: email (required), first name (optional), role dropdown (Brand/Agency/Creator/Other, required), unticked consent checkbox with privacy link, hidden honeypot `website`, button "Unlock my breakdown"; locked breakdown preview above the form
- [ ] `POST /api/lead`: zod validation, honeypot filled -> `{ ok: true }` and store nothing, disposable-domain rejection, duplicate email returns the same success response and re-sends confirmation, sets httpOnly signed 30-day unlock cookie for that playId, ignores `ref` equal to own code, generates 8-char base32 `referral_code` + random `confirm_token`, stores `ip_hash = sha256(ip + IP_HASH_SALT)`
- [ ] `GET /api/lead/confirm`: sets `confirmed_at`, redirects to quiz page with `?confirmed=1`, invalid token -> `?confirmed=0`
- [ ] `BreakdownTable`: per-type correct/total plus missed rounds with your action, best action and reason
- [ ] `ReferralBox`: referral URL, copy button, share buttons, "Each friend who confirms moves you up the waitlist."
- [ ] Waitlist position computed on read via the section 4 queue score in one function; shown only after the lead confirms
- [ ] `lib/email.ts` Resend confirmation email wrapper
- [ ] Confirmation / `?confirmed=1` screen with referral link and position

## Acceptance
- Submitting with the honeypot filled returns success but creates no row.
- A duplicate email returns the same response as a new one and re-sends the confirmation.
- The breakdown stays locked until the unlock cookie is present.