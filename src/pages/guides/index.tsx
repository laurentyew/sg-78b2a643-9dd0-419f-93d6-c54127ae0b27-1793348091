import React from "react";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Facebook, Instagram, Youtube, BookOpen } from "lucide-react";

export default function GuidesHub() {
  return (
    <>
      <SEO 
        title="Social Media Moderation Guides | Learn Best Practices"
        description="Free guides on Instagram, Facebook, and YouTube comment moderation. Learn AI automation, spam filtering, DM triggers, and community management best practices."
      />
      
      <div className="min-h-screen bg-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <BookOpen className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Free Learning Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
                Social Media Moderation Guides
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn how to moderate comments, automate replies, filter spam, and protect your brand across Instagram, Facebook, and YouTube.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E4405F]/10">
                    <Instagram className="h-6 w-6 text-[#E4405F]" />
                  </div>
                  <h2 className="text-xl font-bold">Instagram Guides</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Master Instagram comment moderation, DM automation, Reels management, and brand protection strategies.
                </p>
                <Link href="/guides/instagram">
                  <Button variant="outline" size="sm" className="w-full rounded-full">
                    View Instagram Guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2]/10">
                    <Facebook className="h-6 w-6 text-[#1877F2]" />
                  </div>
                  <h2 className="text-xl font-bold">Facebook Guides</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn Facebook Page moderation, ad comment protection, Messenger automation, and spam filtering tactics.
                </p>
                <Link href="/guides/facebook">
                  <Button variant="outline" size="sm" className="w-full rounded-full">
                    View Facebook Guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF0000]/10">
                    <Youtube className="h-6 w-6 text-[#FF0000]" />
                  </div>
                  <h2 className="text-xl font-bold">YouTube Guides</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Handle YouTube comment storms, live chat moderation, troll management, and community guidelines.
                </p>
                <Link href="/guides/youtube">
                  <Button variant="outline" size="sm" className="w-full rounded-full">
                    View YouTube Guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Popular Guides</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/guides/instagram/how-to-moderate-comments" className="group">
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                      How to Moderate Instagram Comments
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Step-by-step guide to filtering spam, hiding offensive comments, and automating moderation.
                    </p>
                  </Card>
                </Link>

                <Link href="/guides/facebook/filter-spam-comments" className="group">
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                      How to Filter Facebook Spam Comments
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Use keyword filters, AI detection, and Page settings to stop spam before it goes live.
                    </p>
                  </Card>
                </Link>

                <Link href="/guides/instagram/auto-reply-setup" className="group">
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                      How to Set Up Auto-Reply for Instagram Comments
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Configure DM automation, keyword triggers, and brand-voice AI replies in 5 minutes.
                    </p>
                  </Card>
                </Link>

                <Link href="/guides/youtube/moderate-live-chat" className="group">
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                      How to Moderate YouTube Live Chat
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Handle high-volume live streams with moderators, slow mode, and automated filtering.
                    </p>
                  </Card>
                </Link>
              </div>
            </div>

            <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Want AI-Powered Moderation?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These guides teach manual strategies. For automated AI moderation across Instagram, Facebook, and YouTube, Social Kirin is live today at app.socialkirin.com — start with a 3-day trial, no credit card required.
              </p>
              <Link href="https://app.socialkirin.com">
                <Button size="lg" className="rounded-full font-bold px-8">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}