import React from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$25",
    annual: "$250/yr",
    channels: "5 channels",
    volume: "5,000 interactions/mo",
    description: "Perfect for solo creators testing AI moderation.",
    highlighted: false,
    limitations: ["No automations", "No leads tracking", "No full analytics"],
  },
  {
    name: "Growth",
    price: "$59",
    annual: "$590/yr",
    channels: "15 channels",
    volume: "15,000 interactions/mo",
    description: "For growing brands managing multiple accounts.",
    highlighted: true,
    limitations: [],
  },
  {
    name: "Pro",
    price: "$99",
    annual: "$990/yr",
    channels: "50 channels",
    volume: "35,000 interactions/mo",
    description: "For teams and agencies scaling moderation.",
    highlighted: false,
    limitations: [],
  },
];

const allFeatures = [
  "AI spam detection",
  "Brand-voice replies",
  "DM automation",
  "Multi-language support",
  "Sentiment analysis",
  "Unlimited seats",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center md:mb-14 md:space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            Simple pricing
          </span>
          <h2 className="text-balance font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            Volume-based pricing built for growth
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            All tiers include unlimited seats. Scale with channels and interaction volume.
            Free 3-day trial, no credit card required.
          </p>
        </div>

        <div className="mb-6 rounded-[1.5rem] border border-accent/20 bg-accent/10 p-4 text-center shadow-soft sm:mb-8 sm:p-5">
          <p className="text-sm leading-6 text-foreground">
            Start free today. No credit card required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col gap-5 rounded-2xl border p-6",
                tier.highlighted
                  ? "border-primary bg-primary text-primary-foreground shadow-glow lg:-translate-y-2"
                  : "border-border bg-card shadow-soft"
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-serif text-2xl font-bold">{tier.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm leading-6",
                    tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}
                >
                  {tier.description}
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-bold">{tier.price}</span>
                  <span
                    className={cn(
                      "text-sm",
                      tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}
                  >
                    /mo
                  </span>
                </div>
                <p className={cn(
                  "text-xs mt-1",
                  tier.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  or {tier.annual} (save 2 months)
                </p>
              </div>

              <div className="space-y-2 pb-4 border-b border-border/20">
                <div className="flex items-center justify-between text-sm">
                  <span className={tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    Channels
                  </span>
                  <span className="font-semibold">{tier.channels}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    Interactions
                  </span>
                  <span className="font-semibold">{tier.volume}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    Team Seats
                  </span>
                  <span className="font-semibold">Unlimited</span>
                </div>
              </div>

              <div>
                <p className={cn(
                  "text-xs font-semibold uppercase tracking-wider mb-3",
                  tier.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  What's Included
                </p>
                <ul className="space-y-2.5">
                  {allFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-6">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          tier.highlighted ? "text-accent" : "text-primary"
                        )}
                      />
                      <span className={tier.highlighted ? "text-primary-foreground/90" : "text-foreground/85"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {tier.limitations.length > 0 && (
                    <>
                      {tier.limitations.map((limitation) => (
                        <li key={limitation} className="flex items-start gap-2.5 text-sm leading-6">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                          <span className="text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>

              <Button
                asChild
                variant={tier.highlighted ? "secondary" : "outline"}
                className={cn(
                  "w-full rounded-full font-semibold mt-auto",
                  !tier.highlighted && "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                )}
              >
                <Link href="https://app.socialkirin.com">Get Started Free</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            <strong>Free Trial:</strong> 3 days, 50 interactions/mo, 1 channel — no credit card required
          </p>
          <p className="text-sm text-muted-foreground">
            Need more volume or custom features? <Link href="https://app.socialkirin.com" className="text-primary hover:underline">Contact us for enterprise pricing</Link>
          </p>
        </div>
      </div>
    </section>
  );
}