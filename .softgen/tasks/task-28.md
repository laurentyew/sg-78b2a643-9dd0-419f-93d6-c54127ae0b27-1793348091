---
title: Simplified Chinese market pages
status: in_progress
priority: high
type: feature
tags: [localization, zh-Hans, seo]
created_by: agent
created_at: 2026-10-30T01:45:00Z
position: 28
---

## Notes
Build the Simplified Chinese (zh-Hans) content set aimed at Malaysia and Singapore Chinese-speaking SMEs first, mainland and diaspora readers second. Audience: 电商卖家, 社交媒体运营, 代运营公司. Malaysian/Singapore register: pragmatic business Chinese, not mainland marketing bombast.

Primary keyword targets (Simplified): 评论审核, 社交媒体评论管理, 评论管理软件, Instagram 评论自动回复, Facebook 广告评论, 垃圾评论过滤, 私信自动化, 多语言评论审核.

Positioning that actually wins here: the six-language moderation support and Malay/Chinese handling is the differentiator for SEA merchants — lead with it. Honesty constraints from PRODUCT_FACTS.md: no API, no bulk actions, no export, no team assignment. Pricing is displayed in USD on every locale (identical $25 / $59 / $99 tiers) — do not show RM or S$ amounts. Mention PDPA for Malaysian users.

Depends on task-25 for URL tree, hreflang, switcher and CJK font stack.

## Checklist
- [x] Localized home at /zh-hans targeting 评论审核 / 小编 vocabulary, Malaysian-SEA simplified wording
- [x] Localized money page /zh-hans/comment-moderation targeting "评论审核" with USD pricing
- [x] Localized pricing block in USD ($25 / $59 / $99), identical tiers across all languages
- [x] Localized FAQ covering 价格、免费试用、数据处理、中英夹杂支持
- [x] Localized nav labels for the /zh-hans tree (功能、评论审核、定价、常见问题), all pointing at zh-Hans pages only
- [x] Pages must be distinct from zh-Hant: separate scripts, separate keywords, no cross-linking between the two trees
- [x] Localized comparison page /zh-hans/vs/feedguardians

## Acceptance
- A Malaysian Chinese merchant can read the pricing, understand multilingual moderation and start a trial entirely in Simplified Chinese.
- Simplified and Traditional Chinese pages carry separate metadata and never link to each other's tree.