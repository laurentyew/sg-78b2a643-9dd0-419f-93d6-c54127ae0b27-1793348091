import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/social-kirin/Header";
import { Hero } from "@/components/social-kirin/Hero";
import { TargetAudiences } from "@/components/social-kirin/TargetAudiences";
import { Waitlist } from "@/components/social-kirin/Waitlist";
import { WaitlistPopup } from "@/components/social-kirin/WaitlistPopup";
import { Features } from "@/components/social-kirin/Features";
import { ModerationGrid } from "@/components/social-kirin/ModerationGrid";
import { HowItWorks } from "@/components/social-kirin/HowItWorks";
import { Stats } from "@/components/social-kirin/Stats";
import { FreeTools } from "@/components/social-kirin/FreeTools";
import { Comparison } from "@/components/social-kirin/Comparison";
import { FoundingBrands } from "@/components/social-kirin/FoundingBrands";
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
  featureList: [
    "Automatically hide spam and scam comments",
    "AI replies in your brand voice",
    "Keyword-triggered Instagram and Facebook DM automation",
    "Sentiment and toxic language detection",
    "Multi-platform moderation for Instagram, Facebook, and TikTok",
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
        <TargetAudiences />
        <Waitlist />
        <Features />
        <ModerationGrid />
        <HowItWorks />
        <Stats />
        <FreeTools />
        <Comparison />
        <FoundingBrands />
        <Pricing />
        <FAQ />
        <Footer />
        <WaitlistPopup />
      </main>
    </>
  );
}