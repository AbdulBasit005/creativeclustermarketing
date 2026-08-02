import Link from "next/link";

import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceCategories } from "@/content/services";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Our Services | Strategy, Branding, Marketing & Web",
  description:
    "Explore Creative Clusters Marketing services: consulting & strategy, video production, branding, marketing, SEO, content creation, e-commerce marketing, and website development.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([{ name: "Services", path: "/services" }])}
      />

      {/* Page hero */}
      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="our services"
            title="Everything your brand needs to grow"
            description="Eight service categories, one team. From first brand sketch to full-scale growth marketing, we cover the entire journey."
          />
        </Container>
      </section>

      {/* All categories from services.md — each with icon and full service list */}
      <section className="bg-ivory py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <article
                key={cat.slug}
                className="group relative flex flex-col border border-taupe/30 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-espresso/10"
              >
                <div className="flex items-center justify-between">
                  <cat.icon className="h-8 w-8 text-gold" aria-hidden="true" />
                  <span className="font-display text-sm font-bold text-taupe">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-xl font-bold text-espresso">
                  <Link href={`/services/${cat.slug}`}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {cat.name}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-taupe">
                  {cat.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-taupe/30 pt-5">
                  {cat.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2 text-sm text-espresso"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-gold">
                        —
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-coral">
                  View service →
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
