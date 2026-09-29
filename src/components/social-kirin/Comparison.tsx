import React from "react";
import { Check, Minus, X } from "lucide-react";

const rows = [
  { feature: "Auto-hide spam comments", kirin: true, manual: false, generic: true },
  { feature: "Replies in your exact brand voice", kirin: true, manual: true, generic: false },
  { feature: "DM automation from comment keywords", kirin: true, manual: false, generic: "partial" },
  { feature: "Sentiment alerts for risky threads", kirin: true, manual: false, generic: false },
  { feature: "Coverage outside working hours", kirin: true, manual: false, generic: true },
  { feature: "Easy setup for non-technical teams", kirin: true, manual: true, generic: false },
  { feature: "Human escalation when needed", kirin: true, manual: true, generic: false },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-muted-foreground/40" />;
  if (value === "partial") return <Minus className="mx-auto h-5 w-5 text-accent" />;
  return <span className="text-sm text-foreground/80">{value}</span>;
}

export function Comparison() {
  return (
    <section id="comparison" className="bg-background py-24">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why teams switch
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Better than doing it by hand. Smarter than using a generic bot.
          </h2>
          <p className="text-lg text-muted-foreground">
            If you are manually checking comments or forcing a generic chatbot to do community work,
            you usually end up with one of two problems: slow replies or awkward replies. Social Kirin is built specifically for this job.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border shadow-soft">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-muted/60">
                <th className="p-4 text-left font-serif font-bold text-foreground">Feature</th>
                <th className="bg-primary/5 p-4 font-serif font-bold text-primary">Social Kirin</th>
                <th className="p-4 font-medium text-muted-foreground">Manual Moderation</th>
                <th className="p-4 font-medium text-muted-foreground">Generic Chatbots</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.feature} className={index % 2 === 0 ? "bg-card" : "bg-card/50"}>
                  <td className="p-4 font-medium text-foreground/90">{row.feature}</td>
                  <td className="bg-primary/5 p-4 text-center">
                    <Cell value={row.kirin} />
                  </td>
                  <td className="p-4 text-center">
                    <Cell value={row.manual} />
                  </td>
                  <td className="p-4 text-center">
                    <Cell value={row.generic} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Best fit for brands, creators, and agencies that get regular comment traffic and want faster response coverage without adding more headcount.
        </p>
      </div>
    </section>
  );
}