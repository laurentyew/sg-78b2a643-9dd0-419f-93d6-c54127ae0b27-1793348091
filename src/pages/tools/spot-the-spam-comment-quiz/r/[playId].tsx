import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Share2 } from "lucide-react";
import { Header } from "@/components/social-kirin/Header";
import { Footer } from "@/components/social-kirin/Footer";
import { getServerSupabase, getSiteUrl } from "@/lib/quiz/supabase-server";
import { rankFor } from "@/lib/quiz/scoring";

const QUIZ_PATH = "/tools/spot-the-spam-comment-quiz";

interface ResultPageProps {
  score: number;
  totalMs: number;
  rankTitle: string;
  shareUrl: string;
  ogImageUrl: string;
}

export const getServerSideProps: GetServerSideProps<ResultPageProps> = async (
  context,
) => {
  const playId = String(context.params?.playId ?? "");

  if (!playId) {
    return { notFound: true };
  }

  try {
    const supabase = getServerSupabase();
    const { data } = await supabase
      .from("plays")
      .select("score, total_ms, finished_at")
      .eq("id", playId)
      .maybeSingle();

    if (!data || !data.finished_at || data.score === null) {
      return { notFound: true };
    }

    const siteUrl = getSiteUrl();
    const resultPath = QUIZ_PATH + "/r/" + playId;

    return {
      props: {
        score: Number(data.score),
        totalMs: Number(data.total_ms ?? 0),
        rankTitle: rankFor(Number(data.score)).title,
        shareUrl: siteUrl + resultPath,
        ogImageUrl: siteUrl + "/api/og/" + playId,
      },
    };
  } catch {
    return { notFound: true };
  }
};

export default function QuizResultPage({
  score,
  totalMs,
  rankTitle,
  shareUrl,
  ogImageUrl,
}: ResultPageProps) {
  const seconds = Math.max(1, Math.round(totalMs / 1000));
  const xText =
    "I scored " +
    score +
    "/10 as a comment moderator in " +
    seconds +
    "s and earned the title " +
    rankTitle +
    ". Can you beat me? " +
    shareUrl;

  return (
    <>
      <Head>
        <title>{rankTitle + " — " + score + "/10 | Social Kirin quiz"}</title>
        <meta
          name="description"
          content={
            "A Social Kirin quiz result: " +
            score +
            "/10 in " +
            seconds +
            "s as a comment moderator."
          }
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={getSiteUrl() + QUIZ_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={rankTitle + " — " + score + "/10"} />
        <meta
          property="og:description"
          content="Can you beat me? Take the 60-second comment moderation quiz."
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container flex min-h-[70vh] flex-col items-center justify-center py-16">
          <div className="w-full max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Someone else&apos;s quiz result
            </p>
            <div className="mt-4 flex items-end justify-center gap-3">
              <span className="font-serif text-7xl font-bold leading-none text-primary tabular-nums">
                {score}
              </span>
              <span className="pb-2 text-2xl font-semibold text-muted-foreground">
                /10
              </span>
            </div>
            <h1 className="mt-4 font-serif text-3xl font-bold text-foreground">
              {rankTitle}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground tabular-nums">
              Clean run in {seconds}s
            </p>

            <Link
              href={QUIZ_PATH}
              className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Play it yourself
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={
                  "https://twitter.com/intent/tweet?text=" +
                  encodeURIComponent(xText)
                }
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Share my score
              </a>
              <a
                href={
                  "https://www.linkedin.com/sharing/share-offsite/?url=" +
                  encodeURIComponent(shareUrl)
                }
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                LinkedIn
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              The category breakdown stays private to whoever played it.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}