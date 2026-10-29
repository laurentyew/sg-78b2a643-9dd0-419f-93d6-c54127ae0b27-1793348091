export interface AudienceCapability {
  title: string;
  body: string;
}

export interface AudienceFaq {
  question: string;
  answer: string;
}

export interface Audience {
  slug: string;
  label: string;
  cardCopy: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string;
  painPoints: string[];
  outcomes: string[];
  capabilities: AudienceCapability[];
  faq: AudienceFaq[];
}

export const audiences: Audience[] = [
  {
    slug: "ecommerce",
    label: "eCommerce & DTC brands",
    cardCopy: "Scam replies under your ads, repeated buying questions, and support requests buried in comments.",
    title: "Comment moderation for eCommerce & DTC brands",
    description:
      "Hide scam and impersonator comments, answer price and shipping questions in your brand voice, and turn comment intent into tracked leads across Instagram, Facebook, and YouTube.",
    eyebrow: "For eCommerce & DTC brands",
    headline: "Stop paying for ads that send shoppers into a comment section full of scams",
    intro:
      "Paid traffic is expensive. When the first thing a shopper sees is a fake \"congratulations, you won\" reply from an impersonator, that spend is working against you. Social Kirin watches every comment on your connected channels, hides the junk, and answers the predictable questions before your team wakes up.",
    painPoints: [
      "Fake prize replies and impersonator accounts sit directly under your ad creative, where every shopper sees them.",
      "The same three questions about price, shipping, and sizing repeat hundreds of times a week.",
      "Buying-intent comments arrive overnight and are cold by the time someone replies the next morning.",
    ],
    outcomes: [
      "Spam, impersonators, and bot replies hidden before most shoppers scroll past them.",
      "Buying questions answered in your brand voice within minutes instead of hours.",
      "Comment intent captured as leads rather than lost in a thread nobody revisited.",
    ],
    capabilities: [
      {
        title: "AI spam and impersonator detection",
        body: "Classifies scam patterns, repeated link drops, and fake giveaway replies, then hides them using your platform permissions. Custom keyword and blocklists cover anything the model misses.",
      },
      {
        title: "Brand-voice replies",
        body: "Train the reply engine on your tone and approved answers so price, shipping, and sizing questions get a consistent response that still sounds like your brand.",
      },
      {
        title: "Keyword-to-DM automation",
        body: "Turn comments like \"link\" or \"price\" into an automatic DM with the product page, discount code, or size guide — while the shopper is still interested.",
      },
      {
        title: "Sentiment escalation",
        body: "Angry or high-risk threads are flagged for a human instead of being auto-answered, so a complaint never gets a cheerful canned reply.",
      },
    ],
    faq: [
      {
        question: "Which platforms can an eCommerce brand connect?",
        answer:
          "Instagram, Facebook Pages, Facebook ad comments, and YouTube. Each connected account counts as one channel. Starter includes 5 channels, Growth 15, and Pro 50.",
      },
      {
        question: "Will automated replies damage my brand voice?",
        answer:
          "Replies are generated from the tone samples and approved answers you provide, and you can review them before enabling full automation. Sensitive or negative threads are escalated to a person rather than auto-answered.",
      },
      {
        question: "What does it cost for a small store?",
        answer:
          "Starter is $25/month for 5 channels and 5,000 interactions per month, billed monthly or $250 annually. Growth is $59/month for 15 channels and 15,000 interactions. Every plan starts with a 3-day trial, no credit card required.",
      },
    ],
  },
  {
    slug: "creators",
    label: "Creators & personal brands",
    cardCopy: "Comment volume and DMs outgrow your ability to reply personally without burning out.",
    title: "Comment moderation for creators & personal brands",
    description:
      "Filter toxic comments, auto-reply to the questions you answer every day, and send links by DM so you can stay close to your audience without living in your notifications.",
    eyebrow: "For creators & personal brands",
    headline: "Stay close to your audience without living in your notifications",
    intro:
      "Being present in your comments is the whole point of a personal brand. But once a post takes off, the volume makes personal replies impossible — and the toxic minority takes more energy than the supportive majority gives back. Social Kirin handles the repetitive part so your attention goes where it actually matters.",
    painPoints: [
      "A single viral post can produce more comments in a day than you can read in a week.",
      "The same questions about links, gear, presets, or collaborations repeat endlessly.",
      "Toxic replies are demoralising and often visible to your best followers before you catch them.",
    ],
    outcomes: [
      "Repeated questions answered automatically in your own voice, around the clock.",
      "Links, presets, and resources delivered by DM instead of a dead comment thread.",
      "Abusive and harassing replies filtered before they sit at the top of your post.",
    ],
    capabilities: [
      {
        title: "Toxic comment filtering",
        body: "Sentiment analysis flags harassing and abusive language, with custom keyword lists for the specific pile-ons you experience.",
      },
      {
        title: "Auto-replies that sound like you",
        body: "Trained on your writing samples, so \"what camera do you use\" gets a real answer rather than a corporate template.",
      },
      {
        title: "DM resource delivery",
        body: "Comment a keyword, receive the link in a DM. Works for presets, affiliate links, newsletter signups, and collaboration briefs.",
      },
      {
        title: "Viral-post handling",
        body: "Set stricter filtering for high-traffic posts so a viral spike does not become a moderation crisis at 1am.",
      },
    ],
    faq: [
      {
        question: "Can I still reply personally to the comments I care about?",
        answer:
          "Yes. Automation covers the repetitive and the abusive. You keep full control of your inbox and can reply to any thread yourself at any time.",
      },
      {
        question: "Does it work on Instagram Reels and YouTube?",
        answer:
          "Yes. Instagram posts and Reels, Facebook Pages and ad comments, and YouTube comments are all supported on the same channel subscription.",
      },
      {
        question: "What does it cost for a solo creator?",
        answer:
          "Starter is $25/month for 5 channels and 5,000 interactions. The 3-day trial needs no credit card.",
      },
    ],
  },
  {
    slug: "agencies",
    label: "Agencies & social media managers",
    cardCopy: "Too many client accounts, inconsistent brand voices, and escalation paths that live in someone's head.",
    title: "Comment moderation for agencies & social media managers",
    description:
      "Manage every client account from one dashboard with separate brand-voice rules, role-based access for your team, and clear escalation for sensitive threads.",
    eyebrow: "For agencies & social media managers",
    headline: "Run every client account from one dashboard, in each client's voice",
    intro:
      "Agencies do not lose clients because moderation is hard. They lose clients because a nasty comment sat unanswered over a weekend, or because a junior used the wrong voice for the wrong brand. Social Kirin gives each client account its own rules, and gives you the audit trail to prove what happened.",
    painPoints: [
      "Your team juggles a dozen logins and loses track of which comments were handled.",
      "Each client brand has different tone rules, and a shared reply template shows immediately.",
      "Sensitive or legal-adjacent threads escalate through a chat thread instead of a defined path.",
    ],
    outcomes: [
      "Every client channel moderated with its own voice samples, keywords, and sensitivity settings.",
      "Moderator roles that let juniors help without granting full admin control.",
      "Escalated threads routed to the right person with context attached.",
    ],
    capabilities: [
      {
        title: "Per-client voice rules",
        body: "Each channel keeps its own tone samples and approved answers, so a reply for one brand never leaks into another.",
      },
      {
        title: "Role-based permissions",
        body: "Admin and Moderator roles separate account ownership from day-to-day comment handling.",
      },
      {
        title: "Volume-based channel limits",
        body: "Growth covers 15 channels and 15,000 interactions per month; Pro covers 50 channels and 35,000 interactions for larger rosters.",
      },
      {
        title: "Unlimited seats on every tier",
        body: "Adding a team member does not change the bill. Priced on channels and interaction volume only.",
      },
    ],
    faq: [
      {
        question: "How many client accounts can I manage?",
        answer:
          "Growth includes 15 channels and Pro includes 50, where each connected account counts as one channel. That is 15 or 50 separate Instagram, Facebook, or YouTube accounts, not 15 or 50 posts.",
      },
      {
        question: "Can team members have limited access?",
        answer:
          "Yes. Admin and Moderator roles are available on paid plans, so moderators can handle comments without controlling billing or connections.",
      },
      {
        question: "Do extra seats cost more?",
        answer:
          "No. Unlimited seats are included on every paid tier. Pricing is based on channels and monthly interaction volume.",
      },
    ],
  },
  {
    slug: "launches",
    label: "Launches, drops & giveaways",
    cardCopy: "A campaign spike turns your comment section into a wall of \"link?\" and prize spam.",
    title: "Comment moderation for launches, drops & giveaways",
    description:
      "Handle campaign comment spikes, turn keywords into instant DMs, and keep giveaway threads free of scam accounts — while the excitement is still high.",
    eyebrow: "For launches, drops & giveaways",
    headline: "Capture demand during the spike, not after it cools",
    intro:
      "The hour a drop goes live is the most valuable hour you have. It is also the hour your comment section fills with \"link?\", \"price?\", fake winner announcements, and bot accounts. Every minute a genuine buyer waits for an answer, the intent decays.",
    painPoints: [
      "Campaign posts generate a burst of comments that no manual team can answer in time.",
      "Fake \"you won\" replies from impersonators appear before you publish the real winner.",
      "Buying intent arrives in a two-hour window and disappears once the feed moves on.",
    ],
    outcomes: [
      "Keyword comments converted into DMs within seconds, while intent is peak.",
      "Impersonator and prize-scam replies hidden before they reach your entrants.",
      "Campaign threads stay readable, so real participants can find the official details.",
    ],
    capabilities: [
      {
        title: "Instant keyword-to-DM flows",
        body: "Multi-step DM automation delivers entry links, discount codes, or the drop URL the moment a keyword is commented.",
      },
      {
        title: "Impersonator blocking",
        body: "Flag and hide accounts mimicking your handle in prize announcements, plus blocklist repeat offenders.",
      },
      {
        title: "High-volume post presets",
        body: "Apply stricter filters to campaign posts only, keeping your everyday content moderation unchanged.",
      },
      {
        title: "Sentiment escalation during peak",
        body: "Genuine complaints about a broken link or a double charge surface to a human instead of a queue.",
      },
    ],
    faq: [
      {
        question: "Can automation keep up with a viral campaign post?",
        answer:
          "Keyword-to-DM flows respond within seconds. Interaction volume still counts against your tier limit, so a very large giveaway may need Growth or Pro rather than Starter.",
      },
      {
        question: "Can I run different rules for a campaign than my normal posts?",
        answer:
          "Yes. Filter sensitivity, keywords, and automation flows can be configured per channel and tightened for specific campaign periods.",
      },
      {
        question: "What happens when I hit my interaction limit?",
        answer:
          "Moderation pauses and you are prompted to move up a tier. Growth covers 15,000 interactions monthly and Pro covers 35,000.",
      },
    ],
  },
  {
    slug: "support-teams",
    label: "Lean support & community teams",
    cardCopy: "No one can watch comments 24/7, so response times slip and small issues escalate.",
    title: "Comment moderation for lean support & community teams",
    description:
      "Let AI cover repetitive moderation and first-response replies, with sentiment escalation routing sensitive threads to a human before they snowball.",
    eyebrow: "For lean support & community teams",
    headline: "Coverage around the clock without stretching your team thinner",
    intro:
      "Small community and support teams are asked to be everywhere at once. Comments get triaged after tickets, which means a public complaint can sit unanswered for hours while it gathers agreement. Social Kirin handles the first pass so your team arrives at the threads that actually need judgement.",
    painPoints: [
      "Comment moderation is the first thing dropped when ticket volume rises.",
      "Public complaints sit unanswered overnight and attract agreement in the replies.",
      "There is no consistent record of which comments were escalated and why.",
    ],
    outcomes: [
      "Repetitive questions and obvious spam handled without a human reading every comment.",
      "Negative and sensitive threads flagged for review with sentiment context.",
      "A consistent handling standard that does not depend on who is on shift.",
    ],
    capabilities: [
      {
        title: "Automated first-pass triage",
        body: "Spam is hidden, routine questions are answered, and anything flagged is queued for a person.",
      },
      {
        title: "Sentiment-based escalation",
        body: "Negative sentiment and configured keywords trigger escalation instead of an automated reply.",
      },
      {
        title: "Multi-language coverage",
        body: "Replies and classification cover six languages, so a lean team is not blocked by an inbox in a language nobody on shift speaks.",
      },
      {
        title: "Moderator roles",
        body: "Separate moderator access from admin access, so shift staff can handle comments without touching account settings.",
      },
    ],
    faq: [
      {
        question: "Does this replace our support desk?",
        answer:
          "No. Social Kirin moderates public comments and DMs on connected social channels. It escalates sensitive threads rather than acting as a ticketing system.",
      },
      {
        question: "How quickly are spam comments hidden?",
        answer:
          "Classification runs on incoming comments in real time using your platform permissions. Custom keyword and blocklists add deterministic coverage for known spam patterns.",
      },
      {
        question: "Can different team members see different accounts?",
        answer:
          "Admin and Moderator roles separate account control from comment handling. Channel limits are set by tier: 5 on Starter, 15 on Growth, and 50 on Pro.",
      },
    ],
  },
];

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((audience) => audience.slug === slug);
}