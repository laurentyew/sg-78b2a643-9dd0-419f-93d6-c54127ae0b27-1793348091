import React, { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Gift,
  Loader2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ShareWaitlist } from "@/components/social-kirin/ShareWaitlist";
import {
  WAITLIST_CAP,
  joinWaitlist,
  type WaitlistResult,
} from "@/services/waitlistService";
import { hasSeenWaitlistPopup, markWaitlistSeen } from "@/lib/waitlist-popup";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const POPUP_DELAY_MS = 30000;

export function WaitlistPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<WaitlistResult | null>(null);

  useEffect(() => {
    if (hasSeenWaitlistPopup()) return;

    const timer = window.setTimeout(() => {
      if (hasSeenWaitlistPopup()) return;
      setOpen(true);
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const trimmedName = name.trim();
  const normalizedHandle = handle.trim().replace(/^@+/, "");
  const nameValid = trimmedName.length >= 2;
  const emailValid = EMAIL_PATTERN.test(email.trim());
  const handleValid = normalizedHandle.length >= 2;
  const formValid = nameValid && emailValid && handleValid;

  function handleOpenChange(next: boolean) {
    if (!next) markWaitlistSeen();
    setOpen(next);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formValid || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await joinWaitlist(trimmedName, email, normalizedHandle);
      setResult(response);
      markWaitlistSeen();
    } catch {
      setError("We couldn't add you right now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-md gap-0 overflow-y-auto rounded-[1.75rem] border-border bg-card p-0 shadow-soft sm:rounded-[2rem]">
        <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-6 py-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
            <Gift className="h-5 w-5 text-primary" />
          </span>
          <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Founding member offer
          </span>
        </div>

        <div className="px-6 pb-6 pt-5">
          {result ? (
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-7 w-7 text-primary" />
              </div>

              <DialogHeader className="space-y-2">
                <DialogTitle className="font-serif text-xl font-bold text-foreground">
                  {result.status === "duplicate"
                    ? "You're already on the list"
                    : result.position <= WAITLIST_CAP
                      ? "You're in — 3 months free locked in"
                      : "You're on the waitlist"}
                </DialogTitle>
                <DialogDescription className="text-sm leading-6 text-muted-foreground">
                  {result.status === "duplicate"
                    ? "We already have " +
                      email.trim() +
                      " saved. You're number " +
                      result.position +
                      " on the founding list."
                    : "You're number " +
                      result.position +
                      " on the founding list. We'll email " +
                      email.trim() +
                      " the moment your 3 free months are ready to activate."}
                </DialogDescription>
              </DialogHeader>

              <div className="border-t border-border pt-5 text-left">
                <ShareWaitlist position={result.position} />
              </div>

              <Button
                type="button"
                variant="ghost"
                onClick={() => handleOpenChange(false)}
                className="w-full rounded-full text-sm text-muted-foreground hover:bg-muted"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="font-serif text-xl font-bold leading-snug text-foreground">
                  Get 3 months free at launch
                </DialogTitle>
                <DialogDescription className="text-sm leading-6 text-muted-foreground">
                  The first {WAITLIST_CAP} brands get 3 months free. No card required, and we only
                  email you about early access.
                </DialogDescription>
              </DialogHeader>

              <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                <Users className="h-4 w-4 shrink-0 text-primary" />
                Founding spots are claimed in order of signup.
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-name" className="text-sm">
                  Full name
                </Label>
                <Input
                  id="popup-name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Amara Okonkwo"
                  autoComplete="name"
                  aria-invalid={name.length > 0 && !nameValid}
                  className="h-11"
                />
                {name.length > 0 && !nameValid && (
                  <p className="text-xs text-destructive">Please enter your full name.</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-email" className="text-sm">
                  Work email
                </Label>
                <Input
                  id="popup-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@yourbrand.com"
                  autoComplete="email"
                  aria-invalid={email.length > 0 && !emailValid}
                  className="h-11"
                />
                {email.length > 0 && !emailValid && (
                  <p className="text-xs text-destructive">Please enter a valid email address.</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-handle" className="text-sm">
                  Social handle
                </Label>
                <Input
                  id="popup-handle"
                  name="social_handle"
                  value={handle}
                  onChange={(event) => setHandle(event.target.value)}
                  placeholder="@yourbrand"
                  autoComplete="off"
                  aria-invalid={handle.length > 0 && !handleValid}
                  className="h-11"
                />
                {handle.length > 0 && !handleValid && (
                  <p className="text-xs text-destructive">
                    Enter the handle you want moderated, like @yourbrand.
                  </p>
                )}
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
                className="h-12 w-full gap-2 rounded-full bg-primary text-sm text-primary-foreground shadow-glow hover:bg-primary/90 disabled:opacity-50"
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

              <button
                type="button"
                onClick={() => handleOpenChange(false)}
                className="w-full rounded-full py-1 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Not now
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}