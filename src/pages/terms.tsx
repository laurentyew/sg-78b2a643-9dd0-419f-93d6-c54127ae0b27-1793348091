import { LegalShell } from "@/components/legal/LegalShell";
import { TermsContent } from "@/components/legal/TermsContent";

export default function TermsOfServicePage() {
  return (
    <LegalShell
      title="Terms of Service"
      lastUpdated="12 October 2026"
      seoTitle="Terms of Service | Social Kirin"
      seoDescription="The contract between you and D AGE Technology (Social Kirin) for AI-assisted comment and DM moderation on Instagram, Facebook Pages and YouTube."
      url="https://socialkirin.com/terms"
    >
      <TermsContent />
    </LegalShell>
  );
}