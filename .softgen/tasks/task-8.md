---
title: Quiz game UI and result page
status: todo
priority: urgent
type: feature
tags: [game, ui, og-image]
created_by: agent
created_at: 2026-09-29T08:52:00Z
position: 8
---

## Notes
Mobile-first at 375px, single column, four action buttons fixed in the thumb zone. All game components live in `src/components/game/`. The page is a Next Page Router page with server-rendered SEO copy wrapped around a client-only game bundle.

## Checklist
- [ ] `CommentCard`: handle, avatar placeholder with initials, body as plain text (never `dangerouslySetInnerHTML`), platform name as a text label, comment vs DM kind
- [ ] `ActionBar`: Keep / Hide / Reply / Ban, shortcuts K H R B, min 48px tall, disabled during feedback, icons + labels
- [ ] `TimerBar`: 6s countdown, submits `action: null` on zero, respects `prefers-reduced-motion`
- [ ] `FeedbackPanel`: correct/wrong flash with icon AND text (never colour alone), correct action, one-line reason
- [ ] `Game`: `useReducer` machine idle -> loading -> playing -> revealing (1.5s, tap to skip) -> playing ... -> finishing -> result; fires the 8 analytics events
- [ ] Accessible: `aria-live` announcements for feedback, keyboard-only playable, focus states
- [ ] `ResultCard`: score, rank title, total time, share buttons, AI reveal gated by `AI_REVEAL_ENABLED` else the line "Now imagine this on 5,000 comments a day."
- [ ] Public result page `/tools/spot-the-spam-comment-quiz/r/[playId]`: score, title, time, "Play it yourself" button, no breakdown, no email, `noindex, follow` + canonical
- [ ] `generateMetadata` equivalent via `next/head`: og:title, og:description, og:image `/api/og/[playId]`, twitter:card summary_large_image
- [ ] `GET /api/og/[playId]`: 1200x630 PNG, rank title, "8/10 in 52s", "Can you beat me?", wordmark, short URL; immutable cache header; 404 for unknown/unfinished play
- [ ] Web Share API on mobile with copy-link fallback, plus X and LinkedIn share templates with `utm_source=share&utm_medium=result`

## Acceptance
- A full 10-round game can be played start to finish with the keyboard only at 375px with no horizontal scroll.
- Sharing a result link previews as a score card.
- With AI_REVEAL_ENABLED=false no AI accuracy or speed claim appears.