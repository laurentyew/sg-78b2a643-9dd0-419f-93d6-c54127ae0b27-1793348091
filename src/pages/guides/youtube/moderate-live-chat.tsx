import React from "react";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import { GuideLayout } from "@/components/layouts/GuideLayout";
import { Button } from "@/components/ui/button";

export default function ModerateLiveChatGuide() {
  return (
    <>
      <SEO
        title="How to Moderate YouTube Live Chat (Moderator Setup Guide)"
        description="Set up YouTube live chat moderation: add moderators, configure AutoMod, use slow mode and held-for-review messages, and handle raid spam during streams."
      />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "YouTube", href: "/guides/youtube" },
          { label: "Moderate Live Chat", href: "/guides/youtube/moderate-live-chat" },
        ]}
        lastUpdated="2026-10-29"
      >
        <h1>How to Moderate YouTube Live Chat</h1>
        <p className="lead">
          Live chat moves faster than any comment section. A stream with 500 concurrent viewers can produce a hundred
          messages a minute, and a single spam wave can bury a genuine question in seconds. Here's the setup that keeps
          up.
        </p>

        <h2>Step 1: Enable live chat moderation in Studio</h2>
        <p>
          In YouTube Studio, go to <strong>Settings → Community</strong> and turn on <strong>Automated filters</strong>.
          Three settings matter: hold potentially inappropriate messages for review, hold messages that contain links,
          and increase strictness when the chat gets busy.
        </p>
        <p>
          "Hold for review" is the key tool. Instead of publishing suspicious messages, YouTube routes them to a
          moderation queue you approve or reject. During a busy stream this is the difference between a clean chat and
          a mess.
        </p>

        <h2>Step 2: Add moderators before you go live</h2>
        <p>
          Add two moderators for every hundred expected concurrent viewers. Moderators can remove messages, time out
          users, and hide users from chat — they cannot access your channel settings, monetisation, or analytics.
        </p>
        <ul>
          <li>Assign a lead moderator who can remove other moderators</li>
          <li>Brief moderators on your specific rules (links, self-promo, politics)</li>
          <li>Rotate shifts on long streams — moderation fatigue is real after 90 minutes</li>
        </ul>

        <h2>Step 3: Configure blocked words</h2>
        <p>
          Under <strong>Settings → Community → Blocked words</strong>, add terms you never want in chat. Include
          local-language variants: English blocklists miss Bahasa, Indonesian, Thai and Vietnamese spam patterns, which
          is exactly where most regional spam lives.
        </p>

        <h2>Step 4: Use slow mode instead of turning chat off</h2>
        <p>
          Slow mode limits how often each viewer can post (5s, 10s, 30s, 1m, 5m, 10m). When chat is being flooded,
          slow mode is a better lever than subscriber-only mode: it preserves participation while removing the
          flood advantage.
        </p>
        <ul>
          <li><strong>Under 200 viewers:</strong> no slow mode needed</li>
          <li><strong>200–1,000:</strong> 5–10 seconds</li>
          <li><strong>1,000+ or during a raid:</strong> 30 seconds, subscribers-only if it escalates</li>
        </ul>

        <h2>Step 5: Handle raids and spam waves</h2>
        <p>
          Raids arrive as coordinated bursts from another channel. Practical response: enable subscribers-only mode
          temporarily, drop to slow mode 30s, and have a moderator scan the held-for-review queue rather than reading
          live chat. Raids usually pass in 3–5 minutes.
        </p>

        <h2>Where YouTube's native tools stop</h2>
        <ul>
          <li><strong>No sentiment detection.</strong> Sarcasm and dog-whistles pass keyword filters.</li>
          <li><strong>No cross-platform view.</strong> Instagram and Facebook need separate moderation during the same campaign.</li>
          <li><strong>No reply automation.</strong> Common questions ("what camera?", "where to buy?") get asked fifty times per stream.</li>
          <li><strong>No post-stream summary.</strong> You can't easily tell what was removed or why.</li>
        </ul>

        <h2>Step 6: Review after the stream</h2>
        <p>
          Under <strong>Comments → Live chat replay</strong>, review what was held and what was removed. Look for
          patterns: one account repeatedly breaching, a keyword you should block, a question recurring enough to
          deserve a pinned answer next time.
        </p>

        <h2>Frequently asked questions</h2>
        <h3>Can a moderator ban someone from my channel forever?</h3>
        <p>
          Moderators can hide a user from chat and time them out. Permanent bans and account-level actions remain with
          the channel owner.
        </p>
        <h3>Does deleting a live chat message remove it from the replay?</h3>
        <p>Yes — removed messages do not appear in the live chat replay.</p>
        <h3>How many moderators can I add?</h3>
        <p>YouTube allows a large moderator roster; practical limits come from coordination, not the platform.</p>

        <div className="not-prose mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="mb-3 font-serif text-2xl font-bold">One dashboard for every platform</h2>
          <p className="mb-6 text-muted-foreground">
            Social Kirin moderates YouTube, Instagram and Facebook together — spam detection, brand-voice replies and
            escalation in one queue. From $25/month.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/#waitlist">
              <Button size="lg" className="rounded-full font-bold">Join Waitlist</Button>
            </Link>
            <Link href="/social-media-moderation-software">
              <Button size="lg" variant="outline" className="rounded-full font-bold">See Platform</Button>
            </Link>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}