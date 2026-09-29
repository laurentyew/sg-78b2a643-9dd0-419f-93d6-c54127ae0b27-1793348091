import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";
import { track } from "@/lib/quiz/track";

interface ReferralBoxProps {
  referralUrl: string;
}

export function ReferralBox({ referralUrl }: ReferralBoxProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    track("share_click", { channel: "referral_copy" });
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const share = async () => {
    track("share_click", { channel: "referral_native" });
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Spot the Spam",
          text: "Think you can moderate better than me?",
          url: referralUrl,
        });
        return;
      } catch {
        return;
      }
    }
    copy();
  };

  return (
    <div className="rounded-3xl border border-accent/30 bg-accent/5 p-6 shadow-soft sm:p-8">
      <h2 className="font-serif text-xl font-bold text-foreground">
        Move up the waitlist
      </h2>
      <p className="mt-2 text-sm text-foreground/80">
        Each friend who confirms moves you up the waitlist.
      </p>

      <p className="mt-4 break-all rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm font-medium text-foreground">
        {referralUrl}
      </p>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={copy}
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          {copied ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          {copied ? "Copied" : "Copy link"}
        </button>
        <button
          type="button"
          onClick={share}
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          <Share2 className="h-4 w-4" aria-hidden="true" />
          Share invite
        </button>
      </div>
    </div>
  );
}