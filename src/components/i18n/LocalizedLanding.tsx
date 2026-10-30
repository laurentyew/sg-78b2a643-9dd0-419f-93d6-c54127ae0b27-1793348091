import React from "react";
import Link from "next/link";
import { ShieldCheck, Check, ArrowRight, Globe, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { fontClassFor, pathFor } from "@/lib/i18n";
import type { HomeContent } from "@/lib/locales/types";

interface LocalizedLandingProps {
  content: HomeContent;
}

export function LocalizedLanding({ content }: LocalizedLandingProps) {
  const guidePath = pathFor("commentModeration", content.lang);

  return (
    <div className={`min-h-screen bg-background ${fontClassFor(content.lang)}`}>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-primary shadow-soft">
              <img
                src="/generated/social-kirin-logo.jpg"
                alt="Social Kirin"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-serif text-xl font-bold text-foreground">Social Kirin</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="https://app.socialkirin.com"
              className="hidden sm:inline-flex h-10 items-center gap-1.5 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
            >
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              {content.navCta}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="container grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/15">
                <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {content.hero.eyebrow}
              </span>
              <h1 className="text-balance font-serif text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
                {content.hero.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                {content.hero.subtitle}
              </p>
              <ul className="space-y-2.5">
                {content.hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://app.socialkirin.com"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  {content.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="#pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-primary/25 bg-background px-7 text-sm font-semibold text-primary transition-colors hover:bg-muted"
                >
                  {content.hero.secondaryCta}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <img
                  src="/Social_Kirin_OG.jpg"
                  alt={content.brandTagline}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="container grid gap-6 py-10 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-serif text-3xl font-extrabold text-primary tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold text-foreground sm:text-4xl">
              {content.features.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {content.features.intro}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {content.features.items.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-glow"
              >
                <h3 className="font-serif text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl bg-muted p-5">
            <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Globe className="h-4 w-4 text-primary" aria-hidden="true" />
              {content.platforms.heading}
            </span>
            {content.platforms.items.map((platform) => (
              <span
                key={platform}
                className="rounded-full bg-background px-3.5 py-1.5 text-xs font-medium text-foreground/80 ring-1 ring-border"
              >
                {platform}
              </span>
            ))}
          </div>
          {guidePath ? (
            <Link
              href={guidePath}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/15"
            >
              {content.pricing.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </section>

        <section id="pricing" className="border-y border-border bg-muted/60">
          <div className="container py-16 lg:py-24">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl font-extrabold text-foreground sm:text-4xl">
                {content.pricing.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {content.pricing.intro}
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {content.pricing.tiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`flex flex-col rounded-2xl border bg-card p-6 shadow-soft ${
                    tier.featured ? "border-primary ring-2 ring-primary/25" : "border-border"
                  }`}
                >
                  <h3 className="font-serif text-lg font-bold text-foreground">{tier.name}</h3>
                  <p className="mt-3 font-serif text-3xl font-extrabold text-primary tabular-nums">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{tier.note}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://app.socialkirin.com"
                    className={`mt-6 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      tier.featured
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-primary/25 text-primary hover:bg-muted"
                    }`}
                  >
                    {content.pricing.cta}
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{content.pricing.currencyNote}</p>
          </div>
        </section>

        <section id="faq" className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold text-foreground sm:text-4xl">
              {content.faq.heading}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">{content.faq.intro}</p>
          </div>
          <div className="mt-8 space-y-3">
            {content.faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <summary className="cursor-pointer list-none font-serif text-base font-bold text-foreground marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="mt-0.5 shrink-0 text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-primary">
          <div className="container py-16 text-center lg:py-20">
            <h2 className="font-serif text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              {content.finalCta.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
              {content.finalCta.body}
            </p>
            <a
              href="https://app.socialkirin.com"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              {content.finalCta.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-foreground py-10 text-background/80">
        <div className="container flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="font-serif text-lg font-bold text-background">Social Kirin</span>
            </div>
            <LanguageSwitcher variant="footer" />
          </div>
          <div className="flex flex-col gap-3 border-t border-background/15 pt-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Social Kirin. {content.footerNote}</p>
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/privacy" className="hover:text-accent">Privacy</Link>
              <Link href="/terms" className="hover:text-accent">Terms</Link>
              <Link href="/data-deletion" className="hover:text-accent">Data Deletion</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}