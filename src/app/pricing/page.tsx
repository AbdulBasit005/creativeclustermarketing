import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  applyJune2027Increase,
  pricingAddOns,
  pricingNote,
  pricingTiers,
} from "@/content/pricing";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = getMetadata({
  title: "Marketing Pricing Plans | Starter, Growth & Premium",
  description:
    "Transparent monthly marketing retainers for niche brands. Book a free 20-minute strategy call to match the right package.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([{ name: "Pricing", path: "/pricing" }])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="pricing"
            title="Clear retainers. One next step."
            description="Every package is scoped on a free strategy call — we never self-checkout growth."
          />
          {applyJune2027Increase ? (
            <p className="mt-6 max-w-2xl text-sm text-sand">{pricingNote}</p>
          ) : null}
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.id}
                className={cn(
                  "flex flex-col border p-8",
                  "highlighted" in tier && tier.highlighted
                    ? "border-coral bg-espresso text-ivory"
                    : "border-taupe/40 bg-ivory text-espresso"
                )}
              >
                <p
                  className={cn(
                    "font-display text-xs font-semibold uppercase tracking-[0.2em]",
                    "highlighted" in tier && tier.highlighted
                      ? "text-gold"
                      : "text-gold"
                  )}
                >
                  {tier.name}
                </p>
                <p className="mt-4 font-display text-h2 font-bold">
                  {tier.displayRange}
                </p>
                <p
                  className={cn(
                    "mt-4 text-sm",
                    "highlighted" in tier && tier.highlighted
                      ? "text-sand"
                      : "text-taupe"
                  )}
                >
                  {tier.blurb}
                </p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {tier.includes.map((item) => (
                    <li key={item} className="border-t border-current/10 pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <BookCta
                    variant={
                      "highlighted" in tier && tier.highlighted
                        ? "primary"
                        : "outline"
                    }
                    className={
                      "highlighted" in tier && tier.highlighted
                        ? undefined
                        : "text-espresso"
                    }
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="font-display text-h3 font-bold text-espresso">
              Add-ons
            </h2>
            <ul className="mt-8 divide-y divide-taupe/30 border-y border-taupe/30">
              {pricingAddOns.map((addon) => (
                <li
                  key={addon.name}
                  className="flex flex-wrap items-baseline justify-between gap-4 py-4"
                >
                  <span className="text-espresso">{addon.name}</span>
                  <span className="font-display text-sm font-semibold text-crimson">
                    {addon.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ConversionStrip source="pricing" />
      <FinalCTA />
    </>
  );
}
