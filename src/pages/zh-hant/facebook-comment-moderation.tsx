import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { zhHantFacebookComments } from "@/lib/locales/money-zh-hant-fb-comments";

export default function ZhHantFacebookCommentsPage() {
  return (
    <>
      <LocaleHead
        page="facebookCommentModeration"
        locale="zh-hant"
        title={zhHantFacebookComments.meta.title}
        description={zhHantFacebookComments.meta.description}
      />
      <MoneyPage content={zhHantFacebookComments} />
    </>
  );
}