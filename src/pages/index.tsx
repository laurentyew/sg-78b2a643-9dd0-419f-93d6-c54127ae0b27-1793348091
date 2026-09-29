import React from "react";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Social Kirin — AI Comment & DM Moderation for Instagram, Facebook & TikTok"
        description="Social Kirin auto-hides spam comments, replies in your brand voice, and automates DMs across Instagram, Facebook, and TikTok. Setup in minutes."
      />
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-4xl font-serif font-bold text-foreground">Social Kirin</h1>
          <p className="text-lg text-muted-foreground">Building your AI comment & DM guardian...</p>
        </div>
      </main>
    </>
  );
}