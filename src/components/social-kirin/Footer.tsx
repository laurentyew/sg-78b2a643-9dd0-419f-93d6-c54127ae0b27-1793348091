import React from "react";
import Link from "next/link";
import { ShieldCheck, Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Platforms",
    links: [
      { label: "Instagram Comment Moderation", href: "#features" },
      { label: "Facebook Comment Moderation", href: "#features" },
      { label: "YouTube Comment Moderation", href: "#features" },
      { label: "DM Automation", href: "#features" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Spam Comment Filter", href: "#features" },
      { label: "AI Auto-Reply in Brand Voice", href: "#features" },
      { label: "Sentiment Analysis & PR Alerts", href: "#features" },
      { label: "Compare Alternatives", href: "#comparison" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact Sales", href: "#pricing" },
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-background/15">
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

        <div className="pt-8 flex flex-col gap-4">
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
            <p className="text-xs text-background/50">
              Built for Instagram, Facebook & YouTube comment moderation and DM automation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}