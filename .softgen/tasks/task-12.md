---
title: Legal pages pack (privacy, terms, data deletion, platform compliance)
status: in_progress
priority: urgent
type: feature
tags: [legal, compliance, meta, google, seo]
created_by: agent
created_at: 2026-10-12T02:50:00Z
position: 12
---

## Notes
Implement "Social Kirin: Legal Pages Implementation Pack" (12 Oct 2026) for D AGE Technology (SSM PC0005997-A).

Requirements from the pack:
- Four public pages, no login, no noindex: /privacy, /terms, /data-deletion, /platform-compliance.
- Text must be published verbatim. Only formatting may change.
- Heading anchors required: #google-api-disclosure (Part A s.6) and #data-deletion (Part A s.11), plus #connected-platforms (Part B s.5).
- Footer Legal group must link to all four pages on every page; homepage must show a visible Privacy Policy link.
- Remove old San Francisco address, "Social Kirin, Inc.", California law and AAA arbitration everywhere.
- Remove TikTok claims from marketing copy (only Instagram, Facebook Pages and YouTube are integrated). Do not claim non-live integrations.
- Do not add claims not in the pack (SOC 2, pen testing, ISO).
- Entity: D AGE Technology, Lintang Mayang Pasir 1, Bandar Bayan Baru, 11950 Bayan Lepas, Pulau Pinang, Malaysia. Email hello@b2bautomator.com.

Open items the owner handles outside code (not published): OpenRouter zero-retention settings, token encryption at rest, 90-day retention job, Bahasa Malaysia notice for PDPA, breach procedure, lawyer review, minimal API scopes.

## Checklist
- [x] Shared legal layout + typography primitives (header, footer, last-updated, related nav, anchored sections, tables)
- [x] /privacy: full Part A text verbatim (17 sections, sub-processor and retention tables, Google Limited Use statement, #google-api-disclosure and #data-deletion anchors)
- [x] /terms: full Part B text verbatim (21 sections, Malaysia governing law, #connected-platforms anchor)
- [x] /data-deletion: Part C text verbatim (revoke steps, deletion request steps, 7-day/30-day timelines, non-customer path)
- [x] /platform-compliance: Part D text verbatim (Meta, Google/YouTube, AI commitments, contacts)
- [x] Footer: Legal column links to all four docs, Platform Compliance link live, TikTok removed from copy
- [ ] Remove TikTok claims from SEO defaults, hero, FAQ, features, how-it-works, moderation grid, stats, waitlist, share text, homepage JSON-LD
- [ ] Add the four legal URLs to sitemap.xml
- [ ] Verify meta/OG defaults and homepage link visibility

## Acceptance
- All four legal URLs return the pack text verbatim over HTTPS with no login and a visible Privacy Policy link on the homepage.
- No page anywhere on the site still says San Francisco, California, AAA arbitration, "Social Kirin, Inc.", or claims live TikTok integration.