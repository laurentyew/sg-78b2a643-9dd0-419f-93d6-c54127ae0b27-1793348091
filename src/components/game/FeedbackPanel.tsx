import { CheckCircle2, Lightbulb, XCircle } from "lucide-react";
import { ACTION_LABELS, type ModAction } from "@/lib/quiz/types";

interface FeedbackPanelProps {
  correct: boolean;
  bestAction: ModAction;
  reason: string;
  isTrap: boolean;
  isLast: boolean;
  onNext: () => void;
}

export function FeedbackPanel({
  correct,
  bestAction,
  reason,
  isTrap,
  isLast,
  onNext,
}: FeedbackPanelProps) {
  return (
    <div
      role="status"
      className={
        "rounded-2xl border p-4 transition-colors " +
        (correct
          ? "border-primary/30 bg-primary/5"
          : "border-destructive/40 bg-destructive/5")
      }
    >
      <div className="flex items-start gap-3">
        {correct ? (
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        ) : (
          <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-foreground">
            {correct ? "Correct" : "Wrong call"}
          </p>
          <p className="mt-1 text-sm text-foreground/80">
            Best action:{" "}
            <span className="font-semibold text-foreground">
              {ACTION_LABELS[bestAction]}
            </span>
          </p>
          <p className="mt-1 text-sm text-foreground/80">{reason}</p>

          {isTrap ? (
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
              <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
              Trap round: a keyword filter usually gets this one wrong.
            </p>
          ) : null}

          <button
            type="button"
            onClick={onNext}
            className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {isLast ? "See my score" : "Next round"}
          </button>
        </div>
      </div>
    </div>
  );
}