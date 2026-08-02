import { Container } from "@/components/ui/Container";
import { site } from "@/constants/site";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Terms of Service",
  description:
    "The terms and conditions governing use of the Creative Clusters Marketing website and services.",
  path: "/terms",
});

/* TODO: placeholder legal text — must be reviewed by a lawyer before launch. */
export default function TermsPage() {
  return (
    <section className="bg-ivory pb-24 pt-40">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-h1 font-bold text-espresso">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-taupe">Last updated: July 2026</p>

          <div className="mt-12 space-y-10 text-body text-espresso/90">
            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Use of this website
              </h2>
              <p className="mt-4">
                By accessing this website you agree to use it for lawful
                purposes only. The content, design, and branding on this site
                are the property of {site.name} and may not be reproduced
                without written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Services and proposals
              </h2>
              <p className="mt-4">
                Descriptions of services on this site are informational and do
                not constitute a binding offer. All engagements are governed by
                a separate written agreement or proposal covering scope,
                deliverables, timelines, and fees. Pricing shown on the site is
                indicative and subject to project scope.
              </p>
            </div>

            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Intellectual property
              </h2>
              <p className="mt-4">
                Unless otherwise agreed in writing, deliverables become the
                client&apos;s property upon full payment, while {site.name}{" "}
                retains the right to display completed work in its portfolio
                and marketing materials.
              </p>
            </div>

            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Limitation of liability
              </h2>
              <p className="mt-4">
                This website and its content are provided &quot;as is&quot;
                without warranties of any kind. {site.name} is not liable for
                indirect or consequential damages arising from use of this
                site. Marketing outcomes depend on many factors and specific
                results are not guaranteed unless expressly agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Contact
              </h2>
              <p className="mt-4">
                Questions about these terms? Email{" "}
                <a href={site.emailHref} className="text-crimson underline">
                  {site.email}
                </a>{" "}
                or call {site.phone}.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
