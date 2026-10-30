import type { HomeContent } from "@/lib/locales/types";

export const zhHansHome: HomeContent = {
  lang: "zh-hans",
  brandTagline: "面向东南亚中文商家的评论审核与私信自动化",
  navCta: "免费试用",
  meta: {
    title: "AI 评论管理与私信自动化｜Instagram、Facebook、YouTube｜Social Kirin",
    description:
      "Social Kirin 自动隐藏垃圾评论、以品牌语气回复并自动处理私信。马来西亚、新加坡中文商家与跨境社媒团队的多语言评论审核工具。",
  },
  hero: {
    eyebrow: "面向马来西亚、新加坡与跨境中文商家",
    title: "垃圾评论自动消失，客户问题几秒内有答复。",
    subtitle:
      "Social Kirin 同时看懂中文、马来文和英文评论，隐藏刷单广告、赌博链接和恶意差评，并用你的品牌语气回复价格、库存与物流问题。",
    primaryCta: "免费试用 14 天",
    secondaryCta: "查看价格",
    bullets: [
      "中英马三语评论一次审核完成",
      "私信自动回复价格、库存与运费",
      "多品牌、多门店统一后台",
    ],
  },
  stats: [
    { value: "3.2 秒", label: "私信平均响应时间" },
    { value: "94%", label: "垃圾评论在曝光前被拦下" },
    { value: "3 种", label: "语言在同一套规则中审核" },
  ],
  features: {
    heading: "为多语言社媒团队设计",
    intro:
      "同一篇帖子里，中文客户问运费、马来文客户问 COD、英文客户问折扣。Social Kirin 用同一套规则全部处理，不需要三个人盯后台。",
    items: [
      {
        title: "三语审核，不需要切换工具",
        body: "AI 同时识别中文、马来文与英文的垃圾话术，包括刷单、网赌、假客服账号与外部引流链接。",
      },
      {
        title: "回复用客户的语言",
        body: "客户用中文问，就用中文回；用马来文问，就用马来文回。语气按品牌手册调整，而不是机翻。",
      },
      {
        title: "私信自动分流到对的人",
        body: "物流问题转仓库、批发询价转销售、退款申请转客服，每条私信都附对话摘要，不用重新读一遍。",
      },
      {
        title: "多品牌、多门店一套后台",
        body: "每个品牌独立工作区与报表，团队权限按角色分配，适合代运营与连锁商家。",
      },
    ],
  },
  platforms: {
    heading: "覆盖你的客户所在的平台",
    items: ["Instagram 与 Reels", "Facebook 主页与广告", "YouTube 与直播聊天"],
  },
  pricing: {
    heading: "以马币计价，价格透明",
    intro: "所有方案都包含不限量评论审核与私信自动化，可随时升级或取消。",
    currencyNote: "以马币（RM）计费，另附新币参考。",
    cta: "选择方案",
    tiers: [
      {
        name: "入门版",
        price: "RM79",
        note: "每月，1 个账号",
        features: ["1 个社媒账号", "AI 评论审核", "每月 500 条自动私信"],
      },
      {
        name: "商业版",
        price: "RM199",
        note: "每月，3 个账号",
        features: ["3 个社媒账号", "私信自动化与商品标记", "每周运营报表", "中文客服支持"],
        featured: true,
      },
      {
        name: "代运营版",
        price: "RM499",
        note: "每月，10 个账号",
        features: ["10 个社媒账号", "团队权限与子账号", "客户品牌报表"],
      },
    ],
  },
  faq: {
    heading: "中文商家最常问的问题",
    intro: "没有找到答案？用中文发消息给我们，工作时间两小时内回复。",
    items: [
      {
        q: "能同时看懂中文、马来文和英文评论吗？",
        a: "可以。模型在东南亚多语言社媒语料上训练，能识别中英马夹杂、缩写和常见网络用词。",
      },
      {
        q: "接入 Facebook 主页要多久？",
        a: "通过 Meta 官方授权大约三分钟：登录、选择主页、设置第一条规则即可。",
      },
      {
        q: "会不会误隐藏真实客户的评论？",
        a: "不会。需要人工判断的评论会加优先级标签进入待办，而不是被隐藏。",
      },
      {
        q: "可以管理多个品牌或门店吗？",
        a: "代运营版支持十个账号，每个品牌有独立工作区和报表。",
      },
      {
        q: "客户数据安全吗？",
        a: "数据传输与存储全程加密，客户对话不会用于模型训练，并提供操作审计记录。",
      },
    ],
  },
  finalCta: {
    heading: "别再一条一条手动删评论",
    body: "三分钟完成设置，今晚就能看到第一批评论被自动处理。",
    cta: "立即免费开始",
  },
  footerNote:
    "由 D AGE Technology 运营（SSM PC0005997-A），马来西亚槟城 Bayan Lepas。",
};