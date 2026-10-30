---
title: Malay market pages
status: in_progress
priority: high
type: feature
tags: [localization, ms-MY, seo]
created_by: agent
created_at: 2026-10-30T01:45:00Z
position: 26
---

## Notes
Build the Malay (Bahasa Melayu, Malaysia) content set. Audience: Malaysian SMEs, e-dagang sellers on Shopee/Lazada, and agencies managing brand pages. Register: professional Malay, not machine translation — Malaysian buyers penalize translated-sounding copy more than missing copy.

Primary keyword targets: perisian moderasi komen, moderasi komen media sosial, tapis komen spam, balas automatik komen Instagram, automasi DM, komen Facebook spam, alat media sosial untuk perniagaan, khidmat pengurusan komen.

Honesty constraints (per PRODUCT_FACTS.md): Malay language processing is supported but the model is not specifically trained on Malay/Manglish spam patterns — never claim otherwise. Pricing is displayed in USD on every locale (identical $25 / $59 / $99 tiers) — do not show RM amounts. Include the PDPA 2010 reference for Malaysian buyers. Free trial is 3 days, 50 interactions, no card.

Depends on task-25 for URL tree, hreflang and the language switcher.

## Checklist
- [x] Localized home at /ms with Malay meta title/description targeting "moderasi komen media sosial" and "tapisan komen spam"
- [x] Localized money page /ms/moderasi-komen-media-sosial using Malay keyword "moderasi komen" with USD pricing and PDPA mention
- [x] Localized pricing block in USD ($25 / $59 / $99) with "sebulan" wording, noting annual = 2 months free
- [x] Localized FAQ block covering harga, percubaan percuma, PDPA, bahasa Melayu/Manglish support
- [x] Localized comparison page /ms/bandingkan-feedguardians
- [x] Extra Malay money pages: /ms/balas-automatik-instagram, /ms/moderasi-komen-facebook, /ms/moderasi-komen-iklan
- [x] Internal links from the Malay hub page to every Malay money page so none is orphaned
- [x] Localized nav labels in Header for the /ms tree (Ciri, Moderasi komen, Harga, Soalan lazim), all pointing at Malay pages only
- [x] Malay Instagram auto-reply page targeting "balas automatik komen Instagram" and "automasi DM Instagram"
- [x] Malay Facebook comment moderation page targeting "komen spam Facebook" and "tapis komen Facebook"
- [x] Malay Facebook ad comment page covering spam on boosted posts and Shopee/Lazada-style scam links
- [ ] Malaysian proof section: named SME, e-dagang and agency scenarios (no invented logos or testimonials)
- [x] Malay header, footer and internal links point only to Malay pages, with no link leaking to an English page

## Acceptance
- A Malaysian visitor reading only Malay can understand the product, see the USD pricing and start the free trial without hitting English copy.
- Each Malay page has a distinct localized title and description, not a transliteration of the English one.