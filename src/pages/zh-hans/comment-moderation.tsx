import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { zhHansCommentModeration } from "@/lib/locales/money-zh-hans";

export default function ZhHansCommentModerationPage() {
  return (
    <>
      <LocaleHead
        page="commentModeration"
        locale="zh-hans"
        title={zhHansCommentModeration.meta.title}
        description={zhHansCommentModeration.meta.description}
      />
      <MoneyPage content={zhHansCommentModeration} />
    </>
  );
}