import React from "react";
import Link from "next/link";
import { ShieldCheck, Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Platforms",
    links: [
      { label: "Instagram Comment Moderation", href: "/instagram-comment-moderation" },
      { label: "Facebook Comment Moderation", href: "/facebook-comment-moderation" },
      { label: "YouTube Comment Filtering", href: "/guides/youtube/filter-spam-comments" },
      { label: "Ad Comment Moderation", href: "/ad-comment-moderation" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "AI Spam Comment Filter", href: "/ai-comment-moderation" },
      { label: "Instagram Auto Reply", href: "/instagram-auto-reply" },
      { label: "Facebook Auto Comments", href: "/facebook-auto-comments" },
      { label: "Moderation Software", href: "/social-media-moderation-software" },
    ],
  },
  {
    title: "Who it is for",
    links: [
      { label: "All audiences", href: "/for" },
      { label: "eCommerce & DTC brands", href: "/for/ecommerce" },
      { label: "Creators & personal brands", href: "/for/creators" },
      { label: "Agencies & social managers", href: "/for/agencies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides & How-Tos", href: "/guides" },
      { label: "vs CommentGuard", href: "/vs/commentguard" },
      { label: "vs FeedGuardians", href: "/vs/feedguardians" },
      { label: "Best Moderation Tools", href: "/best/content-moderation-tools" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Data Deletion", href: "/data-deletion" },
      { label: "Platform Compliance", href: "/platform-compliance" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Deletion", href: "/data-deletion" },
  { label: "Platform Compliance", href: "/platform-compliance" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/90 pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-background/15">
          <div className="lg:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <span className="font-serif text-xl font-bold text-background">
                Social Kirin
              </span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              AI comment & DM moderation that hides spam and replies in your brand
              voice — across Instagram, Facebook, and YouTube.
            </p>
            <div className="flex gap-3 pt-2">
              <Instagram className="h-5 w-5 text-background/50 hover:text-accent transition-colors cursor-pointer" />
              <Facebook className="h-5 w-5 text-background/50 hover:text-accent transition-colors cursor-pointer" />
              <Youtube className="h-5 w-5 text-background/50 hover:text-accent transition-colors cursor-pointer" />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif font-bold text-background mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section
          aria-labelledby="as-seen-on-heading"
          className="py-10 border-b border-background/15"
        >
          <h3
            id="as-seen-on-heading"
            className="font-serif text-sm font-bold uppercase tracking-[0.18em] text-background/50 mb-6 text-center"
          >
            As seen on
          </h3>
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-6 items-stretch">
            <li className="w-[calc(50%-0.375rem)] sm:w-[calc(25%-0.5625rem)] lg:w-[calc(12.5%-0.65625rem)] flex flex-col items-center justify-center">
              <a
                href="https://tools.launchllama.co/products/social-kirin?utm_source=badge&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full leading-none"
                aria-label="Featured on Launch Llama Tools"
              >
                <img
                  src="https://tools.launchllama.co/featured-badge.png?v=2"
                  alt="Featured on Launch Llama Tools"
                  width={200}
                  height={52}
                  loading="lazy"
                  decoding="async"
                  className="block h-12 w-full border-0 object-contain"
                />
              </a>
              <a
                href="https://mcpshelf.co/?utm_source=badge&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-[10px] font-semibold leading-none tracking-[0.02em] text-background/45 no-underline transition-colors hover:text-accent"
              >
                Launch your MCP
              </a>
            </li>
            <li className="w-[calc(50%-0.375rem)] sm:w-[calc(25%-0.5625rem)] lg:w-[calc(12.5%-0.65625rem)] flex flex-col items-center justify-center">
              <a
                href="https://launchaf.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-launchaf-badge="true"
                className="block w-full leading-none"
                aria-label="Featured on LaunchAF"
              >
                <img
                  src="https://launchaf.com/api/badge/light?v=launchaf-blue-2026-2"
                  alt="Featured on LaunchAF"
                  width={200}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="block h-12 w-full border-0 object-contain"
                />
              </a>
            </li>
            <li className="w-[calc(50%-0.375rem)] sm:w-[calc(25%-0.5625rem)] lg:w-[calc(12.5%-0.65625rem)] flex flex-col items-center justify-center">
              <a
                href="https://launchstag.com/p/social-kirin"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full leading-none"
                aria-label="Featured on Launchstag"
              >
                <img
                  src="https://launchstag.com/badge-light.svg"
                  alt="Featured on Launchstag"
                  width={198}
                  height={62}
                  loading="lazy"
                  decoding="async"
                  className="block h-12 w-full border-0 object-contain"
                />
              </a>
            </li>
            <li className="w-[calc(50%-0.375rem)] sm:w-[calc(25%-0.5625rem)] lg:w-[calc(12.5%-0.65625rem)] flex flex-col items-center justify-center">
              <a
                href="https://saascity.io"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full leading-none"
                aria-label="Featured on SaaSCity"
              >
                <img
                  src="https://saascity.io/badges/featured-light.svg"
                  alt="Featured on SaaSCity"
                  width={150}
                  height={54}
                  loading="lazy"
                  decoding="async"
                  className="block h-12 w-full border-0 object-contain"
                />
              </a>
            </li>
          </ul>
        </section>

        <div className="pt-8 flex flex-col gap-6">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-background/60 hover:text-accent underline-offset-4 hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-background/50">
              © 2026 Social Kirin. Operated by D AGE Technology (SSM PC0005997-A),
              Bayan Lepas, Malaysia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}