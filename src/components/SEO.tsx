import Head from 'next/head';
import { absoluteUrl } from "@/lib/site";

const toAbsolute = (path: string): string => absoluteUrl(path);

const DEFAULT_TITLE = "Social Kirin — AI Comment & DM Moderation for Instagram, Facebook & YouTube";
const DEFAULT_DESCRIPTION = "Social Kirin auto-hides spam comments, replies in your brand voice, and automates DMs across Instagram, Facebook, and YouTube. Setup in minutes, no code required.";
const DEFAULT_IMAGE = "/Social_Kirin_OG.jpg";
const IMAGE_WIDTH = "1200";
const IMAGE_HEIGHT = "630";
const IMAGE_ALT = "Social Kirin — AI comment and DM moderation for social media";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
}: SEOProps) {
  const absoluteImage = toAbsolute(image);
  const absoluteUrl = url ? toAbsolute(url) : undefined;

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

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
      {absoluteUrl && <meta property="og:url" content={absoluteUrl} />}

      {/* X (Twitter) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@socialkirin" />
      <meta name="twitter:creator" content="@socialkirin" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={IMAGE_ALT} />
      {absoluteUrl && <meta name="twitter:url" content={absoluteUrl} />}

      {absoluteUrl && <link rel="canonical" href={absoluteUrl} />}
    </>
  );
}

// SEO component for use in pages (uses next/head)
// Note: Flattened structure (no fragment) for better Next.js Head compatibility during hot reload
export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
}: SEOProps) {
  const absoluteImage = toAbsolute(image);
  const absoluteUrl = url ? toAbsolute(url) : undefined;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

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
      {absoluteUrl && <meta property="og:url" content={absoluteUrl} />}

      {/* X (Twitter) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@socialkirin" />
      <meta name="twitter:creator" content="@socialkirin" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={IMAGE_ALT} />
      {absoluteUrl && <meta name="twitter:url" content={absoluteUrl} />}

      {absoluteUrl && <link rel="canonical" href={absoluteUrl} />}
    </Head>
  );
}