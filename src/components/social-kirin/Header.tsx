import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Waitlist", href: "#waitlist" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-soft overflow-hidden">
            <img
              src="/generated/social-kirin-logo.jpg"
              alt="Social Kirin mascot logo"
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </span>
          <span className="font-serif text-xl font-bold text-foreground">
            Social Kirin
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#waitlist"
            className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Log In
          </a>
          <a
            href="#waitlist"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
          >
            <ShieldCheck className="h-4 w-4" />
            Join Waitlist
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-foreground/80 hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-full bg-primary text-sm font-medium text-primary-foreground"
          >
            <ShieldCheck className="h-4 w-4" />
            Join Waitlist
          </a>
        </div>
      )}
    </header>
  );
}