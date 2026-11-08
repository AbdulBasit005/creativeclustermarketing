import Link from "next/link";

import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/content/caseStudies";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Case Studies | Marketing Results in Numbers",
  description:
    "Short client stories with problems, what we did, and results in numbers — then book a free 20-minute strategy call.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="case studies"
            title="Client. Problem. What we did. Numbers."
            description="Eight short stories across our niches — built to help you decide if a strategy call is worth twenty minutes."
          />
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <ul className="space-y-16">
            {caseStudies.map((study) => (
              <li
                key={study.slug}
                className="grid gap-8 border-t border-taupe/30 pt-12 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {study.niche}
                  </p>
                  <h2 className="mt-3 font-display text-h3 font-bold text-espresso">
                    {study.client}
                  </h2>
                  <p className="mt-6 font-display text-display text-crimson">
                    {study.resultStat.value}
                  </p>
                  <p className="mt-2 text-taupe">{study.resultStat.label}</p>
                </div>
                <div className="space-y-5 text-body text-espresso">
                  <p>
                    <span className="font-semibold">Problem. </span>
                    {study.problem}
                  </p>
                  <p>
                    <span className="font-semibold">What we did. </span>
                    {study.whatWeDid}
                  </p>
                  <p>
                    <span className="font-semibold">Result. </span>
                    {study.result}
                  </p>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-block text-sm font-medium text-crimson hover:underline"
                  >
                    Open full story →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ConversionStrip source="case-studies" />
      <FinalCTA />
    </>
  );
}
