import { LegalShell } from "@/components/legal/LegalShell";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      lastUpdated="12 October 2026"
      seoTitle="Privacy Policy | Social Kirin"
      seoDescription="How Social Kirin (D AGE Technology) collects, uses, shares and protects personal data, including Meta and Google API data, AI processing, retention and your rights."
      url="https://socialkirin.com/privacy"
    >
      <PrivacyContent />
    </LegalShell>
  );
}