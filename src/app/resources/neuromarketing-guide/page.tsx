import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GuideGateForm } from "@/components/sections/GuideGateForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Free Neuromarketing Guide | Email Download",
  description:
    "Download Creative Clusters' plain-language neuromarketing guide. Enter your email to get the PDF and book a free strategy call when you're ready.",
  path: "/resources/neuromarketing-guide",
});

export default function GuidePage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Resources", path: "/resources/neuromarketing-guide" },
          {
            name: "Neuromarketing Guide",
            path: "/resources/neuromarketing-guide",
          },
        ])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="free guide"
            title="The neuromarketing playbook for operators"
            description="A short, plain-language guide to attention, emotion, trust, and offers that book conversations — written for owners, not academics."
          />
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Inside the guide
              </h2>
              <ul className="mt-8 space-y-4 text-body text-taupe">
                <li>• Why most campaigns lose the first three seconds</li>
                <li>• How to write offers that feel fair and urgent</li>
                <li>• Where to place proof so doubt drops</li>
                <li>• A one-page checklist before you spend another ad dollar</li>
              </ul>
              <div className="mt-10">
                <BookCta variant="outline" className="text-espresso" />
              </div>
            </div>
            <div className="border border-taupe/40 p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Email required
              </p>
              <p className="mt-3 text-sm text-taupe">
                We send the guide link and occasional strategy notes. Unsubscribe
                anytime.
              </p>
              <div className="mt-6">
                <GuideGateForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ConversionStrip source="guide-landing" />
      <FinalCTA />
    </>
  );
}
