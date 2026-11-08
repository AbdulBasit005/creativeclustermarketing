import Link from "next/link";

import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { seoLocations } from "@/content/seoKeywords";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title:
    "Locations | Digital Marketing Agency Northern Virginia & DMV",
  description:
    "Creative Clusters serves Northern Virginia, Woodbridge VA, Fairfax VA, and Alexandria VA with social media, ads, SEO, web design, and videography.",
  path: "/locations",
  keywords: [
    "digital marketing agency northern virginia",
    "marketing agency woodbridge va",
    "digital marketing agency fairfax va",
    "digital marketing company alexandria va",
    "marketing agency near me",
  ],
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Locations", path: "/locations" },
        ])}
      />
      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="locations"
            title="Marketing agency near you across Northern Virginia"
            description="Local pages for NoVA, Woodbridge, Fairfax, and Alexandria — same free 20-minute strategy call from every market."
          />
        </Container>
      </section>
      <section className="bg-ivory py-24">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2">
            {seoLocations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="block h-full border border-taupe/40 p-8 transition-colors hover:bg-espresso hover:text-ivory"
                >
                  <h2 className="font-display text-h3 font-bold">{loc.name}</h2>
                  <p className="mt-4 text-sm text-taupe">{loc.answer}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ConversionStrip source="locations-hub" />
      <FinalCTA />
    </>
  );
}
