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
import { homeGraphSchema } from "@/lib/schema";
import { PROMO } from "@/lib/promo";

export default function Home() {
  return (
    <>
      <SEO
        title="AI Comment Moderation & DM Automation | Social Kirin"
        description={`Social Kirin auto-hides spam comments, replies in your brand voice, and automates DMs across Instagram, Facebook and YouTube. First ${PROMO.cap} brands get ${PROMO.discountPercent}% off.`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraphSchema) }}
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