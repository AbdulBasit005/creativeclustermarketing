import { BlogGrid } from "@/components/sections/BlogGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Blog | Branding, Design & Marketing Insights",
  description:
    "Dive into the creative process, explore innovative design solutions, and discover how Creative Clusters Marketing helps brands stand out.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: "Blog", path: "/blog" }])} />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="insights"
            title="Explore our blog"
            description="Dive into the creative process, explore innovative design solutions, and discover how we help brands like yours stand out."
          />
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <BlogGrid />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
