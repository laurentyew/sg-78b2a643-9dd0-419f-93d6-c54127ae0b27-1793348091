---
title: Promo-aware SEO metadata and offer schema
status: done
priority: medium
type: chore
tags: [seo, schema, promo]
created_by: agent
created_at: 2026-10-29T09:00:00Z
position: 24
---

## Notes
The home page currently emits a SoftwareApplication Offer with price 25 and no discount data. With a live 50% promo, the structured data should reflect a real price range and the promotional price so it stays accurate. Title and description can carry the launch offer, but must respect the character limits already established in the audit (title <= 60, description <= 155).

## Checklist
- [x] Update the SoftwareApplication JSON-LD in index.tsx to a price range plus an Offer with the FIRST50 price and code
- [x] Keep the JSON-LD consistent with what the pricing section displays
- [x] Refresh the home title and description to mention the launch discount without exceeding 60/155 characters
- [x] Run the existing SEO audit script and resolve any regressions it reports

## Acceptance
- The home page structured data matches the visible promotional prices.
- Titles and descriptions stay within limits.