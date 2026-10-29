import React from "react";
import { SEO } from "@/components/SEO";
import { MoneyPageLayout } from "@/components/layouts/MoneyPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Zap, Instagram, Heart, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function InstagramAutoReply() {
  return (
    <MoneyPageLayout>
      <SEO
        title="Instagram Auto Reply | Automatic DM & Comment Responses"
        description="Auto-reply to Instagram DMs and comments with AI. Instant responses to buyer questions on Posts and Reels. Save 20+ hours/week with Instagram auto-reply automation trained on your brand."
        image="/og-image.png"
      />

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Instagram Automation</Badge>
            <Badge variant="outline">AI Auto-Reply</Badge>
          </div>
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Instagram Auto Reply: AI-Powered DM & Comment Automation
          </h1>
          <p className="text-xl text-muted-foreground">
            Automatically reply to Instagram DMs and comments with AI trained on your brand voice. Answer buyer questions instantly on Posts and Reels, trigger DM automations, and reduce support time by 75%. Works 24/7 across all Instagram content types.
          </p>
        </div>

        <div className="my-12 overflow-hidden rounded-2xl border border-border bg-muted/30 p-8 text-center">
          <div className="mx-auto flex h-64 items-center justify-center text-muted-foreground">
            [SCREENSHOT: Instagram auto-reply dashboard showing AI responses to DMs and comments with engagement metrics]
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="mb-6 font-heading text-3xl font-bold">What Is Instagram Auto Reply?</h2>
          
          <p>
            Instagram auto reply is AI-powered automation that responds to Instagram DMs and comments without manual work. Instead of spending hours replying to "price?", "link please", "where to buy?" on every Post and Reel — Social Kirin's AI handles replies automatically in your brand voice, capturing buyer intent instantly, 24/7.
          </p>
          <p>
            Unlike basic Instagram DM bots that only work in Direct Messages with rigid scripts, Social Kirin auto-replies to BOTH comments (on Posts, Reels, Stories) AND DMs — using natural language AI that understands intent, not just exact keywords. The AI is trained on your products, FAQs, and past Instagram interactions, so replies sound human and on-brand.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Why Instagram Auto Reply Matters</h2>

          <p>
            <strong>Instagram rewards fast engagement.</strong> When you reply to comments within 5-15 minutes, Instagram's algorithm shows your post to more users. Manual replies take hours; auto-replies take seconds. Faster engagement = better organic reach.
          </p>
          <p>
            <strong>Buyer intent is time-sensitive on Instagram.</strong> When someone comments "link?" on your Reel, they're ready to purchase NOW. If you reply 8 hours later, they've already moved on or bought from a competitor. Instant auto-replies capture buyers before interest expires—improving conversion rates by 60-90%.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Instagram Auto Reply Use Cases</h2>

          <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
            <Card className="border-primary/20 p-6">
              <Instagram className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Product Posts & Reels</h3>
              <p className="text-sm text-muted-foreground">
                Auto-reply to buyer-intent comments: "Price?", "Link?", "Available?", "Colors?". Direct to purchase links, answer specs, confirm stock—all automatically. Convert comments into sales.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <Heart className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Viral Reel Management</h3>
              <p className="text-sm text-muted-foreground">
                When Reels go viral, comment volume explodes. AI handles 100+ simultaneous replies, answering product questions at scale while you focus on creating more content. No manual bottleneck.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <MessageCircle className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">DM Trigger Automation</h3>
              <p className="text-sm text-muted-foreground">
                Comment "send link" → AI replies publicly "Sent! 📩" + triggers Instagram DM with full product details. Capture leads instantly with dual-channel automation.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <TrendingUp className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Instagram Ads</h3>
              <p className="text-sm text-muted-foreground">
                Reply to ad comments within seconds. Capture high-intent buyers before competitors. Faster replies = higher ad ROI—research shows 5-minute responses convert 80% better than 1-hour delays.
              </p>
            </Card>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">How Instagram Auto Reply Works</h2>

          <ol className="space-y-4">
            <li><strong>Connect your Instagram Business or Creator account.</strong> Link via secure OAuth (Instagram-approved). Social Kirin monitors all comments on Posts, Reels, Stories, and incoming DMs.</li>
            <li><strong>Train the AI on your Instagram brand voice.</strong> Upload product pages, FAQs, past Instagram replies and DM conversations. AI learns YOUR style (playful emojis, short replies, friendly tone) and replicates it.</li>
            <li><strong>Create custom reply triggers.</strong> For exact-match scenarios: "promo code?" → "Use INSTA20 for 20% off 🔥". Templates fire instantly when keywords match. AI generates contextual replies when no template fits.</li>
            <li><strong>AI analyzes every comment & DM in real time.</strong> Detects intent: buyer question, support request, general feedback, spam, collaboration inquiry. Questions trigger auto-replies; spam is hidden; urgent issues are flagged.</li>
            <li><strong>Auto-replies post instantly (or delayed).</strong> Configure instant replies for buyer-intent questions ("Where to buy?") or add 2-5 minute delays for more human feel. Delays allow team override before replies go live.</li>
            <li><strong>Review & refine weekly.</strong> Check the dashboard for AI-generated replies. Mark good replies as "approved", poor replies as "needs improvement". AI learns from your feedback, improving accuracy over time.</li>
          </ol>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">What Questions Can Instagram Auto Reply Answer?</h2>

          <h3 className="mb-3 font-heading text-xl font-semibold">Product & Purchase Questions</h3>
          <p>
            "Price?", "Link?", "Where to buy?", "Available?", "Colors?", "Size chart?" → Auto-reply with product details, purchase links, stock status, or trigger DM with full info.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Shipping & Delivery</h3>
          <p>
            "Ship to [country]?", "Delivery time?", "Shipping cost?", "Free shipping?" → Answer shipping zones, timelines, costs. Critical for international Instagram buyers.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Order Instructions</h3>
          <p>
            "How do I order?", "Buy now?", "Website?", "App link?" → Direct to Instagram Shop, website checkout, Amazon store, or app download link.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Promotions & Discounts</h3>
          <p>
            "Discount code?", "Sale?", "Any promo?" → Share current promo codes, discount percentages, flash sale dates. Drive urgency for Instagram's impulse-buying audience.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Collaboration Inquiries</h3>
          <p>
            "Collab?", "PR sample?", "Partnership?", "Influencer program?" → Auto-reply with influencer contact email or media kit link, routing serious inquiries correctly.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Customer Support</h3>
          <p>
            "Order status?", "Track order?", "Return policy?", "How to contact support?" → Provide tracking links, return policy, support email. Escalate complex issues to humans.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Instagram Auto Reply vs Manual Responses</h2>

          <div className="not-prose my-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="p-3 text-left font-semibold">Metric</th>
                    <th className="p-3 text-left font-semibold">Manual Responses</th>
                    <th className="p-3 text-left font-semibold">Auto Reply</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Response time</td>
                    <td className="p-3 text-muted-foreground">2-12 hours</td>
                    <td className="p-3 text-primary font-semibold">5-30 seconds</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">After-hours coverage</td>
                    <td className="p-3 text-muted-foreground">None</td>
                    <td className="p-3 text-primary font-semibold">24/7 automated</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Cost (10,000 replies/mo)</td>
                    <td className="p-3 text-muted-foreground">$2,500-$5,000 (2-3 agents)</td>
                    <td className="p-3 text-primary font-semibold">$49 (Growth tier)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Viral Reel handling</td>
                    <td className="p-3 text-muted-foreground">Overwhelmed / delayed</td>
                    <td className="p-3 text-primary font-semibold">100+ simultaneous replies</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Language support</td>
                    <td className="p-3 text-muted-foreground">Hire multilingual staff</td>
                    <td className="p-3 text-primary font-semibold">6 languages built-in</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Consistency</td>
                    <td className="p-3 text-muted-foreground">Varies by person</td>
                    <td className="p-3 text-primary font-semibold">100% brand voice</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Instagram Auto Reply Features</h2>

          <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
            <Card className="border-primary/20 p-6">
              <Zap className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Buyer-Intent Detection</h3>
              <p className="text-sm text-muted-foreground">
                AI identifies high-intent questions ("Price?", "Link?", "Where to buy?") and prioritizes instant replies. Capture buyers before they lose interest or move to competitors.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <MessageCircle className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Comment + DM Automation</h3>
              <p className="text-sm text-muted-foreground">
                Reply publicly to comments AND trigger Instagram DM with full details. Example: comment "send link" → public reply "Sent! 🔗" + DM with product link, pricing, instructions.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <Heart className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Instagram Tone Training</h3>
              <p className="text-sm text-muted-foreground">
                AI learns your Instagram style (playful emojis, short replies, casual language) and replicates it. Replies sound like YOU, not a corporate bot. Perfect for creator and brand accounts.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <TrendingUp className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Multi-Language Support</h3>
              <p className="text-sm text-muted-foreground">
                Reply in 6 languages: English, Bahasa Malaysia, Simplified Chinese, Indonesian, Thai, Vietnamese. AI detects comment/DM language and responds accordingly. Global reach, zero hiring.
              </p>
            </Card>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Instagram Auto Reply Best Practices</h2>

          <ul className="space-y-3">
            <li><strong>Use emojis and short replies—match Instagram's casual tone.</strong> "Link sent! 🔗" feels natural on Instagram. "We have sent you the product link." feels like a bot. Train AI with real Instagram replies, not formal website copy.</li>
            <li><strong>Combine public reply + DM for buyer-intent questions.</strong> Reply publicly "Sent you a DM!" (builds social proof for other viewers), then auto-send DM with full product details. This dual-response strategy maximizes conversion.</li>
            <li><strong>Enable delayed replies on Reels (2-5 minutes).</strong> Instant replies on viral Reels can feel robotic when replying to 100+ comments. A short delay feels more organic and allows team override if needed.</li>
            <li><strong>Train AI with past Instagram interactions, not FAQ docs.</strong> Instagram tone is playful and visual. Upload your actual Instagram comment history and DM conversations—not your formal website FAQ—so AI learns the right style.</li>
            <li><strong>Flag collaboration inquiries for human review.</strong> "Collab?", "PR sample?", "Partnership?" should trigger human review—not auto-replies. Serious partnerships require personal touch. Configure escalation keywords.</li>
            <li><strong>Review auto-replies weekly and refine.</strong> Check dashboard for awkward phrasing, missed context, or tone mismatches. Mark corrections so AI learns your preferences and improves over time.</li>
          </ul>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Pricing</h2>

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
                  <span>Comments + DM automation</span>
                </li>
              </ul>
              <Link href="https://app.socialkirin.com">
                <Button variant="outline" className="w-full">Get Started Free</Button>
              </Link>
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
                  <span>Multi-language + Reel automation</span>
                </li>
              </ul>
              <Link href="https://app.socialkirin.com">
                <Button className="w-full">Get Started Free</Button>
              </Link>
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
                  <span>Viral Reel handling</span>
                </li>
              </ul>
              <Link href="https://app.socialkirin.com">
                <Button variant="outline" className="w-full">Get Started Free</Button>
              </Link>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            All plans include AI brand voice training, DM triggers, buyer-intent detection, multi-language support, and 24/7 automation. <strong>Annual billing saves 2 months.</strong> 3-day free trial.
          </p>

          <div className="not-prose my-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="mb-4 font-heading text-2xl font-bold">Automate Instagram Replies with AI</h3>
            <p className="mb-6 text-muted-foreground">
              Instant responses to buyer questions on Posts and Reels. DM automation, 24/7 coverage, 75% reduction in manual replies. AI trained on your brand voice. Works for Business and Creator accounts.
            </p>
            <Link href="https://app.socialkirin.com">
              <Button size="lg" className="gap-2">
                Get Started Free <span className="text-xs">(First 50 get 3 months free)</span>
              </Button>
            </Link>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                Does Instagram auto reply work in DMs?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Social Kirin auto-replies to BOTH public comments (on Posts, Reels, Stories) AND private Instagram DMs. Unlike basic DM bots that only work in Direct Messages, Social Kirin handles both channels with the same AI—ensuring consistent brand voice everywhere.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                Can I review replies before they're sent?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Enable delayed reply mode (2-5 minutes) to review and override AI-generated replies before they post. You can also configure escalation rules: specific keywords ("refund", "complaint", "collab") always flag for human review instead of auto-replying.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">
                Does it work for Instagram Business and Creator accounts?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Both Instagram Business and Creator accounts can use Social Kirin. Personal Instagram accounts (without business/creator status) cannot use third-party automation tools due to Instagram API restrictions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                Can it handle viral Reels with 500+ comments?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Social Kirin is built for high-volume comment surges. When a Reel goes viral, AI handles 100+ simultaneous replies—answering buyer-intent questions at scale while hiding spam. Pro tier supports up to 50,000 comments/month.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">
                Does it work in languages other than English?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Social Kirin auto-replies in 6 languages: English, Bahasa Malaysia, Simplified Chinese, Indonesian, Thai, and Vietnamese. The AI detects the comment/DM language and replies in the same language automatically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">
                What if the AI replies incorrectly?
              </AccordionTrigger>
              <AccordionContent>
                Mark it as "needs improvement" in the dashboard. Social Kirin's AI learns from your corrections. After initial training (50+ past replies uploaded), false negative rate drops below 3%. You can also enable delayed mode to catch errors before replies post.
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
                    "name": "Does Instagram auto reply work in DMs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Social Kirin auto-replies to BOTH public comments and private Instagram DMs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can it handle viral Reels with 500+ comments?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Social Kirin is built for high-volume comment surges and can handle up to 50,000 comments/month on the Pro tier."
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