import { Lock } from "lucide-react";
import { useState } from "react";
import { track } from "@/lib/quiz/track";

const ROLES = [
  { value: "brand", label: "Brand" },
  { value: "agency", label: "Agency" },
  { value: "creator", label: "Creator" },
  { value: "other", label: "Other" },
];

interface EmailGateProps {
  playId: string;
  score: number;
  refCode: string | null;
  onUnlocked: (referralUrl: string) => void;
}

export function EmailGate({ playId, score, refCode, onUnlocked }: EmailGateProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("brand");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!email.trim() || !consent) {
      setError("Add your email and tick the consent box to continue.");
      return;
    }

    setPending(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playId,
          email: email.trim(),
          firstName: firstName.trim() || undefined,
          role,
          consent: true,
          ref: refCode ?? undefined,
          website,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data?.ok) {
        setError(
          data?.error === "disposable_email"
            ? "Please use a permanent email address so we can send your breakdown."
            : "Something went wrong sending that. Please try again.",
        );
        setPending(false);
        return;
      }

      track("lead_submit", { role, hasRef: Boolean(refCode) });
      onUnlocked(data.referralUrl as string);
    } catch {
      setError("Something went wrong sending that. Please try again.");
    }
    setPending(false);
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        <Lock className="h-4 w-4" aria-hidden="true" />
        Locked
      </div>
      <h2 className="mt-3 font-serif text-2xl font-bold text-foreground">
        Unlock your category breakdown
      </h2>
      <p className="mt-2 text-sm text-foreground/80">
        See which types of comments tripped you up, plus the rounds you missed
        and why. You scored {score}/10 — the breakdown is free.
      </p>

      <div className="mt-5 space-y-2" aria-hidden="true">
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-secondary/50 p-3"
          >
            <div className="h-3 w-24 rounded-full bg-foreground/10 blur-[2px]" />
            <div className="h-3 flex-1 rounded-full bg-foreground/10 blur-[2px]" />
            <div className="h-3 w-10 rounded-full bg-foreground/10 blur-[2px]" />
          </div>
        ))}
      </div>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="lead-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="lead-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div>
          <label htmlFor="lead-name" className="text-sm font-medium text-foreground">
            First name <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="lead-name"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            autoComplete="given-name"
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div>
          <label htmlFor="lead-role" className="text-sm font-medium text-foreground">
            What best describes you?
          </label>
          <select
            id="lead-role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {ROLES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="lead-website">Website</label>
          <input
            id="lead-website"
            type="text"
            tabIndex={-1}
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>

        <label className="flex items-start gap-2.5 text-sm text-foreground/80">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-input"
          />
          <span>
            I agree to receive my breakdown and occasional Social Kirin updates.
            See the privacy policy for how we handle your data.
          </span>
        </label>

        {error ? (
          <p role="alert" className="text-sm font-medium text-destructive">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {pending ? "Unlocking..." : "Unlock my breakdown"}
        </button>
      </form>
    </div>
  );
}