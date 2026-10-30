import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOCALES, switcherTargets, localeFromPath } from "@/lib/i18n";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = localeFromPath(router.asPath);
  const targets = switcherTargets(router.asPath).filter((target) => target.href);

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    if (!open) return;

    function handlePointer(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  if (targets.length < 2) return null;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${LOCALES[current].nativeName}`}
        className="flex h-10 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">{LOCALES[current].nativeName}</span>
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-[200px] rounded-xl border border-border bg-background p-2 shadow-lg"
        >
          {targets.map((target) => (
            <Link
              key={target.locale}
              href={target.href as string}
              hrefLang={LOCALES[target.locale].hreflang}
              role="menuitem"
              aria-current={target.locale === current ? "true" : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                target.locale === current
                  ? "bg-muted font-semibold text-primary"
                  : "text-foreground/80 hover:bg-muted hover:text-primary",
              )}
            >
              <span>{target.label}</span>
              <span className="text-xs text-muted-foreground">
                {LOCALES[target.locale].englishName}
              </span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}