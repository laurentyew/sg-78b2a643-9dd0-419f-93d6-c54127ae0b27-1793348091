import React from "react";
import { SEO } from "@/components/SEO";
import { ComparisonLayout } from "@/components/layouts/ComparisonLayout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export default function VsFeedGuardians() {
  return (
    <>
      <SEO 
        title="Social Kirin vs FeedGuardians: In-Depth Comparison 2026"
        description="Comparing Social Kirin and FeedGuardians for Instagram and Facebook moderation. See platform support, pricing models, and multi-language AI capabilities side-by-side."
      />
      <ComparisonLayout competitor="FeedGuardians" lastChecked="2026-10-29">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Social Kirin vs FeedGuardians
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Both platforms handle Instagram and Facebook well. But if your strategy includes YouTube, or you need Southeast Asian language support, here's what sets Social Kirin apart.
          </p>
        </div>

        <div className="my-12 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="p-4 font-bold text-lg w-1/3">Feature</th>
                <th className="p-4 font-bold text-lg w-1/3 text-primary bg-primary/5 rounded-t-lg">Social Kirin</th>
                <th className="p-4 font-bold text-lg w-1/3 text-muted-foreground">FeedGuardians</th>
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
                <td className="p-4 font-medium">Multi-Language AI</td>
                <td className="p-4 bg-primary/5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">6 Languages (EN, BM, ZH, ID, TH, VI)</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm">English focus</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">DM Automation</td>
                <td className="p-4 bg-primary/5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">3-step flows</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm">Basic replies</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Sentiment Analysis</td>
                <td className="p-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary" /></td>
                <td className="p-4"><XCircle className="h-5 w-5 text-muted-foreground" /></td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Ad Comment Protection</td>
                <td className="p-4 bg-primary/5"><CheckCircle2 className="h-5 w-5 text-primary" /></td>
                <td className="p-4"><CheckCircle2 className="h-5 w-5 text-muted-foreground" /></td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Unlimited Platforms (All Tiers)</td>
                <td className="p-4 bg-primary/5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">Yes</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <XCircle className="h-5 w-5" />
                    <span className="text-sm">Higher tiers only</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Starting Price</td>
                <td className="p-4 bg-primary/5 font-semibold text-sm">$25/mo (5 channels, 5K interactions)</td>
                <td className="p-4 text-sm text-muted-foreground">Check their site</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">When FeedGuardians makes sense</h3>
            <p className="mb-4 text-muted-foreground">FeedGuardians is a good fit if:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>You only manage Facebook and Instagram accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>Your audience is primarily English-speaking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground mt-1">•</span>
                <span>You don't need sentiment-based escalation</span>
              </li>
            </ul>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">When Social Kirin is better</h3>
            <p className="mb-4 text-foreground/80">Choose Social Kirin if:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">You run a YouTube channel and need unified moderation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">Your audience speaks Southeast Asian languages (BM, Thai, Indonesian, Vietnamese, Chinese)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">You want unlimited platforms at every pricing tier</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium">You need AI to detect negative sentiment and flag urgent conversations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto my-16">
          <h2 className="text-3xl font-bold mb-6 text-center">The Multi-Language Advantage</h2>
          <p className="text-lg text-muted-foreground mb-6">
            If you serve Southeast Asian markets, language support isn't a nice-to-have—it's critical. Social Kirin's AI understands spam patterns, slang, and sentiment in <strong>Bahasa Malaysia, Simplified Chinese, Indonesian, Thai, and Vietnamese</strong>—not just English keyword matching.
          </p>
          <p className="text-lg text-muted-foreground">
            This means your Malaysian customers commenting in BM, your Thai audience asking questions in Thai, and your Indonesian followers engaging in Indonesian all get accurate spam filtering and brand-voice replies. FeedGuardians focuses on English-language markets.
          </p>
        </div>

        <div className="text-center bg-accent/10 border border-accent/20 rounded-2xl p-8 md:p-12 my-12">
          <h2 className="text-3xl font-bold mb-4">Start with Social Kirin</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            3-day free trial. No credit card required.
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