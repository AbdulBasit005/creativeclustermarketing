import Link from "next/link";

import { FinalCTA } from "@/components/sections/FinalCTA";
import { Values } from "@/components/sections/Values";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { benefits, openRoles } from "@/content/careers";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Careers | Join Our Creative Team",
  description:
    "Join Creative Clusters Marketing — a Virginia-based creative agency where strategists, designers, and marketers build brands that perform.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([{ name: "Careers", path: "/careers" }])}
      />

      <section className="bg-espresso pb-20 pt-40 text-ivory">
        <Container>
          <SectionHeading
            onDark
            as="h1"
            eyebrow="careers"
            title="Do the best work of your career"
            description="We're a small, senior team that ships real work for real clients — no bureaucracy, no busywork, just craft."
          />
        </Container>
      </section>

      <Values />

      {/* Why work here */}
      <section className="bg-crimson py-24 text-ivory">
        <Container>
          <h2 className="font-display text-h2 font-bold">Why work here</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-t-2 border-gold pt-6">
                <h3 className="font-display text-xl font-bold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open roles */}
      <section className="bg-ivory py-24">
        <Container>
          <h2 className="font-display text-h2 font-bold text-espresso">
            Open roles
          </h2>
          {openRoles.length === 0 ? (
            <div className="mt-10 border border-taupe/30 p-10 text-center">
              <p className="font-display text-xl font-semibold text-espresso">
                No open positions right now — check back soon.
              </p>
              <p className="mt-3 text-sm text-taupe">
                Think you&apos;d be a great fit anyway? We&apos;re always happy
                to hear from talented people.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="text-espresso">
                  <Link href="/contact">Introduce yourself</Link>
                </Button>
              </div>
            </div>
          ) : (
            <ul className="mt-10 divide-y divide-taupe/30 border-y border-taupe/30">
              {openRoles.map((role) => (
                <li key={role.slug} className="flex flex-wrap items-center justify-between gap-4 py-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-espresso">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-taupe">
                      {role.type} · {role.location} — {role.summary}
                    </p>
                  </div>
                  <Button asChild size="sm">
                    <Link href="/contact">Apply</Link>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
