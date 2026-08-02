import { Container } from "@/components/ui/Container";
import { site } from "@/constants/site";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Privacy Policy",
  description:
    "How Creative Clusters Marketing collects, uses, and protects your personal information.",
  path: "/privacy",
});

/* TODO: placeholder legal text — must be reviewed by a lawyer before launch. */
export default function PrivacyPage() {
  return (
    <section className="bg-ivory pb-24 pt-40">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-h1 font-bold text-espresso">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-taupe">Last updated: July 2026</p>

          <div className="mt-12 space-y-10 text-body text-espresso/90">
            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Information we collect
              </h2>
              <p className="mt-4">
                When you use our contact form or subscribe to our newsletter, we
                collect the information you provide: your name, email address,
                subject, service category of interest, field of work, and any
                message you include. We also collect standard technical data
                (browser type, pages visited, referring site) through analytics
                tools to understand how visitors use our site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                How we use your information
              </h2>
              <p className="mt-4">
                We use your contact details to respond to your inquiry, prepare
                proposals, and — if you subscribe — send occasional newsletter
                updates. We use aggregated analytics data to improve our website
                and services. We do not sell, rent, or trade your personal
                information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Cookies and analytics
              </h2>
              <p className="mt-4">
                Our site may use cookies and similar technologies for essential
                functionality and analytics. You can disable cookies in your
                browser settings; the site will remain functional, though some
                features may be limited.
              </p>
            </div>

            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Data retention and security
              </h2>
              <p className="mt-4">
                We keep inquiry data only as long as needed to serve your
                request or maintain our business relationship, and we apply
                reasonable technical and organizational measures to protect it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Your rights and contact
              </h2>
              <p className="mt-4">
                You may request access to, correction of, or deletion of your
                personal data at any time by emailing{" "}
                <a href={site.emailHref} className="text-crimson underline">
                  {site.email}
                </a>
                . For any privacy questions, contact us at the same address or
                call {site.phone}.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
