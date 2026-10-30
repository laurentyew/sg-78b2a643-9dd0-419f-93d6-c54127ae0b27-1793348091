import { LocaleHead } from "@/components/i18n/LocaleHead";
import { MoneyPage } from "@/components/i18n/MoneyPage";
import { zhHansInstagramAutoReply } from "@/lib/locales/money-zh-hans-ig-autoreply";

export default function ZhHansInstagramAutoReplyPage() {
  return (
    <>
      <LocaleHead
        page="instagramAutoReply"
        locale="zh-hans"
        title={zhHansInstagramAutoReply.meta.title}
        description={zhHansInstagramAutoReply.meta.description}
      />
      <MoneyPage content={zhHansInstagramAutoReply} />
    </>
  );
}