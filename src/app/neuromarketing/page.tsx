import Link from "next/link";

import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  neuromarketingIntro,
  neuromarketingPrinciples,
} from "@/content/neuromarketing";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Our Neuromarketing Approach | Plain-Language Psychology",
  description:
    "How Creative Clusters uses decision psychology — attention, emotion, trust, and honest scarcity — to book more of the right conversations.",
  path: "/neuromarketing",
});

export default function NeuromarketingPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Neuromarketing", path: "/neuromarketing" },
        ])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="approach"
            title="Neuromarketing, without the jargon"
            description={neuromarketingIntro}
          />
          <div className="mt-10">
            <BookCta />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <ol className="space-y-12">
            {neuromarketingPrinciples.map((principle, index) => (
              <li
                key={principle.name}
                className="grid gap-4 border-t border-taupe/30 pt-10 md:grid-cols-[120px_1fr]"
              >
                <p className="font-display text-display text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2 className="font-display text-h3 font-bold text-espresso">
                    {principle.name}
                  </h2>
                  <p className="mt-4 max-w-3xl text-body text-taupe">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-16 max-w-2xl text-body text-espresso">
            Want the deeper brief? Download our{" "}
            <Link
              href="/resources/neuromarketing-guide"
              className="text-crimson underline"
            >
              free neuromarketing guide
            </Link>{" "}
            — or ask us to walk through these principles on a strategy call.
          </p>
        </Container>
      </section>

      <ConversionStrip source="neuromarketing" />
      <FinalCTA />
    </>
  );
}
