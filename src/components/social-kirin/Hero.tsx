import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Youtube } from "lucide-react";

const quickWins = [
  "Hide spam and scam comments automatically",
  "Reply in your brand voice around the clock",
  "Turn “link?” comments into instant DMs",
];

const platforms = [
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <defs>
          <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FEDA75" />
            <stop offset="25%" stopColor="#FA7E1E" />
            <stop offset="50%" stopColor="#D62976" />
            <stop offset="75%" stopColor="#962FBF" />
            <stop offset="100%" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <path
          fill="url(#instagram-gradient)"
          d="M12 0C8.74 0 8.333.015 7.053.072 2.695.272.273 2.69.073 7.052.015 8.333 0 8.741 0 12c0 3.259.015 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.015 15.259 0 12 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="#1877F2"
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: <Youtube className="h-5 w-5 text-[#FF0000]" aria-hidden="true" />,
  },
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
            For Instagram, Facebook, and YouTube teams
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
              <Link href="https://app.socialkirin.com">
                Get Started Free
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

          <div className="pt-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Moderation built for
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {platforms.map((platform) => (
                <span
                  key={platform.name}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-semibold text-foreground shadow-soft"
                >
                  {platform.icon}
                  {platform.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto w-full max-w-[280px] rounded-[1.75rem] border border-border bg-card p-2 shadow-soft transition-transform duration-500 hover:rotate-0 sm:max-w-md sm:rotate-1 sm:rounded-[2rem] sm:p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] sm:aspect-[3/4] sm:rounded-[1.5rem] lg:aspect-[4/5]">
              <video
                src="/hf_20260929_040059_ee0b6e6d-0100-4f38-87cb-a03c4b21a26c.mp4"
                poster="/generated/social-kirin-logo.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Social Kirin product demo showing AI moderation and DM automation"
                className="absolute inset-0 h-full w-full object-cover object-center"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:block">
            <p className="text-xs text-muted-foreground">Comment triage</p>
            <p className="font-serif text-2xl font-bold text-primary">Real time</p>
          </div>
          <div className="absolute -right-4 -top-6 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:block">
            <p className="text-xs text-muted-foreground">Setup time</p>
            <p className="font-serif text-2xl font-bold text-accent">Under 10 min</p>
          </div>
        </div>
      </div>
    </section>
  );
}