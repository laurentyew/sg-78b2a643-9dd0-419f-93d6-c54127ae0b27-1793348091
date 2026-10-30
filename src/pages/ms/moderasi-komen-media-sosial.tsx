import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { msCommentModeration } from "@/lib/locales/money-ms";

export default function MsCommentModerationPage() {
  return (
    <>
      <LocaleHead
        page="commentModeration"
        locale="ms"
        title={msCommentModeration.meta.title}
        description={msCommentModeration.meta.description}
      />
      <MoneyPage content={msCommentModeration} />
    </>
  );
}