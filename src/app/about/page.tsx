import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Values } from "@/components/sections/Values";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "About Us | Virginia Creative & Marketing Agency",
  description:
    "Creative Clusters Marketing is a Virginia-based team of strategists, creatives, and marketers building brands that perform — beyond design, toward measurable growth.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: "About", path: "/about" }])} />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="about us"
            title="We go beyond design — we build brands that perform"
            description="A Virginia-based team of strategists, creatives, and marketers turning ideas into impactful digital experiences."
          />
        </Container>
      </section>

      <About />

      <section className="bg-ivory pb-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-body text-espresso">
            <p>
              Creative Clusters started with a simple conviction: great creative
              work should be accountable to results. Too many brands invest in
              beautiful design that never moves the needle, or in aggressive
              marketing that erodes the very brand it&apos;s meant to grow. We
              built our studio to close that gap — pairing strategists who live
              in the data with creatives who obsess over craft.
            </p>
            <p>
              Today we partner with startups, e-commerce brands, nonprofits, and
              established companies across the US. Every engagement starts the
              same way: we listen. We dig into your market, your audience, and
              your goals before a single pixel is placed. That discipline is why
              our work doesn&apos;t just look premium — it performs, campaign
              after campaign.
            </p>
            <p>
              Whether you need a complete rebrand, a website that converts, or a
              full-funnel growth engine, you&apos;ll work directly with the
              people doing the work — no layers, no hand-offs, no surprises.
            </p>
          </div>
        </Container>
      </section>

      <Values />

      <FinalCTA />
    </>
  );
}
