---
title: Quiz SEO, navigation and abuse protection
status: todo
priority: high
type: chore
tags: [seo, analytics, security]
created_by: agent
created_at: 2026-09-29T08:52:00Z
position: 10
---

## Notes
The quiz page must be crawlable text wrapped around the game. SEO is a bonus; social sharing is the main channel.

## Checklist
- [ ] Title `Spot the Spam: Free Comment Moderation Quiz | Social Kirin` (<=60 chars) and meta description <=155 chars
- [ ] H1 "Can you moderate 10 comments before the timer runs out?" plus server-rendered H2 sections: "How the quiz works", "Spam comments and scam DMs to watch for on Instagram", "Why keyword filters hide real customers", "FAQ" (5 questions), waitlist CTA
- [ ] Target terms used naturally: "instagram spam comments" (primary), "instagram scam dm" (secondary)
- [ ] `FAQPage` + `BreadcrumbList` JSON-LD
- [ ] Quiz page indexable and added to `public/sitemap.xml`; result pages noindex and excluded
- [ ] "Free tools" item added to site navigation and a link from the home page
- [ ] `lib/track.ts` PostHog wrapper firing the 8 events (quiz_view, game_start, round_answered, game_complete, gate_view, lead_submit, lead_confirm, share_click); never send emails, names or comment text
- [ ] `lib/ratelimit.ts` Upstash limits: start 20/hour, answer 60/min per playId, lead 5/hour; no-op when Upstash env is absent
- [ ] Same-origin only on all routes, no CORS headers
- [ ] No layout shift when the game loads; no images except the OG card

## Acceptance
- The quiz page is indexable and listed in the sitemap; result pages are not.
- No email, name or comment text is ever sent to analytics.