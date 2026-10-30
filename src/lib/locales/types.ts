import type { Locale } from "@/lib/i18n";

export interface HomeFeature {
  title: string;
  body: string;
}

export interface HomeFaq {
  q: string;
  a: string;
}

export interface HomePrice {
  name: string;
  price: string;
  note: string;
  features: string[];
  featured?: boolean;
}

export interface HomeStat {
  value: string;
  label: string;
}

export interface HomeContent {
  lang: Locale;
  brandTagline: string;
  navCta: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    bullets: string[];
  };
  stats: HomeStat[];
  features: {
    heading: string;
    intro: string;
    items: HomeFeature[];
  };
  platforms: {
    heading: string;
    items: string[];
  };
  pricing: {
    heading: string;
    intro: string;
    currencyNote: string;
    cta: string;
    tiers: HomePrice[];
  };
  faq: {
    heading: string;
    intro: string;
    items: HomeFaq[];
  };
  finalCta: {
    heading: string;
    body: string;
    cta: string;
  };
  footerNote: string;
}

export interface MoneyCapability {
  title: string;
  body: string;
}

export interface MoneyExample {
  comment: string;
  verdict: string;
  action: string;
  hidden: boolean;
}

export interface MoneyStep {
  title: string;
  body: string;
}

export interface MoneyLink {
  label: string;
  href: string;
}

export interface MoneyPageContent {
  lang: Locale;
  slug: string;
  navCta: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    bullets: string[];
  };
  intro: {
    heading: string;
    paragraphs: string[];
  };
  capabilities: {
    heading: string;
    intro: string;
    items: MoneyCapability[];
  };
  examples: {
    heading: string;
    intro: string;
    legend: {
      kept: string;
      hidden: string;
    };
    items: MoneyExample[];
  };
  steps: {
    heading: string;
    items: MoneyStep[];
  };
  faq: {
    heading: string;
    items: HomeFaq[];
  };
  related: {
    heading: string;
    links: MoneyLink[];
  };
  finalCta: {
    heading: string;
    body: string;
    cta: string;
  };
}