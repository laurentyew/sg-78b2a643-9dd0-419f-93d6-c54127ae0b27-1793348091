import React from "react";
import {
  LegalSection,
  LegalSubheading,
  LegalParagraph,
  LegalList,
  LegalOrderedList,
  LegalItem,
  LegalLink,
  LegalTable,
  LegalTh,
  LegalTd,
} from "./LegalShell";

export function PrivacyContent() {
  return (
    <>
      <LegalSection id="who-we-are" title="1. Who we are">
        <LegalParagraph>
          Social Kirin ("<strong>Social Kirin</strong>", "<strong>we</strong>", "
          <strong>us</strong>", "<strong>our</strong>") is an AI-powered comment and
          direct-message moderation service operated by <strong>D AGE Technology</strong>{" "}
          (SSM registration no. <strong>PC0005997-A</strong>), a sole proprietorship
          registered in Malaysia.
        </LegalParagraph>
        <LegalParagraph>
          <strong>Address:</strong> Lintang Mayang Pasir 1, Bandar Bayan Baru, 11950 Bayan
          Lepas, Pulau Pinang, Malaysia
          <br />
          <strong>Email (privacy and data requests):</strong> hello@b2bautomator.com
        </LegalParagraph>
        <LegalParagraph>
          This Privacy Policy explains what personal data we collect, why we collect it,
          how we use, share and protect it, and the choices you have. It applies to our
          website, our application and any related services (together, the "
          <strong>Service</strong>").
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="2. Our role: controller and processor">
        <LegalList>
          <LegalItem>
            For <strong>account, billing and website data</strong> about you, we are the
            data controller (in Malaysian PDPA terms, the data user).
          </LegalItem>
          <LegalItem>
            For <strong>content from the social media accounts you connect</strong>{" "}
            (comments, messages and related metadata, including content written by your
            followers and other third parties), we act as a{" "}
            <strong>processor / service provider</strong> on your behalf. We process that
            content only to provide the Service to you, under your instructions. You, as
            our customer, decide how moderation rules are configured and are responsible
            for having a lawful basis to moderate content on your accounts.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="3. Information we collect">
        <LegalSubheading>3.1 Information you give us</LegalSubheading>
        <LegalList>
          <LegalItem>Name, email address and business or company name</LegalItem>
          <LegalItem>Account credentials (passwords are stored only in hashed form)</LegalItem>
          <LegalItem>
            Your Service configuration: moderation rules, brand-voice settings, keywords,
            templates
          </LegalItem>
          <LegalItem>Messages you send to us for support</LegalItem>
        </LegalList>

        <LegalSubheading>3.2 Billing information</LegalSubheading>
        <LegalParagraph>
          Payments are processed by <strong>Stripe</strong>. Card and payment details are
          entered directly with Stripe. We do not receive or store full card numbers. We
          receive limited billing information from Stripe, such as subscription status,
          plan, billing country and the last four digits of the card.
        </LegalParagraph>

        <LegalSubheading>3.3 Data from connected social media accounts</LegalSubheading>
        <LegalParagraph>
          When you choose to connect an account, we access, through the platforms' official
          APIs and only with the permissions you approve:
        </LegalParagraph>
        <LegalList>
          <LegalItem>
            <strong>Instagram (Meta):</strong> comments on your posts and the accounts that
            wrote them (username and ID), message content and metadata where DM features are
            enabled, and basic information about your professional account.
          </LegalItem>
          <LegalItem>
            <strong>Facebook Pages (Meta):</strong> comments on your Page's posts, commenter
            name and ID as made available by Meta, Page messages where DM features are
            enabled, and basic Page information.
          </LegalItem>
          <LegalItem>
            <strong>YouTube (Google):</strong> comments on your channel's videos, commenter
            display name and channel ID, and basic channel and video identifiers, obtained
            through the YouTube Data API after you authorise access with your Google account.
          </LegalItem>
          <LegalItem>
            <strong>Access tokens</strong> issued by these platforms, which allow the Service
            to act on the connected account. Tokens are stored encrypted and are never
            displayed or shared.
          </LegalItem>
        </LegalList>
        <LegalParagraph>
          We collect only what is needed for moderation, replies and the moderation history
          you see in your dashboard.
        </LegalParagraph>

        <LegalSubheading>
          3.4 Information about people who comment on or message your accounts
        </LegalSubheading>
        <LegalParagraph>
          Because the Service reads comments and messages sent to your accounts, we process
          the content and public identifiers (such as username or display name) of those
          people. We process this data on your behalf and only to perform moderation, replies
          and reporting for you.
        </LegalParagraph>

        <LegalSubheading>3.5 Technical information</LegalSubheading>
        <LegalParagraph>
          IP address, browser type, device and operating system, pages visited, and error and
          security logs, used to run, secure and troubleshoot the Service.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="4. How we use information">
        <LegalParagraph>We use personal data to:</LegalParagraph>
        <LegalOrderedList>
          <LegalItem>
            Provide the Service: detect spam and abusive comments, hide or flag them, draft or
            send replies you have enabled, and show moderation history.
          </LegalItem>
          <LegalItem>
            Operate your account, authenticate you, take payment and provide support.
          </LegalItem>
          <LegalItem>Keep the Service secure, prevent fraud and abuse, and fix errors.</LegalItem>
          <LegalItem>
            Send service and security messages (and marketing email only where you have opted
            in, which you can withdraw at any time).
          </LegalItem>
          <LegalItem>Comply with legal obligations and enforce our Terms of Service.</LegalItem>
        </LegalOrderedList>
        <LegalParagraph>
          <strong>Our legal bases</strong> (where such bases apply, for example in the
          EEA/UK) are: performance of our contract with you, our legitimate interests in
          running and securing the Service, compliance with law, and your consent where we ask
          for it.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="5. Meta platform data (Instagram and Facebook)">
        <LegalParagraph>
          We access Instagram and Facebook data only through Meta's official APIs, only with
          the permissions you grant, and only to provide the moderation, reply and messaging
          features you enable. We use Meta platform data in accordance with the Meta Platform
          Terms and Developer Policies. We do not sell Meta platform data, use it for
          advertising or profiling, or share it with data brokers. You can disconnect our
          access at any time in your Instagram or Facebook settings (see Section 11).
        </LegalParagraph>
      </LegalSection>

      <LegalSection id="google-api-disclosure" title="6. Google API Services disclosure (YouTube)">
        <LegalParagraph>
          Social Kirin uses <strong>YouTube API Services</strong> to read and moderate comments
          on channels that you connect. By connecting a YouTube channel, you also agree to be
          bound by the{" "}
          <LegalLink href="https://www.youtube.com/t/terms">YouTube Terms of Service</LegalLink>
          , and Google's use of your data is governed by the{" "}
          <LegalLink href="https://policies.google.com/privacy">Google Privacy Policy</LegalLink>
          .
        </LegalParagraph>
        <LegalParagraph>
          <strong>
            Social Kirin's use and transfer to any other app of information received from
            Google APIs will adhere to the{" "}
            <LegalLink href="https://developers.google.com/terms/api-services-user-data-policy">
              Google API Services User Data Policy
            </LegalLink>
            , including the Limited Use requirements.
          </strong>
        </LegalParagraph>
        <LegalParagraph>In practice this means:</LegalParagraph>
        <LegalList>
          <LegalItem>
            We use data obtained from Google/YouTube APIs <strong>only</strong> to provide and
            improve the user-facing moderation features you request.
          </LegalItem>
          <LegalItem>
            We <strong>do not</strong> transfer that data to others except as needed to provide
            those features (for example to our infrastructure and AI processing providers
            listed in Section 8), to comply with law, or as part of a merger or acquisition
            with notice to you.
          </LegalItem>
          <LegalItem>
            We <strong>do not</strong> use it for advertising, including retargeting,
            personalised or interest-based advertising.
          </LegalItem>
          <LegalItem>
            We <strong>do not</strong> allow humans to read it, unless you give us explicit
            consent for specific content, it is necessary for security purposes (such as
            investigating abuse), or it is required by law.
          </LegalItem>
          <LegalItem>
            We <strong>do not</strong> use Google user data to develop, improve or train
            generalised AI or machine-learning models.
          </LegalItem>
        </LegalList>
        <LegalParagraph>
          You can revoke Social Kirin's access to your Google account at any time at{" "}
          <LegalLink href="https://myaccount.google.com/permissions">
            https://myaccount.google.com/permissions
          </LegalLink>{" "}
          and by emailing us (Section 11). Upon revocation we stop accessing your channel and
          delete the stored YouTube data as described in Section 10.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="7. Artificial intelligence, and what we do not do">
        <LegalParagraph>
          The Service uses AI models to classify comments (for example spam, abuse, sentiment)
          and, where you enable it, to draft replies in your brand voice. To do this, the
          relevant comment or message text and the instructions you configured are sent to our
          AI routing provider (see Section 8).
        </LegalParagraph>
        <LegalParagraph>We commit that:</LegalParagraph>
        <LegalList>
          <LegalItem>
            <strong>
              We do not train, fine-tune or improve any AI model using your content, your
              followers' content, or data obtained from Meta or Google APIs.
            </strong>
          </LegalItem>
          <LegalItem>
            We instruct our AI providers not to retain that content beyond what is needed to
            return a result, and not to use it for training.
          </LegalItem>
          <LegalItem>
            We <strong>do not sell</strong> personal data and do not share it for cross-context
            behavioural advertising.
          </LegalItem>
          <LegalItem>
            We <strong>do not</strong> use platform data for advertising, profiling,
            surveillance, or to build marketing or lookalike audiences.
          </LegalItem>
          <LegalItem>
            Our staff do not read your connected-account content, except to provide support you
            request, to investigate security or abuse, or where the law requires.
          </LegalItem>
          <LegalItem>
            AI output can be wrong. Social Kirin gives you controls over what is automated, and
            you remain responsible for your moderation settings (see Terms of Service).
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection title="8. Who we share data with (sub-processors)">
        <LegalParagraph>
          We share personal data only with providers that help us run the Service, under
          contracts requiring them to protect it and use it only for our purposes:
        </LegalParagraph>
        <LegalTable>
          <thead>
            <tr>
              <LegalTh>Provider</LegalTh>
              <LegalTh>Purpose</LegalTh>
              <LegalTh>Data involved</LegalTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <LegalTd>
                <strong>Supabase</strong>
              </LegalTd>
              <LegalTd>
                Database, authentication and hosting (region: Singapore, Southeast Asia)
              </LegalTd>
              <LegalTd>
                Account data, configuration, connected-account content and metadata, encrypted
                tokens
              </LegalTd>
            </tr>
            <tr>
              <LegalTd>
                <strong>OpenRouter</strong> (and the underlying AI model providers it routes
                requests to)
              </LegalTd>
              <LegalTd>
                AI processing of comment and message text to classify content and draft replies
              </LegalTd>
              <LegalTd>
                Comment/message text and your configured instructions, sent per request
              </LegalTd>
            </tr>
            <tr>
              <LegalTd>
                <strong>Stripe</strong>
              </LegalTd>
              <LegalTd>Payment processing and subscription billing</LegalTd>
              <LegalTd>
                Billing details you provide to Stripe; subscription status
              </LegalTd>
            </tr>
          </tbody>
        </LegalTable>
        <LegalParagraph>
          We may also disclose information: (a) to the social platforms through their APIs as
          needed to perform the actions you request (such as hiding a comment); (b) where
          required by law, court order or a valid request from a public authority; (c) to
          protect our rights, users or the public from fraud, abuse or harm; and (d) in
          connection with a merger, acquisition or sale of the business, with notice to you. We
          will update this list when we add or change providers.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="9. International transfers">
        <LegalParagraph>
          We are based in Malaysia. Our providers may process data in other countries,
          including the United States and Singapore, depending on the provider and region.
          Where personal data is transferred outside your country, we rely on appropriate
          safeguards, such as contractual protections with our providers, in line with
          applicable law including Malaysia's Personal Data Protection Act 2010 ("
          <strong>PDPA</strong>"), the GDPR and UK GDPR where they apply.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="10. Data retention">
        <LegalTable>
          <thead>
            <tr>
              <LegalTh>Data</LegalTh>
              <LegalTh>How long we keep it</LegalTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <LegalTd>Account and configuration data</LegalTd>
              <LegalTd>
                While your account is active; deleted within 7 days of account closure or a
                verified deletion request
              </LegalTd>
            </tr>
            <tr>
              <LegalTd>Comment and message content from connected accounts</LegalTd>
              <LegalTd>
                Only as long as needed to show moderation history, and automatically deleted
                after <strong>90 days</strong>
              </LegalTd>
            </tr>
            <tr>
              <LegalTd>Platform access tokens</LegalTd>
              <LegalTd>
                Deleted promptly when you disconnect the account or revoke access, and in any
                case within 7 days
              </LegalTd>
            </tr>
            <tr>
              <LegalTd>Billing and tax records</LegalTd>
              <LegalTd>Up to seven years, as required by Malaysian tax and accounting rules</LegalTd>
            </tr>
            <tr>
              <LegalTd>Backups</LegalTd>
              <LegalTd>Deleted data is removed from backups within 30 days</LegalTd>
            </tr>
            <tr>
              <LegalTd>Security and error logs</LegalTd>
              <LegalTd>Up to 12 months</LegalTd>
            </tr>
          </tbody>
        </LegalTable>
        <LegalParagraph>
          When you disconnect an account, revoke our access on Instagram, Facebook or Google,
          or ask us to delete your data, we stop collecting data from that account and delete
          the associated data within 7 days, except for records we must keep by law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection id="data-deletion" title="11. How to delete your data or revoke access">
        <LegalList>
          <LegalItem>
            <strong>Disconnect or revoke access yourself</strong>
            <LegalList>
              <LegalItem>
                <em>Facebook / Instagram:</em> remove Social Kirin from your connected apps in
                your Facebook settings (Settings → Apps and Websites) or Instagram settings
                (Settings → Website permissions / Apps and websites).
              </LegalItem>
              <LegalItem>
                <em>Google / YouTube:</em> remove access at{" "}
                <LegalLink href="https://myaccount.google.com/permissions">
                  https://myaccount.google.com/permissions
                </LegalLink>
                .
              </LegalItem>
            </LegalList>
          </LegalItem>
          <LegalItem>
            <strong>Ask us to delete your data:</strong> email{" "}
            <strong>hello@b2bautomator.com</strong> with the subject "Data Deletion Request",
            from the email address registered to your account, and tell us which connected
            account(s) the request covers. We will confirm by reply and complete deletion
            within 7 days.
          </LegalItem>
          <LegalItem>
            <strong>If you are not our customer</strong> but your comment or message was
            processed through a customer's account, email us with the platform, your username
            or channel name, and the approximate date, and we will delete the data we hold or
            direct the request to the customer concerned.
          </LegalItem>
        </LegalList>
        <LegalParagraph>
          Full instructions are on our{" "}
          <LegalLink href="https://socialkirin.com/data-deletion">Data Deletion page</LegalLink>
          .
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="12. Your rights">
        <LegalParagraph>
          Depending on where you live, you may have the right to: access your personal data;
          correct it; delete it; withdraw consent; restrict or object to processing; receive a
          portable copy; and complain to your data protection authority.
        </LegalParagraph>
        <LegalList>
          <LegalItem>
            <strong>Malaysia (PDPA 2010, as amended):</strong> rights of access and correction,
            to withdraw consent, to limit processing, and (as amended) data portability. You may
            complain to the Personal Data Protection Commissioner.
          </LegalItem>
          <LegalItem>
            <strong>EEA/UK (GDPR):</strong> the rights above, plus the right to lodge a complaint
            with your supervisory authority.
          </LegalItem>
          <LegalItem>
            <strong>California (CCPA/CPRA):</strong> rights to know, delete, correct and opt out
            of sale or sharing. <strong>We do not sell or share personal information</strong> as
            those terms are defined.
          </LegalItem>
        </LegalList>
        <LegalParagraph>
          To exercise any right, email <strong>hello@b2bautomator.com</strong>. We may need to
          verify your identity, and we will respond within the period required by applicable
          law. We will not discriminate against you for exercising your rights.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="13. Security">
        <LegalParagraph>
          We use technical and organisational measures appropriate to the risk, including
          encryption of data in transit, encryption of platform access tokens at rest, access
          controls limited to what is necessary, and separation of customer data. No online
          service can be perfectly secure. If a breach affects your personal data, we will
          notify you and the relevant authorities as required by law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="14. Cookies">
        <LegalParagraph>
          We use only essential cookies and similar technologies needed to keep you signed in
          and to secure the Service. We do not use advertising cookies or third-party analytics
          trackers. If this changes, we will update this policy and request consent where
          required.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="15. Children">
        <LegalParagraph>
          The Service is for businesses and is not intended for anyone under 18. We do not
          knowingly collect personal data from children under 18. If you believe a child has
          provided us with personal data, contact us and we will delete it.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="16. Changes to this policy">
        <LegalParagraph>
          We may update this policy from time to time. We will post the new version here with a
          new "Last updated" date and, for material changes, notify you by email or in the
          Service before they take effect.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="17. Contact">
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