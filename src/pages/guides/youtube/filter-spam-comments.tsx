import React from "react";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import { GuideLayout } from "@/components/layouts/GuideLayout";
import { Button } from "@/components/ui/button";

export default function YouTubeFilterSpamGuide() {
  return (
    <>
      <SEO
        title="How to Filter Spam Comments on YouTube Videos"
        description="Configure YouTube spam filters: blocked words, held for review, link blocking, trusted users, and automated spam detection for video comments."
      />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "YouTube", href: "/guides/youtube" },
          { label: "Filter Spam Comments", href: "/guides/youtube/filter-spam-comments" },
        ]}
        lastUpdated="2026-10-29"
      >
        <h1>Filtering Spam Comments on YouTube Videos</h1>
        <p className="lead">
          YouTube is the platform where comment spam is most visible — and most searched. "Check my channel",
          "WhatsApp +1 for promo", fake crypto giveaways. Studio has decent native tools; here's how to configure them
          properly.
        </p>

        <h2>Step 1: Set your default comment policy per channel</h2>
        <p>
          In <strong>YouTube Studio → Settings → Community</strong>, choose a default for new uploads: allow all,
          hold potentially inappropriate for review, or hold all for review. Holding all is realistic only for channels
          with low comment volume; most creators should use "hold potentially inappropriate".
        </p>

        <h2>Step 2: Turn on strictness for high-volume channels</h2>
        <p>
          The <strong>Increase strictness</strong> toggle makes YouTube's classifier hold more borderline comments. On
          a channel over ~50k subscribers, this is close to mandatory — spam volume scales faster than your ability to
          review it manually.
        </p>

        <h2>Step 3: Block links for non-subscribers</h2>
        <p>
          Most YouTube comment spam exists to distribute a link. Blocking links from non-subscribers removes the
          majority of it. Trade-off: viewers who genuinely want to share a resource get caught, so add a pinned comment
          inviting them to email instead.
        </p>

        <h2>Step 4: Build blocked words and approved users lists</h2>
        <ul>
          <li><strong>Blocked words:</strong> scam phrases, competitor handles, regional spam patterns (include non-English terms)</li>
          <li><strong>Approved users:</strong> trusted regulars whose comments skip moderation entirely</li>
          <li><strong>Hidden users:</strong> repeat offenders whose comments are invisible to everyone but them</li>
        </ul>

        <h2>Step 5: Review the held-for-review queue on a schedule</h2>
        <p>
          The queue is where legitimate discussion goes to die if you ignore it. Twice-weekly reviews are enough for
          most channels. Approving good comments trains nothing, but it prevents your community from feeling silenced.
        </p>

        <h2>Where native YouTube moderation is limited</h2>
        <ul>
          <li><strong>No cross-platform moderation.</strong> Same spam campaign hits Instagram and Facebook separately.</li>
          <li><strong>No buyer-intent detection.</strong> "Where can I buy this?" is buried among emoji spam.</li>
          <li><strong>No auto-replies.</strong> The same five questions repeat under every video.</li>
          <li><strong>No sentiment reporting.</strong> You can't see whether a video's comment sentiment shifted.</li>
        </ul>

        <h2>Step 6: Automate the repetitive layer</h2>
        <p>
          AI moderation handles the mechanical work — hide contextual spam, answer the recurring questions in your
          brand voice, and surface the handful of comments that genuinely need you. That leaves you reviewing what
          matters instead of scrolling past "🔥🔥 check my page".
        </p>

        <h2>Frequently asked questions</h2>
        <h3>Does holding a comment notify the commenter?</h3>
        <p>No. Held comments are invisible to the public; the author isn't told.</p>
        <h3>Can I filter comments by language?</h3>
        <p>
          YouTube auto-detects language but does not filter by it. Blocked words per language are the practical
          workaround.
        </p>
        <h3>Do removed comments affect video ranking?</h3>
        <p>
          Comment volume is a weak signal at best. Removing harassment is net positive because it reduces reports and
          hides toxic threads from new viewers.
        </p>

        <div className="not-prose mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="mb-3 font-serif text-2xl font-bold">Filter YouTube spam automatically</h2>
          <p className="mb-6 text-muted-foreground">
            Social Kirin reads context, not just keywords — across YouTube, Instagram and Facebook, in six languages.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/#waitlist">
              <Button size="lg" className="rounded-full font-bold">Join Waitlist</Button>
            </Link>
            <Link href="/ai-comment-moderation">
              <Button size="lg" variant="outline" className="rounded-full font-bold">AI Moderation</Button>
            </Link>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}