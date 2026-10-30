import { LocaleHead } from "@/components/i18n/LocaleHead";
import { LocalizedLanding } from "@/components/i18n/LocalizedLanding";
import { zhHantHome } from "@/lib/locales/zh-hant";

export default function TraditionalChineseHome() {
  return (
    <>
      <LocaleHead
        page="home"
        locale="zh-hant"
        title={zhHantHome.meta.title}
        description={zhHantHome.meta.description}
      />
      <LocalizedLanding content={zhHantHome} />
    </>
  );
}