---
title: Meta title and description audit
status: done
priority: high
type: chore
tags: [seo, metadata, on-page]
created_by: agent
created_at: 2026-10-29T07:55:00Z
position: 19
---

## Notes

Systematic pass over every indexable page: meta title and meta description quality, plus a sitemap completeness check against the actual route inventory.

Rules applied:
- Title: 45-60 characters, primary keyword first, brand suffix where space allows
- Description: 120-158 characters, includes the keyword and a concrete reason to click
- No duplicate titles or descriptions across pages
- Every static route present in sitemap.xml

## Checklist

- [x] Extract current title/description for every page
- [x] Flag out-of-range lengths, duplicates, and pages missing SEO tags
- [x] Rewrite flagged titles and descriptions
- [x] Reconcile sitemap.xml against the route inventory

## Acceptance

- No page has a title outside 45-60 characters
- No page has a description outside 120-158 characters
- Zero duplicate titles or descriptions
- sitemap.xml lists every indexable static route