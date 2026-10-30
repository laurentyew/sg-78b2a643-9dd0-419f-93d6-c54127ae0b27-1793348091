import Head from "next/head";
import { hreflangEntries, type PageKey } from "@/lib/i18n";

interface PageAlternatesProps {
  page: PageKey;
}

export function PageAlternates({ page }: PageAlternatesProps) {
  return (
    <Head>
      {hreflangEntries(page).map((entry) => (
        <link
          key={entry.hreflang}
          rel="alternate"
          hrefLang={entry.hreflang}
          href={entry.href}
        />
      ))}
    </Head>
  );
}