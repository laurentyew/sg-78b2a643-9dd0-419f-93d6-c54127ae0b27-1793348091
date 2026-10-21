import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { ChevronRight, Clock, ShieldCheck, Trophy } from "lucide-react";
import { Header } from "@/components/social-kirin/Header";
import { Footer } from "@/components/social-kirin/Footer";
import { QuizSeoContent, FAQ_ITEMS } from "@/components/game/QuizSeoContent";
import { getSiteUrl } from "@/lib/site";

const QUIZ_PATH = "/tools/spot-the-spam-comment-quiz";
const SITE_URL = getSiteUrl();

const PAGE_TITLE = "Spot the Spam: Free Comment Moderation Quiz | Social Kirin";
const PAGE_DESCRIPTION =
  "Can you tell spam comments and scam DMs from real customers? Take the 60-second quiz, then see how AI moderation handles it.";

const Game = dynamic(
  () => import("@/components/game/Game").then((mod) => mod.Game),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="min-h-[430px] rounded-3xl border border-border bg-card shadow-soft"
      />
    ),
  },
);

const HIGHLIGHTS = [
  { Icon: Clock, label: "10 rounds, 6 seconds each" },
  { Icon: ShieldCheck, label: "No signup to play" },
  { Icon: Trophy, label: "Ranked from Rookie to Legend" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Free tools",
      item: SITE_URL + "/#free-tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Spot the spam: comment moderation quiz",
      item: SITE_URL + QUIZ_PATH,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function SpotTheSpamQuizPage() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={SITE_URL + QUIZ_PATH} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Social Kirin" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL + QUIZ_PATH} />
        <meta property="og:image" content={SITE_URL + "/og-image.png"} />
        <meta property="og:image:secure_url" content={SITE_URL + "/og-image.png"} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="590" />
        <meta property="og:image:alt" content="Spot the spam: free comment moderation quiz by Social Kirin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@socialkirin" />
        <meta name="twitter:creator" content="@socialkirin" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_URL + "/og-image.png"} />
        <meta name="twitter:image:alt" content="Spot the spam: free comment moderation quiz by Social Kirin" />
        <meta name="twitter:url" content={SITE_URL + QUIZ_PATH} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container pb-20 pt-8 sm:pt-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Free tools</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span aria-current="page" className="font-medium text-foreground">
              Spot the spam quiz
            </span>
          </nav>

          <header className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Free tool
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Can you moderate 10 comments before the timer runs out?
            </h1>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Ten comments and DMs pulled from a bank of spam, scam DMs, trolls,
              real complaints, sarcasm and genuine questions. Six seconds each.
              Pick Keep, Hide, Reply or Ban, get instant feedback, then see your
              rank.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {HIGHLIGHTS.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/75"
                >
                  <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </header>

          <section aria-label="Comment moderation quiz" className="mt-8">
            <Game />
          </section>

          <QuizSeoContent />
        </main>

        <Footer />
      </div>
    </>
  );
}