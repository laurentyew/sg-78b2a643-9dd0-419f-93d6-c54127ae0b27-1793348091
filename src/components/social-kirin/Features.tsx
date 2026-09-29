import React from "react";
import {
  ShieldOff,
  MessageCircleHeart,
  Zap,
  BarChart3,
  LayoutGrid,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldOff,
    title: "Auto-Hide Spam Comments",
    description:
      "Detect and auto-hide spam, bots, scams, and toxic comments in real time across Instagram, Facebook, and TikTok — before your audience even sees them.",
  },
  {
    icon: MessageCircleHeart,
    title: "AI Replies in Your Brand Voice",
    description:
      "Train Social Kirin on your tone, FAQs, and product details once. It replies to comments and DMs like a real member of your team — never generic, never robotic.",
  },
  {
    icon: Zap,
    title: "DM Automation & Keyword Triggers",
    description:
      "Turn comments like \"link please\" into instant, automated DMs. Set keyword triggers for giveaways, product drops, and lead capture — fully hands-off.",
  },
  {
    icon: BarChart3,
    title: "Sentiment Analysis",
    description:
      "Every comment is scored for sentiment so you can spot brewing PR issues, happy customers worth featuring, and trends in real time.",
  },
  {
    icon: LayoutGrid,
    title: "Multi-Platform Dashboard",
    description:
      "Manage comment and DM moderation for Instagram, Facebook, and TikTok from one unified inbox — no more switching between apps.",
  },
  {
    icon: UserCheck,
    title: "Human Escalation, Built In",
    description:
      "Sensitive complaints, legal mentions, or angry customers are automatically flagged and routed to your team instead of an automated reply.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Everything you need
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            One AI guardian, every comment covered
          </h2>
          <p className="text-muted-foreground text-lg">
            Social Kirin replaces manual moderation and generic chatbots with a
            single AI system built specifically for social comment & DM management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}