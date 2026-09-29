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

export default function Home() {
  return (
    <>
      <SEO
        title="Social Kirin — AI Comment & DM Moderation for Instagram, Facebook & TikTok"
        description="Social Kirin auto-hides spam comments, replies in your brand voice, and automates DMs across Instagram, Facebook, and TikTok. Setup in minutes. The friendly FeedGuardians alternative."
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