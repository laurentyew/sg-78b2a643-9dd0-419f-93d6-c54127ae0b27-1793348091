import { SEO } from "@/components/SEO";
import { Header } from "@/components/social-kirin/Header";
import { Footer } from "@/components/social-kirin/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | Social Kirin"
        description="Read Social Kirin's Terms of Service to understand your rights and responsibilities when using our AI-powered comment moderation platform."
        url="https://socialkirin.com/terms"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Terms of Service
              </h1>
              <p className="text-muted-foreground text-lg">
                Last Updated: September 29, 2026
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  1. Agreement to Terms
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Welcome to Social Kirin. These Terms of Service ("Terms") govern your access to and use of Social Kirin's AI-powered comment and DM moderation platform, including our website, services, and applications (collectively, the "Service").
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  2. Service Description
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Social Kirin provides AI-powered tools for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Automated comment and DM moderation across social media platforms</li>
                  <li>Spam detection and filtering</li>
                  <li>AI-generated responses matching your brand voice</li>
                  <li>Sentiment analysis and engagement insights</li>
                  <li>Automation workflows and triggers</li>
                  <li>Multi-platform social media management</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  3. Account Registration
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  3.1 Eligibility
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  You must be at least 18 years old and have the authority to enter into these Terms to use our Service. By registering, you represent and warrant that all information you provide is accurate and current.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  3.2 Account Security
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Ensuring your account information remains accurate and up-to-date</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  3.3 Social Media Connections
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  When connecting social media accounts, you grant us permission to access and manage comments, messages, and analytics on your behalf. You are responsible for ensuring you have the necessary rights and permissions for connected accounts.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  4. Acceptable Use
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  4.1 Permitted Use
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  You may use the Service for lawful business purposes consistent with these Terms and applicable laws.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  4.2 Prohibited Activities
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights of others</li>
                  <li>Transmit harmful code, viruses, or malware</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Service</li>
                  <li>Use the Service to send spam or unsolicited communications</li>
                  <li>Impersonate any person or entity</li>
                  <li>Harvest or collect user information without consent</li>
                  <li>Use the Service for any illegal or fraudulent activity</li>
                  <li>Resell or redistribute the Service without authorization</li>
                  <li>Use the Service to harass, abuse, or harm others</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  5. Subscription and Payment
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.1 Pricing and Plans
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We offer various subscription plans with different features and pricing. Current pricing is available on our website. We reserve the right to modify pricing with 30 days' notice to existing subscribers.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.2 Payment Terms
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                  <li>Payments are non-refundable except as required by law</li>
                  <li>You authorize us to charge your payment method automatically</li>
                  <li>Failed payments may result in service suspension</li>
                  <li>You are responsible for any taxes or fees</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.3 Cancellation and Refunds
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period. No refunds will be provided for partial months or unused service, except as required by law or at our sole discretion.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.4 Free Trial
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We may offer free trials for new users. Trial terms will be specified at sign-up. If you don't cancel before the trial ends, you will be charged for the selected plan.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  6. Intellectual Property
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  6.1 Our Rights
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  The Service, including all content, features, functionality, software, and design, is owned by Social Kirin and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express permission.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  6.2 Your Content
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  You retain ownership of content you submit to the Service. By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and analyze your content to provide and improve the Service, including training our AI models.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  6.3 Feedback
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  If you provide feedback, suggestions, or ideas about the Service, you grant us the right to use them without any obligation or compensation to you.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  7. AI and Automated Content
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  7.1 AI Accuracy
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  While we strive for accuracy, our AI systems may make errors in spam detection, sentiment analysis, or automated responses. You are responsible for reviewing and approving automated actions before they are published.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  7.2 Human Oversight
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  You agree to maintain appropriate human oversight of automated moderation and responses. We recommend reviewing AI-generated content before it's published to your audience.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  7.3 Training Data
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We may use anonymized and aggregated data from the Service to improve our AI models. Individual user data will not be shared or used in ways that identify you personally.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  8. Third-Party Services
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  The Service integrates with third-party platforms (Instagram, Facebook, TikTok). Your use of these integrations is subject to their respective terms and policies. We are not responsible for the actions, content, or policies of third-party services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  9. Disclaimer of Warranties
                </h2>
                <p className="text-foreground/90 leading-relaxed uppercase">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  10. Limitation of Liability
                </h2>
                <p className="text-foreground/90 leading-relaxed uppercase">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SOCIAL KIRIN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF THE SERVICE.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Our total liability to you for any claims arising from the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  11. Indemnification
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  You agree to indemnify and hold harmless Social Kirin and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Content you submit or publish through the Service</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  12. Termination
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  12.1 Termination by You
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  You may terminate your account at any time through your account settings or by contacting support.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  12.2 Termination by Us
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  We may suspend or terminate your account immediately if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>You breach these Terms</li>
                  <li>Your account has been inactive for an extended period</li>
                  <li>We are required to do so by law</li>
                  <li>Continued provision would cause harm to us or others</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  12.3 Effect of Termination
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  Upon termination, your right to use the Service ceases immediately. We will delete your data in accordance with our Privacy Policy, but may retain certain information as required by law or for legitimate business purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  13. Dispute Resolution
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  13.1 Governing Law
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  13.2 Arbitration
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  Any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules. You waive your right to participate in class actions.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  13.3 Exceptions
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  Either party may seek injunctive relief in court for intellectual property infringement or violation of confidentiality obligations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  14. Changes to Terms
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by email or through the Service. Continued use of the Service after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  15. General Provisions
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Social Kirin</li>
                  <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect</li>
                  <li><strong>Waiver:</strong> Failure to enforce any right does not waive that right</li>
                  <li><strong>Assignment:</strong> You may not assign these Terms without our consent. We may assign these Terms without restriction</li>
                  <li><strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  16. Contact Information
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Questions about these Terms? Contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-xl space-y-2">
                  <p className="text-foreground/90">
                    <strong>Email:</strong> legal@socialkirin.com
                  </p>
                  <p className="text-foreground/90">
                    <strong>Address:</strong> Social Kirin, Inc., 123 Tech Boulevard, San Francisco, CA 94105
                  </p>
                </div>
              </section>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Related: <Link href="/privacy" className="text-primary hover:text-primary/80 underline">Privacy Policy</Link>
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