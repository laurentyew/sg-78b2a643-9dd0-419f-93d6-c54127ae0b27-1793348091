import React from "react";
import Link from "next/link";
import Head from "next/head";
import { ShieldCheck, Check, ArrowRight, EyeOff, Eye } from "lucide-react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { fontClassFor, localeHomePath } from "@/lib/i18n";
import type { MoneyPageContent } from "@/lib/locales/types";

interface MoneyPageProps {
  content: MoneyPageContent;
}

export function MoneyPage({ content }: MoneyPageProps) {
  const homePath = localeHomePath(content.lang) ?? "/";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className={`min-h-screen bg-background ${fontClassFor(content.lang)}`}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between gap-4">
          <Link href={homePath} className="flex items-center gap-2.5">
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
          <div className="container py-16 lg:py-24">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/15">
                {content.hero.eyebrow}
              </span>
              <h1 className="text-balance font-serif text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
                {content.hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
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
                  href={`${homePath}#pricing`}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-primary/25 bg-background px-7 text-sm font-semibold text-primary transition-colors hover:bg-muted"
                >
                  {content.hero.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-3xl font-extrabold text-foreground">
              {content.intro.heading}
            </h2>
            {content.intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="container py-16 lg:py-20">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl font-extrabold text-foreground">
                {content.capabilities.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {content.capabilities.intro}
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {content.capabilities.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-background p-6 shadow-soft"
                >
                  <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold text-foreground">
              {content.examples.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {content.examples.intro}
            </p>
          </div>
          <ul className="mt-8 grid gap-4 lg:grid-cols-2">
            {content.examples.items.map((example) => (
              <li
                key={example.comment}
                className={`rounded-2xl border p-5 shadow-soft ${
                  example.hidden ? "border-destructive/25 bg-destructive/5" : "border-border bg-card"
                }`}
              >
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {example.comment}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {example.verdict}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      example.hidden
                        ? "bg-destructive/10 text-destructive"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {example.hidden ? (
                      <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {example.hidden
                      ? content.examples.legend.hidden
                      : content.examples.legend.kept}
                  </span>
                  <span className="text-xs text-muted-foreground">{example.action}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-border bg-muted/60">
          <div className="container py-16 lg:py-20">
            <h2 className="font-serif text-3xl font-extrabold text-foreground">
              {content.steps.heading}
            </h2>
            <ol className="mt-10 grid gap-5 lg:grid-cols-3">
              {content.steps.items.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-serif text-sm font-bold text-primary-foreground tabular-nums">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-extrabold text-foreground">
              {content.faq.heading}
            </h2>
          </div>
          <div className="mt-8 max-w-3xl space-y-3">
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

        <section className="container pb-16">
          <div className="rounded-2xl bg-muted p-6">
            <h2 className="font-serif text-lg font-bold text-foreground">
              {content.related.heading}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {content.related.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-full bg-background px-4 py-2 text-sm font-medium text-primary ring-1 ring-border transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
          </div>
          <div className="flex flex-col gap-3 border-t border-background/15 pt-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Social Kirin. D AGE Technology (SSM PC0005997-A).</p>
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