import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Handshake, Timer } from "lucide-react";

const benefits = [
  {
    icon: Timer,
    title: "Free while we launch",
    description:
      "Founding brands get full access at no cost during the launch period, with no card required to join the waitlist.",
  },
  {
    icon: Compass,
    title: "Shape the roadmap",
    description:
      "Tell us which moderation rules, DM flows, and platforms matter most and we build them in the order you need.",
  },
  {
    icon: Handshake,
    title: "Priority onboarding",
    description:
      "Direct setup help from the team that builds Social Kirin, including brand-voice training for your account.",
  },
];

export function FoundingBrands() {
  return (
    <section id="founding-brands" className="bg-muted/40 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center md:mb-14 md:space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            Pre-launch
          </span>
          <h2 className="text-balance font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            Social Kirin is new. Be one of our founding brands.
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            We are not going to pretend we have thousands of customers yet. Social Kirin is in
            pre-launch, and the brands joining the waitlist now are the ones who get to decide what
            the product becomes.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent sm:h-12 sm:w-12">
                <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-foreground sm:text-xl">
                {benefit.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 w-full gap-2 rounded-full bg-primary px-6 text-sm text-primary-foreground shadow-glow hover:bg-primary/90 sm:h-13 sm:w-auto sm:px-7 sm:text-base"
          >
            <Link href="#waitlist">
              Join the founding waitlist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground">
            No card required. We will email you before anything goes live.
          </p>
        </div>
      </div>
    </section>
  );
}