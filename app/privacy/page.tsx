import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Anfa Softworks LLC collects, uses, and protects information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How Anfa Softworks LLC collects, uses, and protects information."
      lastUpdated="May 11, 2026"
      sections={[
        {
          heading: "Introduction",
          body: (
            <p>
              This Privacy Policy describes how Anfa Softworks LLC (&ldquo;Anfa Softworks,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a limited liability company registered in New Mexico, United States, collects, uses, and protects information when you visit our website at anfasoftworks.com or engage with our services. By using our website or services, you agree to the terms of this policy.
            </p>
          ),
        },
        {
          heading: "Information we collect",
          body: (
            <>
              <p>We collect the following types of information:</p>
              <p>
                <strong>Information you provide directly:</strong> When you submit our contact form, send us an email, or sign a contract with us, we collect the information you share — typically your name, email address, company, project details, and any other content you include in your message.
              </p>
              <p>
                <strong>Information collected automatically:</strong> When you visit our website, we may automatically collect technical information including your IP address, browser type, operating system, referring URL, pages visited, and timestamps. This information is used in aggregate to improve the site.
              </p>
            </>
          ),
        },
        {
          heading: "How we use information",
          body: (
            <p>
              We use the information we collect to respond to inquiries, deliver services we have contracted to provide, send service-related communications, improve our website and offerings, comply with legal obligations, and protect against fraud or misuse. We do not sell your personal information to third parties.
            </p>
          ),
        },
        {
          heading: "Cookies and tracking",
          body: (
            <p>
              Our website may use cookies and similar technologies to remember your preferences and analyze usage. You can disable cookies in your browser settings, but some features of the site may not function properly without them.
            </p>
          ),
        },
        {
          heading: "Third-party services",
          body: (
            <p>
              We use a small number of trusted third-party services to operate our business, including email hosting, web analytics, and (where applicable) payment processing. These providers receive only the information necessary to perform their function and are contractually required to protect it.
            </p>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We retain personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Client project communications are typically retained for the duration of the engagement plus seven years for accounting and tax purposes.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the use of your personal information, object to processing, and request portability of your data. Under the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), additional rights may apply.
              </p>
              <p>
                To exercise any of these rights, contact us at <a href="mailto:legal@anfasoftworks.com">legal@anfasoftworks.com</a>. We will respond within 30 days.
              </p>
            </>
          ),
        },
        {
          heading: "Children's privacy",
          body: (
            <p>
              Our website and services are not directed to children under 13. We do not knowingly collect personal information from children. If we discover such collection has occurred, we will delete it promptly.
            </p>
          ),
        },
        {
          heading: "Changes to this policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Material changes will be communicated through the website or by direct notice to active clients.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              For any questions about this Privacy Policy or our data practices, contact{" "}
              <a href="mailto:legal@anfasoftworks.com">legal@anfasoftworks.com</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
