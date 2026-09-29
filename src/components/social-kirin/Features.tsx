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
      "Moderate Instagram, Facebook, and TikTok from one dashboard instead of bouncing between apps and tabs.",
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
    <section id="features" className="bg-background py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            What it actually does
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Built to solve the social inbox problems teams deal with every day
          </h2>
          <p className="text-lg text-muted-foreground">
            Instead of another generic chatbot, Social Kirin is focused on the exact jobs that eat up time on social:
            moderation, repetitive replies, keyword DMs, and fast escalation when something gets messy.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                <feature.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}