---
title: FIRST50 pricing display
status: in_progress
priority: high
type: feature
tags: [pricing, promo]
created_by: agent
created_at: 2026-10-29T09:00:00Z
position: 21
---

## Notes
Display-only per the user's decision. Plan cards show the standard price struck through next to the FIRST50 price, a note that the code is applied at checkout inside the app, and a one-tap copy button with a toast confirmation. The Growth card is in primary-on-primary-foreground, so struck prices and the code chip need their own contrasting treatment there.

## Checklist
- [ ] Rework src/components/social-kirin/Pricing.tsx tier data to draw from promo.ts (standard 25/59/99, discounted 12.50/29.50/49.50) instead of hardcoded price strings
- [ ] Show struck-through standard price, discounted price, and "first 12 months with FIRST50" on each card, with correct contrast on the highlighted card
- [ ] Add a promo strip above the plan grid: code FIRST50, 50% off all plans, limited to the first 50 brands, live spots remaining
- [ ] Add a copy-code button that writes FIRST50 to the clipboard and shows a confirmation toast, with a text fallback if the clipboard API is unavailable
- [ ] Update the pricing footnote to state the discount is applied at checkout in the app and cannot be combined with the free trial
- [ ] Keep annual prices consistent with the discount or explicitly note that annual billing carries the same 50% off for the first year

## Acceptance
- Each of the three plans shows both the standard and FIRST50 price.
- Clicking the code copies FIRST50 and confirms it visibly.