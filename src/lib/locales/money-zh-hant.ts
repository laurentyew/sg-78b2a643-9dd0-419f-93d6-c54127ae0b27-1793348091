import type { MoneyPageContent } from "@/lib/locales/types";

export const zhHantCommentModeration: MoneyPageContent = {
  lang: "zh-hant",
  slug: "/zh-hant/comment-moderation",
  navCta: "免費試用",
  meta: {
    title: "社群留言審核自動化工具｜Social Kirin",
    description:
      "自動隱藏垃圾留言、詐騙連結與不雅內容，並以你的品牌語氣回覆 Instagram、Facebook 粉專與 YouTube 留言。3 天免費試用，50 次互動，免綁卡。",
  },
  hero: {
    eyebrow: "留言審核自動化",
    title: "垃圾留言幾秒內消失，不必等小編下班",
    subtitle:
      "Social Kirin 全天候守著 Instagram、Facebook 粉專與 YouTube，把廣告留言與詐騙連結擋在觀眾看到之前，並用你的品牌語氣回覆真正的顧客問題。",
    bullets: [
      "在粉絲看到之前，先隱藏飆股群組、代購與不雅留言",
      "依品牌語氣自動回覆，繁中、英文與港式口語都能設定",
      "小編睡覺、出差、直播時，審核照樣運作",
    ],
    primaryCta: "免費試用 3 天",
    secondaryCta: "查看定價",
  },
  intro: {
    heading: "為什麼人工審核已經跟不上",
    paragraphs: [
      "一支爆紅的 Reels 可以在一小時內帶來數百則留言。同一時間，詐騙帳號開始在你每一篇貼文下複製貼上連結，真正的顧客在你還沒打開手機前就已經看到了。",
      "Social Kirin 在留言進入的那一刻就完成判讀：廣告與詐騙留言被隱藏，顧客問題被回覆，每一個決定都有紀錄，方便小編事後抽查。",
    ],
  },
  capabilities: {
    heading: "自動審核實際處理的四件事",
    intro: "原本每天要花兩到三小時的工作，現在自動執行。",
    items: [
      {
        title: "過濾垃圾與詐騙留言",
        body: "辨識重複連結、免洗帳號、飆股群組邀請與常見詐騙話術，在粉絲看到之前就隱藏。",
      },
      {
        title: "用品牌語氣回覆",
        body: "依你設定的語氣生成回覆：精品品牌可以正式，服飾電商用親切口語，創作者則能設定更輕鬆的語氣。",
      },
      {
        title: "留言觸發的自動私訊",
        body: "顧客在留言區打出指定關鍵字時，自動回覆尺寸表、目錄連結或物流說明。",
      },
      {
        title: "情緒分析",
        body: "每篇貼文的正負面留言比例一目了然，知道哪一則內容引發反彈，提早處理。",
      },
    ],
  },
  examples: {
    heading: "實際被處理的留言範例",
    intro: "判斷依據是留言文字、發送帳號與其中連結，而不是單純的禁用詞清單。",
    legend: {
      kept: "保留",
      hidden: "隱藏",
    },
    items: [
      {
        comment: "「私訊我帶你進飆股群組，名額只剩 3 位」",
        verdict: "投資群組引流，帳號無任何留言紀錄",
        action: "立即隱藏並標記",
        hidden: true,
      },
      {
        comment: "「這瓶精華我用了三週，敏感肌也沒問題，已經回購第三次。」",
        verdict: "真實顧客好評",
        action: "保留並標記為正面",
        hidden: false,
      },
      {
        comment: "「加 Line：8888 領取免費試用包，先搶先贏」",
        verdict: "釣魚引流訊息",
        action: "隱藏並加入黑名單",
        hidden: true,
      },
      {
        comment: "「請問還有現貨嗎？想宅配到高雄。」",
        verdict: "顧客購買詢問",
        action: "自動回覆物流與庫存說明",
        hidden: false,
      },
    ],
  },
  steps: {
    heading: "三個步驟就能開始",
    items: [
      {
        title: "連結你的帳號",
        body: "用 Facebook 帳號登入，選擇要管理的粉專、Instagram 商業帳號或 YouTube 頻道。授權全程透過 Meta 與 Google 官方 API 完成。",
      },
      {
        title: "設定品牌語氣",
        body: "貼上三則你滿意的回覆作為範例，或直接選擇預設語氣。系統每次生成新回覆時都會以這些範例為基準。",
      },
      {
        title: "檢查與微調",
        body: "上線 24 小時後檢視審核紀錄，隨時核准、撤回或新增規則。",
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
        q: "免費試用需要綁信用卡嗎？",
        a: "不需要。試用期 3 天、共 50 次互動；若未升級，系統會自動停止處理，不會產生任何費用。",
      },
      {
        q: "看得懂繁體中文與台灣用語嗎？",
        a: "可以辨識繁體中文、台灣用語與中英夾雜的留言。不過模型並非專為台灣網路用語訓練，建議第一週仍保留人工抽查。",
      },
      {
        q: "留言資料會被怎麼處理？",
        a: "留言內容僅用於即時判斷與紀錄，不會用於訓練第三方模型。你可以隨時在帳號設定中刪除全部留言紀錄。",
      },
      {
        q: "支援哪些平台？",
        a: "Instagram 商業帳號、Facebook 粉專與 YouTube。個人 Facebook 帳號不支援，因為這違反平台條款。",
      },
      {
        q: "會取代小編嗎？",
        a: "不會完全取代。它處理約九成的例行判斷，把敏感與爭議留言留給你的團隊決定。",
      },
      {
        q: "可以同時管理多個品牌嗎？",
        a: "可以。同一個訂閱下，每個社群帳號都能設定各自的語氣與規則。",
      },
    ],
  },
  related: {
    heading: "相關頁面",
    links: [
      { label: "Social Kirin 全部功能", href: "/zh-hant" },
      { label: "美元定價", href: "/zh-hant#pricing" },
      { label: "常見問題", href: "/zh-hant#faq" },
    ],
  },
  finalCta: {
    heading: "今晚就讓審核自動運作",
    body: "連結你的 Instagram 或 Facebook 粉專，幾分鐘內看到第一批留言被處理。",
    cta: "開始 3 天試用",
  },
};