import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WebinarForm } from "@/components/sections/WebinarForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Webinar Signup | Neuromarketing for Niche Brands",
  description:
    "Register for Creative Clusters' live webinar on psychology-driven marketing for showrooms, restaurants, weddings, and more.",
  path: "/webinar",
});

export default function WebinarPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([{ name: "Webinar", path: "/webinar" }])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="live session"
            title="Booked calls from psychology — not louder ads"
            description="A 45-minute working session with Muhammad Ahmed on how niche brands use neuromarketing to fill calendars."
          />
          <p className="mt-6 text-sm text-sand">
            Next session: first Thursday of each month · 12:00 PM ET · Online
          </p>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Agenda
              </h2>
              <ol className="mt-8 space-y-4 text-body text-taupe">
                <li>01 — Why attention fails before the offer lands</li>
                <li>02 — Offer structures that protect margin</li>
                <li>03 — Proof placement that lowers risk</li>
                <li>04 — Turning webinar interest into strategy calls</li>
              </ol>
              <div className="mt-10">
                <BookCta variant="outline" className="text-espresso" />
              </div>
            </div>
            <div className="border border-taupe/40 p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Register
              </p>
              <div className="mt-6">
                <WebinarForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ConversionStrip source="webinar" />
      <FinalCTA />
    </>
  );
}
