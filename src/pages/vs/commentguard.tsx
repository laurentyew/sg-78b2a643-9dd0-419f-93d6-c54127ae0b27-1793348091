import React from "react";
import { SEO } from "@/components/SEO";
import { ComparisonLayout } from "@/components/layouts/ComparisonLayout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { PROMO } from "@/lib/promo";

export default function VsCommentGuard() {
  return (
    <>
      <SEO 
        title="Social Kirin vs CommentGuard (2026): Honest Comparison"
        description="Social Kirin vs CommentGuard compared on platforms, AI reply quality, DM automation, pricing and reporting so you can pick the right moderation tool."
      />
      <ComparisonLayout competitor="CommentGuard" lastChecked="2026-10-29">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Social Kirin vs CommentGuard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            CommentGuard is a great tool for basic Facebook and Instagram filtering. But if you need to moderate YouTube, automate DMs, or handle multi-language comments, here's why Social Kirin is the better alternative.
          </p>
        </div>

        <div className="my-12 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="p-4 font-bold text-lg w-1/3">Feature</th>
                <th className="p-4 font-bold text-lg w-1/3 text-primary bg-primary/5 rounded-t-lg">Social Kirin</th>
                <th className="p-4 font-bold text-lg w-1/3 text-muted-foreground">CommentGuard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-4 font-medium">Facebook & Instagram</td>
                <td className="p-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary" /></td>
                <td className="p-4"><CheckCircle2 className="h-5 w-5 text-muted-foreground" /></td>
              </tr>
              <tr>
                <td className="p-4 font-medium">YouTube Support</td>
                <td className="p-4 bg-primary/5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">Yes</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <XCircle className="h-5 w-5" />
                    <span className="text-sm">No</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">DM Automation</td>
                <td className="p-4 bg-primary/5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">Yes (3-step flows)</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <XCircle className="h-5 w-5" />
                    <span className="text-sm">No</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Multi-Language AI</td>
                <td className="p-4 bg-primary/5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">6 Languages (incl. BM, Thai, ID)</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <XCircle className="h-5 w-5" />
                    <span className="text-sm">Basic</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Sentiment Analysis</td>
                <td className="p-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary" /></td>
                <td className="p-4"><XCircle className="h-5 w-5 text-muted-foreground" /></td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Pricing Model</td>
                <td className="p-4 bg-primary/5 font-semibold text-sm">Volume & Channels ($25/mo start)</td>
                <td className="p-4 text-sm text-muted-foreground">Page/Follower based</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">When to choose CommentGuard</h3>
            <p className="mb-4 text-muted-foreground">CommentGuard is a solid choice if:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>You only need basic keyword filtering for Facebook/Instagram</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>You don't run a YouTube channel for your brand</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>You manage DMs manually and don't need automation</span>
              </li>
            </ul>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">When to choose Social Kirin</h3>
            <p className="mb-4 text-foreground/80">Social Kirin is the better platform if:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">You need YouTube moderation alongside Meta platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">You want to automatically trigger DMs based on comment keywords</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">Your audience speaks Southeast Asian languages (BM, Thai, Vietnamese, Indonesian)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">You want AI to detect negative sentiment and escalate to human agents</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-accent/10 border border-accent/20 rounded-2xl p-8 md:p-12 my-12">
          <h2 className="text-3xl font-bold mb-4">Ready to upgrade your moderation?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started free today. The first {PROMO.cap} brands get {PROMO.discountPercent}% off any
            plan with code <strong className="font-mono tracking-wider text-foreground">{PROMO.code}</strong>.
          </p>
          <Link href="https://app.socialkirin.com">
            <Button size="lg" className="rounded-full font-bold px-8">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </ComparisonLayout>
    </>
  );
}