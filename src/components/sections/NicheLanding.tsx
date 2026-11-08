import Link from "next/link";

import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { GoogleReviews } from "@/components/conversion/GoogleReviews";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCaseStudy } from "@/content/caseStudies";
import type { Niche } from "@/content/niches";
import { pricingTiers } from "@/content/pricing";
import { site } from "@/constants/site";

export function NicheLanding({ niche }: { niche: Niche }) {
  const study = getCaseStudy(niche.caseStudySlug);
  const pkg = pricingTiers.find((t) => t.id === niche.packageId);

  return (
    <>
      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {niche.name}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-h1 font-bold text-balance">
            {niche.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-body text-sand">{niche.support}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <BookCta />
            <GoogleReviews onDark />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <SectionHeading
            eyebrow="the friction"
            title="Problems we solve in this niche"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {niche.problems.map((problem) => (
              <li
                key={problem}
                className="border-l-2 border-coral pl-5 text-body text-espresso"
              >
                {problem}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-espresso py-24 text-ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                onDark
                eyebrow="matching package"
                title={pkg ? `${pkg.name} · ${pkg.displayRange}` : "Custom package"}
                description={niche.packageWhy}
              />
              <div className="mt-8">
                <BookCta />
              </div>
              <p className="mt-4 text-sm text-sand">
                Full tiers on{" "}
                <Link href="/pricing" className="text-gold underline">
                  Pricing
                </Link>
                .
              </p>
            </div>
            {study ? (
              <div className="border border-ivory/15 p-8">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Case study · {study.client}
                </p>
                <p className="mt-4 font-display text-display text-gold">
                  {study.resultStat.value}
                </p>
                <p className="mt-2 text-sand">{study.resultStat.label}</p>
                <p className="mt-6 text-sm text-ivory/80">{study.result}</p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-6 inline-block text-sm font-medium text-gold hover:underline"
                >
                  Read the story →
                </Link>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <ConversionStrip
        source={`niche:${niche.slug}`}
        headline={site.ctaLabel}
      />
      <FinalCTA />
    </>
  );
}
