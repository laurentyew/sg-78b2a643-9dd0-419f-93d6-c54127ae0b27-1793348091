import React from "react";
import {
  LegalSection,
  LegalSubheading,
  LegalParagraph,
  LegalList,
  LegalItem,
  LegalLink,
} from "./LegalShell";

export function TermsContent() {
  return (
    <>
      <LegalSection title="1. Who we are and what these Terms cover">
        <LegalParagraph>
          These Terms of Service ("<strong>Terms</strong>") are a contract between you ("
          <strong>you</strong>", "<strong>Customer</strong>") and{" "}
          <strong>D AGE Technology</strong> (SSM registration no. PC0005997-A), a sole
          proprietorship registered in Malaysia, trading as <strong>Social Kirin</strong> ("
          <strong>Social Kirin</strong>", "<strong>we</strong>", "<strong>us</strong>"). They
          govern your access to and use of our website, application and services (the "
          <strong>Service</strong>"). By creating an account, connecting a social media account
          or otherwise using the Service, you agree to these Terms and to our{" "}
          <LegalLink href="https://socialkirin.com/privacy">Privacy Policy</LegalLink>. If you
          use the Service for an organisation, you confirm you have authority to bind it.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="2. Eligibility and business use">
        <LegalParagraph>
          The Service is provided for <strong>business and professional use</strong>. You must
          be at least 18 years old and able to form a binding contract. The Service is not
          offered for personal or household consumer use.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="3. The Service">
        <LegalParagraph>
          Social Kirin provides AI-assisted tools to moderate comments and messages on social
          media accounts you connect, including spam and abuse detection, hiding or flagging
          comments, drafting or sending replies in your configured brand voice, sentiment
          insights and related workflows. Currently supported platforms are{" "}
          <strong>Instagram, Facebook Pages and YouTube</strong>; supported features differ by
          platform and depend on what each platform's APIs permit. We may add, change or remove
          features, and we will give reasonable notice of changes that materially reduce
          functionality you have paid for.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="4. Your account">
        <LegalParagraph>
          You must provide accurate information, keep your credentials confidential, and are
          responsible for activity under your account. Tell us promptly at
          hello@b2bautomator.com if you suspect unauthorised access.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id="connected-platforms" title="5. Connected platforms">
        <LegalList>
          <LegalItem>
            <strong>You authorise us</strong> to access and act on the Instagram, Facebook and
            YouTube accounts you connect, limited to the permissions you approve, so we can read
            comments and messages and perform the moderation and reply actions you enable.
          </LegalItem>
          <LegalItem>
            You confirm you own or are authorised to manage each connected account, and that you
            comply with the platforms' terms and policies, including the{" "}
            <LegalLink href="https://developers.facebook.com/terms">
              Meta Terms and Platform Terms
            </LegalLink>
            , the{" "}
            <LegalLink href="https://help.instagram.com/581066165581870">
              Instagram Terms of Use
            </LegalLink>
            , the{" "}
            <LegalLink href="https://www.youtube.com/t/terms">YouTube Terms of Service</LegalLink>{" "}
            and the{" "}
            <LegalLink href="https://developers.google.com/terms/api-services-user-data-policy">
              Google API Services User Data Policy
            </LegalLink>
            . <strong>By connecting a YouTube channel, you agree to be bound by the YouTube Terms
            of Service.</strong>
          </LegalItem>
          <LegalItem>
            Platforms can change or withdraw API access, rate limits or permissions at any time.
            We are not responsible for features that stop working because a platform changes its
            rules or access, but we will tell you where we reasonably can.
          </LegalItem>
          <LegalItem>
            You can disconnect any account at any time (see Section 14 and our{" "}
            <LegalLink href="https://socialkirin.com/data-deletion">Data Deletion page</LegalLink>
            ).
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="6. Your responsibilities for moderation and automation">
        <LegalList>
          <LegalItem>
            <strong>You decide how the Service acts.</strong> You configure rules, thresholds,
            templates and which actions run automatically and which require your review. You are
            responsible for those settings and for actions taken under them.
          </LegalItem>
          <LegalItem>
            You are responsible for having any notices, consents or lawful basis needed to
            moderate and reply to comments and messages on your accounts, including for your
            followers and other third parties, and for complying with laws that apply to your
            business (advertising, consumer protection, privacy).
          </LegalItem>
          <LegalItem>
            We recommend reviewing AI-drafted replies, especially for sensitive topics, until you
            are confident in your settings.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="7. Acceptable use">
        <LegalParagraph>You agree not to:</LegalParagraph>
        <LegalList>
          <LegalItem>
            break any law or any platform's rules, or use the Service to send spam, unsolicited
            messages or deceptive content;
          </LegalItem>
          <LegalItem>
            use the Service to harass, threaten or discriminate against people, or to suppress
            legitimate criticism in a deceptive or unlawful way;
          </LegalItem>
          <LegalItem>impersonate any person or organisation;</LegalItem>
          <LegalItem>connect accounts you are not authorised to manage;</LegalItem>
          <LegalItem>
            collect, scrape or harvest data about individuals beyond what the Service provides,
            or use platform data for surveillance, profiling or advertising;
          </LegalItem>
          <LegalItem>
            upload malware, probe or bypass our security, or interfere with the Service;
          </LegalItem>
          <LegalItem>
            reverse engineer the Service or resell or sublicense it without our written
            permission;
          </LegalItem>
          <LegalItem>use output of the Service to build or train a competing AI model.</LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="8. AI features and their limits">
        <LegalParagraph>
          The Service uses AI that can make mistakes, such as wrongly hiding a legitimate
          comment or missing a harmful one, and drafted replies may be inaccurate or
          inappropriate. AI output is provided to assist you and is not professional advice. You
          remain responsible for the content published through your accounts.{" "}
          <strong>
            We do not use your content, your followers' content, or data from Meta or Google APIs
            to train AI models
          </strong>
          , as described in our Privacy Policy.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="9. Fees and billing">
        <LegalSubheading>9.1 Plans and price</LegalSubheading>
        <LegalParagraph>
          Fees are shown on our website or at checkout and are charged in US dollars (USD).
          Prices exclude taxes (such as Malaysian Sales and Service Tax or VAT/GST where
          applicable), which you are responsible for.
        </LegalParagraph>

        <LegalSubheading>9.2 Payment</LegalSubheading>
        <LegalParagraph>
          Payments are processed by Stripe. Subscriptions are billed in advance monthly or
          annually and renew automatically until cancelled. You authorise us and Stripe to charge
          your payment method. If a payment fails, we may suspend the Service until it is
          resolved.
        </LegalParagraph>

        <LegalSubheading>9.3 Cancellation</LegalSubheading>
        <LegalParagraph>
          You can cancel at any time; cancellation takes effect at the end of the current billing
          period, and you keep access until then.
        </LegalParagraph>

        <LegalSubheading>9.4 Refunds</LegalSubheading>
        <LegalParagraph>
          Fees are non-refundable except where required by law or where we state otherwise in
          writing. If you believe you were charged in error, email hello@b2bautomator.com within
          30 days and we will review it in good faith.
        </LegalParagraph>

        <LegalSubheading>9.5 Free trial</LegalSubheading>
        <LegalParagraph>
          New customers receive a <strong>7-day free trial</strong>. You can cancel at any time
          before the trial ends and you will not be charged. If you provided a payment method at
          sign-up and do not cancel before the trial ends, your payment method will be charged
          automatically for the plan you selected, and your subscription will continue under
          Section 9.2.
        </LegalParagraph>

        <LegalSubheading>9.6 Price changes</LegalSubheading>
        <LegalParagraph>
          We may change prices on at least 30 days' notice. Changes apply from your next renewal,
          and you may cancel before then.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="10. Your content and our licence to it">
        <LegalParagraph>
          You keep all rights in the content on your accounts and in your configuration ("
          <strong>Your Content</strong>"). You grant us a limited, non-exclusive, worldwide
          licence to host, process, analyse and transmit Your Content{" "}
          <strong>solely to provide, secure and support the Service to you</strong>. This licence
          does <strong>not</strong> allow us to use Your Content to train AI models or for
          advertising, and it ends when your content is deleted under our Privacy Policy.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="11. Our intellectual property and feedback">
        <LegalParagraph>
          The Service, including software, design, the Social Kirin name and logos, and
          documentation, is owned by us or our licensors and protected by law. We grant you a
          limited, non-exclusive, non-transferable right to use the Service during your
          subscription in accordance with these Terms. If you give us feedback or suggestions, we
          may use them without obligation to you.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="12. Privacy and data protection">
        <LegalParagraph>
          Our <LegalLink href="https://socialkirin.com/privacy">Privacy Policy</LegalLink>{" "}
          explains how we process personal data. For content from your connected accounts, we act
          as your processor and process it only on your instructions to provide the Service. If
          you need a data processing agreement, email hello@b2bautomator.com.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="13. Third-party services">
        <LegalParagraph>
          The Service depends on third-party services (including Meta, Google/YouTube, Supabase,
          OpenRouter and Stripe). We are not responsible for their availability, content or
          policies, and your use of them is subject to their own terms.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="14. Suspension and termination">
        <LegalList>
          <LegalItem>
            <strong>You</strong> may stop using the Service and close your account at any time.
            You can request deletion of your data at hello@b2bautomator.com.
          </LegalItem>
          <LegalItem>
            <strong>We</strong> may suspend or terminate your access if you materially breach
            these Terms or the platforms' rules, if required by law or by a platform, if
            non-payment continues after notice, or if your use creates a security or legal risk.
            Where reasonable we will give notice and a chance to fix the problem first.
          </LegalItem>
          <LegalItem>
            On termination your right to use the Service ends, and we delete your data in
            accordance with our Privacy Policy, except where we must keep records by law.
            Sections that by their nature should survive (including 10, 11, 15, 16, 17 and 18)
            will survive.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="15. Disclaimers">
        <LegalParagraph>
          The Service is provided "as is" and "as available". To the maximum extent permitted by
          law, we disclaim all warranties, express or implied, including merchantability, fitness
          for a particular purpose and non-infringement, and we do not warrant that the Service
          will be uninterrupted, error-free or that AI output will be accurate. Nothing in these
          Terms excludes rights that cannot be excluded under applicable law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="16. Limitation of liability">
        <LegalParagraph>
          To the maximum extent permitted by law: (a) we are not liable for indirect, incidental,
          special, consequential or punitive damages, or for lost profits, revenue, goodwill or
          data; and (b) our total liability for all claims relating to the Service is limited to
          the fees you paid us in the 12 months before the event giving rise to the claim.
          Nothing in these Terms limits liability that cannot be limited by law, including for
          fraud or wilful misconduct.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="17. Indemnity">
        <LegalParagraph>
          You agree to indemnify us against third-party claims, losses and reasonable legal costs
          arising from your breach of these Terms, your violation of law or a platform's rules,
          or Your Content or the settings and automated actions you configure, except to the
          extent caused by our breach or negligence.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="18. Governing law and disputes">
        <LegalParagraph>
          These Terms are governed by the laws of <strong>Malaysia</strong>. The courts of
          Malaysia have exclusive jurisdiction over any dispute arising from them, except that
          either party may seek urgent injunctive relief in any competent court. Before starting
          formal proceedings, please contact us at hello@b2bautomator.com so we can try to
          resolve the matter in good faith.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="19. Changes to these Terms">
        <LegalParagraph>
          We may update these Terms. We will post the new version with a new "Last updated" date
          and, for material changes, notify you by email or in the Service at least 30 days
          before they take effect where practicable. Continuing to use the Service after the
          effective date means you accept the updated Terms.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="20. General">
        <LegalParagraph>
          These Terms and the documents they reference are the entire agreement between us on
          their subject. If a provision is unenforceable, the rest remains in force. Failure to
          enforce a right is not a waiver. You may not assign these Terms without our consent; we
          may assign them in connection with a business transfer. We are not liable for failures
          caused by events beyond our reasonable control.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="21. Contact">
        <LegalParagraph>
          <strong>D AGE Technology</strong> (SSM no. PC0005997-A), trading as Social Kirin
          <br />
          Lintang Mayang Pasir 1, Bandar Bayan Baru, 11950 Bayan Lepas, Pulau Pinang, Malaysia
          <br />
          Email: <strong>hello@b2bautomator.com</strong>
        </LegalParagraph>
      </LegalSection>
    </>
  );
}