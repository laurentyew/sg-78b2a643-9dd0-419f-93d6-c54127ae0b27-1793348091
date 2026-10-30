import type { MoneyPageContent } from "@/lib/locales/types";

export const zhHansFacebookComments: MoneyPageContent = {
  lang: "zh-hans",
  slug: "/zh-hans/facebook-comment-moderation",
  navCta: "免费试用",
  meta: {
    title: "Facebook 专页评论审核与垃圾评论过滤 | Social Kirin",
    description:
      "自动过滤 Facebook 专页的垃圾评论、诈骗链接与刷版账号，同时保留真实客户询问。支持简体中文与中英夹杂，免费试用 3 天无需绑卡。",
  },
  hero: {
    eyebrow: "Facebook 评论审核",
    title: "专页评论里的诈骗链接，不必等粉丝举报才处理",
    subtitle:
      "Social Kirin 在评论出现的那一刻判断它是否为垃圾或诈骗，把可疑内容隐藏起来，同时把真实的客户询问留在最上方。",
    bullets: [
      "自动隐藏投资诈骗、借贷与仿冒商品评论",
      "真实询问自动标记，客诉优先通知",
      "所有判断留有记录，可随时恢复",
    ],
    primaryCta: "开始 3 天免费试用",
    secondaryCta: "查看价格",
  },
  intro: {
    heading: "专页评论为什么比 IG 更难管",
    paragraphs: [
      "Facebook 专页的评论没有「只有追踪者可见」的保护，一条热门贴文下的诈骗链接会留在那里好几周，甚至被 Google 索引。",
      "每条评论都以文字、发送账号历史与内含链接综合判断，而不只是比对禁用词表——这对中文与中英夹杂的评论尤其重要。",
    ],
  },
  capabilities: {
    heading: "实际处理的四件事",
    intro: "原本需要每天固定巡查专页的工作，改为自动执行。",
    items: [
      {
        title: "垃圾评论过滤",
        body: "识别重复贴上的链接、新注册账号的刷版，以及仿冒品牌名称的评论。",
      },
      {
        title: "诈骗与借贷侦测",
        body: "针对东南亚常见的投资群组、小额借贷与假冒客服评论优先处理。",
      },
      {
        title: "真实询问优先",
        body: "价格、尺码、运费等购买意图评论会被标记并置顶提醒，不会被垃圾评论淹没。",
      },
      {
        title: "稽核记录",
        body: "每条被隐藏的评论都保留原文与判断理由，必要时可一键恢复。",
      },
    ],
  },
  examples: {
    heading: "实际评论与处理方式",
    intro: "判断依据是整条评论的意图，而不是单一关键词。",
    legend: { kept: "保留", hidden: "隐藏" },
    items: [
      {
        comment: "“这款有现货吗？想买两件。”",
        verdict: "真实购买询问",
        action: "保留并标记为高优先",
        hidden: false,
      },
      {
        comment: "“私信我带你进投资群，月收益 30%”",
        verdict: "投资诈骗评论",
        action: "隐藏并举报给 Meta",
        hidden: true,
      },
      {
        comment: "“请问寄到新山运费多少？”",
        verdict: "真实物流询问",
        action: "保留并自动回复运费说明",
        hidden: false,
      },
      {
        comment: "“我也是这家买的，客服根本不理人”",
        verdict: "需要真人处理的客诉",
        action: "保留并通知客服主管",
        hidden: false,
      },
    ],
  },
  steps: {
    heading: "三个步骤开始",
    items: [
      {
        title: "授权专页",
        body: "用 Facebook 账号登录并选择要管理的专页，权限通过 Meta 官方 API 获取。",
      },
      {
        title: "选择严格程度",
        body: "从宽松到严格共有三种预设，也可以自行调整哪些类型要自动隐藏。",
      },
      {
        title: "第一周检查记录",
        body: "查看被隐藏的评论是否符合预期，误判可一键恢复并调整规则。",
      },
    ],
  },
  faq: {
    heading: "常见问题",
    items: [
      {
        q: "Social Kirin 的价格是多少？",
        a: "单个账号每月 $25 美元起，含 5,000 次互动。年付方案相当于送两个月，前 50 位用户另享终身五折。",
      },
      {
        q: "免费试用需要信用卡吗？",
        a: "不需要。试用 3 天、含 50 次互动，未升级不会自动扣款。",
      },
      {
        q: "被隐藏的评论会被删除吗？",
        a: "不会。预设是隐藏而非删除，你和评论者仍看得到，也可以随时恢复显示。",
      },
      {
        q: "中文与中英夹杂的评论判断得准吗？",
        a: "简体中文与中英夹杂的评论可以正常判断。但任何自动判断都需要第一周的人工检查，我们不建议直接全自动放行。",
      },
      {
        q: "会影响专页的触达吗？",
        a: "我们只通过 Meta 官方 API 隐藏评论，不使用任何违反平台规范的手法。",
      },
      {
        q: "支持 YouTube 吗？",
        a: "支持。YouTube 影片与直播评论同样在处理范围内。",
      },
      {
        q: "可以多人共用一个账号吗？",
        a: "专业版含不限席次的团队权限，可分别审核不同专页。",
      },
    ],
  },
  related: {
    heading: "相关页面",
    links: [
      { label: "评论审核", href: "/zh-hans/comment-moderation" },
      { label: "与 FeedGuardians 比较", href: "/zh-hans/vs/feedguardians" },
      { label: "美元定价", href: "/zh-hans#pricing" },
    ],
  },
  finalCta: {
    heading: "让专页评论今晚就变干净",
    body: "连接专页后，第一波垃圾评论会在几分钟内被自动处理。",
    cta: "开始 3 天试用",
  },
};