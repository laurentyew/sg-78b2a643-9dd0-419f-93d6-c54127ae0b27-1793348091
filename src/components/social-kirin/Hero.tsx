import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Instagram, Facebook } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            <Sparkles className="h-4 w-4" />
            AI comment & DM moderation, live in minutes
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground text-balance">
            Your AI guardian for{" "}
            <span className="text-primary">every comment</span> and{" "}
            <span className="text-accent">every DM</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Social Kirin auto-hides spam and toxic comments, replies in your brand
            voice, and automates DMs across Instagram, Facebook, and TikTok — so your
            community stays clean without you lifting a finger.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-glow gap-2 h-13 px-7 text-base"
            >
              <a href="#waitlist">
                Claim 3 Months Free
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-13 px-7 text-base border-foreground/20 hover:bg-foreground/5"
            >
              Watch 90-Second Demo
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Instagram className="h-4 w-4" /> Instagram
            </span>
            <span className="flex items-center gap-1.5">
              <Facebook className="h-4 w-4" /> Facebook
            </span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
              TikTok
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md rounded-[2rem] bg-card border border-border shadow-soft p-3 rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="/generated/social-kirin-logo.jpg"
              alt="Social Kirin mascot, a cute jade dragon guardian for your social comments"
              className="w-full h-auto rounded-[1.5rem]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl shadow-soft px-4 py-3 hidden sm:block">
            <p className="text-xs text-muted-foreground">Spam auto-hidden</p>
            <p className="text-2xl font-serif font-bold text-primary">1,204</p>
          </div>
          <div className="absolute -top-6 -right-4 bg-card border border-border rounded-2xl shadow-soft px-4 py-3 hidden sm:block">
            <p className="text-xs text-muted-foreground">Reply accuracy</p>
            <p className="text-2xl font-serif font-bold text-accent">97%</p>
          </div>
        </div>
      </div>
    </section>
  );
}