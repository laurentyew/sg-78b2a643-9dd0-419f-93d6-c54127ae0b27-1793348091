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
    a: "AI comment moderation means software checks each new comment for spam, scams, abuse, or repeat junk and takes action automatically. Social Kirin watches your Instagram, Facebook, and YouTube comments in real time, applies your rules, and keeps a review log so your team can step in when needed.",
  },
  {
    q: "How does the spam comment filter avoid hiding real customers?",
    a: "Social Kirin looks at patterns like scam links, repeated phrases, bot-style posting, fake giveaway language, and suspicious account behavior. You can review every hidden comment, restore anything legitimate, and set how aggressive the filter should be.",
  },
  {
    q: "Can Social Kirin reply to comments and DMs in my brand's voice?",
    a: "Yes. You train it on your FAQs, product details, and past replies. That gives Social Kirin the context it needs to answer routine questions in a tone that feels like your team, not a generic auto-responder.",
  },
  {
    q: "What is DM automation and can it handle common sales questions?",
    a: "DM automation lets you trigger instant replies when people comment or message with phrases like “price”, “link”, “shipping”, or “restock”. It helps move buyers forward fast while still handing sensitive questions to a real human when needed.",
  },
  {
    q: "Which platforms does Social Kirin support?",
    a: "Instagram, Facebook, and YouTube are the core platforms. Social Kirin is designed for comments, replies, and direct messages across those channels.",
  },
  {
    q: "Who is Social Kirin best for?",
    a: "It's built for ecommerce brands, creators, agencies, and lean community teams that get enough social traffic to make manual moderation painful. If your team is repeating the same replies, missing DMs, or cleaning spam every day, it's a strong fit.",
  },
  {
    q: "How accurate are the AI replies and sentiment alerts?",
    a: "The reply engine is trained to stay close to your saved tone and approved messaging, while sentiment alerts help surface risky or frustrated conversations early. The goal is faster first response and better triage, not replacing human judgment everywhere.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams can get set up in under an hour. You connect your accounts, add a few brand voice examples, define key automations, and choose what should always go to a human.",
  },
  {
    q: "Can I control what gets an auto-reply versus human escalation?",
    a: "Yes. You can define rules for complaints, legal topics, safety issues, negative sentiment, or VIP customers so those conversations route to a real person instead of being auto-handled.",
  },
  {
    q: "Do I need technical skills to use Social Kirin?",
    a: "No. Social Kirin is designed for marketing, support, and community teams. You should not need a developer just to set up moderation and reply workflows.",
  },
  {
    q: "Will I still be able to review what the AI did?",
    a: "Yes. Social Kirin is meant to reduce manual work, not hide what happened. Teams can review moderation actions, see why something was flagged, and step in on important threads.",
  },
  {
    q: "How much does Social Kirin cost?",
    a: "Plans start at $25/month for 5 channels and 5,000 interactions, scaling to $59 and $99 for larger volumes. Every plan includes unlimited team seats and a 3-day free trial with no credit card required.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-muted/40 py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="mb-10 space-y-3 text-center md:mb-12 md:space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            Questions
          </span>
          <h2 className="text-balance font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            Common questions, answered
          </h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Short answers about AI comment moderation, spam filtering, DM automation, and how Social Kirin helps social teams save time.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`item-${index}`}
              className="rounded-[1.5rem] border border-border bg-card px-4 shadow-soft sm:px-5"
            >
              <AccordionTrigger className="py-5 text-left font-serif text-base font-bold leading-6 text-foreground hover:no-underline sm:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}