---
title: Retire waitlist and point to live app
status: in_progress
priority: urgent
type: chore
tags: [launch, cta, waitlist]
created_by: agent
created_at: 2026-10-29T07:50:00Z
position: 18
---

## Notes

The SaaS is now live at https://app.socialkirin.com, so the pre-launch waitlist funnel is obsolete.

Replace every waitlist signup surface with a direct call to action that sends visitors to the live app. The marketing site stays as the SEO top-of-funnel; the app takes over signup.

Rules for the replacement:
- Primary CTA wording: "Get Started Free" pointing at https://app.socialkirin.com
- Secondary CTA: "Log In" pointing at https://app.socialkirin.com/login
- No remaining links to /#waitlist or #waitlist anywhere
- Remove the waitlist form, exit-intent popup, founding-brands block, and waitlist state plumbing that only served those components
- Keep the free quiz and its email gate intact; only remove waitlist wording from it

## Checklist

- [ ] Audit all waitlist references across components and pages
- [ ] Update Header CTAs to the live app
- [ ] Update Hero primary and secondary CTAs
- [ ] Update Pricing plan CTAs
- [ ] Update Footer links
- [ ] Remove Waitlist section from the homepage
- [ ] Remove waitlist popup wiring and its helper module
- [ ] Replace waitlist CTAs on money, comparison, guide, and audience pages
- [ ] Clean waitlist wording out of the quiz screens
- [ ] Verify no remaining #waitlist links

## Acceptance

- No page links to #waitlist or /#waitlist
- Every conversion CTA opens app.socialkirin.com
- Homepage no longer shows a waitlist form or popup