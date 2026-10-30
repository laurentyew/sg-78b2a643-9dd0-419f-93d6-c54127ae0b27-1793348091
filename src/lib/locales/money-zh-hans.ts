import type { MoneyPageContent } from "@/lib/locales/types";

export const zhHansCommentModeration: MoneyPageContent = {
  lang: "zh-hans",
  slug: "/zh-hans/comment-moderation",
  navCta: "免费试用",
  meta: {
    title: "社媒评论审核自动化工具｜Social Kirin",
    description:
      "自动隐藏垃圾评论、诈骗链接与不雅内容，并用你的品牌语气回复 Instagram、Facebook 专页和 YouTube 评论。3 天免费试用，50 次互动，无需绑卡。",
  },
  hero: {
    eyebrow: "评论审核自动化",
    title: "垃圾评论几秒内消失，不用等小编上线",
    subtitle:
      "Social Kirin 全天候守着 Instagram、Facebook 专页和 YouTube，在顾客看到之前挡下广告与诈骗评论，并用你的品牌语气回复真实询问。",
    bullets: [
      "在粉丝看到之前，先隐藏刷单广告、投资群组与不雅评论",
      "按品牌语气自动回复，可设定中文、英文或中英夹杂",
      "小编休息、出差或直播时，审核照常运行",
    ],
    primaryCta: "免费试用 3 天",
    secondaryCta: "查看价格",
  },
  intro: {
    heading: "人工审核为什么跟不上",
    paragraphs: [
      "一条爆红的 Reels 可以在一小时内带来几百条评论。同一时间，诈骗账号开始在你每条贴文下复制粘贴链接，真实顾客在你打开手机之前就已经看到了。",
      "Social Kirin 在评论进入的那一刻就完成判断：广告与诈骗评论被隐藏，顾客问题被回复，每个决定都有记录，方便事后抽查。",
    ],
  },
  capabilities: {
    heading: "自动审核实际处理的四件事",
    intro: "原本每天要花两三个小时的工作，现在自动完成。",
    items: [
      {
        title: "过滤垃圾与诈骗评论",
        body: "识别重复链接、新注册账号、投资群组邀请和常见诈骗话术，在粉丝看到之前隐藏。",
      },
      {
        title: "用品牌语气回复",
        body: "按你设定的语气生成回复：品牌旗舰店可以正式，Shopee、Lazada 卖家可以用亲切口语。",
      },
      {
        title: "评论触发的自动私讯",
        body: "顾客在评论区输入指定关键词时，自动回复尺码表、目录链接或物流说明。",
      },
      {
        title: "情绪分析",
        body: "每条贴文的正负面评论比例一目了然，知道哪条内容引发反弹并提前处理。",
      },
    ],
  },
  examples: {
    heading: "实际被处理的评论示例",
    intro: "判断依据是评论文字、发送账号和其中链接，而不只是禁用词清单。",
    legend: {
      kept: "保留",
      hidden: "隐藏",
    },
    items: [
      {
        comment: "“私信我带你进投资群，名额只剩 3 位”",
        verdict: "投资群引流，账号无任何评论记录",
        action: "立即隐藏并标记",
        hidden: true,
      },
      {
        comment: "“这瓶精华我用了三个星期，敏感肌也没问题，已经回购第三次。”",
        verdict: "真实顾客好评",
        action: "保留并标记为正面",
        hidden: false,
      },
      {
        comment: "“加微信：abc888 领取免费试用装，先到先得”",
        verdict: "钓鱼引流信息",
        action: "隐藏并加入黑名单",
        hidden: true,
      },
      {
        comment: "“请问还有现货吗？想寄到新山。”",
        verdict: "顾客购买询问",
        action: "自动回复库存与物流说明",
        hidden: false,
      },
    ],
  },
  steps: {
    heading: "三个步骤就能开始",
    items: [
      {
        title: "连接你的账号",
        body: "用 Facebook 账号登录，选择要管理的专页、Instagram 商业账号或 YouTube 频道。授权全程通过 Meta 与 Google 官方 API 完成。",
      },
      {
        title: "设定品牌语气",
        body: "贴上三条你满意的回复作为示例，或直接选择预设语气。系统每次生成新回复时都会以这些示例为参考。",
      },
      {
        title: "检查与微调",
        body: "上线 24 小时后查看审核记录，随时批准、撤回或新增规则。",
      },
    ],
  },
  faq: {
    heading: "常见问题",
    items: [
      {
        q: "Social Kirin 的价格是多少？",
        a: "单个账号每月 RM79 起，含 1,000 次互动；新币用户约为 S$25。年付方案送两个月，前 50 位用户另享终身五折。",
      },
      {
        q: "免费试用需要绑信用卡吗？",
        a: "不需要。试用期 3 天、共 50 次互动；若未升级，系统会自动停止处理，不产生任何费用。",
      },
      {
        q: "看得懂中文与中英夹杂的评论吗？",
        a: "可以识别简体中文、英文以及中英夹杂的评论。不过模型并非专为马来西亚华语网络用语训练，建议第一周保留人工抽查。",
      },
      {
        q: "评论数据会怎么处理？",
        a: "评论内容只用于即时判断与记录，不会用于训练第三方模型。你可以随时在账号设置中删除全部评论记录。",
      },
      {
        q: "支持哪些平台？",
        a: "Instagram 商业账号、Facebook 专页和 YouTube。不支持个人 Facebook 账号，因为这违反平台条款。",
      },
      {
        q: "会取代小编吗？",
        a: "不会完全取代。它处理约九成的例行判断，把敏感与争议评论留给你的团队决定。",
      },
      {
        q: "可以同时管理多个品牌吗？",
        a: "可以。同一个订阅下，每个社媒账号都能设定各自的语气与规则。",
      },
    ],
  },
  related: {
    heading: "相关页面",
    links: [
      { label: "Social Kirin 全部功能", href: "/zh-hans" },
      { label: "马币定价", href: "/zh-hans#pricing" },
      { label: "常见问题", href: "/zh-hans#faq" },
    ],
  },
  finalCta: {
    heading: "今晚就让审核自动运行",
    body: "连接你的 Instagram 或 Facebook 专页，几分钟内看到第一批评论被处理。",
    cta: "开始 3 天试用",
  },
};