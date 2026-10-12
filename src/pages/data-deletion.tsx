import React from "react";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalOrderedList,
  LegalItem,
  LegalLink,
} from "@/components/legal/LegalShell";

export default function DataDeletionPage() {
  return (
    <LegalShell
      title="Data Deletion Instructions"
      lastUpdated="12 October 2026"
      seoTitle="Data Deletion Instructions | Social Kirin"
      seoDescription="How to revoke Social Kirin's access to Instagram, Facebook or YouTube and how to request deletion of your stored data, including the 7-day and 30-day timelines."
      url="https://socialkirin.com/data-deletion"
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ]}
    >
      <LegalParagraph>
        You can stop Social Kirin from accessing your accounts and ask us to delete your data at
        any time.
      </LegalParagraph>

      <LegalSection title="Step 1: Revoke Social Kirin's access (optional, immediate)">
        <LegalList>
          <LegalItem>
            <strong>Facebook:</strong> Facebook Settings → Apps and Websites → select Social
            Kirin → Remove.
          </LegalItem>
          <LegalItem>
            <strong>Instagram:</strong> Instagram Settings → Website permissions / Apps and
            websites → select Social Kirin → Remove.
          </LegalItem>
          <LegalItem>
            <strong>Google / YouTube:</strong> go to{" "}
            <LegalLink href="https://myaccount.google.com/permissions">
              https://myaccount.google.com/permissions
            </LegalLink>{" "}
            → select Social Kirin → Remove access.
          </LegalItem>
        </LegalList>
        <LegalParagraph>
          Revoking access stops us from collecting any new data from that account.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Step 2: Ask us to delete your stored data">
        <LegalParagraph>
          Email <strong>hello@b2bautomator.com</strong> with:
        </LegalParagraph>
        <LegalList>
          <LegalItem>
            <strong>Subject:</strong> Data Deletion Request
          </LegalItem>
          <LegalItem>Sent from the email address registered to your Social Kirin account</LegalItem>
          <LegalItem>
            The connected account(s) the request covers (Instagram handle, Facebook Page name,
            YouTube channel)
          </LegalItem>
          <LegalItem>
            Whether you want only the connected-account data deleted, or your whole Social Kirin
            account closed
          </LegalItem>
        </LegalList>

        <LegalParagraph>
          <strong>What happens next</strong>
        </LegalParagraph>
        <LegalOrderedList>
          <LegalItem>
            We reply to confirm we received your request, and may ask you to verify your identity.
          </LegalItem>
          <LegalItem>
            We delete the data within <strong>7 days</strong>: account and configuration data (if
            closing the account), comment and message content, metadata and platform access
            tokens.
          </LegalItem>
          <LegalItem>We confirm by email once deletion is complete.</LegalItem>
        </LegalOrderedList>

        <LegalParagraph>
          <strong>What we may keep:</strong> billing and tax records, which we must retain by
          Malaysian law for up to seven years. Deleted data disappears from backups within 30
          days.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="If you are not a customer">
        <LegalParagraph>
          If your comment or message was processed through a business's Instagram, Facebook Page
          or YouTube channel and you want it removed from our systems, email{" "}
          <strong>hello@b2bautomator.com</strong> with the platform, your username or channel
          name, and the approximate date. We will delete the data we hold or pass the request to
          the business concerned.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Questions">
        <LegalParagraph>
          <strong>D AGE Technology</strong> (SSM no. PC0005997-A), trading as Social Kirin
          <br />
          Lintang Mayang Pasir 1, Bandar Bayan Baru, 11950 Bayan Lepas, Pulau Pinang, Malaysia
          <br />
          Email: <strong>hello@b2bautomator.com</strong>
        </LegalParagraph>
        <LegalParagraph>
          See also: <Link href="/privacy" className="text-primary hover:text-primary/80 underline">
            Privacy Policy
          </Link>{" "}
          · <Link href="/terms" className="text-primary hover:text-primary/80 underline">
            Terms of Service
          </Link>
        </LegalParagraph>
      </LegalSection>
    </LegalShell>
  );
}