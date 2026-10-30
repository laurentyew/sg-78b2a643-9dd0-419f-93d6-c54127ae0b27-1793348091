import { LocaleHead } from "@/components/i18n/LocaleHead";
import { ComparisonPage } from "@/components/i18n/ComparisonPage";
import { zhHantComparison } from "@/lib/locales/comparison-zh-hant";

export default function ZhHantComparisonPage() {
  return (
    <>
      <LocaleHead
        page="compareFeedguardians"
        locale="zh-hant"
        title={zhHantComparison.meta.title}
        description={zhHantComparison.meta.description}
      />
      <ComparisonPage content={zhHantComparison} />
    </>
  );
}