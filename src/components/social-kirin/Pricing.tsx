import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$19",
    workspaces: "1 workspace",
    volume: "1,000 comments/mo",
    description: "Perfect for solo creators testing AI moderation.",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$49",
    workspaces: "2 workspaces",
    volume: "10,000 comments/mo",
    description: "For growing brands managing multiple accounts.",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$99",
    workspaces: "Unlimited workspaces",
    volume: "50,000 comments/mo",
    description: "For teams and agencies scaling moderation.",
    highlighted: false,
  },
];

const allFeatures = [
  "Buyer-intent detection",
  "AI brand-voice replies",
  "3-step DM automation",
  "Multi-language support",
  "7-day free trial",
  "Unlimited platforms",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center md:mb-14 md:space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            Planned pricing
          </span>
          <h2 className="text-balance font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            Volume-based pricing built for growth
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            All tiers include full moderation features. Scale with workspace and comment volume.
            First 50 waitlist signups get 3 months free.
          </p>
        </div>

        <div className="mb-6 rounded-[1.5rem] border border-accent/20 bg-accent/10 p-4 text-center shadow-soft sm:mb-8 sm:p-5">
          <p className="text-sm leading-6 text-foreground">
            Join the waitlist now and lock in early-access pricing. All plans include a 7-day free trial after launch.
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

              <div className="space-y-2 pb-4 border-b border-border/20">
                <div className="flex items-center justify-between text-sm">
                  <span className={tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    Workspaces
                  </span>
                  <span className="font-semibold">{tier.workspaces}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={tier.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    Comment Volume
                  </span>
                  <span className="font-semibold">{tier.volume}</span>
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
                <Link href="#waitlist">Join Waitlist</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Need more volume or custom features? <Link href="#waitlist" className="text-primary hover:underline">Contact us for enterprise pricing</Link>
        </p>
      </div>
    </section>
  );
}