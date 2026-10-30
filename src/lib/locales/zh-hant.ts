import type { HomeContent } from "@/lib/locales/types";

export const zhHantHome: HomeContent = {
  lang: "zh-hant",
  brandTagline: "給台灣與香港小編的留言管理與私訊自動化",
  navLabel: "主要導覽",
  navCta: "免費試用",
  nav: [
    { label: "功能", href: "#features" },
    { label: "留言審核", href: "/zh-hant/comment-moderation" },
    { label: "定價", href: "#pricing" },
    { label: "常見問題", href: "#faq" },
  ],
  meta: {
    title: "AI 留言管理與私訊自動化｜IG、FB、YouTube｜Social Kirin",
    description:
      "Social Kirin 自動隱藏垃圾留言、以品牌語氣回覆並自動處理私訊。台灣與香港小編、廣告投手與品牌電商每天少花兩小時在刪留言上。",
  },
  hero: {
    eyebrow: "給小編、廣告投手與品牌電商",
    title: "廣告留言區的亂象，在你看到之前就處理完。",
    subtitle:
      "Social Kirin 在幾秒內判斷哪則留言是競品踩場、詐騙連結或單純問尺寸，自動隱藏該藏的、回覆該回的，並把需要真人的對話排進待辦清單。",
    primaryCta: "免費試用 14 天",
    secondaryCta: "查看方案價格",
    bullets: [
      "廣告貼文留言自動審查，CPL 不再被灌水",
      "品牌語氣回覆，繁中在地用語",
      "Threads、IG、FB、YouTube 一站管理",
    ],
  },
  stats: [
    { value: "3.2 秒", label: "私訊平均回覆時間" },
    { value: "94%", label: "垃圾留言在曝光前被攔下" },
    { value: "4", label: "平台整合於同一後台" },
  ],
  features: {
    heading: "為繁中社群現場設計，不是翻譯介面",
    intro:
      "凌晨一點的「請問還有貨嗎」、假投資帳號的踩場留言、同一則尺寸問題被問八十次——這些都交給 Social Kirin，小編只處理真正需要判斷的對話。",
    items: [
      {
        title: "廣告留言在燒預算前就被清乾淨",
        body: "AI 辨識競品踩場、假帳號、投資詐騙與外部導流連結，隱藏動作在數秒內完成，不必等小編早上上班才處理。",
      },
      {
        title: "用台灣人說話的方式回覆",
        body: "不是機翻。回覆會依情境調整：尺寸問題給清楚數字，客訴先安撫再轉真人，節慶活動用品牌一貫語氣。",
      },
      {
        title: "私訊變成訂單，不是待辦事項",
        body: "每一則「想了解」都被回覆、標記商品，必要時自動轉給對的同事並附上對話摘要。",
      },
      {
        title: "敏感內容與個資有邊界",
        body: "個資訊息自動遮蔽、保留稽核紀錄，符合台灣個資法與香港 PDPO 的基本要求。",
      },
    ],
  },
  platforms: {
    heading: "你的受眾在哪，它就在哪",
    items: ["Instagram 與 Reels", "Facebook 粉專與廣告", "YouTube 與直播聊天室", "Threads 串文"],
  },
  pricing: {
    heading: "以新台幣計價，沒有隱藏費用",
    intro: "每個方案都含不限量留言審查與私訊自動化，可隨時升級或取消。",
    currencyNote: "以新台幣（NT$）計價，另附港幣參考匯率。",
    cta: "選擇方案",
    tiers: [
      {
        name: "入門",
        price: "NT$590",
        note: "每月，1 個帳號",
        features: ["1 個社群帳號", "AI 留言審查", "每月 500 則自動私訊"],
      },
      {
        name: "商務",
        price: "NT$1,490",
        note: "每月，3 個帳號",
        features: ["3 個社群帳號", "私訊自動化與商品標記", "每週成效報表", "繁中客服支援"],
        featured: true,
      },
      {
        name: "代理商",
        price: "NT$3,690",
        note: "每月，10 個帳號",
        features: ["10 個社群帳號", "團隊權限與子帳號", "客戶品牌報表"],
      },
    ],
  },
  faq: {
    heading: "小編最常問的問題",
    intro: "找不到答案？用中文寫信給我們，工作時間內兩小時回覆。",
    items: [
      {
        q: "看得懂台灣的注音文、火星文跟香港廣東話嗎？",
        a: "可以。模型以繁體中文社群語料訓練，涵蓋注音、常見網路用語、香港廣東話口語與中英夾雜的寫法。",
      },
      {
        q: "串接 Facebook 粉專要多久？",
        a: "透過 Meta 官方授權大約三分鐘：登入、選擇粉專、設定第一組規則就完成。",
      },
      {
        q: "會不會誤隱藏真實客戶的留言？",
        a: "不會。需要真人判斷的留言會標記優先度送進待辦，而不是被隱藏。",
      },
      {
        q: "可以同時管理多個品牌嗎？",
        a: "代理商方案支援十個帳號，每個品牌有獨立工作區與報表。",
      },
      {
        q: "我的客戶資料會被用來訓練模型嗎？",
        a: "不會。客戶對話內容不會進入模型訓練，資料傳輸與儲存皆加密。",
      },
    ],
  },
  finalCta: {
    heading: "別再一則一則手動刪留言",
    body: "三分鐘完成設定，今晚就能看到第一批留言被自動處理。",
    cta: "立即免費開始",
  },
  footerNote:
    "由 D AGE Technology 營運（SSM PC0005997-A），馬來西亞檳城 Bayan Lepas。",
};