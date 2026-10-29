import { PROMO } from "@/lib/promo";
import { getSiteUrl } from "@/lib/site";

const SITE_URL = getSiteUrl();

export const ORGANIZATION_ID = SITE_URL + "/#organization";
export const PRODUCT_ID = SITE_URL + "/#product";

const PRODUCT_DESCRIPTION =
  "AI comment and DM moderation software for Instagram, Facebook and YouTube. Auto-hides spam and scam comments in real time, replies in your brand voice, and automates keyword-triggered DMs.";

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Social Kirin",
  legalName: "D AGE Technology",
  url: SITE_URL,
  description:
    "Social Kirin builds AI comment and DM moderation software that hides spam, replies in a brand's voice and automates direct messages across Instagram, Facebook and YouTube.",
  logo: {
    "@type": "ImageObject",
    url: SITE_URL + "/generated/social-kirin-logo.jpg",
  },
  email: "hello@b2bautomator.com",
  founder: {
    "@type": "Person",
    name: "Laurent Yew",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bayan Lepas",
    addressRegion: "Penang",
    addressCountry: "MY",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@b2bautomator.com",
    url: SITE_URL,
  },
  knowsAbout: [
    "comment moderation",
    "spam comment filtering",
    "Instagram comment moderation",
    "Facebook comment moderation",
    "YouTube comment moderation",
    "direct message automation",
    "AI brand voice replies",
  ],
};

export const productSchema = {
  "@type": ["Product", "SoftwareApplication"],
  "@id": PRODUCT_ID,
  name: "Social Kirin",
  description: PRODUCT_DESCRIPTION,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  brand: { "@id": ORGANIZATION_ID },
  manufacturer: { "@id": ORGANIZATION_ID },
  image: SITE_URL + "/Social_Kirin_OG.jpg",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "25",
    highPrice: "99",
    offerCount: 3,
    availability: "https://schema.org/InStock",
    url: SITE_URL + "/#pricing",
    description:
      "Starter $25/month, Growth $59/month, Pro $99/month. Annual billing saves two months. " +
      PROMO.label +
      ": " +
      PROMO.discountPercent +
      "% off any plan for the first " +
      PROMO.cap +
      " brands using code " +
      PROMO.code +
      " at checkout.",
  },
  featureList: [
    "Automatically hide spam and scam comments",
    "AI replies in your brand voice",
    "Keyword-triggered Instagram and Facebook DM automation",
    "Sentiment and toxic language detection",
    "Facebook and Instagram ad comment moderation",
    "Moderation in English, Bahasa Malaysia, Simplified Chinese, Indonesian, Thai and Vietnamese",
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Social media managers, eCommerce brands, marketing agencies and creators",
  },
};

export const homeGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, productSchema],
};