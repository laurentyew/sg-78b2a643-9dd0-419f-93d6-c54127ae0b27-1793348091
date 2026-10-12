import React from "react";
import {
  LegalShell,
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalItem,
  LegalLink,
} from "@/components/legal/LegalShell";

export default function PlatformCompliancePage() {
  return (
    <LegalShell
      title="Platform Compliance"
      lastUpdated="12 October 2026"
      seoTitle="Platform Compliance | Social Kirin"
      seoDescription="How Social Kirin complies with the Meta Platform Terms and Google API Services User Data Policy, including our Limited Use and no-AI-training commitments."
      url="https://socialkirin.com/platform-compliance"
    >
      <LegalParagraph>
        Social Kirin works with Instagram, Facebook Pages and YouTube through their official
        APIs, and we follow the rules of each platform.
      </LegalParagraph>

      <LegalSection title="Meta (Instagram and Facebook)">
        <LegalList>
          <LegalItem>
            We access data only with the permissions you grant and use it only to provide the
            moderation, reply and messaging features you enable.
          </LegalItem>
          <LegalItem>
            We comply with the Meta Platform Terms and Developer Policies. We do not sell platform
            data or use it for advertising or profiling.
          </LegalItem>
          <LegalItem>
            Data deletion instructions:{" "}
            <LegalLink href="https://socialkirin.com/data-deletion">Data Deletion</LegalLink>.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Google and YouTube">
        <LegalList>
          <LegalItem>
            Social Kirin uses YouTube API Services. By connecting a channel, users agree to the{" "}
            <LegalLink href="https://www.youtube.com/t/terms">YouTube Terms of Service</LegalLink>
            . Google's handling of data is described in the{" "}
            <LegalLink href="https://policies.google.com/privacy">Google Privacy Policy</LegalLink>
            .
          </LegalItem>
          <LegalItem>
            Social Kirin's use and transfer to any other app of information received from Google
            APIs adheres to the{" "}
            <LegalLink href="https://developers.google.com/terms/api-services-user-data-policy">
              Google API Services User Data Policy
            </LegalLink>
            , including the Limited Use requirements.
          </LegalItem>
          <LegalItem>
            Users can revoke access at{" "}
            <LegalLink href="https://myaccount.google.com/permissions">
              https://myaccount.google.com/permissions
            </LegalLink>
            .
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="AI">
        <LegalList>
          <LegalItem>
            We do not train AI models on customer content, followers' content, or data from Meta
            or Google APIs.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="Contact">
        <LegalParagraph>
          Our full commitments are in the{" "}
          <LegalLink href="https://socialkirin.com/privacy">Privacy Policy</LegalLink> and{" "}
          <LegalLink href="https://socialkirin.com/terms">Terms of Service</LegalLink>. Contact:{" "}
          <strong>hello@b2bautomator.com</strong>
        </LegalParagraph>
      </LegalSection>
    </LegalShell>
  );
}