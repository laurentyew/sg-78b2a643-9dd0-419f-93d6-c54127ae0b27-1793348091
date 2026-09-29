import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$39",
    description: "For solo creators and small brands getting their first steady comment volume.",
    features: [
      "1 connected account",
      "Auto-hide spam comments",
      "500 AI replies per month",
      "Basic sentiment flags",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "For growing brands that want moderation, replies, and DM automation in one place.",
    features: [
      "3 connected accounts",
      "Unlimited spam auto-hide",
      "3,000 AI replies per month",
      "DM keyword triggers",
      "Brand voice training",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$149",
    description: "For teams managing multiple product lines, campaigns, or larger support volume.",
    features: [
      "10 connected accounts",
      "Unlimited AI replies",
      "Advanced sentiment alerts",
      "Multiple brand voice profiles",
      "Team seats and approvals",
      "Dedicated onboarding",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For agencies and large teams with custom workflow, reporting, or security needs.",
    features: [
      "Unlimited accounts",
      "Custom AI tuning",
      "SLA support",
      "API access",
      "Custom reporting",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-24">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Planned pricing
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Clear pricing once Social Kirin launches
          </h2>
          <p className="text-lg text-muted-foreground">
            These are the planned monthly tiers after launch. If you join the waitlist early,
            the first 50 signups get 3 months free before paid billing begins.
          </p>
        </div>

        <div className="mb-8 rounded-[1.75rem] border border-accent/20 bg-accent/10 p-5 text-center shadow-soft">
          <p className="text-sm font-medium text-foreground">
            Not ready to buy yet? Join the waitlist now and lock in the early-access offer while spots are still available.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col gap-5 rounded-2xl border p-6",
                tier.highlighted
                  ? "scale-[1.03] border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border bg-card shadow-soft"
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  Best for most brands
                </span>
              )}

              <div>
                <h3 className="font-serif text-xl font-bold">{tier.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    tier.highlighted ? "text-primary-foreground/75" : "text-muted-foreground"
                  )}
                >
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="font-serif text-4xl font-bold">{tier.price}</span>
                {tier.price !== "Custom" && (
                  <span
                    className={cn(
                      "text-sm",
                      tier.highlighted ? "text-primary-foreground/75" : "text-muted-foreground"
                    )}
                  >
                    /mo
                  </span>
                )}
              </div>

              <ul className="flex-1 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
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

              <Button
                asChild
                variant={tier.highlighted ? "secondary" : "outline"}
                className={cn(
                  "w-full rounded-xl font-semibold",
                  !tier.highlighted && "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                )}
              >
                <Link href="#waitlist">{tier.price === "Custom" ? "Talk to us early" : "Join waitlist"}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}