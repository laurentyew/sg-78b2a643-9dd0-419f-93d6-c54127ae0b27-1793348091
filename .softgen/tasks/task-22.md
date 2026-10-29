---
title: Replace 3-months-free founding offer with FIRST50
status: done
priority: high
type: chore
tags: [copy, waitlist, consistency]
created_by: agent
created_at: 2026-10-29T09:00:00Z
position: 22
---

## Notes
The site currently promises "3 months free" to the first 50 signups in the waitlist section, the waitlist popup, the share card, and the founding-brands block. The user chose to replace that offer entirely with FIRST50. Every one of those strings must change or the pricing page and the signup flow contradict each other.

The counter stays: `WAITLIST_CAP` = 50, `getWaitlistCount()`, `join_waitlist`. Only the promised reward changes from three free months to 50% off all plans with code FIRST50.

## Checklist
- [x] Update Waitlist.tsx headline, body, reward card, and success states from "3 months free" to "50% off every plan with FIRST50"
- [x] Confirm the success message reserves the code for the signup and emails it, not that free months are queued
- [x] Update WaitlistPopup.tsx copy to the new offer, keeping the dismiss and seen-state logic intact
- [x] Update ShareWaitlist.tsx share text so referrals mention the FIRST50 discount rather than free months
- [x] Update FoundingBrands.tsx (and any other block mentioning free months) to match
- [x] Search the codebase for remaining "3 months", "3 free months", "free months" strings and clear them all

## Acceptance
- No page on the site promises 3 free months anymore.
- The waitlist section and the pricing section describe the same offer.