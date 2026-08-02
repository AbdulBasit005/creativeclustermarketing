import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/constants/site";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Contact Us | Start Your Project",
  description:
    "Get in touch with Creative Clusters Marketing — Virginia-based creative agency for branding, web, SEO, marketing, and development projects.",
  path: "/contact",
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
            eyebrow="contact"
            title="Let's Work together today!"
            description="We're here to bring your creative visions to life."
          />
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-h3 font-bold text-espresso">
                Get in touch
              </h2>
              <address className="mt-8 space-y-6 not-italic">
                <p className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="text-espresso">{site.address}</span>
                </p>
                <p className="flex items-center gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <a href={site.phoneHref} className="text-espresso hover:text-crimson">
                    {site.phone}
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <a href={site.emailHref} className="break-all text-espresso hover:text-crimson">
                    {site.email}
                  </a>
                </p>
              </address>

              {/* Embedded map — Alexandria, VA */}
              <div className="mt-10 overflow-hidden border border-taupe/40">
                <iframe
                  title="Creative Clusters Marketing — Alexandria, Virginia"
                  src="https://maps.google.com/maps?q=Alexandria%2C%20VA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="aspect-[4/3] w-full border-0 grayscale-[20%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
