import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { msInstagramAutoReply } from "@/lib/locales/money-ms-ig-autoreply";

export default function MsInstagramAutoReplyPage() {
  return (
    <>
      <LocaleHead
        page="instagramAutoReply"
        locale="ms"
        title={msInstagramAutoReply.meta.title}
        description={msInstagramAutoReply.meta.description}
      />
      <MoneyPage content={msInstagramAutoReply} />
    </>
  );
}