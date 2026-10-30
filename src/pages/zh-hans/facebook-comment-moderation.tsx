import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { zhHansFacebookComments } from "@/lib/locales/money-zh-hans-fb-comments";

export default function ZhHansFacebookCommentsPage() {
  return (
    <>
      <LocaleHead
        page="facebookCommentModeration"
        locale="zh-hans"
        title={zhHansFacebookComments.meta.title}
        description={zhHansFacebookComments.meta.description}
      />
      <MoneyPage content={zhHansFacebookComments} />
    </>
  );
}