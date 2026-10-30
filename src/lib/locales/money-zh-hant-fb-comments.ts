import type { MoneyPageContent } from "@/lib/locales/types";

export const zhHantFacebookComments: MoneyPageContent = {
  lang: "zh-hant",
  slug: "/zh-hant/facebook-comment-moderation",
  navCta: "免費試用",
  meta: {
    title: "Facebook 粉專留言審核與垃圾留言過濾 | Social Kirin",
    description:
      "自動過濾 Facebook 粉專的垃圾留言、詐騙連結與洗版帳號，同時保留真實客戶詢問。繁體中文支援，免費試用 3 天免綁卡。",
  },
  hero: {
    eyebrow: "Facebook 留言審核",
    title: "粉專留言裡的詐騙連結，不必等粉絲檢舉才處理",
    subtitle:
      "Social Kirin 在留言出現的當下判斷它是否為垃圾或詐騙，把可疑內容隱藏起來，同時把真實的客戶詢問留在最上方。",
    bullets: [
      "自動隱藏投資詐騙、借貸與仿冒商品留言",
      "真實詢問自動標記，客訴優先通知",
      "所有判斷留有紀錄，可隨時回復",
    ],
    primaryCta: "開始 3 天免費試用",
    secondaryCta: "查看定價",
  },
  intro: {
    heading: "粉專留言為什麼比 IG 更難管",
    paragraphs: [
      "Facebook 粉專的留言沒有「只有追蹤者可見」的保護，一則熱門貼文底下的詐騙連結會留在那裡數週，甚至被 Google 索引。",
      "每則留言都以文字、發送帳號歷史與內含連結綜合判斷，而不是只比對禁字表——這對中文與中英夾雜的留言尤其重要。",
    ],
  },
  capabilities: {
    heading: "實際處理的四件事",
    intro: "原本需要每天固定巡查粉專的工作，改為自動執行。",
    items: [
      {
        title: "垃圾留言過濾",
        body: "辨識重複貼上的連結、新註冊帳號的洗版，以及仿冒品牌名稱的留言。",
      },
      {
        title: "詐騙與借貸偵測",
        body: "針對台灣常見的飆股群組、小額借貸與假冒客服留言優先處理。",
      },
      {
        title: "真實詢問優先",
        body: "價格、尺寸、運費等購買意圖留言會被標記並置頂提醒，不會被垃圾留言淹沒。",
      },
      {
        title: "稽核紀錄",
        body: "每則被隱藏的留言都保留原文與判斷理由，必要時可一鍵回復。",
      },
    ],
  },
  examples: {
    heading: "實際留言與處理方式",
    intro: "判斷依據是整則留言的意圖，而不是單一關鍵字。",
    legend: { kept: "保留", hidden: "隱藏" },
    items: [
      {
        comment: "「這款有現貨嗎？想買兩件。」",
        verdict: "真實購買詢問",
        action: "保留並標記為高優先",
        hidden: false,
      },
      {
        comment: "「私訊我帶你加入飆股群組，月獲利 30%」",
        verdict: "投資詐騙留言",
        action: "隱藏並回報 Meta",
        hidden: true,
      },
      {
        comment: "「請問寄澎湖運費多少？」",
        verdict: "真實物流詢問",
        action: "保留並自動回覆運費說明",
        hidden: false,
      },
      {
        comment: "「我也是這家買的，客服根本不理人」",
        verdict: "需要真人處理的客訴",
        action: "保留並通知客服主管",
        hidden: false,
      },
    ],
  },
  steps: {
    heading: "三個步驟開始",
    items: [
      {
        title: "授權粉專",
        body: "用 Facebook 帳號登入並選擇要管理的粉專，權限經由 Meta 官方 API 取得。",
      },
      {
        title: "選擇嚴格程度",
        body: "從寬鬆到嚴格共有三種預設，也可以自行調整哪些類型要自動隱藏。",
      },
      {
        title: "第一週檢查紀錄",
        body: "查看被隱藏的留言是否符合預期，誤判可一鍵回復並調整規則。",
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
        a: "不需要。試用 3 天、含 50 次互動，未升級不會自動扣款。",
      },
      {
        q: "被隱藏的留言會被刪除嗎？",
        a: "不會。預設是隱藏而非刪除，你和留言者仍看得到，也可以隨時回復顯示。",
      },
      {
        q: "中文與中英夾雜的留言判斷得準嗎？",
        a: "繁體中文與中英夾雜的留言可以正常判斷。但任何自動判斷都需要第一週的人工檢查，我們不建議直接全自動放行。",
      },
      {
        q: "會影響粉專的觸及嗎？",
        a: "我們只透過 Meta 官方 API 隱藏留言，不使用任何違反平台規範的手法。",
      },
      {
        q: "支援 YouTube 嗎？",
        a: "支援。YouTube 影片與直播留言同樣在處理範圍內。",
      },
      {
        q: "可以多人共用一個帳號嗎？",
        a: "專業方案含不限席次的團隊權限，可分別審核不同粉專。",
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
    heading: "讓粉專留言今晚就變乾淨",
    body: "連接粉專後，第一波垃圾留言會在幾分鐘內被自動處理。",
    cta: "開始 3 天試用",
  },
};