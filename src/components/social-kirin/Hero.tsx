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
    <section className="relative overflow-hidden bg-gradient-hero pb-16 pt-10 sm:pt-12 md:pb-24 md:pt-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="container relative grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-5 text-center lg:text-left sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent sm:px-4 sm:text-sm">
            <Sparkles className="h-4 w-4" />
            For Instagram, Facebook, and TikTok teams
          </div>

          <h1 className="mx-auto max-w-[14ch] text-balance font-serif text-3xl font-bold leading-[1.08] text-foreground sm:text-4xl md:text-5xl lg:mx-0 lg:text-6xl">
            AI that hides spam, replies to comments, and sends DMs for you
          </h1>

          <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
            Social Kirin keeps your social inbox clean, answers common questions in your brand voice,
            and helps your team stop babysitting comments all day.
          </p>

          <div className="grid gap-2.5 text-left">
            {quickWins.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-card/75 px-4 py-3.5 text-sm leading-6 text-foreground shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-12 w-full gap-2 rounded-full bg-primary px-6 text-sm text-primary-foreground shadow-glow hover:bg-primary/90 sm:h-13 sm:w-auto sm:px-7 sm:text-base"
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
              className="h-12 w-full rounded-full border-foreground/20 px-6 text-sm hover:bg-foreground/5 sm:h-13 sm:w-auto sm:px-7 sm:text-base"
            >
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-2 text-xs text-muted-foreground sm:text-sm lg:justify-start">
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
          <div className="relative mx-auto max-w-[280px] rounded-[1.75rem] border border-border bg-card p-2 shadow-soft transition-transform duration-500 hover:rotate-0 sm:max-w-md sm:rotate-1 sm:rounded-[2rem] sm:p-3">
            <video
              src="/hf_20260929_040059_ee0b6e6d-0100-4f38-87cb-a03c4b21a26c.mp4"
              poster="/generated/social-kirin-logo.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Social Kirin product demo showing AI moderation and DM automation"
              className="h-auto w-full rounded-[1.35rem] object-cover sm:rounded-[1.5rem]"
            >
              Your browser does not support the video tag.
            </video>
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