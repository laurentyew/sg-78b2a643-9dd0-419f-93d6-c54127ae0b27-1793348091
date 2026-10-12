import React from "react";
import { Link2, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect Your Accounts",
    description:
      "Link Instagram, Facebook, and YouTube in a few clicks. No developer needed, no code required.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Train Your Brand Voice",
    description:
      "Upload your FAQs, product info, and past replies. Social Kirin learns your tone and knowledge base in under 10 minutes.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Go Live in Minutes",
    description:
      "Turn on auto-hide spam, AI replies, and DM automation. Watch your dashboard fill with hours saved every week.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Simple setup
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            From signup to spam-free in under an hour
          </h2>
          <p className="text-muted-foreground text-lg">
            No agencies, no lengthy onboarding calls. Social Kirin is built to be
            self-serve from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-border" />
          {steps.map((step) => (
            <div key={step.number} className="relative text-center space-y-4">
              <div className="relative z-10 mx-auto h-20 w-20 rounded-2xl bg-card border-2 border-primary shadow-soft flex items-center justify-center">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <span className="block font-serif text-sm font-bold text-accent">
                STEP {step.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}