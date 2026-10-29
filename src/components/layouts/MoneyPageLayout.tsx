import React from "react";
import { Header } from "@/components/social-kirin/Header";
import { Footer } from "@/components/social-kirin/Footer";

interface MoneyPageLayoutProps {
  children: React.ReactNode;
}

export function MoneyPageLayout({ children }: MoneyPageLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </main>
  );
}