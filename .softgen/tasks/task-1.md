---
title: Social Kirin Landing Page
status: done
priority: urgent
type: feature
tags: [design-system, landing, seo]
created_by: agent
created_at: 2026-09-29T02:19:20Z
position: 1
---
## Notes
Competitor context: single-purpose AI comment/DM moderation across Instagram, Facebook, TikTok, Bluesky. Category positioning: "auto-hide spam + AI replies in brand voice," $49-99/mo, 48hr setup, 80%-automation-or-refund guarantee, heavy FAQ block for SEO.
Social Kirin differentiator: friendly guardian-kirin mascot, cute-but-professional tone, same feature depth (spam auto-hide, AI reply in brand voice, DM automation/keyword triggers, sentiment analysis, multi-platform) but warmer brand voice and comparison content targeting "best AI comment moderation tool" search intent.
Logo asset at public/generated/social-kirin-logo.jpg (jade teal + amber gradient bg — extract mascot only for header/favicon use where possible, use full image for hero).

## Checklist
- [x] Design system: update globals.css (jade/amber/cream palette, Baloo 2 + IBM Plex Sans fonts) and tailwind.config.ts (fontFamily registration)
- [x] Header/Nav: logo + Social Kirin wordmark, links (Features, How it Works, Pricing, FAQ), CTA button "Start Free Trial"
- [x] Hero section: headline targeting "AI comment moderation" + "DM automation" intent, subheadline, mascot illustration, dual CTA, trust bar (platform icons: Instagram/Facebook/TikTok)
- [x] Features section (6 cards): Auto-Hide Spam Comments, AI-Powered Replies in Your Brand Voice, DM Automation & Keyword Triggers, Sentiment Analysis, Multi-Platform Dashboard, Human Escalation for Sensitive Comments
- [x] How It Works: 3-step process (Connect accounts → Train brand voice → Go live in minutes)
- [x] Stats/proof section: hours saved/week, response time, engagement boost, accuracy % (styled cards with big numbers)
- [x] Comparison section: Social Kirin vs Manual Moderation vs Generic Chatbots vs FeedGuardians (table) targeting "FeedGuardians alternative" keyword
- [x] Testimonials: 3 fictional DTC brand testimonials with named persona, company, quote
- [x] Pricing: 3-4 tiers (Starter/Growth/Business/Enterprise) with feature lists, monthly pricing
- [x] FAQ section: 10-12 SEO-targeted Q&As (setup time, safety, platforms supported, pricing, accuracy, brand voice training, comparison to social media managers, is it safe/will it hide real customers)
- [x] Footer: keyword-rich link columns (Platforms: Instagram/Facebook/TikTok moderation, Use cases, Company, Legal), social links, copyright
- [x] SEO: update SEO.tsx defaults (title, description, og image), add JSON-LD Organization/SoftwareApplication schema, robots.txt, sitemap.xml
- [x] Generate supporting images: hero mascot scene, feature icons/illustrations as needed

## Acceptance
- Landing page loads with full header-to-footer content, no lorem ipsum, cute-professional jade/amber/cream branding consistent with logo
- FAQ and feature copy naturally covers niche keywords (AI comment moderation, spam filter, DM automation, brand voice AI, Instagram/Facebook/TikTok comment management)
- Page passes check_for_errors with no runtime-blocking issues