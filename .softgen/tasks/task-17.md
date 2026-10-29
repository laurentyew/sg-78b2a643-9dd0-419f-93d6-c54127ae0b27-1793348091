---
title: Phase 5 - Audience Landing Pages
status: in_progress
priority: high
type: feature
tags: [seo, content, audiences, phase-5]
created_by: agent
created_at: 2026-10-29T06:30:00Z
position: 17
---

## Notes

Five audience segments taken directly from the existing TargetAudiences.tsx section and the audience terms implied in KEYWORD_MAP.csv — no invented segments.

Implemented as a data module plus one dynamic route so each segment gets a statically rendered, uniquely-titled page without five near-duplicate 300-line files:
- src/lib/audiences.ts holds all copy
- src/pages/for/[audience].tsx renders via getStaticPaths/getStaticProps
- src/pages/for/index.tsx is the hub

Each page carries breadcrumbs, FAQPage JSON-LD, an accordion FAQ, cross-links to the other audiences, and CTAs to /#waitlist and /#pricing. All claims are restricted to confirmed product facts and the finalized $25/$59/$99 pricing.

## Checklist

- [x] Create src/lib/audiences.ts with five segments (ecommerce, creators, agencies, launches, support-teams)
- [x] Create /for hub page with cards linking each audience
- [x] Create dynamic /for/[audience] route with static generation and FAQ schema
- [x] Add six Phase 5 URLs to sitemap.xml
- [ ] Link /for from the header Resources dropdown
- [ ] Link /for from the footer audience area
- [ ] Verify build and cross-page links

## Acceptance

- /for and all five audience URLs render with unique titles and meta descriptions
- Each audience page includes pain points, outcomes, capabilities, and an FAQ block
- FAQPage structured data present on every audience page
- All six URLs listed in sitemap.xml