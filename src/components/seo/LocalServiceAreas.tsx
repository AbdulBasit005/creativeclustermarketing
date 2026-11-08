import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { seoLocations, serviceKeywords } from "@/content/seoKeywords";

export function LocalServiceAreas() {
  return (
    <section className="border-t border-taupe/30 bg-ivory py-24" aria-labelledby="service-areas-heading">
      <Container>
        <SectionHeading
          eyebrow="service areas & specialties"
          title="Northern Virginia marketing — local reach, nationwide delivery"
        />
        <p id="service-areas-heading" className="sr-only">
          Service areas and specialties
        </p>
        <p className="aeo-answer mt-6 max-w-3xl text-body text-taupe">
          Creative Clusters Marketing is a creative marketing agency and full
          service marketing agency in Virginia — a digital marketing agency for
          Northern Virginia, Woodbridge VA, Fairfax VA, and Alexandria VA, with
          social media, ads, SEO, web design, and videography for restaurants,
          showrooms, and small businesses.
        </p>

        <h3 className="mt-14 font-display text-h3 font-bold text-espresso">
          Locations we serve
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {seoLocations.map((loc) => (
            <li key={loc.slug}>
              <Link
                href={`/locations/${loc.slug}`}
                className="block border border-taupe/40 p-5 transition-colors hover:border-coral hover:bg-espresso hover:text-ivory"
              >
                <span className="font-display text-lg font-bold">
                  {loc.name}, {loc.state}
                </span>
                <span className="mt-2 block text-sm text-taupe">
                  Marketing agency near you
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="mt-14 font-display text-h3 font-bold text-espresso">
          What teams hire us for
        </h3>
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-taupe">
          {serviceKeywords.map((keyword) => (
            <li key={keyword}>
              <span className="text-espresso/80">{keyword}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
