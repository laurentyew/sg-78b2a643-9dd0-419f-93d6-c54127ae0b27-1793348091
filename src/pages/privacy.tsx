import { SEO } from "@/components/SEO";
import { Header } from "@/components/social-kirin/Header";
import { Footer } from "@/components/social-kirin/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Social Kirin"
        description="Learn how Social Kirin collects, uses, and protects your data. Our privacy policy explains our commitment to data security and user privacy."
        url="https://socialkirin.com/privacy"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-lg">
                Last Updated: September 29, 2026
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  1. Introduction
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Welcome to Social Kirin ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered comment and DM moderation platform.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  By using Social Kirin, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  2. Information We Collect
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  2.1 Personal Information
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Name and email address</li>
                  <li>Account credentials</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Business information and company name</li>
                  <li>Social media account access tokens (for service functionality)</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  2.2 Social Media Data
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  When you connect your social media accounts (Instagram, Facebook, TikTok), we collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Comments and direct messages on your posts</li>
                  <li>User engagement data (likes, shares, replies)</li>
                  <li>Post metadata and performance metrics</li>
                  <li>Account analytics and insights</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  2.3 Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log data and error reports</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  3. How We Use Your Information
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Provide, maintain, and improve our AI moderation services</li>
                  <li>Process transactions and send related information</li>
                  <li>Train and improve our AI models for better spam detection</li>
                  <li>Send administrative information, updates, and security alerts</li>
                  <li>Respond to customer service requests and support needs</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  4. AI and Machine Learning
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Social Kirin uses artificial intelligence to analyze comments and messages. Your content may be used to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Train and improve our spam detection algorithms</li>
                  <li>Develop sentiment analysis capabilities</li>
                  <li>Enhance brand voice matching features</li>
                  <li>Improve automated response generation</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  We anonymize and aggregate data used for AI training to protect user privacy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  5. Information Sharing and Disclosure
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We may share your information in the following circumstances:
                </p>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.1 Service Providers
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We share data with trusted third-party service providers who assist us in operating our platform, including hosting, analytics, payment processing, and customer support.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.2 Social Media Platforms
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We interact with social media platforms (Instagram, Facebook, TikTok) through their official APIs to provide our services. Your use is subject to their respective privacy policies.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.3 Legal Requirements
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We may disclose your information if required by law or in response to valid requests by public authorities.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.4 Business Transfers
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  6. Data Security
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  7. Data Retention
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. We will also retain and use your information to comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  When you delete your account, we will delete or anonymize your personal information within 90 days, unless we are required to retain it for legal purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  8. Your Privacy Rights
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
                  <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  To exercise these rights, please contact us at privacy@socialkirin.com.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  9. Cookies and Tracking Technologies
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  10. Children's Privacy
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  11. International Data Transfers
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws different from your jurisdiction. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. For material changes, we will provide additional notice via email.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  13. Contact Us
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-xl space-y-2">
                  <p className="text-foreground/90">
                    <strong>Email:</strong> privacy@socialkirin.com
                  </p>
                  <p className="text-foreground/90">
                    <strong>Address:</strong> Social Kirin, Inc., 123 Tech Boulevard, San Francisco, CA 94105
                  </p>
                </div>
              </section>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Related: <Link href="/terms" className="text-primary hover:text-primary/80 underline">Terms of Service</Link>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}