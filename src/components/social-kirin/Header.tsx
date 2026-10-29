import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck, ChevronDown } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [moderationOpen, setModerationOpen] = useState(false);
  const [automationOpen, setAutomationOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-soft overflow-hidden">
            <img
              src="/generated/social-kirin-logo.jpg"
              alt="Social Kirin mascot logo"
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </span>
          <span className="font-serif text-xl font-bold text-foreground">
            Social Kirin
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/#features"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Features
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Moderation
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-lg shadow-lg p-2 min-w-[240px]">
                <Link
                  href="/comment-moderation"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Comment Moderation
                </Link>
                <Link
                  href="/ai-comment-moderation"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  AI Comment Moderation
                </Link>
                <div className="my-1 border-t border-border" />
                <Link
                  href="/facebook-comment-moderation"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Facebook Moderation
                </Link>
                <Link
                  href="/instagram-comment-moderation"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Instagram Moderation
                </Link>
                <Link
                  href="/ad-comment-moderation"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Ad Comment Moderation
                </Link>
                <div className="my-1 border-t border-border" />
                <Link
                  href="/social-media-moderation-software"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  All Moderation Software
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Automation
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-lg shadow-lg p-2 min-w-[240px]">
                <Link
                  href="/facebook-auto-reply"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Facebook Auto Reply
                </Link>
                <Link
                  href="/instagram-auto-reply"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Instagram Auto Reply
                </Link>
                <div className="my-1 border-t border-border" />
                <Link
                  href="/facebook-auto-comments"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Facebook Auto Comments
                </Link>
                <Link
                  href="/instagram-auto-comments"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Instagram Auto Comments
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Resources
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-lg shadow-lg p-2 min-w-[260px]">
                <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Comparisons
                </div>
                <Link
                  href="/vs/commentguard"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  vs CommentGuard
                </Link>
                <Link
                  href="/vs/feedguardians"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  vs FeedGuardians
                </Link>
                <div className="my-1 border-t border-border" />
                <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Best Tools
                </div>
                <Link
                  href="/best/facebook-comment-moderation-tools"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Best Facebook Tools
                </Link>
                <Link
                  href="/best/instagram-comment-moderation-tools"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Best Instagram Tools
                </Link>
                <Link
                  href="/best/content-moderation-tools"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Best Content Moderation Tools
                </Link>
                <div className="my-1 border-t border-border" />
                <Link
                  href="/for"
                  className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Who it is for
                </Link>
                <Link
                  href="/guides"
                  className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Guides & How-Tos
                </Link>
                <Link
                  href="/tools/spot-the-spam-comment-quiz"
                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Spam Comment Quiz (Free)
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/#pricing"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#waitlist"
            className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Log In
          </Link>
          <Link
            href="/#waitlist"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
          >
            <ShieldCheck className="h-4 w-4" />
            Join Waitlist
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          <Link
            href="/#features"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-foreground/80 hover:text-primary py-2"
          >
            Features
          </Link>

          <div>
            <button
              onClick={() => setModerationOpen(!moderationOpen)}
              className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-primary py-2"
            >
              Moderation
              <ChevronDown className={`h-4 w-4 transition-transform ${moderationOpen ? "rotate-180" : ""}`} />
            </button>
            {moderationOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/comment-moderation"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Comment Moderation
                </Link>
                <Link
                  href="/ai-comment-moderation"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  AI Comment Moderation
                </Link>
                <Link
                  href="/facebook-comment-moderation"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Facebook Moderation
                </Link>
                <Link
                  href="/instagram-comment-moderation"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Instagram Moderation
                </Link>
                <Link
                  href="/ad-comment-moderation"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Ad Comment Moderation
                </Link>
                <Link
                  href="/social-media-moderation-software"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  All Moderation Software
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setAutomationOpen(!automationOpen)}
              className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-primary py-2"
            >
              Automation
              <ChevronDown className={`h-4 w-4 transition-transform ${automationOpen ? "rotate-180" : ""}`} />
            </button>
            {automationOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/facebook-auto-reply"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Facebook Auto Reply
                </Link>
                <Link
                  href="/instagram-auto-reply"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Instagram Auto Reply
                </Link>
                <Link
                  href="/facebook-auto-comments"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Facebook Auto Comments
                </Link>
                <Link
                  href="/instagram-auto-comments"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Instagram Auto Comments
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-primary py-2"
            >
              Resources
              <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>
            {resourcesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground py-1.5">
                  Comparisons
                </div>
                <Link
                  href="/vs/commentguard"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  vs CommentGuard
                </Link>
                <Link
                  href="/vs/feedguardians"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  vs FeedGuardians
                </Link>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground py-1.5 mt-2">
                  Best Tools
                </div>
                <Link
                  href="/best/facebook-comment-moderation-tools"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Best Facebook Tools
                </Link>
                <Link
                  href="/best/instagram-comment-moderation-tools"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Best Instagram Tools
                </Link>
                <Link
                  href="/best/content-moderation-tools"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Best Content Moderation Tools
                </Link>
                <div className="border-t border-border my-2" />
                <Link
                  href="/for"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Who it is for
                </Link>
                <Link
                  href="/guides"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Guides & How-Tos
                </Link>
                <Link
                  href="/tools/spot-the-spam-comment-quiz"
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/70 hover:text-primary py-1.5"
                >
                  Spam Comment Quiz (Free)
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#pricing"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-foreground/80 hover:text-primary py-2"
          >
            Pricing
          </Link>

          <Link
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-full bg-primary text-sm font-medium text-primary-foreground"
          >
            <ShieldCheck className="h-4 w-4" />
            Join Waitlist
          </Link>
        </div>
      )}
    </header>
  );
}