import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    label: "DTC & ecommerce brands",
    pain: "Your posts attract scam comments, repetitive product questions, and late-night support messages.",
    benefit: "Social Kirin hides junk automatically and answers common buying questions in your brand voice.",
    result: "Cleaner comment sections and faster conversions without hiring more moderators.",
    tone: "bg-primary/10 text-primary",
  },
  {
    label: "Creators & personal brands",
    pain: "You want to stay close to your audience, but comment volume and DMs become impossible to keep up with.",
    benefit: "Auto-reply to common questions, send links by DM, and filter toxic comments before they drain your energy.",
    result: "More engagement, less burnout, and fewer missed opportunities.",
    tone: "bg-accent/10 text-accent",
  },
  {
    label: "Agencies managing client accounts",
    pain: "Your team jumps between accounts, misses important replies, and struggles to maintain each client's tone.",
    benefit: "Manage multiple brands from one dashboard with separate voice rules and escalation settings.",
    result: "Serve more clients with less manual work and more consistency.",
    tone: "bg-primary/10 text-primary",
  },
  {
    label: "Launches, drops & giveaway campaigns",
    pain: "Big campaigns trigger floods of “link?”, “price?”, and spammy giveaway comments all at once.",
    benefit: "Turn keywords into instant DMs and keep noisy threads under control during peak traffic.",
    result: "You capture demand while the excitement is still high.",
    tone: "bg-accent/10 text-accent",
  },
  {
    label: "Lean support & community teams",
    pain: "Your team cannot watch comments 24/7, so response times slip and small issues snowball.",
    benefit: "Let AI cover the repetitive moderation work and escalate sensitive threads to a human when needed.",
    result: "Better response coverage without stretching your team thinner.",
    tone: "bg-primary/10 text-primary",
  },
];

export function TargetAudiences() {
  return (
    <section id="audiences" className="bg-muted/30 py-20 md:py-24">
      <div className="container space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Who it is for
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Built for teams drowning in comments, DMs, and spam
          </h2>
          <p className="text-lg text-muted-foreground">
            If you manage social accounts that get frequent questions, promo traffic, bot spam,
            or community messages, Social Kirin helps you respond faster without sounding like a bot.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.label}
              className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${audience.tone}`}>
                  Best fit
                </span>
                <span className="font-serif text-lg font-bold text-foreground/25">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-foreground">
                {audience.label}
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-foreground">Pain point</p>
                  <p className="mt-1 text-muted-foreground">{audience.pain}</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">What Social Kirin does</p>
                  <p className="mt-1 text-muted-foreground">{audience.benefit}</p>
                </div>

                <div className="rounded-2xl bg-muted/60 p-4">
                  <p className="font-semibold text-foreground">What you get</p>
                  <p className="mt-1 text-muted-foreground">{audience.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-sm text-muted-foreground">
            If that sounds like your team, join the waitlist now and lock in 3 free months if you're among the first 50 signups.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-7 text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            <Link href="#waitlist">See if spots are still open</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}