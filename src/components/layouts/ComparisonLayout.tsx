import React from "react";
import { Header } from "@/components/social-kirin/Header";
import { Footer } from "@/components/social-kirin/Footer";
import { WaitlistPopup } from "@/components/social-kirin/WaitlistPopup";

interface ComparisonLayoutProps {
  children: React.ReactNode;
  competitor: string;
  lastChecked?: string;
}

export function ComparisonLayout({ children, competitor, lastChecked }: ComparisonLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container py-8 md:py-12">
          {/* Last Checked Notice */}
          {lastChecked && (
            <div className="mb-6 rounded-xl border border-muted bg-muted/30 p-4 text-sm text-muted-foreground">
              Pricing and features verified from {competitor}'s live website. Last checked: <time dateTime={lastChecked}>{lastChecked}</time>
            </div>
          )}

          {/* Comparison Content */}
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        </div>
      </div>
      <Footer />
      <WaitlistPopup />
    </main>
  );
}