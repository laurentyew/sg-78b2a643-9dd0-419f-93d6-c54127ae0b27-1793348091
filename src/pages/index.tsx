import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/social-kirin/Header";
import { Hero } from "@/components/social-kirin/Hero";
import { TargetAudiences } from "@/components/social-kirin/TargetAudiences";
import { Features } from "@/components/social-kirin/Features";
import { ModerationGrid } from "@/components/social-kirin/ModerationGrid";
import { HowItWorks } from "@/components/social-kirin/HowItWorks";
import { Stats } from "@/components/social-kirin/Stats";
import { FreeTools } from "@/components/social-kirin/FreeTools";
import { Comparison } from "@/components/social-kirin/Comparison";
import { Pricing } from "@/components/social-kirin/Pricing";
import { FAQ } from "@/components/social-kirin/FAQ";
import { Footer } from "@/components/social-kirin/Footer";
import { PROMO } from "@/lib/promo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Social Kirin",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://app.socialkirin.com",
  description:
    "AI-powered comment and DM moderation and automation platform for Instagram, Facebook, and YouTube. Auto-hides spam comments and replies in your brand voice.",
  offers: {
    "@type": "Offer",
    price: "25",
    priceCurrency: "USD",
    description: `${PROMO.label}: ${PROMO.discountPercent}% off any plan for the first ${PROMO.cap} brands, using code ${PROMO.code} at checkout`,
    availability: "https://schema.org/LimitedAvailability",
  },
  featureList: [
    "Automatically hide spam and scam comments",
    "AI replies in your brand voice",
    "Keyword-triggered Instagram and Facebook DM automation",
    "Sentiment and toxic language detection",
    "Multi-platform moderation for Instagram, Facebook, and YouTube",
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Social media managers, eCommerce brands, and agencies",
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title={`AI Comment Moderation & DM Automation | ${PROMO.discountPercent}% Off with ${PROMO.code} | Social Kirin`}
        description={`Social Kirin auto-hides spam comments, replies in your brand voice, and automates DMs across Instagram, Facebook and YouTube. First ${PROMO.cap} brands get ${PROMO.discountPercent}% off with code ${PROMO.code}.`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <TargetAudiences />
        <Features />
        <ModerationGrid />
        <HowItWorks />
        <Stats />
        <FreeTools />
        <Comparison />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}