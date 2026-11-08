import { notFound } from "next/navigation";

import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return getMetadata({
    title: `${study.client} Case Study | ${study.resultStat.value} ${study.resultStat.label}`,
    description: study.result,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Case Studies", path: "/case-studies" },
          { name: study.client, path: `/case-studies/${study.slug}` },
        ])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {study.niche}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-h1 font-bold">
            {study.client}
          </h1>
          <p className="mt-8 font-display text-display text-gold">
            {study.resultStat.value}
          </p>
          <p className="mt-2 text-sand">{study.resultStat.label}</p>
          <div className="mt-10">
            <BookCta />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-body text-espresso">
            <div>
              <h2 className="font-display text-h3 font-bold">Problem</h2>
              <p className="mt-4">{study.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-h3 font-bold">What we did</h2>
              <p className="mt-4">{study.whatWeDid}</p>
            </div>
            <div>
              <h2 className="font-display text-h3 font-bold">Result</h2>
              <p className="mt-4">{study.result}</p>
            </div>
          </div>
        </Container>
      </section>

      <ConversionStrip source={`case-study:${study.slug}`} />
      <FinalCTA />
    </>
  );
}
