import { Mail, MapPin, Phone } from "lucide-react";

import { BookingCalendar } from "@/components/conversion/BookingCalendar";
import { ClickToCall } from "@/components/conversion/ClickToCall";
import { GoogleReviews } from "@/components/conversion/GoogleReviews";
import { ShortLeadForm } from "@/components/conversion/ShortLeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/constants/site";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Book a Free Strategy Call | Marketing Agency Near Me",
  description:
    "Book a free 20-minute strategy call with Creative Clusters — digital marketing agency Northern Virginia. Phone, email, calendar. Woodbridge, Fairfax, Alexandria & nationwide.",
  path: "/contact",
  keywords: [
    "marketing agency near me",
    "digital marketing agency northern virginia",
    "marketing agency woodbridge va",
    "creative marketing agency northern virginia",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([{ name: "Contact", path: "/contact" }])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="book a call"
            title={site.ctaLabel}
            description="Pick a time on the calendar, or leave your details. Same conversation either way."
          />
          <div className="mt-8">
            <GoogleReviews onDark />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.35fr]">
            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Talk to us directly
              </h2>
              <address className="mt-8 space-y-6 not-italic">
                <p className="flex items-start gap-4">
                  <MapPin
                    className="mt-1 h-5 w-5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span className="text-espresso">
                    {site.address}
                    <span className="mt-1 block text-sm text-taupe">
                      Serving clients nationwide
                    </span>
                  </span>
                </p>
                <p className="flex items-center gap-4">
                  <Phone
                    className="h-5 w-5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <ClickToCall />
                </p>
                <p className="flex items-center gap-4">
                  <Mail
                    className="h-5 w-5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <a
                    href={site.emailHref}
                    className="break-all text-espresso hover:text-crimson"
                  >
                    {site.email}
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center font-display text-xs font-bold text-gold"
                    aria-hidden="true"
                  >
                    IG
                  </span>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-espresso hover:text-crimson"
                  >
                    {site.handle}
                  </a>
                </p>
              </address>

              <div className="mt-12">
                <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
                  Prefer a callback?
                </h3>
                <ShortLeadForm source="contact-page" className="mt-4" />
              </div>
            </div>

            <div>
              <h2 className="mb-6 font-display text-h3 font-bold text-espresso">
                Choose a time
              </h2>
              <BookingCalendar />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
