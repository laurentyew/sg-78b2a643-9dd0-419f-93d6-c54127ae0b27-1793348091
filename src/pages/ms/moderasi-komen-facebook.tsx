import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { msFacebookComments } from "@/lib/locales/money-ms-fb-comments";

export default function MsFacebookCommentsPage() {
  return (
    <>
      <LocaleHead
        page="facebookCommentModeration"
        locale="ms"
        title={msFacebookComments.meta.title}
        description={msFacebookComments.meta.description}
      />
      <MoneyPage content={msFacebookComments} />
    </>
  );
}