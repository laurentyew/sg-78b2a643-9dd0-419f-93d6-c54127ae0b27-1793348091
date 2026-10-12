import React from "react";
import {
  Ban,
  Link2Off,
  ListChecks,
  Send,
  ShieldAlert,
  ShieldOff,
  UserCheck,
  UserX,
} from "lucide-react";

const rules = [
  {
    icon: ShieldOff,
    tag: "Real-time",
    title: "Auto-hide spam comments",
    description:
      "Bots, follow-for-follow spam, and duplicate comments get hidden before your audience ever sees them.",
  },
  {
    icon: Ban,
    tag: "Custom rules",
    title: "Block banned words and phrases",
    description:
      "Add your own blocked terms, competitor names, or risky phrases and Kirin filters them automatically.",
  },
  {
    icon: Link2Off,
    tag: "Link safety",
    title: "Filter scam and phishing links",
    description:
      "Suspicious URLs, crypto scams, and fake giveaway links are removed or quarantined instantly.",
  },
  {
    icon: ShieldAlert,
    tag: "Sentiment",
    title: "Detect toxic and abusive language",
    description:
      "Kirin flags harassment, hate speech, and aggressive replies so your team can step in early.",
  },
  {
    icon: Send,
    tag: "DM trigger",
    title: "Keyword-triggered DM automation",
    description:
      "Comments like “link?”, “price?”, or “details” trigger an instant DM with the right next step.",
  },
  {
    icon: UserX,
    tag: "Brand safety",
    title: "Hide self-promo and hijack comments",
    description:
      "Stop competitors and spam accounts from farming attention on your posts and paid ads.",
  },
  {
    icon: UserCheck,
    tag: "Escalation",
    title: "Route sensitive DMs to humans",
    description:
      "Legal, refund, or complaint messages skip automation and land with the right teammate.",
  },
  {
    icon: ListChecks,
    tag: "Backlog",
    title: "Bulk moderate old posts",
    description:
      "Clean up years of comment history in one pass instead of scrolling post by post.",
  },
];

export function ModerationGrid() {
  return (
    <section id="moderation" className="bg-foreground py-16 text-background md:py-24">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center md:mb-14 md:space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            The moderation engine
          </span>
          <h2 className="text-balance font-serif text-2xl font-bold leading-tight text-background sm:text-3xl md:text-4xl">
            Every comment rule you need, running in one place
          </h2>
          <p className="text-base leading-7 text-background/70 sm:text-lg">
            Stack AI detection with your own keyword and DM rules, then let Social Kirin enforce
            them across every post, reel, and ad on Instagram, Facebook, and YouTube.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="group rounded-2xl border border-background/10 bg-background/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-background/10"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  <rule.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-background/50">
                  {rule.tag}
                </span>
              </div>
              <h3 className="mb-2 font-serif text-base font-bold text-background sm:text-lg">
                {rule.title}
              </h3>
              <p className="text-sm leading-6 text-background/65">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}