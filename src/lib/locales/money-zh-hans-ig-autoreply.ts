import type { MoneyPageContent } from "@/lib/locales/types";

export const zhHansInstagramAutoReply: MoneyPageContent = {
  lang: "zh-hans",
  slug: "/zh-hans/instagram-auto-reply",
  navCta: "免费试用",
  meta: {
    title: "IG 评论自动回复｜私信自动化工具 | Social Kirin",
    description:
      "Instagram 评论自动回复与私信自动化：关键词触发、商品链接自动发送、品牌语气回复。支持简体中文与中英夹杂，免费试用 3 天 50 次互动，无需绑卡。",
  },
  hero: {
    eyebrow: "Instagram 评论自动回复",
    title: "评论一进来就回复，不用等小编上线",
    subtitle:
      "设定关键词与语气后，Social Kirin 会自动回复 Instagram 贴文、Reels 和广告下的评论，并把商品链接或尺码表直接发到粉丝私信。",
    bullets: [
      "关键词触发自动私信，粉丝不必再留言「求链接」",
      "按品牌语气回复，不是罐头讯息",
      "半夜、出货日、连假期间照样运作",
    ],
    primaryCta: "开始 3 天免费试用",
    secondaryCta: "查看价格",
  },
  intro: {
    heading: "为什么「小编回不完」是最贵的损失",
    paragraphs: [
      "一条 Reels 爆红后，评论可能在两小时内涌入几百条。愿意下单的粉丝就在那几分钟里询问尺码与价格，没人回复，他们就转向下一个卖家。",
      "自动回复处理的是重复出现的问题：价格、尺码、运费、到货时间。真正需要人处理的客诉与敏感问题，仍会留在待审队列给你。",
    ],
  },
  capabilities: {
    heading: "这套自动回复实际做的事",
    intro: "四件原本占掉小编每天两三个小时的工作。",
    items: [
      {
        title: "关键词触发私信",
        body: "粉丝留言「价格」或「+1」时自动发送私信，附上商品链接、尺码表或免运说明。",
      },
      {
        title: "品牌语气回复",
        body: "以你提供的范例学习语气：正式、亲切或幽默。每个专页可以有不同设定。",
      },
      {
        title: "评论审核同时进行",
        body: "自动回复的同时过滤垃圾评论与诈骗链接，避免自动化回复被贴在广告评论下。",
      },
      {
        title: "互动记录",
        body: "每一条自动回复都留有记录，方便事后检查哪些关键词真的带来转化。",
      },
    ],
  },
  examples: {
    heading: "实际评论与处理方式",
    intro: "以下都是电商专页常见的评论类型。",
    legend: { kept: "保留", hidden: "隐藏" },
    items: [
      {
        comment: "“多少钱？有现货吗？”",
        verdict: "购买意图明确的真实询问",
        action: "自动私信价格与现货链接",
        hidden: false,
      },
      {
        comment: "“+1 我要 M 号”",
        verdict: "关键词触发的订购评论",
        action: "自动发送尺码表与下单链接",
        hidden: false,
      },
      {
        comment: "“点我主页链接，带你进投资群翻倍”",
        verdict: "投资诈骗引流评论",
        action: "隐藏并标记账号",
        hidden: true,
      },
      {
        comment: "“上次买的洗几次就褪色了…”",
        verdict: "需要真人处理的客诉",
        action: "保留并通知客服",
        hidden: false,
      },
    ],
  },
  steps: {
    heading: "三个步骤开始",
    items: [
      {
        title: "连接 Instagram 商业账号",
        body: "用 Facebook 账号登录并授权专页与 Instagram 商业账号，权限通过 Meta 官方 API 获取。",
      },
      {
        title: "设定关键词与语气",
        body: "写下三句你平常会回复的话，系统会以此作为语气参考；再设定触发关键词与要发送的链接。",
      },
      {
        title: "观察与微调",
        body: "第一周查看记录，把回复效果不佳的关键词补上更好的说法。",
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
        a: "不需要。试用期 3 天、含 50 次互动，未升级的话自动处理会停止。",
      },
      {
        q: "自动回复会不会被粉丝发现是机器人？",
        a: "如果语气范例写得好，多数粉丝不会察觉。但我们建议把价格、库存这类需要确认的答案设定成固定文字，避免生成错误信息。",
      },
      {
        q: "广告下的评论也能自动回复吗？",
        a: "可以。Facebook 与 Instagram 广告贴文的评论都在支持范围内。",
      },
      {
        q: "支持哪些平台？",
        a: "Instagram 商业账号、Facebook 专页和 YouTube。不支持个人 Facebook 账号。",
      },
      {
        q: "可以同时管理多个品牌吗？",
        a: "可以。每个社媒账号都能有独立的关键词与语气设定，共用同一份订阅。",
      },
      {
        q: "如果自动回复讲错了怎么办？",
        a: "所有回复都留有记录，你可以删除讯息并修正关键词，之后的对话会套用新设定。",
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
    heading: "让第一条评论今晚就被回复",
    body: "连接你的 Instagram 商业账号，几分钟内看到第一批评论自动回复。",
    cta: "开始 3 天试用",
  },
};