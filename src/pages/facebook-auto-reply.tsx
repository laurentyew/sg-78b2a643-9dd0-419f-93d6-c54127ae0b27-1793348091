import React from "react";
import { SEO } from "@/components/SEO";
import { MoneyPageLayout } from "@/components/layouts/MoneyPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, Zap, Clock, Facebook, CheckCircle2, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function FacebookAutoReply() {
  return (
    <MoneyPageLayout>
      <SEO
        title="Facebook Auto Reply | Automatic Comment & Message Responses"
        description="Auto-reply to Facebook comments and messages with AI. Instant responses to customer questions, buyer intent, and support requests. Save 20+ hours/week with Facebook auto-reply automation."
        image="/og-image.png"
      />

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Facebook Automation</Badge>
            <Badge variant="outline">AI Auto-Reply</Badge>
          </div>
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Facebook Auto Reply: AI-Powered Comment & Message Automation
          </h1>
          <p className="text-xl text-muted-foreground">
            Automatically reply to Facebook comments and messages with AI trained on your brand voice. Answer customer questions instantly, capture buyer intent 24/7, and reduce support workload by 70%. Works on Facebook Pages, Posts, and Ads.
          </p>
        </div>

        <div className="my-12 overflow-hidden rounded-2xl border border-border bg-muted/30 p-8 text-center">
          <div className="mx-auto flex h-64 items-center justify-center text-muted-foreground">
            [SCREENSHOT: Facebook auto-reply dashboard showing AI responses to comments and messages with response time metrics]
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="mb-6 font-heading text-3xl font-bold">What Is Facebook Auto Reply?</h2>
          
          <p>
            Facebook auto reply is AI-powered automation that responds to Facebook comments and messages without manual intervention. Instead of spending hours typing the same answers to "What's the price?", "Do you ship to [country]?", "Is this still available?" — Social Kirin's AI replies automatically in your brand voice, 24/7.
          </p>
          <p>
            Unlike basic Facebook Messenger chatbots that only work in Messenger with rigid keyword matching, Social Kirin auto-replies to BOTH comments (on Posts, Ads, Photos) AND messages — using natural language AI that understands intent, not just exact keywords. The AI is trained on your FAQs, product catalog, and past customer interactions, so replies sound human and on-brand.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Why Facebook Auto Reply Matters</h2>

          <p>
            <strong>Response time = conversion rate.</strong> Research shows that replying to buyer-intent questions within 5 minutes increases conversion rates by 80-90% compared to 1-hour response times. Manual replies take hours; auto-replies take seconds. Faster responses mean more sales.
          </p>
          <p>
            <strong>Support teams can't scale linearly.</strong> Growing from 100 to 1,000 comments/day doesn't mean hiring 10x more moderators. Auto-reply handles the repetitive 70-80% (pricing, shipping, availability), freeing your team to focus on complex issues (refunds, technical support, complaints) that require human judgment.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Facebook Auto Reply Use Cases</h2>

          <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
            <Card className="border-primary/20 p-6">
              <Facebook className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">eCommerce Product Pages</h3>
              <p className="text-sm text-muted-foreground">
                Auto-reply to product questions: "Price?", "Colors?", "Shipping?", "Available?". Direct buyers to checkout, answer specs, confirm stock—instantly. Convert browsers into buyers before they move on.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <MessageSquare className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Facebook Ads</h3>
              <p className="text-sm text-muted-foreground">
                Capture buyer intent on ad comments within seconds. When someone comments "Where to buy?", auto-reply with purchase link + trigger a Messenger follow-up. Higher ad ROI through faster lead capture.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <Clock className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">After-Hours Support</h3>
              <p className="text-sm text-muted-foreground">
                Reply to customer questions at 2 AM, weekends, holidays. AI doesn't sleep. Buyers in different time zones get instant answers even when your team is offline. Improve customer satisfaction.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <BarChart3 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">High-Volume Campaigns</h3>
              <p className="text-sm text-muted-foreground">
                When promotions, launches, or viral posts flood your Page with comments, AI handles the surge. Answer hundreds of questions simultaneously while maintaining consistent quality.
              </p>
            </Card>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">How Facebook Auto Reply Works</h2>

          <ol className="space-y-4">
            <li><strong>Connect your Facebook Page.</strong> Link via secure OAuth (Facebook-approved). Social Kirin monitors all comments on Posts, Photos, Videos, Ads, and incoming Messenger messages.</li>
            <li><strong>Train the AI on your brand voice.</strong> Upload FAQs, product pages, past customer service replies, tone guidelines. The AI learns YOUR brand's style (friendly, professional, casual, formal) and replicates it in responses.</li>
            <li><strong>Create custom reply templates.</strong> For exact-match scenarios: "promo code?" → "Use SAVE20 for 20% off". Templates fire instantly when keywords match. AI fills in when no template matches.</li>
            <li><strong>AI analyzes every comment & message in real time.</strong> Detects intent: buyer question, support request, feedback, spam, urgent issue. Questions trigger auto-replies; spam is hidden; urgent issues are flagged for human review.</li>
            <li><strong>Auto-replies post instantly (or delayed).</strong> Configure instant replies for buyer-intent questions or add 2-5 minute delays for more human feel. Delays allow team override before replies go live.</li>
            <li><strong>Review & refine weekly.</strong> Check the dashboard for AI-generated replies. Mark good replies as "approved", poor replies as "needs improvement". AI learns from your feedback, improving accuracy over time.</li>
          </ol>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">What Questions Can Facebook Auto Reply Answer?</h2>

          <h3 className="mb-3 font-heading text-xl font-semibold">Pricing & Quotes</h3>
          <p>
            "How much?", "Price?", "Cost?", "What's the total?" → Auto-reply with pricing tiers, link to price list, or "DM us for custom quotes".
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Product Availability</h3>
          <p>
            "In stock?", "Available?", "Sold out?", "When restock?" → Confirm stock status, link to pre-order, or notify when restocking.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Shipping & Delivery</h3>
          <p>
            "Ship to [country]?", "Delivery time?", "Shipping cost?", "Free shipping?" → Answer shipping zones, timelines, costs. Critical for cross-border buyers.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Order Process</h3>
          <p>
            "How to order?", "Buy now?", "Payment methods?", "Order tracking?" → Direct to checkout, explain payment options, provide tracking instructions.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Product Details</h3>
          <p>
            "Colors?", "Sizes?", "Warranty?", "Materials?", "Compatible with [device]?" → Reply with specs, sizing guides, warranty terms, compatibility info.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Promotions & Discounts</h3>
          <p>
            "Discount code?", "Sale?", "Any promo?" → Share active discount codes, sale dates, bundle offers. Drive urgency for impulse buyers.
          </p>

          <h3 className="mb-3 mt-6 font-heading text-xl font-semibold">Returns & Refunds</h3>
          <p>
            "Return policy?", "Can I return?", "Refund how long?" → Share return policy, refund timelines, return shipping instructions.
          </p>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Facebook Auto Reply vs Manual Customer Service</h2>

          <div className="not-prose my-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="p-3 text-left font-semibold">Metric</th>
                    <th className="p-3 text-left font-semibold">Manual Service</th>
                    <th className="p-3 text-left font-semibold">Auto Reply</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Average response time</td>
                    <td className="p-3 text-muted-foreground">2-8 hours</td>
                    <td className="p-3 text-primary font-semibold">5-30 seconds</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">After-hours availability</td>
                    <td className="p-3 text-muted-foreground">None (business hours only)</td>
                    <td className="p-3 text-primary font-semibold">24/7 automated</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Monthly cost (10,000 inquiries)</td>
                    <td className="p-3 text-muted-foreground">$3,000-$6,000 (2-3 agents)</td>
                    <td className="p-3 text-primary font-semibold">$49 (Growth tier)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Consistency</td>
                    <td className="p-3 text-muted-foreground">Varies by agent mood/skill</td>
                    <td className="p-3 text-primary font-semibold">100% consistent brand voice</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Scalability</td>
                    <td className="p-3 text-muted-foreground">Hire more agents (linear cost)</td>
                    <td className="p-3 text-primary font-semibold">Unlimited replies (flat cost)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium">Language support</td>
                    <td className="p-3 text-muted-foreground">Hire multilingual agents</td>
                    <td className="p-3 text-primary font-semibold">6 languages built-in</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Facebook Auto Reply Features</h2>

          <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
            <Card className="border-primary/20 p-6">
              <Zap className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Instant Buyer-Intent Detection</h3>
              <p className="text-sm text-muted-foreground">
                AI identifies high-intent questions ("Where to buy?", "How much?", "Available?") and prioritizes instant replies. Capture buyers before they lose interest.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <MessageSquare className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Comment + Messenger Integration</h3>
              <p className="text-sm text-muted-foreground">
                Reply to public comments AND automatically send detailed info via Messenger. Example: comment "Link?" → public reply "Sent!" + Messenger DM with product link.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <Clock className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Custom Reply Templates</h3>
              <p className="text-sm text-muted-foreground">
                Create exact-match templates for FAQs. "promo code?" → "Use SAVE20 for 20% off". Faster than AI generation, perfect for frequent questions.
              </p>
            </Card>

            <Card className="border-primary/20 p-6">
              <BarChart3 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-heading text-xl font-bold">Multi-Language Support</h3>
              <p className="text-sm text-muted-foreground">
                Reply in 6 languages: English, Bahasa Malaysia, Simplified Chinese, Indonesian, Thai, Vietnamese. AI detects language and responds accordingly.
              </p>
            </Card>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Facebook Auto Reply Best Practices</h2>

          <ul className="space-y-3">
            <li><strong>Train AI with 50+ real customer interactions.</strong> Upload past Facebook comment replies and Messenger conversations. AI learns from YOUR actual customer service tone, not generic templates.</li>
            <li><strong>Use templates for compliance-sensitive replies.</strong> Returns, refunds, warranty terms—create exact-wording templates to ensure consistent legal/policy language. AI handles the rest.</li>
            <li><strong>Enable delayed replies (2-5 minutes) for complex questions.</strong> Instant replies are great for "Price?", but technical questions benefit from a short delay that allows human override.</li>
            <li><strong>Flag urgent keywords for human escalation.</strong> "Refund", "complaint", "cancel order", "defective" should trigger human review—not auto-replies. Configure escalation rules.</li>
            <li><strong>Review auto-replies weekly.</strong> Check the dashboard for poor replies or missed context. Mark corrections so AI learns your preferences and improves over time.</li>
            <li><strong>Reply publicly to buyer-intent, privately to support issues.</strong> Product questions ("Where to buy?") should be answered publicly (builds social proof). Complaints should be handled via private Messenger.</li>
          </ul>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Pricing</h2>

          <div className="not-prose my-8 grid gap-6 sm:grid-cols-3">
            <Card className="p-6">
              <h3 className="mb-2 font-heading text-2xl font-bold">Starter</h3>
              <p className="mb-4 text-3xl font-bold">$19<span className="text-base font-normal text-muted-foreground">/month</span></p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>1 Facebook Page</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>1,000 auto-replies/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Comments + Messenger</span>
                </li>
              </ul>
              <Link href="/#waitlist">
                <Button variant="outline" className="w-full">Join Waitlist</Button>
              </Link>
            </Card>

            <Card className="border-primary p-6">
              <Badge className="mb-2">Most Popular</Badge>
              <h3 className="mb-2 font-heading text-2xl font-bold">Growth</h3>
              <p className="mb-4 text-3xl font-bold">$49<span className="text-base font-normal text-muted-foreground">/month</span></p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>2 Facebook Pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>10,000 auto-replies/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Multi-language AI</span>
                </li>
              </ul>
              <Link href="/#waitlist">
                <Button className="w-full">Join Waitlist</Button>
              </Link>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2 font-heading text-2xl font-bold">Pro</h3>
              <p className="mb-4 text-3xl font-bold">$99<span className="text-base font-normal text-muted-foreground">/month</span></p>
              <ul className="mb-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Unlimited Facebook Pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>50,000 auto-replies/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Priority AI training</span>
                </li>
              </ul>
              <Link href="/#waitlist">
                <Button variant="outline" className="w-full">Join Waitlist</Button>
              </Link>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            All plans include AI brand voice training, custom templates, multi-language support, comment + Messenger automation, and 24/7 availability. <strong>Annual billing saves 2 months.</strong> 7-day free trial after launch.
          </p>

          <div className="not-prose my-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="mb-4 font-heading text-2xl font-bold">Automate Facebook Replies with AI</h3>
            <p className="mb-6 text-muted-foreground">
              Instant responses to customer questions, 24/7 coverage, 70% reduction in support workload. AI-powered auto-replies trained on your brand voice. Works on comments and Messenger.
            </p>
            <Link href="/#waitlist">
              <Button size="lg" className="gap-2">
                Join the Waitlist <span className="text-xs">(First 50 get 3 months free)</span>
              </Button>
            </Link>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-3xl font-bold">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                Does Facebook auto reply work in Messenger?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Social Kirin auto-replies to BOTH public comments (on Posts, Photos, Videos, Ads) AND private Messenger conversations. Unlike basic Messenger chatbots that only work in DMs, Social Kirin handles both channels with the same AI.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                Can I review replies before they're sent?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Enable delayed reply mode (2-5 minutes) to review and override AI-generated replies before they post. You can also configure escalation rules: specific keywords ("refund", "complaint") always flag for human review instead of auto-replying.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">
                Does it sound like a bot?
              </AccordionTrigger>
              <AccordionContent>
                No. Social Kirin's AI is trained on your actual past customer service replies, so it replicates YOUR brand's tone (friendly, professional, casual, formal). Unlike rigid chatbots with scripted templates, the AI adapts replies contextually—understanding intent, not just keywords.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                How many Facebook Pages can I connect?
              </AccordionTrigger>
              <AccordionContent>
                Starter: 1 Page. Growth: 2 Pages. Pro: Unlimited Pages. Each Facebook Page connects to one workspace in Social Kirin. If you manage multiple brands or clients, Pro tier allows unlimited Pages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">
                Does it work in languages other than English?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Social Kirin auto-replies in 6 languages: English, Bahasa Malaysia, Simplified Chinese, Indonesian, Thai, and Vietnamese. The AI detects the comment/message language and replies in the same language automatically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">
                What if the AI replies incorrectly?
              </AccordionTrigger>
              <AccordionContent>
                Mark it as "needs improvement" in the dashboard. Social Kirin's AI learns from your corrections. After initial training (50+ interactions uploaded), false negative rate drops below 3%. You can also enable delayed mode to catch errors before replies post.
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
                    "name": "Does Facebook auto reply work in Messenger?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Social Kirin auto-replies to BOTH public comments and private Messenger conversations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it sound like a bot?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Social Kirin's AI is trained on your actual past customer service replies, so it replicates YOUR brand's tone."
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