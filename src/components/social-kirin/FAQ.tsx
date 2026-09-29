import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is AI comment moderation and how does Social Kirin do it?",
    a: "AI comment moderation uses machine learning to automatically scan comments on your Instagram, Facebook, and TikTok posts, detect spam, bots, and abusive content, and hide or remove it in real time. Social Kirin scans every incoming comment within seconds of posting and applies your custom rules alongside its trained spam-detection model.",
  },
  {
    q: "How does the spam comment filter tell real customers apart from bots?",
    a: "Social Kirin's spam filter analyzes comment patterns, account age, link presence, emoji spam, repeated phrasing, and known scam templates (crypto pumps, follower bots, fake giveaways). It's tuned to avoid false positives on genuine questions or complaints, and every hidden comment is logged so you can review and restore it anytime.",
  },
  {
    q: "Can Social Kirin reply to comments and DMs in my brand's actual voice?",
    a: "Yes. During onboarding you upload past replies, FAQs, and product details. Social Kirin's AI reply engine learns your tone, vocabulary, and even emoji habits, then drafts or auto-sends replies that sound like your team wrote them — not a generic bot.",
  },
  {
    q: "What is DM automation and can it handle order questions?",
    a: "DM automation lets you set keyword triggers (e.g. 'shipping', 'discount', 'sizing') that fire instant, brand-voice replies or route to a human. It can answer FAQs, share order-status links, and tag conversations that need a real person — reducing your DM backlog without losing the personal touch.",
  },
  {
    q: "Which platforms does Social Kirin support?",
    a: "Instagram, Facebook, and TikTok are fully supported today, covering comments, replies, and direct messages. We're expanding platform coverage based on customer demand — let us know what you need in onboarding.",
  },
  {
    q: "Is Social Kirin a good FeedGuardians alternative?",
    a: "Social Kirin covers the same core ground as FeedGuardians — spam auto-hiding, brand-voice AI replies, and DM automation — with a friendlier setup experience, sentiment analysis with PR-risk alerts, and pricing built for growing DTC brands rather than agencies. See our full comparison table above.",
  },
  {
    q: "How accurate is the AI reply and sentiment analysis?",
    a: "Our brand-voice reply engine maintains roughly 97% accuracy against your trained tone profile in customer testing, and sentiment analysis flags negative-trending threads before they escalate, giving your team early warning on potential PR issues.",
  },
  {
    q: "How long does setup take?",
    a: "Most brands are live in under an hour: connect your accounts (5 minutes), upload brand voice samples (10-15 minutes), and configure spam and DM rules (15-20 minutes). No developer or agency required.",
  },
  {
    q: "Will Social Kirin ever hide a real customer's comment by mistake?",
    a: "Every auto-hidden comment is logged in your moderation queue with the reason it was flagged, so you can review and restore any comment in one click. You can also set sensitivity levels per account if you want a lighter touch.",
  },
  {
    q: "Can I control which comments get automated replies vs. human escalation?",
    a: "Yes. You can define escalation rules for sensitive topics (complaints, legal mentions, safety concerns, negative sentiment above a threshold) so those always route to a human teammate instead of receiving an automated reply.",
  },
  {
    q: "Do I need technical or developer skills to use Social Kirin?",
    a: "No. Social Kirin connects through official platform login flows — no API keys or code. The dashboard is built for marketing and community teams, not engineers.",
  },
  {
    q: "Is there a free trial?",
    a: "Every plan includes a 14-day free trial with full feature access. No credit card required to start, and you can cancel anytime from your billing settings.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/40">
      <div className="container max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Everything about AI comment & DM moderation
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl border border-border px-5 shadow-soft"
            >
              <AccordionTrigger className="font-serif font-bold text-left text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}