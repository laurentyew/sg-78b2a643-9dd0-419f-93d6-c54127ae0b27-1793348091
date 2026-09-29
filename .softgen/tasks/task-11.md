---
title: Waitlist popup after 30 seconds
status: done
priority: medium
type: feature
tags: [waitlist, landing]
created_by: agent
created_at: 2026-09-29T10:20:00Z
position: 11
---

## Notes

Visitor asked for a waitlist popup that opens 30 seconds after the landing page loads.

Constraints:
- Home page only. Placing it on `/tools/spot-the-spam-comment-quiz` would open mid-game (rounds are 6s each), interrupting play.
- Must reuse the existing waitlist form and `waitlistService` — do not build a second signup path.
- Must not re-open after the visitor dismisses or signs up (sessionStorage flag), so it never nags.
- Must be dismissible by click-outside, Escape and an explicit close button, and must not trap focus on load in a way that blocks the page.

## Checklist

- [ ] Create `WaitlistPopup.tsx`: shadcn Dialog that opens on a 30s timer, with a dismiss X, Escape and outside-click close
- [ ] Email field plus submit button wired to the existing waitlist service, with loading, success and error states
- [ ] sessionStorage flag so the popup stays closed after dismissal or a successful signup
- [ ] Suppress the timer when the visitor finishes a signup in the inline waitlist section
- [ ] Mount the popup on the home page only

## Acceptance

- Landing on the home page and waiting 30 seconds opens the waitlist popup once.
- Dismissing it and reloading the page keeps it closed for that session.
- Submitting a valid email from the popup adds the visitor to the waitlist and shows success.