import React from "react";
import { SEO } from "@/components/SEO";
import { MoneyPageLayout } from "@/components/layouts/MoneyPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Languages, Shield, MessageSquare, TrendingUp, Zap, Globe2 } from "lucide-react";
import Link from "next/link";

export default function SocialMediaModerationSoftware() {
  return (
    <MoneyPageLayout>
      <SEO
        title="Social Media Moderation Software | AI Comment Filter"
        description="AI moderation software for Instagram, Facebook and YouTube. Auto-hide spam, reply in your brand voice, and automate DMs. Start free in minutes."
        image="/Social_Kirin_OG.jpg"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Social Kirin",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "19",
              "highPrice": "99",
              "priceCurrency": "USD",
              "priceValidUntil": "2027-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "127"
            },
            "featureList": [
              "AI-powered comment moderation",
              "Multi-language spam detection (6 languages)",
              "Sentiment analysis",
              "DM automation",
              "Multi-platform dashboard",
              "Custom keyword filters",
              "Brand voice AI replies"
            ]
          })
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Enterprise Software</Badge>
            <Badge variant="outline">Multi-Language</Badge>
            <Badge variant="outline">AI-Powered</Badge>
          </div>
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Social Media Moderation Software for Growing Brands
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-powered comment moderation and DM automation for Instagram, Facebook, and YouTube. Hide spam, detect sentiment, and reply in your brand voice—across 6 languages, from one unified dashboard.
          </p>
        </div>

        {/* [SCREENSHOT: Social Kirin dashboard showing unified inbox with Instagram, Facebook, and YouTube comments] */}
        <div className="my-12 overflow-hidden rounded-2xl border border-border bg-muted/30 p-8 text-center">
          <div className="mx-auto flex h-64 items-center justify-center text-muted-foreground">
            [SCREENSHOT: Multi-platform dashboard showing comment moderation interface with spam filters, sentiment indicators, and platform tabs for Instagram, Facebook, and YouTube]
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="mb-6 font-heading text-3xl font-bold">What Is Social Media Moderation Software?</h2>
          <p>
            Social media moderation software automates the time-consuming task of filtering spam, scam links, abusive comments, and fake giveaway bots from your Instagram, Facebook, and YouTube content. Instead of manually checking every comment, moderation tools use AI and custom keyword filters to hide unwanted content before your customers see it—protecting your brand reputation and freeing your team to focus on genuine engagement.
          </p>
          <p>
            Modern moderation platforms go beyond simple keyword blocking. They detect sentiment (flag angry or frustrated comments for human review), analyze buyer intent (identify "where can I buy?" questions), and even reply automatically in your brand voice. For businesses running paid ads or managing high-volume accounts, automated moderation isn't optional—it's essential.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Why Social Kirin for Social Media Moderation?</h2>

          <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
            <Card className="border-primary/20 p-6">
              <Languages className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Multi-Language AI Moderation</h3>
              <p className="text-sm text-muted-foreground">
                Detect spam and reply to comments in English, Bahasa Malaysia, Simplified Chinese, Indonesian, Thai, and Vietnamese. Purpose-built for Southeast Asian brands managing multilingual audiences.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <Globe2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Multi-Platform Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Manage Instagram, Facebook Pages, and YouTube comments in one unified inbox. No tab-switching, no platform juggling. See everything, moderate everything, from one screen.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <Shield className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Ad Comment Protection</h3>
              <p className="text-sm text-muted-foreground">
                Works specifically on Facebook and Instagram Ads. Hide competitor spam and scam links on your paid campaigns before they damage conversion rates or waste your ad spend.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <MessageSquare className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">DM Automation</h3>
              <p className="text-sm text-muted-foreground">
                Keyword-triggered instant DMs. When someone comments "link?" or "price?", Social Kirin sends them your product page or pricing details automatically. Convert intent into action, 24/7.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <TrendingUp className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Sentiment Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Catch negative sentiment early. Social Kirin flags unhappy or frustrated comments for human review, so your team can intervene before a small issue becomes a public complaint.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <Zap className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Custom Keyword Filters</h3>
              <p className="text-sm text-muted-foreground">
                Configure your own spam patterns. Block competitor names, scam phrases, inappropriate language, or fake giveaway bots with user-defined keyword filters that update in real time.
              </p>
            </Card>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Who Needs Social Media Moderation Software?</h2>

          <h3 className="mb-3 font-heading text-xl font-semibold">eCommerce Brands Running Ads</h3>
          <p>
            When you're spending $500, $5,000, or $50,000 per month on Facebook and Instagram Ads, every comment matters. Competitor spam ("Check out [brand] instead!"), scam links ("DM me for wholesale price"), and fake giveaway bots dilute your ad performance. Social Kirin hides them before they tank your conversion rate.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Marketing Agencies Managing Multiple Clients</h3>
          <p>
            Agencies need scalability. Social Kirin's Pro tier supports 50 channels, so you can moderate multiple client accounts from one dashboard. Moderator role permissions let your team members help without giving them full admin access. Perfect for scaling agencies.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Southeast Asian Brands with Multilingual Audiences</h3>
          <p>
            If your customers comment in Bahasa Malaysia, Chinese, Indonesian, Thai, or Vietnamese, you need moderation software that understands those languages. Social Kirin detects spam and generates AI replies in all 6 languages natively—not through basic machine translation that misses context.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">YouTube Creators with Active Comment Sections</h3>
          <p>
            Most moderation tools ignore YouTube. Social Kirin includes it. Hide spam on YouTube videos, auto-reply to common questions, and moderate Instagram, Facebook, and YouTube comments from the same dashboard. One tool, three platforms.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Core Features of Social Kirin</h2>

          <h3 className="mb-3 font-heading text-xl font-semibold">1. AI-Powered Spam Detection</h3>
          <p>
            Social Kirin's AI identifies spam, scam links, fake giveaways, and abusive language before your audience sees it. No manual approval queues—comments are auto-hidden in real time based on trained patterns and your custom keyword filters.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">2. Brand Voice AI Replies</h3>
          <p>
            Train Social Kirin on your brand voice using FAQs, product descriptions, and tone guidelines. The AI generates replies that sound like your team wrote them—helpful, on-brand, and contextually accurate. Create your own reply templates for common questions, or let the AI handle it automatically.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">3. Unified Multi-Platform Inbox</h3>
          <p>
            See Instagram comments, Facebook Page comments, and YouTube video comments in one place. No more switching tabs, checking three different apps, or missing urgent replies. Moderate everything from one unified inbox.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">4. Analytics Dashboard</h3>
          <p>
            Track comment volume, spam caught, reply rates, and sentiment trends. Know which posts are driving engagement, how much spam you're blocking, and where your team should focus manual attention. Data-driven moderation decisions.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">5. Team Collaboration</h3>
          <p>
            Social Kirin supports Admin and Moderator roles. Your team members can help moderate comments without full account access. Escalate sensitive issues to humans, flag comments for legal or care review, and maintain accountability with role-based permissions.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">What Social Kirin Does NOT Include</h2>
          <p className="text-muted-foreground">
            To set accurate expectations: Social Kirin currently does not offer API access, bulk actions (bulk delete/approve), team assignment (assign specific comments to specific members), or data export (CSV/JSON). These features are under consideration for future releases based on user demand.
          </p>
          <p className="text-muted-foreground">
            If your workflow requires API integration or bulk comment management, contact us at hello@b2bautomator.com to discuss enterprise custom solutions.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Pricing That Scales with Your Growth</h2>

          <div className="not-prose my-8 grid gap-6 sm:grid-cols-3">
            <Card className="p-6">
              <h3 className="mb-2 font-heading text-2xl font-bold">Starter</h3>
              <p className="mb-4 text-3xl font-bold">$25<span className="text-base font-normal text-muted-foreground">/month</span></p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>5 channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>5,000 interactions/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>All platforms (Instagram, Facebook, YouTube)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>6 languages</span>
                </li>
              </ul>
            </Card>

            <Card className="border-primary p-6">
              <Badge className="mb-2">Most Popular</Badge>
              <h3 className="mb-2 font-heading text-2xl font-bold">Growth</h3>
              <p className="mb-4 text-3xl font-bold">$59<span className="text-base font-normal text-muted-foreground">/month</span></p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>15 channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>15,000 interactions/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>All platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>6 languages + priority support</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2 font-heading text-2xl font-bold">Pro</h3>
              <p className="mb-4 text-3xl font-bold">$99<span className="text-base font-normal text-muted-foreground">/month</span></p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>50 channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>35,000 interactions/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>All platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>6 languages + dedicated support</span>
                </li>
              </ul>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            <strong>Annual billing:</strong> Save 2 months (pay for 10 months, get 12). All plans include 3-day free trial.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">How Social Kirin Compares to Other Tools</h2>
          <p>
            Most comment moderation software focuses solely on Instagram or Facebook. Social Kirin adds YouTube support—a platform many competitors ignore. If you run YouTube ads, publish video content, or manage creator accounts, Social Kirin lets you moderate all three platforms from one dashboard.
          </p>
          <p>
            Unlike tools that only block keywords, Social Kirin combines keyword filtering with AI sentiment analysis and DM automation. You're not just hiding spam—you're converting buyer intent into sales with automated follow-up DMs triggered by specific comment keywords.
          </p>
          <p>
            Multi-language support is another key differentiator. If your brand operates in Southeast Asia, Europe, or any multilingual market, Social Kirin's native support for 6 languages (English, Bahasa Malaysia, Simplified Chinese, Indonesian, Thai, Vietnamese) beats basic English-only tools that rely on brittle machine translation.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Getting Started with Social Kirin</h2>
          <ol className="space-y-4">
            <li><strong>Get Started Free.</strong> Social Kirin is live today. Create your account and connect your first channel in minutes.</li>
            <li><strong>Connect your accounts.</strong> Link Instagram, Facebook Pages, and YouTube channels via OAuth. No passwords shared, secure API connections only.</li>
            <li><strong>Configure filters.</strong> Set up custom keyword filters for spam patterns specific to your niche. Add competitor names, scam phrases, or inappropriate language you want auto-hidden.</li>
            <li><strong>Train your brand voice.</strong> Upload FAQs, product copy, or tone guidelines. Social Kirin's AI learns your brand voice and generates replies that sound like your team wrote them.</li>
            <li><strong>Set up DM automation.</strong> Create 3-step keyword-triggered DM flows. Example: "price?" → auto-DM with pricing link.</li>
            <li><strong>Monitor and refine.</strong> Check your analytics dashboard weekly. See which filters are catching the most spam, which posts drive engagement, and where sentiment trends negative.</li>
          </ol>

          <div className="not-prose my-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="mb-4 font-heading text-2xl font-bold">Ready to Automate Your Social Media Moderation?</h3>
            <p className="mb-6 text-muted-foreground">
              Join 500+ brands using AI to moderate comments, reply in brand voice, and convert intent into sales across Instagram, Facebook, and YouTube.
            </p>
            <Link href="https://app.socialkirin.com">
              <Button size="lg" className="gap-2">
                Get Started Free <span className="text-xs">(50% off with code FIRST50)</span>
              </Button>
            </Link>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                What platforms does Social Kirin support?
              </AccordionTrigger>
              <AccordionContent>
                Social Kirin currently supports Instagram, Facebook Pages, and YouTube. TikTok and Threads support are on the roadmap. All pricing tiers include unlimited platforms—no per-platform fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                Does Social Kirin work with Facebook and Instagram Ads?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Social Kirin's ad comment moderation feature works specifically on Facebook and Instagram Ads. Hide competitor spam and scam links on your paid campaigns before they damage conversion rates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">
                Can Social Kirin reply in languages other than English?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Social Kirin's AI detects spam and generates brand-voice replies in 6 languages: English, Bahasa Malaysia, Simplified Chinese, Indonesian, Thai, and Vietnamese. Perfect for Southeast Asian brands with multilingual audiences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                How does the DM automation work?
              </AccordionTrigger>
              <AccordionContent>
                Social Kirin's DM automation uses keyword triggers. When someone comments with a trigger phrase like "link?", "price?", or "send details", Social Kirin instantly sends them a pre-configured DM with your product link, pricing page, or custom message. You set up the keywords and the DM content—Social Kirin handles the rest automatically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">
                What happens if I exceed my plan's comment volume?
              </AccordionTrigger>
              <AccordionContent>
                When you exceed your plan's monthly comment volume, moderation pauses and you're prompted to upgrade to a higher tier. Your historical data remains intact, and you can resume moderation immediately after upgrading.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">
                Can I manage multiple client accounts with one subscription?
              </AccordionTrigger>
              <AccordionContent>
                Yes. The Growth tier includes 15 channels, and the Pro tier includes 50 channels. Each channel can connect to a different Instagram, Facebook, or YouTube account, making Social Kirin ideal for agencies managing multiple clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-semibold">
                Does Social Kirin offer API access?
              </AccordionTrigger>
              <AccordionContent>
                Not currently. Social Kirin does not provide API access at this time. If your use case requires programmatic integration, contact hello@b2bautomator.com to discuss enterprise custom solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-semibold">
                Is there a free trial?
              </AccordionTrigger>
              <AccordionContent>
                Yes. All Social Kirin plans include a 3-day free trial. No credit card required to get started.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left font-semibold">
                Where is my data stored?
              </AccordionTrigger>
              <AccordionContent>
                All Social Kirin data is stored in Asia with GDPR-compliant infrastructure. Comment and DM data is retained for 90 days, then automatically deleted. For enterprise data residency requirements, contact us to discuss custom arrangements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What platforms does Social Kirin support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Social Kirin currently supports Instagram, Facebook Pages, and YouTube. TikTok and Threads support are on the roadmap. All pricing tiers include unlimited platforms—no per-platform fees."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Social Kirin work with Facebook and Instagram Ads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Social Kirin's ad comment moderation feature works specifically on Facebook and Instagram Ads. Hide competitor spam and scam links on your paid campaigns before they damage conversion rates."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can Social Kirin reply in languages other than English?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Social Kirin's AI detects spam and generates brand-voice replies in 6 languages: English, Bahasa Malaysia, Simplified Chinese, Indonesian, Thai, and Vietnamese."
                    }
                  }
                ]
              })
            }}
          />
        </div>
      </article>
    </MoneyPageLayout>
  );
}