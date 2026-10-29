import React from "react";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Youtube, BookOpen } from "lucide-react";

export default function YouTubeGuidesHub() {
  const guides = [
    {
      title: "How to Moderate YouTube Live Chat",
      description: "Handle high-volume live streams with moderators, slow mode, AutoMod, and keyword filters.",
      href: "/guides/youtube/moderate-live-chat",
    },
    {
      title: "Filtering Spam Comments on YouTube Videos",
      description: "Use YouTube Studio settings, held for review, and automated spam detection to keep your comments clean.",
      href: "/guides/youtube/filter-spam-comments",
    },
    {
      title: "Dealing with YouTube Comment Trolls",
      description: "Block repeat offenders, hide users, report harassment, and protect your channel's reputation.",
      href: "/guides/youtube/deal-with-trolls",
    },
  ];

  return (
    <>
      <SEO 
        title="YouTube Comment Moderation Guides | Live Chat & Trolls"
        description="Learn how to moderate YouTube comments, manage live chat streams, filter spam, and handle trolls. Free step-by-step guides for creators."
      />
      
      <div className="min-h-screen bg-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/guides" className="hover:text-primary">Guides</Link>
              <span>/</span>
              <span className="text-foreground">YouTube</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF0000]/10">
                <Youtube className="h-8 w-8 text-[#FF0000]" />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-foreground">YouTube Moderation Guides</h1>
                <p className="text-lg text-muted-foreground mt-1">
                  Master YouTube comment management, live chat moderation, and troll prevention
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-10">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h2 className="font-semibold text-foreground mb-2">What you'll learn</h2>
                  <p className="text-sm text-muted-foreground">
                    These guides cover YouTube-specific moderation: video comment filtering, live chat management, AutoMod configuration, moderator permissions, slow mode usage, and handling harassment. Perfect for YouTubers, streamers, and educational channels.
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
              <h2 className="text-2xl font-bold mb-4">Need AI Moderation for YouTube?</h2>
              <p className="text-muted-foreground mb-6">
                YouTube's native tools handle basic spam. For context-aware AI moderation, sentiment analysis, and cross-platform management (YouTube + Instagram + Facebook), Social Kirin offers a unified dashboard.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="https://app.socialkirin.com">
                  <Button size="lg" className="rounded-full font-bold">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/social-media-moderation-software">
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