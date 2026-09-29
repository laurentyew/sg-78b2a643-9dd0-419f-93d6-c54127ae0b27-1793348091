---
title: Waitlist Sign-Up Form
status: done
priority: urgent
type: feature
tags: [waitlist, forms, supabase]
created_by: agent
created_at: 2026-09-29T02:47:00Z
position: 2
---

## Notes
Goal: capture early-access signups for Social Kirin with an incentive — **3 months free for the first 50 people who join the waitlist**, capped at 50.

Fields (exactly three, per request):
- Full name (required)
- Email (required, validated)
- Social handle (required, e.g. @sunrootcoffee)

Persistence: Supabase `waitlist` table (NOT localStorage — signups must outlive the browser session so they can be exported and emailed).
Offer mechanics: the incentive is capped at 50. Show a live "spots remaining" counter derived from the current row count. Once 50 signups exist, the offer badge should switch to a closed state ("Founding spots claimed") while still accepting signups for the general waitlist.

Placement: own `#waitlist` section on the landing page, positioned after the Hero so it is visible early. Header + Hero CTAs should point to `#waitlist`.

## Checklist
- [x] Create Supabase `waitlist` table: id (uuid pk), name (text), email (text unique), social_handle (text), created_at (timestamptz default now())
- [x] Create `src/services/waitlistService.ts`: joinWaitlist(name, email, socialHandle) insert + getWaitlistCount() and honest duplicate-email detection
- [x] Create `src/components/social-kirin/Waitlist.tsx` section: offer headline (3 months free), 50-spot badge, three labelled inputs, submit button
- [x] Live "X of 50 founding spots remaining" counter fetched from Supabase on mount
- [x] Inline validation: required fields, email format, handle format; disable submit while invalid
- [x] Loading state on submit + friendly error state if the insert fails
- [x] Duplicate email handling: show "You're already on the list" instead of a raw DB error
- [x] Success state: confirmation panel restating the 3-months-free offer and the signup position
- [x] Closed-offer state when count reaches 50: keep accepting signups, restate that founding spots are gone
- [x] Wire `<Waitlist />` into `src/pages/index.tsx`; add a "Join Waitlist" nav link + point Hero and Header CTAs to `#waitlist`
- [x] Mobile layout check: single-column form, full-width inputs and button

## Acceptance
- Submitting a valid name, email and social handle stores a row and shows a success confirmation that restates the 3-months-free founding offer
- The counter reflects remaining spots out of 50 and visibly changes after a successful signup
- Submitting an email that already exists shows a friendly "already on the list" message rather than a database error