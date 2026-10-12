import React from "react";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/social-kirin/Header";
import { Footer } from "@/components/social-kirin/Footer";

const RELATED_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Deletion", href: "/data-deletion" },
  { label: "Platform Compliance", href: "/platform-compliance" },
];

interface LegalShellProps {
  title: string;
  lastUpdated: string;
  seoTitle: string;
  seoDescription: string;
  url: string;
  relatedLinks?: { label: string; href: string }[];
  children: React.ReactNode;
}

export function LegalShell({
  title,
  lastUpdated,
  seoTitle,
  seoDescription,
  url,
  relatedLinks = RELATED_LINKS,
  children,
}: LegalShellProps) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} url={url} />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="space-y-8">
            <header className="space-y-3">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                {title}
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {lastUpdated}
              </p>
            </header>

            <div className="space-y-8">{children}</div>

            <nav aria-label="Related legal documents" className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Related:{" "}
                {relatedLinks.map((link, index) => (
                  <React.Fragment key={link.href}>
                    {index > 0 && <span aria-hidden="true"> · </span>}
                    <Link
                      href={link.href}
                      className="text-primary hover:text-primary/80 underline"
                    >
                      {link.label}
                    </Link>
                  </React.Fragment>
                ))}
              </p>
            </nav>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

interface LegalSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="space-y-4 scroll-mt-28">
      <h2 className="font-serif text-2xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export function LegalSubheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-xl font-semibold text-foreground pt-2">{children}</h3>
  );
}

export function LegalParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-foreground/90 leading-relaxed">{children}</p>;
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2 text-foreground/90">{children}</ul>;
}

export function LegalOrderedList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal pl-6 space-y-2 text-foreground/90">{children}</ol>
  );
}

export function LegalItem({ children }: { children: React.ReactNode }) {
  return <li className="leading-relaxed">{children}</li>;
}

export function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-primary hover:text-primary/80 underline break-words"
    >
      {children}
    </a>
  );
}

export function LegalTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  );
}

export function LegalTh({ children }: { children: React.ReactNode }) {
  return (
    <th className="bg-muted/60 px-4 py-3 font-semibold text-foreground align-top">
      {children}
    </th>
  );
}

export function LegalTd({ children }: { children: React.ReactNode }) {
  return (
    <td className="border-t border-border px-4 py-3 align-top text-foreground/90 leading-relaxed">
      {children}
    </td>
  );
}