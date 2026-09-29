import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Facebook, Instagram, Sparkles } from "lucide-react";

const quickWins = [
  "Hide spam and scam comments automatically",
  "Reply in your brand voice around the clock",
  "Turn “link?” comments into instant DMs",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" />
            For Instagram, Facebook, and TikTok teams
          </div>

          <h1 className="text-balance font-serif text-4xl font-bold leading-[1.06] text-foreground sm:text-5xl lg:text-6xl">
            AI that hides spam, replies to comments, and sends DMs for you
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0 lg:max-w-xl">
            Social Kirin is an AI comment moderation and DM automation platform that keeps your social inbox clean,
            answers common questions in your brand voice, and helps your team stop babysitting comments all day.
          </p>

          <div className="grid gap-2 text-left sm:grid-cols-1">
            {quickWins.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-card/70 px-4 py-3 text-sm text-foreground shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-13 gap-2 rounded-full bg-primary px-7 text-base text-primary-foreground shadow-glow hover:bg-primary/90"
            >
              <Link href="#waitlist">
                Claim 3 Months Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-full border-foreground/20 px-7 text-base hover:bg-foreground/5"
            >
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground lg:justify-start">
            <span className="flex items-center gap-1.5">
              <Instagram className="h-4 w-4" />
              Instagram
            </span>
            <span className="flex items-center gap-1.5">
              <Facebook className="h-4 w-4" />
              Facebook
            </span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
              </svg>
              TikTok
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md rotate-1 rounded-[2rem] border border-border bg-card p-3 shadow-soft transition-transform duration-500 hover:rotate-0">
            <img
              src="/generated/social-kirin-logo.jpg"
              alt="Social Kirin mascot, a cute jade dragon guardian for your social comments"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:block">
            <p className="text-xs text-muted-foreground">Spam auto-hidden</p>
            <p className="font-serif text-2xl font-bold text-primary">1,204</p>
          </div>
          <div className="absolute -right-4 -top-6 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:block">
            <p className="text-xs text-muted-foreground">Reply accuracy</p>
            <p className="font-serif text-2xl font-bold text-accent">97%</p>
          </div>
        </div>
      </div>
    </section>
  );
}