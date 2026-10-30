import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOCALES, switcherTargets, localeFromPath } from "@/lib/i18n";

interface LanguageSwitcherProps {
  variant?: "header" | "footer";
  className?: string;
}

export function LanguageSwitcher({ variant = "header", className }: LanguageSwitcherProps) {
  const router = useRouter();
  const current = localeFromPath(router.asPath);
  const targets = switcherTargets(router.asPath).filter((target) => target.href);

  if (targets.length < 2) return null;

  if (variant === "footer") {
    return (
      <nav aria-label="Language" className={cn("flex flex-wrap items-center gap-x-3 gap-y-2", className)}>
        <span className="flex items-center gap-1.5 text-xs text-background/45">
          <Globe className="h-3.5 w-3.5" aria-hidden="true" />
          Language
        </span>
        {targets.map((target) => (
          <Link
            key={target.locale}
            href={target.href as string}
            hrefLang={LOCALES[target.locale].hreflang}
            aria-current={target.locale === current ? "true" : undefined}
            className={cn(
              "text-xs underline-offset-4 hover:underline transition-colors",
              target.locale === current
                ? "text-accent font-semibold"
                : "text-background/60 hover:text-accent",
            )}
          >
            {target.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <div className={cn("relative group", className)}>
      <button
        type="button"
        className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="hidden xl:inline">{LOCALES[current].nativeName}</span>
      </button>
      <div className="pointer-events-none absolute right-0 top-full pt-2 opacity-0 invisible transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible">
        <div className="min-w-[190px] rounded-lg border border-border bg-background p-2 shadow-lg">
          {targets.map((target) => (
            <Link
              key={target.locale}
              href={target.href as string}
              hrefLang={LOCALES[target.locale].hreflang}
              aria-current={target.locale === current ? "true" : undefined}
              className={cn(
                "block rounded-md px-4 py-2 text-sm transition-colors",
                target.locale === current
                  ? "bg-muted font-semibold text-primary"
                  : "text-foreground/80 hover:bg-muted hover:text-primary",
              )}
            >
              {target.label}
              <span className="ml-2 text-xs text-muted-foreground">
                {LOCALES[target.locale].englishName}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}