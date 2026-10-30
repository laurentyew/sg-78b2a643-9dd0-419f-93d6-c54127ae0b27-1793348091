import { LocaleHead } from "@/components/i18n/LocaleHead";
import { LocalizedLanding } from "@/components/i18n/LocalizedLanding";
import { zhHansHome } from "@/lib/locales/zh-hans";

export default function SimplifiedChineseHome() {
  return (
    <>
      <LocaleHead
        page="home"
        locale="zh-hans"
        title={zhHansHome.meta.title}
        description={zhHansHome.meta.description}
      />
      <LocalizedLanding content={zhHansHome} />
    </>
  );
}