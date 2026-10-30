import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { zhHantInstagramAutoReply } from "@/lib/locales/money-zh-hant-ig-autoreply";

export default function ZhHantInstagramAutoReplyPage() {
  return (
    <>
      <LocaleHead
        page="instagramAutoReply"
        locale="zh-hant"
        title={zhHantInstagramAutoReply.meta.title}
        description={zhHantInstagramAutoReply.meta.description}
      />
      <MoneyPage content={zhHantInstagramAutoReply} />
    </>
  );
}