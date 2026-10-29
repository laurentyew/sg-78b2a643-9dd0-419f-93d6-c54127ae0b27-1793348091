import Head from "next/head";
import { useRouter } from "next/router";
import { absoluteUrl } from "@/lib/site";

const DEFAULT_TITLE = "AI Comment Moderation & DM Automation | Social Kirin";
const DEFAULT_DESCRIPTION =
  "Social Kirin auto-hides spam comments, replies in your brand voice, and automates DMs across Instagram, Facebook and YouTube. First 50 brands get 50% off.";
const DEFAULT_IMAGE = "/Social_Kirin_OG.jpg";
const IMAGE_WIDTH = "1376";
const IMAGE_HEIGHT = "768";
const IMAGE_ALT = "Social Kirin — AI comment and DM moderation for social media";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOElements({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = "/",
}: SEOProps) {
  const absoluteImage = absoluteUrl(image);
  const canonical = absoluteUrl(url);

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Social Kirin" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:secure_url" content={absoluteImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={IMAGE_WIDTH} />
      <meta property="og:image:height" content={IMAGE_HEIGHT} />
      <meta property="og:image:alt" content={IMAGE_ALT} />
      <meta property="og:url" content={canonical} />

      {/* X (Twitter) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@socialkirin" />
      <meta name="twitter:creator" content="@socialkirin" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={IMAGE_ALT} />
      <meta name="twitter:url" content={canonical} />

      <link rel="canonical" href={canonical} />
    </>
  );
}

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
}: SEOProps) {
  const router = useRouter();
  const currentPath = router?.asPath
    ? router.asPath.split("#")[0].split("?")[0]
    : "/";
  const canonical = absoluteUrl(url ?? (currentPath || "/"));
  const absoluteImage = absoluteUrl(image);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Social Kirin" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:secure_url" content={absoluteImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={IMAGE_WIDTH} />
      <meta property="og:image:height" content={IMAGE_HEIGHT} />
      <meta property="og:image:alt" content={IMAGE_ALT} />
      <meta property="og:url" content={canonical} />

      {/* X (Twitter) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@socialkirin" />
      <meta name="twitter:creator" content="@socialkirin" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={IMAGE_ALT} />
      <meta name="twitter:url" content={canonical} />

      <link rel="canonical" href={canonical} />
    </Head>
  );
}