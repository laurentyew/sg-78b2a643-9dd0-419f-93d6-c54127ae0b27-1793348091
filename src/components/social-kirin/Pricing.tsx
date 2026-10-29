import React, { useState } from "react";
import { Check, X, Copy, CheckCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PROMO, formatUsd, promoPricing, spotsLabel } from "@/lib/promo";
import { usePromoSpots } from "@/hooks/usePromoSpots";

interface Tier {
  name: string;
  pricing: ReturnType<typeof promoPricing>;
  channels: string;
  volume: string;
  description: string;
  highlighted: boolean;
  limitations: string[];
}

const tiers: Tier[] = [
  {
    name: "Starter",
    pricing: promoPricing(25, 250),
    channels: "5 channels",
    volume: "5,000 interactions/mo",
    description: "For solo creators testing AI moderation.",
    highlighted: false,
    limitations: ["No automations", "No leads tracking", "No full analytics"],
  },
  {
    name: "Growth",
    pricing: promoPricing(59, 590),
    channels: "15 channels",
    volume: "15,000 interactions/mo",
    description: "For growing brands managing multiple accounts.",
    highlighted: true,
    limitations: [],
  },
  {
    name: "Pro",
    pricing: promoPricing(99, 990),
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

function CopyCode({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(PROMO.code);
      setCopied(true);
      setFailed(false);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setFailed(true);
    }
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-2", compact && "justify-center")}>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy promo code ${PROMO.code}`}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full border border-dashed px-4 py-2 font-mono text-sm font-bold tracking-[0.14em] transition-colors",
          copied
            ? "border-primary bg-primary/10 text-primary"
            : "border-accent/60 bg-accent/10 text-foreground hover:border-accent hover:bg-accent/20"
        )}
      >
        {PROMO.code}
        {copied ? (
          <CheckCheck className="h-4 w-4 text-primary" />
        ) : (
          <Copy className="h-4 w-4 opacity-70 group-hover:opacity-100" />
        )}
      </button>
      {copied && (
        <span className="text-sm font-medium text-primary" role="status">
          Copied — paste it at checkout
        </span>
      )}
      {failed && (
        <span className="text-sm font-medium text-foreground">
          Copy blocked — type <strong>{PROMO.code}</strong> at checkout
        </span>
      )}
    </div>
  );
}

export function Pricing() {
  const { remaining } = usePromoSpots();

  return (
    <section id="pricing" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl space-y-3 text-center md:mb-10 md:space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            Pricing
          </span>
          <h2 className="text-balance font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            50% off every plan for the first 50 brands
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Every tier includes unlimited seats. Apply the launch code at checkout to halve your
            first term — then scale with channels and interaction volume.
          </p>
        </div>

        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-center shadow-soft sm:flex-row sm:justify-between sm:p-5 sm:text-left">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-bold text-foreground">
                {spotsLabel(remaining)} — {PROMO.discountPercent}% off all plans
              </p>
              <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                {remaining !== null && remaining <= 0
                  ? "Launch pricing is closed, but you can still start a free trial."
                  : "Copy the code below and paste it at checkout in the app."}
              </p>
            </div>
          </div>
          <CopyCode />
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const { monthly, discountedMonthly, annual, discountedAnnual } = tier.pricing;
            const isHighlighted = tier.highlighted;

            return (
              <div
                key={tier.name}
                className={cn(
                  "relative flex flex-col gap-5 rounded-2xl border p-6",
                  isHighlighted
                    ? "border-primary bg-primary text-primary-foreground shadow-glow lg:-translate-y-2"
                    : "border-border bg-card shadow-soft"
                )}
              >
                {isHighlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="font-serif text-2xl font-bold">{tier.name}</h3>
                  <p
                    className={cn(
                      "mt-1 text-sm leading-6",
                      isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}
                  >
                    {tier.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="font-serif text-4xl font-bold">
                      {formatUsd(discountedMonthly)}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                      )}
                    >
                      /mo
                    </span>
                    <span
                      className={cn(
                        "text-base line-through",
                        isHighlighted ? "text-primary-foreground/60" : "text-muted-foreground/80"
                      )}
                    >
                      {formatUsd(monthly)}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-1 text-xs font-semibold uppercase tracking-wider",
                      isHighlighted ? "text-accent" : "text-accent"
                    )}
                  >
                    With {PROMO.code} · first term
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-xs",
                      isHighlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}
                  >
                    or {formatUsd(discountedAnnual)}/yr billed annually (was {formatUsd(annual)})
                  </p>
                </div>

                <div
                  className={cn(
                    "space-y-2 border-b pb-4",
                    isHighlighted ? "border-primary-foreground/20" : "border-border/60"
                  )}
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className={isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      Channels
                    </span>
                    <span className="font-semibold">{tier.channels}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      Interactions
                    </span>
                    <span className="font-semibold">{tier.volume}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      Team Seats
                    </span>
                    <span className="font-semibold">Unlimited</span>
                  </div>
                </div>

                <div>
                  <p
                    className={cn(
                      "mb-3 text-xs font-semibold uppercase tracking-wider",
                      isHighlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}
                  >
                    What's included
                  </p>
                  <ul className="space-y-2.5">
                    {allFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm leading-6">
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            isHighlighted ? "text-accent" : "text-primary"
                          )}
                        />
                        <span
                          className={
                            isHighlighted ? "text-primary-foreground/90" : "text-foreground/85"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                    {tier.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-start gap-2.5 text-sm leading-6">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="text-muted-foreground">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  variant={isHighlighted ? "secondary" : "outline"}
                  className={cn(
                    "mt-auto w-full rounded-full font-semibold",
                    !isHighlighted &&
                      "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  <a href="https://app.socialkirin.com">Start free trial</a>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-8 space-y-3 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>{PROMO.code}</strong> is entered at checkout in app.socialkirin.com and applies to
            one plan on your first subscription term, while launch spots last. It can't be combined
            with another discount.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Free Trial:</strong> 3 days, 50 interactions/mo, 1 channel — no credit card
            required
          </p>
          <p className="text-sm text-muted-foreground">
            Need more volume or custom features?{" "}
            <a href="mailto:hello@b2bautomator.com" className="text-primary hover:underline">
              Contact us for enterprise pricing
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}