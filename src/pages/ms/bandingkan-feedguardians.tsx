import { LocaleHead } from "@/components/i18n/LocaleHead";
import { ComparisonPage } from "@/components/i18n/ComparisonPage";
import { msComparison } from "@/lib/locales/comparison-ms";

export default function MsComparisonPage() {
  return (
    <>
      <LocaleHead
        pageKey="compareFeedguardians"
        locale="ms"
        title={msComparison.meta.title}
        description={msComparison.meta.description}
      />
      <ComparisonPage content={msComparison} />
    </>
  );
}