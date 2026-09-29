---
title: Remove fabricated social proof
status: done
priority: urgent
type: bug
tags: [content, trust, seo]
created_by: agent
created_at: 2026-09-29T04:27:00Z
position: 6
---

## Notes
Social Kirin is pre-launch and still collecting waitlist signups, so the site has no real users, no real usage metrics, and no real customer testimonials. Sections that imply an existing customer base are misleading and, in the case of fake review structured data, can trigger a Google structured-data penalty.

Rules for the rewrite:
- Capability claims are fine ("hides spam in real time", "replies in your brand voice").
- Fabricated usage numbers, user counts, ratings, logos, and named testimonials are not.
- Replace removed claims with honest pre-launch framing: founding-brand offer, early access, benchmark/typical-result language clearly labeled as an estimate.
- Any metric that stays must be labeled as a projected or typical result, never presented as measured from real accounts.

## Checklist
- [x] Hero: replace invented stat badges (spam auto-hidden count, reply accuracy) with capability-based badges
- [x] Stats: remove or reframe fabricated platform metrics as pre-launch/benchmark language
- [x] Testimonials: remove or clearly reframe fake named customer quotes
- [x] Comparison: verify no invented usage or customer numbers presented as real
- [x] index.tsx: remove the fake aggregateRating block from the SoftwareApplication JSON-LD
- [x] Add a founding-brands / early-access CTA block so the removed proof sections still convert

## Acceptance
- No page section claims Social Kirin has existing customers, measured usage volumes, or customer reviews.
- Any remaining number is clearly framed as a projection, benchmark, or typical result.
- Structured data contains no rating markup.