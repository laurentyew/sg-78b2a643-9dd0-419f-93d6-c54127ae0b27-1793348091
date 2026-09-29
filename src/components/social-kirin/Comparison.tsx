import React from "react";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { feature: "Auto-hide spam comments", kirin: true, manual: false, generic: true, feedguardians: true },
  { feature: "Replies in your exact brand voice", kirin: true, manual: true, generic: false, feedguardians: true },
  { feature: "DM automation & keyword triggers", kirin: true, manual: false, generic: "partial", feedguardians: true },
  { feature: "Sentiment analysis & PR alerts", kirin: true, manual: false, generic: false, feedguardians: false },
  { feature: "Cute, memorable brand identity", kirin: true, manual: false, generic: false, feedguardians: false },
  { feature: "Setup time", kirin: "< 1 hour", manual: "N/A", generic: "1-2 weeks", feedguardians: "~48 hours" },
  { feature: "Human escalation for sensitive issues", kirin: true, manual: true, generic: false, feedguardians: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-5 w-5 text-primary mx-auto" />;
  if (value === false) return <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />;
  if (value === "partial") return <Minus className="h-5 w-5 text-accent mx-auto" />;
  return <span className="text-sm text-foreground/80">{value}</span>;
}

export function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why switch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Social Kirin vs. manual moderation, generic chatbots & FeedGuardians
          </h2>
          <p className="text-muted-foreground text-lg">
            See how an AI comment and DM moderation platform built for brand voice
            stacks up against the alternatives.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border shadow-soft">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-muted/60">
                <th className="text-left font-serif font-bold text-foreground p-4">Feature</th>
                <th className="p-4 font-serif font-bold text-primary bg-primary/5">Social Kirin</th>
                <th className="p-4 font-medium text-muted-foreground">Manual Moderation</th>
                <th className="p-4 font-medium text-muted-foreground">Generic Chatbots</th>
                <th className="p-4 font-medium text-muted-foreground">FeedGuardians</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-card/50"}>
                  <td className="p-4 text-foreground/90 font-medium">{row.feature}</td>
                  <td className="p-4 text-center bg-primary/5"><Cell value={row.kirin} /></td>
                  <td className="p-4 text-center"><Cell value={row.manual} /></td>
                  <td className="p-4 text-center"><Cell value={row.generic} /></td>
                  <td className="p-4 text-center"><Cell value={row.feedguardians} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}