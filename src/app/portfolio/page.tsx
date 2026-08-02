import { FinalCTA } from "@/components/sections/FinalCTA";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { PortfolioReels } from "@/components/sections/PortfolioReels";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Portfolio | Branding, Web & Marketing Case Studies",
  description:
    "Explore Creative Clusters Marketing's featured projects — branding, website design, digital marketing, and creative campaigns that delivered real results.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }])}
      />

      <section className="bg-espresso pb-16 pt-40 text-ivory md:pb-20">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="Showcasing Our Outstanding Projects"
            title="Imagine - Create - Innovate"
            description="A selection of projects where strategy and creative delivered measurable results."
          />
        </Container>
      </section>

      <PortfolioReels />

      <section className="bg-ivory pb-24 pt-4">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
