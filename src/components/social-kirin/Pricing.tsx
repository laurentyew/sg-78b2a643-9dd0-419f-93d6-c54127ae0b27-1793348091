import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$39",
    description: "Solo creators & small shops testing AI moderation",
    features: [
      "1 connected account",
      "Auto-hide spam comments",
      "500 AI replies / month",
      "Basic sentiment flags",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "Growing DTC brands managing real comment volume",
    features: [
      "3 connected accounts",
      "Unlimited spam auto-hide",
      "3,000 AI replies / month",
      "DM automation & keyword triggers",
      "Brand voice training",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$149",
    description: "Multi-brand teams needing full automation depth",
    features: [
      "10 connected accounts",
      "Unlimited AI replies",
      "Advanced sentiment analysis + PR alerts",
      "Multi-brand voice profiles",
      "Team seats & approval workflows",
      "Dedicated onboarding",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Agencies & large accounts with custom needs",
    features: [
      "Unlimited accounts",
      "Custom AI model tuning",
      "SLA & white-glove support",
      "API access",
      "Custom reporting",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Simple pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Plans that scale with your comment volume
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees. Cancel anytime. 14-day free trial on every plan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "rounded-2xl p-6 border flex flex-col gap-5",
                tier.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-glow scale-[1.03] relative"
                  : "bg-card border-border shadow-soft"
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="font-serif text-xl font-bold">{tier.name}</h3>
                <p
                  className={cn(
                    "text-sm mt-1",
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
              <ul className="space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={cn(
                        "h-4 w-4 mt-0.5 shrink-0",
                        tier.highlighted ? "text-accent" : "text-primary"
                      )}
                    />
                    <span className={tier.highlighted ? "text-primary-foreground/90" : "text-foreground/85"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlighted ? "secondary" : "outline"}
                className={cn(
                  "w-full rounded-xl font-semibold",
                  !tier.highlighted && "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                )}
              >
                {tier.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}