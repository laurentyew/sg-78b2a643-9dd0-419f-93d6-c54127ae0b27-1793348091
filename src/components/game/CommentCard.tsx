import type { PublicRound } from "@/lib/quiz/types";

const PLATFORM_LABELS: Record<string, string> = {
  instagram: "Instagram",
  youtube: "YouTube",
  facebook: "Facebook",
};

function initialsFor(handle: string): string {
  const clean = handle.replace(/^@/, "").replace(/[^a-zA-Z0-9]/g, "");
  return (clean.slice(0, 2) || "??").toUpperCase();
}

interface CommentCardProps {
  round: PublicRound;
  index: number;
  total: number;
}

export function CommentCard({ round, index, total }: CommentCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Round {index + 1} of {total}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          {PLATFORM_LABELS[round.platform] ?? round.platform}
          <span className="text-muted-foreground">/</span>
          {round.kind === "dm" ? "Direct message" : "Comment"}
        </span>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <div
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
        >
          {initialsFor(round.authorHandle)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">
            {round.authorHandle}
          </p>
          <p className="mt-1 whitespace-pre-wrap break-words text-base leading-relaxed text-foreground/90">
            {round.body}
          </p>
        </div>
      </div>
    </article>
  );
}