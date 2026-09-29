import { TYPE_LABELS, ACTION_LABELS, type CommentType, type ModAction } from "@/lib/quiz/types";

export interface BreakdownResponse {
  byType: { type: CommentType; correct: number; total: number }[];
  missed: {
    body: string;
    yourAction: ModAction | null;
    bestAction: ModAction;
    reason: string;
  }[];
}

interface BreakdownTableProps {
  breakdown: BreakdownResponse;
}

export function BreakdownTable({ breakdown }: BreakdownTableProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <h2 className="font-serif text-2xl font-bold text-foreground">
        Your category breakdown
      </h2>
      <p className="mt-2 text-sm text-foreground/80">
        Where you were sharp, and where a keyword filter would have beaten you.
      </p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
              <th scope="col" className="py-2 pr-3 font-semibold">Category</th>
              <th scope="col" className="py-2 pr-3 font-semibold text-right">Correct</th>
              <th scope="col" className="py-2 font-semibold text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {breakdown.byType.map((row) => (
              <tr key={row.type} className="border-b border-border/60">
                <th scope="row" className="py-2.5 pr-3 text-left font-medium text-foreground">
                  {TYPE_LABELS[row.type] ?? row.type}
                </th>
                <td className="py-2.5 pr-3 text-right tabular-nums text-foreground">
                  {row.correct}
                </td>
                <td className="py-2.5 text-right tabular-nums text-muted-foreground">
                  {row.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-8 font-serif text-xl font-bold text-foreground">
        Rounds you missed
      </h3>

      {breakdown.missed.length === 0 ? (
        <p className="mt-2 text-sm text-foreground/80">
          Nothing missed. You read every trap correctly.
        </p>
      ) : (
        <ul className="mt-3 space-y-3">
          {breakdown.missed.map((row, index) => (
            <li
              key={index}
              className="rounded-2xl border border-border bg-background p-4"
            >
              <p className="whitespace-pre-wrap break-words text-sm text-foreground/90">
                {row.body}
              </p>
              <dl className="mt-3 grid gap-1 text-xs sm:grid-cols-2">
                <div className="flex gap-1.5">
                  <dt className="text-muted-foreground">You picked:</dt>
                  <dd className="font-semibold text-destructive">
                    {row.yourAction ? ACTION_LABELS[row.yourAction] : "Timed out"}
                  </dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="text-muted-foreground">Best action:</dt>
                  <dd className="font-semibold text-primary">
                    {ACTION_LABELS[row.bestAction]}
                  </dd>
                </div>
              </dl>
              <p className="mt-2 text-xs text-foreground/75">{row.reason}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}