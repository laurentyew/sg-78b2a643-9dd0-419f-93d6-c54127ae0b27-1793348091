---
title: FIRST50 promo foundation and announcement bar
status: in_progress
priority: urgent
type: feature
tags: [promo, header, hero]
created_by: agent
created_at: 2026-10-29T09:00:00Z
position: 20
---

## Notes
Launch promo: first 50 brands get 50% off all plans with code FIRST50. Display-only — no payment provider is connected, so nothing validates at checkout. The code is shown, copyable, and applied inside the app at payment.

Single source of truth: `src/lib/promo.ts` holds the code, cap (reuses `WAITLIST_CAP` = 50 so the offer and the signup counter can never diverge), percent, price helpers, and USD formatting. `src/hooks/usePromoSpots.ts` exposes the live remaining-spot count from the existing `getWaitlistCount()` RPC.

Failure rule: if the counter fetch fails, components show "Limited to the first 50 brands" and no number. Never a fake countdown, never a fabricated count.

## Checklist
- [ ] Create src/lib/promo.ts: PROMO constant (code FIRST50, cap 50, discountPercent 50), discountedPrice(), formatUsd(), promoPricing() returning monthly/standard/annual pairs per tier
- [ ] Create src/hooks/usePromoSpots.ts: returns { remaining, loading, available } from getWaitlistCount, available=false on error
- [ ] Add dismissible announcement bar to Header.tsx: "Launch offer — first 50 brands get 50% off every plan. Code FIRST50." with remaining-spots chip and a link to #pricing; persists dismissal in sessionStorage; stays readable over scrolled sticky header
- [ ] Add promo badge under Hero CTA linking to #pricing with live spots left; falls back to "first 50 brands" when the count is unavailable
- [ ] Verify bar and badge do not duplicate the sticky nav height or break mobile layout

## Acceptance
- The announcement bar appears above the nav on the home page, links to pricing, and can be dismissed.
- When the counter request fails, no spot number is shown anywhere.