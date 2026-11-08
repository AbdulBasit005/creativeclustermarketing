import Link from "next/link";

import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { niches } from "@/content/niches";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Industry Niches | Showrooms, Weddings, Universities & More",
  description:
    "Explore neuromarketing pages for car showrooms, weddings & nikkah, universities, food trucks, and restaurants.",
  path: "/niches",
});

export default function NichesPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([{ name: "Niches", path: "/niches" }])}
      />
      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="niches"
            title="Built for the businesses we know best"
            description="Pick your vertical. See the problems, the package fit, the proof — then book the call."
          />
        </Container>
      </section>
      <section className="bg-ivory py-24">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {niches.map((niche) => (
              <li key={niche.slug}>
                <Link
                  href={`/niches/${niche.slug}`}
                  className="group block h-full border border-taupe/40 p-8 transition-colors hover:border-coral hover:bg-espresso"
                >
                  <h2 className="font-display text-h3 font-bold text-espresso group-hover:text-ivory">
                    {niche.name}
                  </h2>
                  <p className="mt-4 text-sm text-taupe group-hover:text-sand">
                    {niche.support}
                  </p>
                  <p className="mt-6 font-display text-2xl font-bold text-crimson group-hover:text-gold">
                    {niche.proofStat.value}
                  </p>
                  <p className="mt-1 text-sm text-taupe group-hover:text-sand">
                    {niche.proofStat.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ConversionStrip source="niches-hub" />
      <FinalCTA />
    </>
  );
}
