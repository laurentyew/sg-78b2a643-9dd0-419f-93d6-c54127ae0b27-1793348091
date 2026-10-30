import { LocaleHead } from "@/components/i18n/LocaleHead";
import { ComparisonPage } from "@/components/i18n/ComparisonPage";
import { zhHansComparison } from "@/lib/locales/comparison-zh-hans";

export default function ZhHansComparisonPage() {
  return (
    <>
      <LocaleHead
        pageKey="compareFeedguardians"
        locale="zh-hans"
        title={zhHansComparison.meta.title}
        description={zhHansComparison.meta.description}
      />
      <ComparisonPage content={zhHansComparison} />
    </>
  );
}