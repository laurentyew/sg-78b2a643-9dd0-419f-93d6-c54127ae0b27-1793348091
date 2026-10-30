import Head from "next/head";
import { absoluteUrl } from "@/lib/site";
import {
  LOCALES,
  LOCALE_ORDER,
  pathFor,
  hreflangEntries,
  type Locale,
  type PageKey,
} from "@/lib/i18n";

interface LocaleHeadProps {
  page: PageKey;
  locale: Locale;
  title: string;
  description: string;
  image?: string;
}

export function LocaleHead({ page, locale, title, description, image }: LocaleHeadProps) {
  const definition = LOCALES[locale];
  const path = pathFor(page, locale) ?? definition.prefix;
  const canonical = absoluteUrl(path);
  const alternates = hreflangEntries(page);
  const ogImage = absoluteUrl(image ?? "/og-image.png");
  const alternateLocales = LOCALE_ORDER.filter(
    (candidate) => candidate !== locale && Boolean(pathFor(page, candidate)),
  ).map((candidate) => LOCALES[candidate].ogLocale);

  return (
    <Head>
      <html lang={definition.htmlLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {alternates.map((entry) => (
        <link key={entry.hreflang} rel="alternate" hrefLang={entry.hreflang} href={entry.href} />
      ))}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Social Kirin" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={definition.ogLocale} />
      {alternateLocales.map((candidate) => (
        <meta key={candidate} property="og:locale:alternate" content={candidate} />
      ))}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}