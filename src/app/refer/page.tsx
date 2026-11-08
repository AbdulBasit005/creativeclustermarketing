import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ReferralForm } from "@/components/sections/ReferralForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Referral Program | Refer a Business, Get One Month Free",
  description:
    "Refer a business to Creative Clusters Marketing. When they become a client, you get one month free on your retainer.",
  path: "/refer",
});

export default function ReferPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Referral Program", path: "/refer" },
        ])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="referral program"
            title="Refer a business, get one month free"
            description="Introduce a business that becomes a client. When they start a retainer, you receive one month free on your plan."
          />
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-4 text-body text-espresso">
              <p>
                Tell us who to talk to. We handle the outreach respectfully —
                your name is only shared if you want credit on the intro.
              </p>
              <ul className="space-y-3 text-taupe">
                <li>• Applies to new clients on a monthly retainer</li>
                <li>• One free month credited after their first paid month</li>
                <li>• Existing clients and self-referrals are not eligible</li>
              </ul>
            </div>
            <ReferralForm />
          </div>
        </Container>
      </section>

      <ConversionStrip source="referral" />
      <FinalCTA />
    </>
  );
}
