---
title: Comment moderation quiz game engine
status: in_progress
priority: urgent
type: feature
tags: [game, supabase, api]
created_by: agent
created_at: 2026-09-29T08:52:00Z
position: 7
---

## Notes
Adaptation note: the spec assumes Next.js App Router. This project is Pages Router (v15.5), so route handlers live under `src/pages/api/` and pages under `src/pages/`. Sections 4, 5, 6, 12 of the spec are kept literally; sections 2, 3, 7 are adapted.

Path: `/tools/spot-the-spam-comment-quiz`. 10 rounds x 6s, scored server-side. The browser must never receive `best_action`, `alt_action`, `reason`, `type` or `is_trap` for an unanswered round.

Supabase tables: `comments`, `plays`, `play_answers`, `leads` + view `stats_by_type`. RLS enabled, no public policies, service-role only.

## Checklist
- [ ] Supabase migration: enum types `comment_type`, `mod_action`; tables `comments`, `plays`, `play_answers`, `leads`; view `stats_by_type`; RLS on all four tables with no public policies
- [ ] `data/comments.json`: 40+ rows (8 spam, 8 scam_dm, 5 troll, 8 complaint, 5 sarcasm, 6 question) with 12+ `is_trap: true`, invented handles only, `example.invalid` URLs, mixed difficulty (40/40/20)
- [ ] `scripts/seed.ts`: idempotent upsert matching on platform + author_handle + body
- [ ] `src/lib/quiz/types.ts`: shared types for Comment, Round, PlayAnswer, Rank
- [ ] `src/lib/quiz/rounds.ts`: pick 10 by composition (spam 2, scam_dm 2, troll 1, complaint 2, sarcasm 1, question 2), shuffle, guarantee >=3 traps, no repeats within a game, prefer unseed comments for the session
- [ ] `src/lib/quiz/scoring.ts`: pure `isCorrect` (best or alt action), timeout = wrong + 6000ms, `totalMs` sums clamped ms, `rankFor(score)` mapping, per-type breakdown
- [ ] `src/lib/quiz/supabase-server.ts`: service-role client, importable only from API routes
- [ ] `POST /api/game/start`: zod-validated, creates `plays` row, returns 10 rounds stripped of answers
- [ ] `POST /api/game/answer`: validates round belongs to play, 409 on duplicate or finished play, clamps ms 200-6000, returns correct + bestAction + reason + isTrap
- [ ] `POST /api/game/finish`: requires 10 answers, 400 `too_fast` under 8s server time, idempotent, returns score, totalMs, rank, shareUrl, ogImageUrl
- [ ] `/api/game/[playId]/breakdown`: 403 without signed unlock cookie for that playId, 200 with it
- [ ] Vitest tests: scoring (correct, alt-correct, wrong, timeout, tie-break) and rounds composition
- [ ] `DECISIONS.md` recording choices where the spec is silent

## Acceptance
- Starting a game returns exactly 10 rounds and no answer/reason/type/trap fields.
- A second answer for the same round returns 409; finishing twice returns the same result.
- Every generated game matches the section 6 composition and has at least 3 trap rounds.