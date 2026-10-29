import React from "react";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import { MoneyPageLayout } from "@/components/layouts/MoneyPageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { audiences } from "@/lib/audiences";

export default function AudienceHubPage() {
  return (
    <>
      <SEO
        title="Who Social Kirin is for | Comment moderation by team type"
        description="See how eCommerce brands, creators, agencies and support teams use Social Kirin to moderate comments and automate replies at scale."
        url="https://socialkirin.com/for"
      />
      <MoneyPageLayout>
        <div className="container max-w-5xl py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Who it is for</span>
          </nav>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Who it is for
          </p>
          <h1 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Moderation shaped by how your team actually works
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            A creator with a viral Reel, a store running paid ads, and an agency with fifteen
            client accounts do not have the same comment problem. Pick the situation that
            matches yours.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <Link
                key={audience.slug}
                href={`/for/${audience.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-glow"
              >
                <h2 className="font-serif text-xl font-bold text-foreground">
                  {audience.label}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                  {audience.cardCopy}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <h2 className="font-serif text-xl font-bold text-foreground">
              Not sure which plan fits?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Pricing is based on channels and monthly interaction volume, not seats. Every plan
              starts with a 3-day trial and no credit card.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-primary px-7 text-primary-foreground shadow-glow hover:bg-primary/90">
                <Link href="/#pricing">Compare plans</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary px-7 text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="https://app.socialkirin.com">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </MoneyPageLayout>
    </>
  );
}