import React from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { SEO } from "@/components/SEO";
import { MoneyPageLayout } from "@/components/layouts/MoneyPageLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { audiences, type Audience } from "@/lib/audiences";

interface AudiencePageProps {
  audience: Audience;
}

export default function AudiencePage({ audience }: AudiencePageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: audience.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title={`${audience.title} | Social Kirin`}
        description={audience.description}
        url={`https://socialkirin.com/for/${audience.slug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MoneyPageLayout>
        <article className="container max-w-3xl py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/for" className="hover:text-primary">
              Who it is for
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{audience.label}</span>
          </nav>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {audience.eyebrow}
          </p>
          <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {audience.headline}
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            {audience.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-primary px-7 text-primary-foreground shadow-glow hover:bg-primary/90">
              <Link href="https://app.socialkirin.com">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary px-7 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/#pricing">See pricing</Link>
            </Button>
          </div>

          <section className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              What is actually going wrong
            </h2>
            <ul className="mt-4 space-y-3">
              {audience.painPoints.map((point) => (
                <li key={point} className="rounded-2xl border border-border bg-card p-4 text-sm leading-6 text-muted-foreground shadow-soft">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              What changes with Social Kirin
            </h2>
            <ul className="mt-4 space-y-3">
              {audience.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-sm leading-6 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              The parts that do the work
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {audience.capabilities.map((capability) => (
                <div key={capability.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {capability.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Questions from {audience.label.toLowerCase()}
            </h2>
            <Accordion type="single" collapsible className="mt-4">
              {audience.faq.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-6 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <h2 className="font-serif text-xl font-bold text-foreground">
              Early access is still open
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Every plan starts with a 3-day trial and no credit card. The first 50 waitlist
              signups receive 3 months free.
            </p>
            <Button asChild size="lg" className="mt-5 rounded-full bg-primary px-7 text-primary-foreground shadow-glow hover:bg-primary/90">
              <Link href="https://app.socialkirin.com">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </section>

          <nav className="mt-10 border-t border-border pt-6" aria-label="Related pages">
            <p className="text-sm font-semibold text-foreground">Other audiences</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {audiences
                .filter((item) => item.slug !== audience.slug)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/for/${item.slug}`}
                      className="inline-flex rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground hover:border-primary hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </article>
      </MoneyPageLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: audiences.map((audience) => ({ params: { audience: audience.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<AudiencePageProps> = async ({ params }) => {
  const slug = params?.audience;
  const audience = audiences.find((item) => item.slug === slug);

  if (!audience) {
    return { notFound: true };
  }

  return { props: { audience } };
};