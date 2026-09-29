import React from "react";
import { Check, Minus, X } from "lucide-react";

type RowValue = boolean | "partial";

interface ComparisonRow {
  feature: string;
  kirin: RowValue;
  manual: RowValue;
  generic: RowValue;
}

const rows: ComparisonRow[] = [
  { feature: "Auto-hide spam comments", kirin: true, manual: false, generic: true },
  { feature: "Replies in your exact brand voice", kirin: true, manual: true, generic: false },
  { feature: "DM automation from comment keywords", kirin: true, manual: false, generic: "partial" },
  { feature: "Sentiment alerts for risky threads", kirin: true, manual: false, generic: false },
  { feature: "Coverage outside working hours", kirin: true, manual: false, generic: true },
  { feature: "Easy setup for non-technical teams", kirin: true, manual: true, generic: false },
  { feature: "Human escalation when needed", kirin: true, manual: true, generic: false },
];

const columns: { key: keyof Pick<ComparisonRow, "kirin" | "manual" | "generic">; label: string }[] = [
  { key: "kirin", label: "Social Kirin" },
  { key: "manual", label: "Manual" },
  { key: "generic", label: "Generic bots" },
];

function Cell({ value }: { value: RowValue }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-muted-foreground/40" />;
  return <Minus className="mx-auto h-5 w-5 text-accent" />;
}

function StatusPill({ value }: { value: RowValue }) {
  if (value === true) {
    return <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">Yes</span>;
  }

  if (value === false) {
    return (
      <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
        No
      </span>
    );
  }

  return <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">Partial</span>;
}

export function Comparison() {
  return (
    <section id="comparison" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center md:mb-14 md:space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            Why teams switch
          </span>
          <h2 className="text-balance font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            Better than doing it by hand. Smarter than using a generic bot.
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            If you are manually checking comments or forcing a generic chatbot to do community work,
            you usually end up with one of two problems: slow replies or awkward replies.
          </p>
        </div>

        <div className="space-y-3 md:hidden">
          {rows.map((row) => (
            <article key={row.feature} className="rounded-[1.5rem] border border-border bg-card p-4 shadow-soft">
              <h3 className="font-semibold leading-6 text-foreground">{row.feature}</h3>
              <div className="mt-4 space-y-2">
                {columns.map((column) => (
                  <div
                    key={column.key}
                    className="flex items-center justify-between rounded-xl bg-muted/40 px-3 py-2.5"
                  >
                    <span className="text-sm text-muted-foreground">{column.label}</span>
                    <StatusPill value={row[column.key]} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="hidden overflow-x-auto rounded-2xl border border-border shadow-soft md:block">
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

        <p className="mt-5 text-center text-sm leading-6 text-muted-foreground">
          Best fit for brands, creators, and agencies that get regular comment traffic and want faster response coverage without adding more headcount.
        </p>
      </div>
    </section>
  );
}