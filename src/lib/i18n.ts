import { absoluteUrl } from "@/lib/site";

export type Locale = "en" | "ms" | "zh-hant" | "zh-hans";

export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleDefinition {
  code: Locale;
  htmlLang: string;
  hreflang: string;
  prefix: string;
  nativeName: string;
  englishName: string;
  ogLocale: string;
  currency: string;
  currencyNote: string;
}

export const LOCALES: Record<Locale, LocaleDefinition> = {
  en: {
    code: "en",
    htmlLang: "en",
    hreflang: "en",
    prefix: "",
    nativeName: "English",
    englishName: "English",
    ogLocale: "en_US",
    currency: "USD",
    currencyNote: "Billed in USD",
  },
  ms: {
    code: "ms",
    htmlLang: "ms",
    hreflang: "ms",
    prefix: "/ms",
    nativeName: "Bahasa Melayu",
    englishName: "Malay",
    ogLocale: "ms_MY",
    currency: "USD",
    currencyNote: "Dibilkan dalam Dolar AS (USD)",
  },
  "zh-hant": {
    code: "zh-hant",
    htmlLang: "zh-Hant",
    hreflang: "zh-Hant",
    prefix: "/zh-hant",
    nativeName: "繁體中文",
    englishName: "Traditional Chinese",
    ogLocale: "zh_TW",
    currency: "USD",
    currencyNote: "以美元（USD）計價",
  },
  "zh-hans": {
    code: "zh-hans",
    htmlLang: "zh-Hans",
    hreflang: "zh-Hans",
    prefix: "/zh-hans",
    nativeName: "简体中文",
    englishName: "Simplified Chinese",
    ogLocale: "zh_CN",
    currency: "USD",
    currencyNote: "以美元（USD）计价",
  },
};

export const LOCALE_ORDER: Locale[] = ["en", "ms", "zh-hant", "zh-hans"];

export type PageKey =
  | "home"
  | "moderationSoftware"
  | "commentModeration"
  | "instagramAutoReply"
  | "facebookCommentModeration"
  | "adCommentModeration"
  | "dmAutomation"
  | "multilingualModeration"
  | "pricing"
  | "faq"
  | "compareFeedguardians";

export const PAGE_ROUTES: Record<PageKey, Partial<Record<Locale, string>>> = {
  home: {
    en: "/",
    ms: "/ms",
    "zh-hant": "/zh-hant",
    "zh-hans": "/zh-hans",
  },
  moderationSoftware: { en: "/social-media-moderation-software" },
  commentModeration: {
    en: "/comment-moderation",
    ms: "/ms/moderasi-komen-media-sosial",
    "zh-hant": "/zh-hant/comment-moderation",
    "zh-hans": "/zh-hans/comment-moderation",
  },
  instagramAutoReply: { en: "/instagram-auto-reply" },
  facebookCommentModeration: { en: "/facebook-comment-moderation" },
  adCommentModeration: { en: "/ad-comment-moderation" },
  dmAutomation: { en: "/instagram-auto-reply" },
  multilingualModeration: { en: "/comment-moderation" },
  pricing: { en: "/#pricing" },
  faq: { en: "/#faq" },
  compareFeedguardians: {
    en: "/vs/feedguardians",
    ms: "/ms/bandingkan-feedguardians",
    "zh-hant": "/zh-hant/vs/feedguardians",
    "zh-hans": "/zh-hans/vs/feedguardians",
  },
};

export function normalizePath(path: string): string {
  const clean = path.split("#")[0].split("?")[0];
  if (!clean || clean === "/") return "/";
  return clean.replace(/\/+$/, "") || "/";
}

export function localePrefix(locale: Locale): string {
  return LOCALES[locale].prefix;
}

export function localeHomePath(locale: Locale): string | null {
  return PAGE_ROUTES.home[locale] ?? null;
}

export function isLocale(value: string): value is Locale {
  return (LOCALE_ORDER as string[]).includes(value);
}

export function localeFromPath(path: string): Locale {
  const normalized = normalizePath(path);
  const match = [...LOCALE_ORDER]
    .filter((locale) => locale !== DEFAULT_LOCALE)
    .sort((a, b) => LOCALES[b].prefix.length - LOCALES[a].prefix.length)
    .find((locale) => {
      const prefix = LOCALES[locale].prefix;
      return normalized === prefix || normalized.startsWith(prefix + "/");
    });
  return match ?? DEFAULT_LOCALE;
}

export function pageFromPath(path: string): PageKey | null {
  const normalized = normalizePath(path);
  const entries = Object.entries(PAGE_ROUTES) as [PageKey, Partial<Record<Locale, string>>][];
  for (const [page, routes] of entries) {
    for (const routePath of Object.values(routes)) {
      if (routePath && normalizePath(routePath) === normalized) return page;
    }
  }
  return null;
}

export function pathFor(page: PageKey, locale: Locale): string | null {
  return PAGE_ROUTES[page][locale] ?? null;
}

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

export function hreflangEntries(page: PageKey): HreflangEntry[] {
  const routes = PAGE_ROUTES[page];
  const entries: HreflangEntry[] = LOCALE_ORDER.filter((locale) => Boolean(routes[locale])).map(
    (locale) => ({
      hreflang: LOCALES[locale].hreflang,
      href: absoluteUrl(routes[locale] as string),
    }),
  );
  const english = routes[DEFAULT_LOCALE];
  if (english) {
    entries.push({ hreflang: "x-default", href: absoluteUrl(english) });
  }
  return entries;
}

export interface SwitcherTarget {
  locale: Locale;
  label: string;
  href: string | null;
  isCurrent: boolean;
}

export function switcherTargets(path: string): SwitcherTarget[] {
  const current = localeFromPath(path);
  const page = pageFromPath(path);
  return LOCALE_ORDER.map((locale) => {
    const direct = page ? pathFor(page, locale) : null;
    const home = localeHomePath(locale);
    return {
      locale,
      label: LOCALES[locale].nativeName,
      href: direct ?? home,
      isCurrent: locale === current,
    };
  });
}

export function isCjkLocale(locale: Locale): boolean {
  return locale === "zh-hant" || locale === "zh-hans";
}

export function fontClassFor(locale: Locale): string {
  if (locale === "zh-hant") return "font-zh-hant";
  if (locale === "zh-hans") return "font-zh-hans";
  return "";
}