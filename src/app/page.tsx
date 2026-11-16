import { About } from "@/components/sections/About";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FAQ } from "@/components/sections/FAQ";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { PricingBand } from "@/components/sections/PricingBand";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { StatsAwards } from "@/components/sections/StatsAwards";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Values } from "@/components/sections/Values";
import { WorkReels } from "@/components/sections/WorkReels";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/faqs";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title:
    "Creative Marketing Agency Virginia | Branding, Web & Performance Marketing",
  description:
    "Creative Clusters Marketing is a Virginia-based full-service agency for branding, web development, SEO, digital marketing, content, video production, e-commerce, and app development.",
  path: "/",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Hero />
      <WorkReels />
      <TrustedBy />
      <About />
      <Services />
      <Values />
      <Process />
      <FeaturedWork />
      <StatsAwards />
      <PricingBand />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
