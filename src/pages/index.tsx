import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/social-kirin/Header";
import { Hero } from "@/components/social-kirin/Hero";
import { Features } from "@/components/social-kirin/Features";
import { HowItWorks } from "@/components/social-kirin/HowItWorks";
import { Stats } from "@/components/social-kirin/Stats";
import { Comparison } from "@/components/social-kirin/Comparison";
import { Testimonials } from "@/components/social-kirin/Testimonials";
import { Pricing } from "@/components/social-kirin/Pricing";
import { FAQ } from "@/components/social-kirin/FAQ";
import { Footer } from "@/components/social-kirin/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Social Kirin",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered comment and DM moderation and automation platform for Instagram, Facebook, and TikTok. Auto-hides spam comments and replies in your brand voice.",
  offers: {
    "@type": "Offer",
    price: "39",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "127",
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Social Kirin — AI Comment & DM Moderation for Instagram, Facebook & TikTok"
        description="Social Kirin auto-hides spam comments, replies in your brand voice, and automates DMs across Instagram, Facebook, and TikTok. Setup in minutes. No code required."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}