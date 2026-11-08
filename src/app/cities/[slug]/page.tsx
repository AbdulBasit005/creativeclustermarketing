import Link from "next/link";
import { notFound } from "next/navigation";

import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { GoogleReviews } from "@/components/conversion/GoogleReviews";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cities, getCity } from "@/content/cities";
import { niches } from "@/content/niches";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return getMetadata({
    title: city.title,
    description: city.description,
    path: `/cities/${city.slug}`,
  });
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const cityNiches = niches.filter((n) => city.nicheSlugs.includes(n.slug));

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Cities", path: "/cities" },
          { name: city.name, path: `/cities/${city.slug}` },
        ])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {city.metro}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-h1 font-bold text-balance">
            {city.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-body text-sand">{city.support}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <BookCta />
            <GoogleReviews onDark />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <SectionHeading eyebrow="local proof" title={`Why ${city.name}`} />
          <ul className="mt-10 space-y-4">
            {city.localProof.map((item) => (
              <li
                key={item}
                className="border-l-2 border-coral pl-5 text-body text-espresso"
              >
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-20 font-display text-h3 font-bold text-espresso">
            Niches we serve here
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityNiches.map((niche) => (
              <li key={niche.slug}>
                <Link
                  href={`/niches/${niche.slug}`}
                  className="block border border-taupe/40 p-6 transition-colors hover:bg-espresso hover:text-ivory"
                >
                  <span className="font-display text-lg font-bold">
                    {niche.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ConversionStrip source={`city:${city.slug}`} />
      <FinalCTA />
    </>
  );
}
