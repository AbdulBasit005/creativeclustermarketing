import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Values } from "@/components/sections/Values";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutLocation, leadership } from "@/content/team";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "About & Team | Virginia Neuromarketing Agency",
  description:
    "Meet Muhammad Ahmed, CEO, and Dr. Ahmed Ejaz, Founder & Chairman. Virginia-based Creative Clusters Marketing serving clients nationwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([{ name: "About", path: "/about" }])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="about & team"
            title="Virginia-based. Nationwide reach."
            description={aboutLocation}
          />
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-body text-espresso">
            <p>
              Creative Clusters Marketing exists to make psychology useful for
              operators — not as a buzzword, but as a system for attention,
              trust, and booked conversations.
            </p>
            <p>
              We work with car showrooms, wedding and nikkah businesses,
              universities, food trucks, and restaurants. Every engagement starts
              with listening, then a clear offer, then creative and media that
              respect how people actually decide.
            </p>
          </div>

          <h2 className="mt-20 font-display text-h2 font-bold text-espresso">
            Leadership
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {leadership.map((person) => (
              <li
                key={person.name}
                className="border border-taupe/40 bg-ivory p-8"
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {person.role}
                </p>
                <h3 className="mt-3 font-display text-h3 font-bold text-espresso">
                  {person.name}
                </h3>
                <p className="mt-4 text-body text-taupe">{person.bio}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <BookCta />
          </div>
        </Container>
      </section>

      <Values />
      <ConversionStrip source="about" />
      <FinalCTA />
    </>
  );
}
