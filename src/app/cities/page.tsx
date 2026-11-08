import Link from "next/link";

import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cities } from "@/content/cities";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "City Marketing Pages | Local Neuromarketing",
  description:
    "Local marketing pages for Northern Virginia, Richmond, and Charlotte — with niche links and local proof.",
  path: "/cities",
});

export default function CitiesPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([{ name: "Cities", path: "/cities" }])}
      />
      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="cities"
            title="Local headlines. Nationwide playbooks."
            description="Three metro pages with niche links and local proof — book the same free strategy call from any market."
          />
        </Container>
      </section>
      <section className="bg-ivory py-24">
        <Container>
          <ul className="grid gap-6 md:grid-cols-3">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/cities/${city.slug}`}
                  className="block h-full border border-taupe/40 p-8 transition-colors hover:bg-espresso hover:text-ivory"
                >
                  <h2 className="font-display text-h3 font-bold">{city.name}</h2>
                  <p className="mt-3 text-sm text-taupe group-hover:text-sand">
                    {city.metro}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ConversionStrip source="cities-hub" />
      <FinalCTA />
    </>
  );
}
