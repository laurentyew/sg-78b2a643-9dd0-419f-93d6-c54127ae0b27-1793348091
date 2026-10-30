import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { msAdComments } from "@/lib/locales/money-ms-ad-comments";

export default function MsAdCommentsPage() {
  return (
    <>
      <LocaleHead
        page="adCommentModeration"
        locale="ms"
        title={msAdComments.meta.title}
        description={msAdComments.meta.description}
      />
      <MoneyPage content={msAdComments} />
    </>
  );
}