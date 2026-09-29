import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amara Okafor",
    role: "Founder, Lush Root Botanicals",
    quote:
      "We were drowning in spam comments on every skincare post. Social Kirin cleaned up our Instagram in a day and now replies to shade-match questions in our exact tone. Our team gets to focus on actual customers again.",
    stat: "9.2 hrs/week saved",
  },
  {
    name: "Devon Marsh",
    role: "Head of Community, Pixel & Pine",
    quote:
      "The brand voice training genuinely surprised me. It picked up our dry humor from three weeks of past replies and customers can't tell it's automated. DM automation alone paid for the subscription.",
    stat: "41% faster response time",
  },
  {
    name: "Priya Nandakumar",
    role: "Marketing Lead, Sunroot Coffee Co.",
    quote:
      "We were drowning in DMs before Social Kirin. The sentiment alerts caught a brewing complaint before it went viral, and the dashboard was simple enough that our whole team picked it up in a day.",
    stat: "Zero PR incidents since switch",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Trusted by growing brands
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Real teams, real hours saved
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border flex flex-col gap-4"
            >
              <Quote className="h-8 w-8 text-accent/40" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed flex-1">
                “{t.quote}”
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-serif font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mb-2">{t.role}</p>
                <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                  {t.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}