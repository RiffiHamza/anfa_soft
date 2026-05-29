import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Anfa Softworks website and services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The terms governing your use of the Anfa Softworks website and services."
      lastUpdated="May 11, 2026"
      sections={[
        {
          heading: "Acceptance of terms",
          body: (
            <p>
              By accessing or using the Anfa Softworks website (anfasoftworks.com) or engaging Anfa Softworks LLC (&ldquo;Anfa Softworks,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) for services, you agree to these Terms of Service. If you do not agree, do not use the website or services.
            </p>
          ),
        },
        {
          heading: "Services",
          body: (
            <p>
              Anfa Softworks provides custom software development, design, and consulting services. The specific scope, deliverables, fees, and timeline of any engagement will be defined in a written agreement or statement of work between Anfa Softworks and the client. These Terms supplement, but do not replace, that agreement.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <>
              <p>
                Upon full payment of agreed-upon fees, ownership of deliverables produced for a client under a signed engagement transfers to that client, unless otherwise specified in the engagement agreement.
              </p>
              <p>
                Anfa Softworks retains rights to general knowledge, methodologies, open-source contributions, and any reusable internal libraries developed before or during the engagement. The Anfa Softworks brand, website content, and original site assets remain the property of Anfa Softworks.
              </p>
            </>
          ),
        },
        {
          heading: "Acceptable use",
          body: (
            <p>
              You agree not to use the website or services to violate any law, infringe the rights of others, distribute malware, attempt unauthorized access, scrape content at scale, or otherwise interfere with the operation of the site. We may suspend or terminate access for any user who violates these rules.
            </p>
          ),
        },
        {
          heading: "Disclaimers",
          body: (
            <p>
              The website and all content on it are provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied. We do not guarantee that the site will be uninterrupted, error-free, or free of viruses or other harmful components. Services provided under a signed engagement are warranted as described in that engagement only.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              To the maximum extent permitted by applicable law, Anfa Softworks LLC&rsquo;s total liability arising out of or relating to use of the website or services will not exceed the fees actually paid by the client for the services giving rise to the claim during the twelve months preceding the claim. Anfa Softworks will not be liable for indirect, incidental, special, or consequential damages.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These Terms are governed by the laws of the State of New Mexico, United States, without regard to its conflict-of-law principles. Any dispute arising out of these Terms will be brought exclusively in the state or federal courts located in Bernalillo County, New Mexico, and you consent to personal jurisdiction in those courts.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may revise these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision. Continued use of the website or services after a change constitutes acceptance of the revised Terms.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              For any questions about these Terms, contact{" "}
              <a href="mailto:legal@anfasoftworks.com">legal@anfasoftworks.com</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
