import { Copy, Linkedin, Share2, Twitter } from "lucide-react";
import { useState } from "react";
import { ACTION_LABELS, type ModAction } from "@/lib/quiz/types";
import { track } from "@/lib/quiz/track";

export interface GameResult {
  score: number;
  totalMs: number;
  rank: { key: string; title: string };
  shareUrl: string;
  ogImageUrl: string;
}

interface ResultCardProps {
  result: GameResult;
  bestAction?: ModAction;
}

function withShareUtm(url: string): string {
  const joiner = url.includes("?") ? "&" : "?";
  return url + joiner + "utm_source=share&utm_medium=result";
}

export function ResultCard({ result }: ResultCardProps) {
  const [copied, setCopied] = useState(false);
  const seconds = Math.max(1, Math.round(result.totalMs / 1000));
  const shareUrl = withShareUtm(result.shareUrl);

  const xText =
    "I scored " +
    result.score +
    "/10 as a comment moderator in " +
    seconds +
    "s and earned the title " +
    result.rank.title +
    ". Can you beat me? " +
    shareUrl;

  const linkedInText =
    "I just tried a 60-second comment moderation test: " +
    result.score +
    "/10, " +
    result.rank.title +
    ". Try it: " +
    shareUrl;

  const nativeShare = async () => {
    track("share_click", { channel: "native" });
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Spot the Spam",
          text: "Can you beat " + result.score + "/10?",
          url: shareUrl,
        });
        return;
      } catch {
        return;
      }
    }
    copyLink();
  };

  const copyLink = async () => {
    track("share_click", { channel: "copy" });
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Your result
      </p>
      <div className="mt-3 flex items-end gap-3">
        <span className="font-serif text-6xl font-bold leading-none text-primary tabular-nums">
          {result.score}
        </span>
        <span className="pb-1 text-2xl font-semibold text-muted-foreground">
          /10
        </span>
      </div>
      <h2 className="mt-3 font-serif text-2xl font-bold text-foreground">
        {result.rank.title}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground tabular-nums">
        Total time: {seconds}s
      </p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={nativeShare}
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          Share my score
        </button>
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          <Copy className="h-4 w-4" aria-hidden="true" />
          {copied ? "Link copied" : "Copy link"}
        </button>
        <a
          href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(xText)}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => track("share_click", { channel: "x" })}
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          <Twitter className="h-4 w-4" aria-hidden="true" />
          Post on X
        </a>
        <a
          href={
            "https://www.linkedin.com/sharing/share-offsite/?url=" +
            encodeURIComponent(shareUrl)
          }
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => track("share_click", { channel: "linkedin" })}
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          Share on LinkedIn
        </a>
      </div>

      <p className="mt-4 text-sm text-foreground/75">
        Share link:{" "}
        <span className="break-all font-medium text-foreground">{shareUrl}</span>
      </p>
    </div>
  );
}

export function actionLabel(action: ModAction): string {
  return ACTION_LABELS[action];
}