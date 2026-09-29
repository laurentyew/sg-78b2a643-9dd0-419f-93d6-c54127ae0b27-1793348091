import React from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/social-kirin/Header";
import { Hero } from "@/components/social-kirin/Hero";
import { Features } from "@/components/social-kirin/Features";

export default function Home() {
  return (
    <>
      <SEO
        title="Social Kirin — AI Comment & DM Moderation for Instagram, Facebook & TikTok"
        description="Social Kirin auto-hides spam comments, replies in your brand voice, and automates DMs across Instagram, Facebook, and TikTok. Setup in minutes."
      />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Features />
      </main>
    </>
  );
}