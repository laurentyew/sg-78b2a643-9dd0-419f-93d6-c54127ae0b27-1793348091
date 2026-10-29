import React from "react";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Facebook, BookOpen } from "lucide-react";

export default function FacebookGuidesHub() {
  const guides = [
    {
      title: "How to Filter Spam Comments on Facebook",
      description: "Set up keyword filters, profanity blocklists, and automated moderation for your Facebook Page.",
      href: "/guides/facebook/filter-spam-comments",
    },
    {
      title: "Protecting Ad Comments from Trolls & Competitors",
      description: "Configure stricter filters for ad campaigns to prevent reputation damage and maintain ROI.",
      href: "/guides/facebook/protect-ad-comments",
    },
    {
      title: "Setting Up Messenger Auto-Replies for Comments",
      description: "Trigger instant DMs when users comment specific keywords—boost lead capture by 3x.",
      href: "/guides/facebook/messenger-auto-reply",
    },
  ];

  return (
    <>
      <SEO 
        title="Facebook Comment Moderation Guides for Page Owners"
        description="Learn how to moderate Facebook Page comments, filter spam, protect ads from trolls, and set up Messenger automation. Free step-by-step guides."
      />
      
      <div className="min-h-screen bg-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/guides" className="hover:text-primary">Guides</Link>
              <span>/</span>
              <span className="text-foreground">Facebook</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1877F2]/10">
                <Facebook className="h-8 w-8 text-[#1877F2]" />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-foreground">Facebook Moderation Guides</h1>
                <p className="text-lg text-muted-foreground mt-1">
                  Master Facebook Page comment management, ad protection, and Messenger automation
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-10">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h2 className="font-semibold text-foreground mb-2">What you'll learn</h2>
                  <p className="text-sm text-muted-foreground">
                    These guides cover Facebook-specific moderation tactics: Page settings, keyword filters, ad comment protection, competitor blocking, Messenger triggers, and automated workflows. Perfect for businesses managing Facebook Pages and ad campaigns.
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
              <h2 className="text-2xl font-bold mb-4">Need AI Automation for Facebook?</h2>
              <p className="text-muted-foreground mb-6">
                Manual moderation works for &lt;100 comments/week. Beyond that, AI saves 10+ hours weekly. Social Kirin handles Facebook Pages + Instagram + YouTube from one dashboard.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="https://app.socialkirin.com">
                  <Button size="lg" className="rounded-full font-bold">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/facebook-comment-moderation">
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