---
title: Multilingual SEO foundation
status: todo
priority: urgent
type: feature
tags: [i18n, seo, hreflang, routing]
created_by: agent
created_at: 2026-10-30T01:45:00Z
position: 25
---

## Notes
Goal: make socialkirin.com rank in Bahasa Melayu (Malaysia), Traditional Chinese (Taiwan / Hong Kong) and Simplified Chinese (Malaysia / Singapore / global) without disturbing existing English rankings.

Architecture decisions already researched — implement these, do not re-litigate them:
- **Locale URL trees, no browser-language auto-redirect.** English stays at `/`, Malay at `/ms`, Traditional Chinese at `/zh-hant`, Simplified Chinese at `/zh-hans`. Auto-redirecting by `Accept-Language` splits crawl signals and is the usual way sites lose their English rankings when they localize.
- **Slugs:** Chinese trees keep ASCII slugs mirroring English (e.g. `/zh-hant/comment-moderation`). Percent-encoded Chinese URLs are hard to share and give no measurable ranking lift. The Malay tree uses keyword-rich Malay slugs (e.g. `/ms/moderasi-komen`) because Malay is Latin-script.
- **Never serve English copy on a locale URL.** A `/ms` or `/zh-*` URL is created only when that page is genuinely translated. Untranslated locale URLs must 404, not render English — otherwise they compete with the English page for the same query.
- **hreflang is reciprocal** — every translated page lists all its siblings including itself, plus `x-default` pointing at the English URL.
- **Constraints from existing code:** `src/components/SEO.tsx` has a locked interface (title / description / image / url only) and must not be restructured — do not add locale props to it. Alt-language tags and `<html lang>` are emitted per translated page via `next/head` (Next allows attribute overrides like `<Head><html lang="ms" /></Head>`) or one small dedicated head component. `src/pages/_document.tsx` hardcodes `lang="en"` and stays untouched.
- **Sitemap** is currently a static file at `public/sitemap.xml` (270 lines, hand-listed). It must be regenerated with `xhtml:link` alternate-language annotations for every translated URL pair, and must not list locale URLs that 404. `scripts/audit-seo.js` is the existing place for SEO checks.
- **Reuse, don't fork layouts:** English money pages live in `src/pages/*.tsx` and compose sections from `src/components/social-kirin/`. Localized pages reuse those section components fed with localized copy.
- **Fonts:** Baloo 2 and IBM Plex Sans carry no CJK glyphs — Chinese pages need Noto Sans TC / Noto Sans SC in the stack or headlines fall back to tofu boxes.

## Checklist
- [ ] Language switcher in the header and footer offering English / Bahasa Melayu / 繁體中文 / 简体中文, keeping the visitor on the same page when a translation exists and showing only languages actually available for that page
- [ ] Every page renders the correct `<html lang>` value (en, ms, zh-Hant, zh-Hans) and a self-referencing canonical
- [ ] Reciprocal hreflang annotations (en, ms, zh-Hant, zh-Hans) plus `x-default` → English on every translated page
- [ ] Chinese pages render with correct glyphs (Noto Sans TC / Noto Sans SC in the heading and body stack); Malay pages keep Baloo 2 + IBM Plex Sans
- [ ] Localized sharing previews: og:locale (en_US, ms_MY, zh_TW, zh_CN) with per-language og:title, og:description and image alt text
- [ ] Sitemap lists every translated URL with its alternate-language annotations and contains no URL that returns 404
- [ ] A locale URL that has no translation returns a proper 404 page, never an English page under the locale prefix
- [ ] Analytics keeps locale traffic distinguishable by URL prefix so per-language results can be measured

## Acceptance
- A Malay, a Traditional Chinese and a Simplified Chinese URL each report their own `lang`, self canonical and the full hreflang set when inspected in Search Console.
- Switching language in the header lands on the same page in the new language, or on that language's home page when the page is not translated.