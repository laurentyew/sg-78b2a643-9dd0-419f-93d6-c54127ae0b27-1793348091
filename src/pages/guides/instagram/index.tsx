import React from "react";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Instagram, BookOpen } from "lucide-react";

export default function InstagramGuidesHub() {
  const guides = [
    {
      title: "How to Moderate Instagram Comments",
      description: "Complete guide to filtering spam, hiding offensive comments, and using Instagram's native moderation tools.",
      href: "/guides/instagram/how-to-moderate-comments",
    },
    {
      title: "Setting Up Auto-Reply for Instagram Comments",
      description: "Configure DM triggers, keyword automation, and AI replies to boost engagement and capture leads instantly.",
      href: "/guides/instagram/auto-reply-setup",
    },
    {
      title: "Managing Viral Reel Comment Volume",
      description: "Handle 1,000+ comments per Reel with prioritization, bulk actions, and automated filtering strategies.",
      href: "/guides/instagram/manage-viral-reels",
    },
  ];

  return (
    <>
      <SEO 
        title="Instagram Comment Moderation Guides & Auto-Reply Tips"
        description="Learn how to moderate Instagram comments, set up auto-reply DMs, handle viral Reels, and filter spam. Free step-by-step guides for creators and brands."
      />
      
      <div className="min-h-screen bg-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/guides" className="hover:text-primary">Guides</Link>
              <span>/</span>
              <span className="text-foreground">Instagram</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E4405F]/10">
                <Instagram className="h-8 w-8 text-[#E4405F]" />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-foreground">Instagram Moderation Guides</h1>
                <p className="text-lg text-muted-foreground mt-1">
                  Master Instagram comment moderation, DM automation, and Reel management
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-10">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h2 className="font-semibold text-foreground mb-2">What you'll learn</h2>
                  <p className="text-sm text-muted-foreground">
                    These guides cover Instagram-specific tactics: comment filtering, DM automation triggers, Reels comment management, brand protection, multi-language handling, and buyer-intent detection. Designed for creators, influencers, and eCommerce brands.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              {guides.map((guide, index) => (
                <Link key={index} href={guide.href} className="group block">
                  <Card className="p-6 hover:shadow-lg transition-all hover:border-primary/50">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {guide.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Automate Instagram Moderation with AI</h2>
              <p className="text-muted-foreground mb-6">
                Manual moderation works until a Reel goes viral. Social Kirin's AI handles Instagram comments + DMs + Reels at scale, with multi-language support and brand-voice replies. 3-day free trial.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="https://app.socialkirin.com">
                  <Button size="lg" className="rounded-full font-bold">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/instagram-comment-moderation">
                  <Button size="lg" variant="outline" className="rounded-full font-bold">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}