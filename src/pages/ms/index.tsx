import { LocaleHead } from "@/components/i18n/LocaleHead";
import { LocalizedLanding } from "@/components/i18n/LocalizedLanding";
import { msHome } from "@/lib/locales/ms";

export default function MalayHome() {
  return (
    <>
      <LocaleHead
        page="home"
        locale="ms"
        title={msHome.meta.title}
        description={msHome.meta.description}
      />
      <LocalizedLanding content={msHome} />
    </>
  );
}