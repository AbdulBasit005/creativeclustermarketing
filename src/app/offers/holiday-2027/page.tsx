import Link from "next/link";

import { BookCta } from "@/components/conversion/BookCta";
import { ConversionStrip } from "@/components/conversion/ConversionStrip";
import { ShortLeadForm } from "@/components/conversion/ShortLeadForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingTiers } from "@/content/pricing";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Holiday 2027 Campaign Offer | Restaurants & Showrooms",
  description:
    "Seasonal marketing package for restaurants and car showrooms — book a free strategy call to lock holiday creative and media.",
  path: "/offers/holiday-2027",
});

const growth = pricingTiers.find((t) => t.id === "growth");

export default function HolidayOfferPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Offers", path: "/offers/holiday-2027" },
          { name: "Holiday 2027", path: "/offers/holiday-2027" },
        ])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="seasonal offer · restaurants & showrooms"
            title="Holiday demand, without desperate discounting"
            description="A fixed seasonal package for restaurants and car showrooms: offer architecture, creative, and paid media timed to Q4 peaks."
          />
          <p className="mt-6 text-sm text-gold">
            Limited start windows through November — capacity capped.
          </p>
          <div className="mt-10">
            <BookCta />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                What&apos;s included
              </h2>
              <ul className="mt-8 space-y-4 text-body text-taupe">
                <li>• Holiday offer workshop (margin-safe promotions)</li>
                <li>• Creative set for Meta + Google (static + short video)</li>
                <li>• 6-week media management through peak weeks</li>
                <li>• Landing section or page for the seasonal offer</li>
                <li>• Weekly readout tied to calls / covers / appointments</li>
              </ul>
              <p className="mt-8 text-body text-espresso">
                From{" "}
                <span className="font-display text-h3 font-bold text-crimson">
                  {growth?.displayRange ?? "$1,650–$2,750/mo"}
                </span>{" "}
                aligned to Growth retainer ranges — exact scope on the strategy
                call. Mention code{" "}
                <span className="font-semibold">HOLIDAY27</span>.
              </p>
              <p className="mt-6 text-sm text-taupe">
                Built for{" "}
                <Link href="/niches/restaurants" className="text-crimson underline">
                  restaurants
                </Link>{" "}
                and{" "}
                <Link
                  href="/niches/car-showrooms"
                  className="text-crimson underline"
                >
                  car showrooms
                </Link>
                .
              </p>
            </div>
            <div className="border border-taupe/40 p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Reserve a window
              </p>
              <p className="mt-3 text-sm text-taupe">
                Leave details with code HOLIDAY27 — or book the calendar now.
              </p>
              <ShortLeadForm
                source="holiday-2027"
                className="mt-6"
                submitLabel="Request holiday package call"
              />
            </div>
          </div>
        </Container>
      </section>

      <ConversionStrip source="holiday-2027" />
      <FinalCTA />
    </>
  );
}
