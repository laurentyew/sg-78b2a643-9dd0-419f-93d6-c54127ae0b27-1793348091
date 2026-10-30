---
title: Traditional Chinese market pages
status: in_progress
priority: high
type: feature
tags: [localization, zh-Hant, seo]
created_by: agent
created_at: 2026-10-30T01:45:00Z
position: 27
---

## Notes
Build the Traditional Chinese (zh-Hant) content set for Taiwan and Hong Kong. Audience: 社群小編 (social media editors), 電商賣家, 行銷代理商. Use Taiwan-convention vocabulary (留言、貼文、粉專、私訊、廣告貼文、檢舉), because Hong Kong readers accept it while Taiwan readers reject mainland wording.

Primary keyword targets (Traditional): 留言審核, 社群媒體留言管理, IG 留言自動回覆, Facebook 廣告留言, 垃圾留言過濾, 粉專留言管理, 私訊自動化, 社群小編 工具, 留言管理系統.

Honesty constraints (per PRODUCT_FACTS.md): YouTube support and DM automation are real differentiators — lead with those. No API, no bulk actions, no CSV export; don't imply them. Pricing is displayed in USD on every locale (identical $25 / $59 / $99 tiers) — do not show NT$ or HK$ amounts. Free trial 3 days / 50 interactions, no card.

Depends on task-25 for URL tree, hreflang, switcher and CJK font stack.

## Checklist
- [x] Localized home at /zh-hant targeting 留言審核 / 社群小編 vocabulary, Taiwan-traditional wording
- [x] Localized money page /zh-hant/comment-moderation targeting "留言審核" with USD pricing and 台灣用語
- [x] Localized pricing block in USD ($25 / $59 / $99) with 年繳送兩個月
- [x] Localized FAQ covering 價格、免費試用、資料處理、繁體中文支援
- [ ] Localized comparison page /zh-hant/vs/feedguardians
- [x] Localized nav labels for the /zh-hant tree (功能、留言審核、定價、常見問題), all pointing at zh-Hant pages only
- [x] CJK typography pass: headings use Noto Sans TC, no orphaned Latin-only font fallbacks

## Acceptance
- A Taiwan reader can complete the page journey in Traditional Chinese and quote the USD pricing without encountering Simplified characters or English body copy.
- Every Traditional Chinese page has unique localized metadata rather than a translation of the English meta description.