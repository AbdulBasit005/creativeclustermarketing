import { BookCta } from "@/components/conversion/BookCta";
import { ClickToCall } from "@/components/conversion/ClickToCall";
import { GoogleReviews } from "@/components/conversion/GoogleReviews";
import { ShortLeadForm } from "@/components/conversion/ShortLeadForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/constants/site";

type ConversionStripProps = {
  source: string;
  headline?: string;
};

export function ConversionStrip({
  source,
  headline = site.ctaLabel,
}: ConversionStripProps) {
  return (
    <section className="border-t border-taupe/30 bg-ivory py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Next step
            </p>
            <h2 className="mt-3 max-w-xl font-display text-h2 font-bold text-espresso text-balance">
              {headline}
            </h2>
            <p className="mt-4 max-w-lg text-body text-taupe">
              Prefer to talk now? Call us or leave your details — same team,
              same 20-minute strategy session.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <BookCta />
              <ClickToCall />
            </div>
            <div className="mt-6">
              <GoogleReviews />
            </div>
          </div>
          <ShortLeadForm source={source} />
        </div>
      </Container>
    </section>
  );
}
