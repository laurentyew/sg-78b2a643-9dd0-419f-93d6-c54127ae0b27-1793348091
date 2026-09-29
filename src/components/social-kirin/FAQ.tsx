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
    a: "AI comment moderation means software checks each new comment for spam, scams, abuse, or repeat junk and takes action automatically. Social Kirin watches your Instagram, Facebook, and TikTok comments in real time, applies your rules, and keeps a review log so your team can step in when needed.",
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
    a: "Instagram, Facebook, and TikTok are the core platforms. Social Kirin is designed for comments, replies, and direct messages across those channels.",
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
    q: "What does the waitlist offer include?",
    a: "The first 50 waitlist signups get 3 months free when Social Kirin launches. If the founding spots are gone, you can still join the waitlist for early access and launch updates.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-muted/40 py-24">
      <div className="container max-w-3xl">
        <div className="mb-12 space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Questions
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Common questions before you join
          </h2>
          <p className="text-lg text-muted-foreground">
            Short answers about AI comment moderation, spam filtering, DM automation, and how Social Kirin helps social teams save time.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`item-${index}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left font-serif font-bold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}