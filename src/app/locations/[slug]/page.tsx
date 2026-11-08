import Link from "next/link";
import { notFound } from "next/navigation";

import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { GoogleReviews } from "@/components/conversion/GoogleReviews";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { niches } from "@/content/niches";
import {
  getSeoLocation,
  seoLocations,
} from "@/content/seoKeywords";
import {
  generateBreadcrumbSchema,
  generateFaqSchema,
  generateSpeakableSchema,
  getMetadata,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoLocations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const loc = getSeoLocation(slug);
  if (!loc) return {};
  return getMetadata({
    title: loc.title,
    description: loc.description,
    path: `/locations/${loc.slug}`,
    keywords: loc.keywords,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getSeoLocation(slug);
  if (!loc) notFound();

  const locationFaqs = [
    {
      question: `Is Creative Clusters a marketing agency near me in ${loc.name}?`,
      answer: loc.answer,
    },
    {
      question: `What services do you offer in ${loc.name}, ${loc.state}?`,
      answer: `In ${loc.name} we deliver social media marketing and management, Meta and Google ads, local SEO, website design and development, commercial and short-form video, and restaurant or automotive packages — all ending in a free 20-minute strategy call.`,
    },
    {
      question: `How do I get started in ${loc.name}?`,
      answer: `Book a free 20-minute strategy call online, call +1 (703) 454-1448, or email creativeclustersmarketing@gmail.com. We are Virginia-based and serve ${loc.name} plus clients nationwide.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Locations", path: "/locations" },
          { name: loc.name, path: `/locations/${loc.slug}` },
        ])}
      />
      <JsonLd data={generateFaqSchema(locationFaqs)} />
      <JsonLd
        data={generateSpeakableSchema({
          headline: loc.headline,
          description: loc.description,
          path: `/locations/${loc.slug}`,
        })}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {loc.name}, {loc.state}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-h1 font-bold text-balance">
            {loc.headline}
          </h1>
          <AnswerBlock answer={loc.answer} onDark />
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <BookCta />
            <GoogleReviews onDark />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <h2 className="font-display text-h2 font-bold text-espresso">
            Services clients in {loc.name} hire us for
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {loc.keywords.map((keyword) => (
              <li
                key={keyword}
                className="border-l-2 border-coral pl-4 text-body capitalize text-espresso"
              >
                {keyword}
              </li>
            ))}
          </ul>

          <h2 className="mt-20 font-display text-h2 font-bold text-espresso">
            Niches we grow in {loc.shortName}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {niches.map((niche) => (
              <li key={niche.slug}>
                <Link
                  href={`/niches/${niche.slug}`}
                  className="block border border-taupe/40 p-5 font-display font-bold text-espresso transition-colors hover:bg-espresso hover:text-ivory"
                >
                  {niche.name}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-20 font-display text-h2 font-bold text-espresso">
            Nearby markets
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {seoLocations
              .filter((other) => other.slug !== loc.slug)
              .map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/locations/${other.slug}`}
                    className="border border-taupe/40 px-4 py-2 text-sm text-espresso hover:border-coral"
                  >
                    {other.name}
                  </Link>
                </li>
              ))}
          </ul>

          <div className="mt-20 space-y-8">
            <h2 className="font-display text-h2 font-bold text-espresso">
              Frequently asked in {loc.name}
            </h2>
            {locationFaqs.map((faq) => (
              <div key={faq.question} className="border-t border-taupe/30 pt-6">
                <h3 className="font-display text-h3 font-bold text-espresso">
                  {faq.question}
                </h3>
                <p className="aeo-answer mt-3 text-body text-taupe">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ConversionStrip source={`location:${loc.slug}`} />
      <FinalCTA />
    </>
  );
}
