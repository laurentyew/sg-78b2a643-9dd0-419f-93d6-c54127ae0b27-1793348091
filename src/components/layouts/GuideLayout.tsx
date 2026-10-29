import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Header } from "@/components/social-kirin/Header";
import { Footer } from "@/components/social-kirin/Footer";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface GuideLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  lastUpdated?: string;
}

export function GuideLayout({ children, breadcrumbs, lastUpdated }: GuideLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container py-8 md:py-12">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link 
                    href="/" 
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-foreground font-medium">{crumb.label}</span>
                    ) : (
                      <Link 
                        href={crumb.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Last Updated Badge */}
          {lastUpdated && (
            <div className="mb-4 text-sm text-muted-foreground">
              Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
            </div>
          )}

          {/* Guide Content */}
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}