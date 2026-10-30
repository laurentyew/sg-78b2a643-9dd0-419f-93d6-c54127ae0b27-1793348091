import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { zhHantCommentModeration } from "@/lib/locales/money-zh-hant";

export default function ZhHantCommentModerationPage() {
  return (
    <>
      <LocaleHead
        page="commentModeration"
        locale="zh-hant"
        title={zhHantCommentModeration.meta.title}
        description={zhHantCommentModeration.meta.description}
      />
      <MoneyPage content={zhHantCommentModeration} />
    </>
  );
}