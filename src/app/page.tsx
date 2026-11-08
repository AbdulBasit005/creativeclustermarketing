import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { NicheTiles } from "@/components/sections/NicheTiles";
import { ResultsProof } from "@/components/sections/ResultsProof";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { JsonLd } from "@/components/seo/JsonLd";
import { LocalServiceAreas } from "@/components/seo/LocalServiceAreas";
import { AnswerBlock } from "@/components/seo/AnswerBlock";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/content/faqs";
import { allKeywords, primaryKeywords } from "@/content/seoKeywords";
import { site } from "@/constants/site";
import {
  generateFaqSchema,
  generateServiceSchema,
  generateSpeakableSchema,
  getMetadata,
} from "@/lib/seo";

export const metadata = getMetadata({
  title:
    "Digital Marketing Agency Northern Virginia | Creative Clusters",
  description:
    "Full-service digital marketing agency in Northern Virginia — social media, Meta ads, Google ads, local SEO, website design, and videography for restaurants, showrooms, and small businesses. Book a free strategy call.",
  path: "/",
  keywords: [...primaryKeywords, ...allKeywords.slice(0, 30)],
});

export default function Home() {
  return (
    <>
      <JsonLd data={generateFaqSchema(faqs)} />
      <JsonLd
        data={generateSpeakableSchema({
          headline:
            "Digital marketing agency Northern Virginia | Creative Clusters",
          description: site.description,
          path: "/",
        })}
      />
      <JsonLd
        data={generateServiceSchema([
          "Social media marketing",
          "Meta and Facebook ads management",
          "Google ads management",
          "Local SEO services",
          "Website design and development",
          "Commercial videography",
          "Restaurant marketing",
          "Automotive social media marketing",
        ])}
      />
      <Hero />
      <section className="bg-ivory pb-4 pt-12">
        <Container>
          <AnswerBlock
            answer="Creative Clusters Marketing is a creative marketing agency and full service marketing agency in Virginia — a digital marketing agency for Northern Virginia businesses that need social media management, paid ads, local SEO, website design, and short-form video production that leads to booked calls."
          />
        </Container>
      </section>
      <NicheTiles />
      <ResultsProof />
      <TrustedBy />
      <Testimonials />
      <LocalServiceAreas />
      <ConversionStrip source="homepage" headline={site.ctaLabel} />
      <FAQ />
      <FinalCTA />
    </>
  );
}
