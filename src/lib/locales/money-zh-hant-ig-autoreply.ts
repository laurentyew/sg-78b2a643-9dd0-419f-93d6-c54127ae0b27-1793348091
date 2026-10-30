import type { MoneyPageContent } from "@/lib/locales/types";

export const zhHantInstagramAutoReply: MoneyPageContent = {
  lang: "zh-hant",
  slug: "/zh-hant/instagram-auto-reply",
  navCta: "免費試用",
  meta: {
    title: "IG 留言自動回覆｜私訊自動化工具 | Social Kirin",
    description:
      "Instagram 留言自動回覆與私訊自動化：關鍵字觸發、商品連結自動發送、品牌語氣回覆。繁體中文支援，免費試用 3 天 50 次互動，免綁卡。",
  },
  hero: {
    eyebrow: "Instagram 留言自動回覆",
    title: "留言一進來就回覆，不必等到小編上班",
    subtitle:
      "設定關鍵字與語氣後，Social Kirin 會自動回覆 Instagram 貼文、Reels 與廣告底下的留言，並把商品連結或尺寸表直接送到粉絲的私訊。",
    bullets: [
      "關鍵字觸發自動私訊，粉絲不必再留言「求連結」",
      "依品牌語氣回覆，不像罐頭訊息",
      "半夜、出貨日、連假期間照樣運作",
    ],
    primaryCta: "開始 3 天免費試用",
    secondaryCta: "查看定價",
  },
  intro: {
    heading: "為什麼「小編回不完」是最貴的損失",
    paragraphs: [
      "一則 Reels 爆紅後，留言可能在兩小時內湧入數百則。願意購買的粉絲在那幾分鐘內詢問尺寸與價格，如果沒人回覆，他們就轉向下一個賣家。",
      "自動回覆處理的是重複出現的問題：價格、尺寸、運費、到貨時間。真正需要人處理的客訴與敏感問題，仍會留在待審佇列給你。",
    ],
  },
  capabilities: {
    heading: "這套自動回覆實際做的事",
    intro: "四件原本佔掉小編每天兩三個小時的工作。",
    items: [
      {
        title: "關鍵字觸發私訊",
        body: "粉絲留言「價格」或「+1」時自動發送私訊，附上商品連結、尺寸表或免運說明。",
      },
      {
        title: "品牌語氣回覆",
        body: "以你提供的範例學習語氣：正式、親切或幽默。每個粉專可以有不同設定。",
      },
      {
        title: "留言審核同時進行",
        body: "自動回覆的同時過濾垃圾留言與詐騙連結，避免自動化回覆被貼在廣告留言底下。",
      },
      {
        title: "互動紀錄",
        body: "每一則自動回覆都留有紀錄，方便事後檢查哪些關鍵字真的帶來轉換。",
      },
    ],
  },
  examples: {
    heading: "實際留言與處理方式",
    intro: "以下都是電商粉專常見的留言型態。",
    legend: { kept: "保留", hidden: "隱藏" },
    items: [
      {
        comment: "「多少錢？有現貨嗎？」",
        verdict: "購買意圖明確的真實詢問",
        action: "自動私訊價格與現貨連結",
        hidden: false,
      },
      {
        comment: "「+1 我要 M 號」",
        verdict: "關鍵字觸發的訂購留言",
        action: "自動發送尺寸表與下單連結",
        hidden: false,
      },
      {
        comment: "「點我主頁連結，帶你飆股翻倍」",
        verdict: "投資詐騙引流留言",
        action: "隱藏並標記帳號",
        hidden: true,
      },
      {
        comment: "「上次買的洗幾次就褪色了…」",
        verdict: "需要真人處理的客訴",
        action: "保留並通知客服",
        hidden: false,
      },
    ],
  },
  steps: {
    heading: "三個步驟開始",
    items: [
      {
        title: "連接 Instagram 專業帳號",
        body: "用 Facebook 帳號登入並授權粉專與 Instagram 專業帳號，權限經由 Meta 官方 API 取得。",
      },
      {
        title: "設定關鍵字與語氣",
        body: "寫下三個你平常會回覆的句子，系統會以此為語氣參考；再設定觸發關鍵字與要發送的連結。",
      },
      {
        title: "觀察與微調",
        body: "第一週查看紀錄，把回覆不佳的關鍵字補上更好的說法。",
      },
    ],
  },
  faq: {
    heading: "常見問題",
    items: [
      {
        q: "Social Kirin 的價格是多少？",
        a: "單一帳號每月 $25 美元起，含 5,000 次互動。年繳方案相當於贈送兩個月，前 50 位用戶另享終身五折。",
      },
      {
        q: "免費試用需要信用卡嗎？",
        a: "不需要。試用期 3 天、含 50 次互動，未升級的話自動處理會停止。",
      },
      {
        q: "自動回覆會不會被粉絲發現是機器人？",
        a: "若語氣範例寫得好，多數粉絲不會察覺。但我們建議把價格、庫存這類需要確認的答案設定成固定文字，避免生成錯誤資訊。",
      },
      {
        q: "廣告底下的留言也能自動回覆嗎？",
        a: "可以。Facebook 與 Instagram 廣告貼文的留言都在支援範圍內。",
      },
      {
        q: "支援哪些平台？",
        a: "Instagram 專業帳號、Facebook 粉專與 YouTube。個人 Facebook 帳號不支援。",
      },
      {
        q: "可以同時管理多個品牌嗎？",
        a: "可以。每個社群帳號都能有獨立的關鍵字與語氣設定，共用同一份訂閱。",
      },
      {
        q: "如果自動回覆講錯了怎麼辦？",
        a: "所有回覆都留有紀錄，你可以刪除訊息並修正關鍵字，之後的對話會套用新設定。",
      },
    ],
  },
  related: {
    heading: "相關頁面",
    links: [
      { label: "留言審核", href: "/zh-hant/comment-moderation" },
      { label: "與 FeedGuardians 比較", href: "/zh-hant/vs/feedguardians" },
      { label: "美元定價", href: "/zh-hant#pricing" },
    ],
  },
  finalCta: {
    heading: "讓第一則留言今晚就被回覆",
    body: "連接你的 Instagram 專業帳號，幾分鐘內看到第一批留言自動回覆。",
    cta: "開始 3 天試用",
  },
};