import React from "react";
import {
  BarChart3,
  LayoutGrid,
  MessageCircleHeart,
  ShieldOff,
  UserCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ShieldOff,
    title: "Hide spam before customers see it",
    description:
      "Block bots, scam links, fake giveaways, and abusive comments in real time so your posts stay clean and trustworthy.",
  },
  {
    icon: MessageCircleHeart,
    title: "Reply like your team would",
    description:
      "Train Social Kirin on your FAQs, products, and tone so routine replies sound on-brand instead of robotic.",
  },
  {
    icon: Zap,
    title: "Send DMs when people ask for links",
    description:
      "Turn comments like “price?”, “link?”, or “send details” into instant DMs that keep buyers moving.",
  },
  {
    icon: BarChart3,
    title: "Catch unhappy conversations early",
    description:
      "Spot negative sentiment fast so your team can step in before a complaint turns into a bigger public issue.",
  },
  {
    icon: LayoutGrid,
    title: "Manage every account in one place",
    description:
      "Moderate Instagram, Facebook, and YouTube from one dashboard instead of bouncing between apps and tabs.",
  },
  {
    icon: UserCheck,
    title: "Escalate sensitive messages to humans",
    description:
      "When a message needs care, legal review, or a real person, Social Kirin flags it instead of forcing automation.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center md:mb-14 md:space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            What it actually does
          </span>
          <h2 className="text-balance font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            Built to solve the social inbox problems teams deal with every day
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Social Kirin is focused on the exact jobs that eat up time on social:
            moderation, repetitive replies, keyword DMs, and fast escalation when something gets messy.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary sm:h-12 sm:w-12">
                <feature.icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground sm:h-6 sm:w-6" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-foreground sm:text-xl">{feature.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}