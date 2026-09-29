import React, { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, Gift, Loader2, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShareWaitlist } from "@/components/social-kirin/ShareWaitlist";
import {
  WAITLIST_CAP,
  getWaitlistCount,
  joinWaitlist,
  type WaitlistResult,
} from "@/services/waitlistService";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [count, setCount] = useState<number | null>(null);
  const [countAvailable, setCountAvailable] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<WaitlistResult | null>(null);

  useEffect(() => {
    let active = true;

    getWaitlistCount()
      .then((value) => {
        if (!active) return;
        setCount(value);
        setCountAvailable(true);
      })
      .catch(() => {
        if (!active) return;
        setCount(0);
        setCountAvailable(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const trimmedName = name.trim();
  const normalizedHandle = handle.trim().replace(/^@+/, "");
  const nameValid = trimmedName.length >= 2;
  const emailValid = EMAIL_PATTERN.test(email.trim());
  const handleValid = normalizedHandle.length >= 2;
  const formValid = nameValid && emailValid && handleValid;

  const joined = count ?? 0;
  const remaining = Math.max(0, WAITLIST_CAP - joined);
  const offerOpen = remaining > 0;
  const progress = Math.min(100, Math.round((joined / WAITLIST_CAP) * 100));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formValid || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await joinWaitlist(trimmedName, email, normalizedHandle);
      setResult(response);
      setCount(WAITLIST_CAP - response.remaining);
      setCountAvailable(true);
    } catch {
      setError("We couldn't add you right now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Gift className="h-4 w-4" />
            Founding member offer
          </div>

          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-4xl">
            Join the waitlist, get{" "}
            <span className="text-primary">3 months free</span>
          </h2>

          <p className="max-w-lg text-lg text-muted-foreground">
            Social Kirin opens soon. The first {WAITLIST_CAP} brands on the waitlist
            get three months of complete comment and DM moderation free — no card, no
            commitment.
          </p>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                {countAvailable ? "Founding spots" : "Founding offer"}
              </span>
              <span className="font-serif text-sm font-bold text-foreground">
                {countAvailable ? `${remaining} of ${WAITLIST_CAP} left` : `First ${WAITLIST_CAP} signups`}
              </span>
            </div>

            {countAvailable && (
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            <p className="mt-3 text-sm text-muted-foreground">
              {offerOpen
                ? "Claimed spots are locked in for 3 months free at launch."
                : "All founding spots are claimed — join anyway and we'll offer early-access pricing."}
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-8">
          {result ? (
            <div className="space-y-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-foreground">
                {result.status === "duplicate"
                  ? "You're already on the list"
                  : result.position <= WAITLIST_CAP
                    ? "You're in — 3 months free locked in"
                    : "You're on the waitlist"}
              </h3>

              <p className="text-muted-foreground">
                {result.status === "duplicate"
                  ? `We already have ${email.trim()} saved. You're number ${result.position} on the founding list.`
                  : result.position <= WAITLIST_CAP
                    ? `You're number ${result.position} on the founding list. We'll email ${email.trim()} the moment your 3 free months are ready to activate.`
                    : `Founding spots are full, but you're number ${result.position} in line — we'll email ${email.trim()} about early-access pricing.`}
              </p>

              {result.status !== "duplicate" && remaining > 0 && (
                <p className="text-sm font-medium text-accent">
                  {remaining} founding {remaining === 1 ? "spot" : "spots"} still available — share the link with your team.
                </p>
              )}

              <div className="border-t border-border pt-5">
                <ShareWaitlist position={result.position} />
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Get early access
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Three fields. Takes about twenty seconds.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="waitlist-name">Full name</Label>
                <Input
                  id="waitlist-name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Amara Okonkwo"
                  autoComplete="name"
                  aria-invalid={name.length > 0 && !nameValid}
                />
                {name.length > 0 && !nameValid && (
                  <p className="text-xs text-destructive">Please enter your full name.</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="waitlist-email">Work email</Label>
                <Input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@yourbrand.com"
                  autoComplete="email"
                  aria-invalid={email.length > 0 && !emailValid}
                />
                {email.length > 0 && !emailValid && (
                  <p className="text-xs text-destructive">Please enter a valid email address.</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="waitlist-handle">Social handle</Label>
                <Input
                  id="waitlist-handle"
                  name="social_handle"
                  value={handle}
                  onChange={(event) => setHandle(event.target.value)}
                  placeholder="@yourbrand"
                  autoComplete="off"
                  aria-invalid={handle.length > 0 && !handleValid}
                />
                {handle.length > 0 && !handleValid && (
                  <p className="text-xs text-destructive">
                    Enter the handle you want moderated, like @yourbrand.
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  The Instagram, Facebook, or TikTok account you'd like Social Kirin to watch.
                </p>
              </div>

              {error && (
                <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={!formValid || submitting}
                className="h-12 w-full gap-2 rounded-full bg-primary text-base text-primary-foreground shadow-glow hover:bg-primary/90 disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-4 w-4" />
                    Claim my free 3 months
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                No spam, no card required. We'll only email you about your early access.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}