import Link from "next/link";

import { BookCta } from "@/components/conversion/BookCta";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { neuromarketingPrinciples } from "@/content/neuromarketing";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata({
  title: "Neuromarketing Guide | Read Online",
  description:
    "Plain-language neuromarketing principles from Creative Clusters Marketing.",
  path: "/resources/neuromarketing-guide/read",
});

export default function GuideReadPage() {
  return (
    <>
      <section className="bg-espresso pb-16 pt-40 text-ivory">
        <Container>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Free guide
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-h1 font-bold">
            Neuromarketing for operators
          </h1>
          <p className="mt-6 max-w-2xl text-sand">
            A working summary of how Creative Clusters designs campaigns around
            real decision psychology.
          </p>
        </Container>
      </section>

      <section className="bg-ivory py-24">
        <Container>
          <article className="mx-auto max-w-3xl space-y-12 text-body text-espresso">
            <p>
              Most marketing fails before the offer is heard — because attention
              was never earned. This guide is the short version of how we fix
              that for niche brands.
            </p>
            {neuromarketingPrinciples.map((principle) => (
              <section key={principle.name}>
                <h2 className="font-display text-h3 font-bold">
                  {principle.name}
                </h2>
                <p className="mt-4 text-taupe">{principle.body}</p>
              </section>
            ))}
            <div className="border-t border-taupe/30 pt-10">
              <p className="font-semibold">Checklist before your next spend</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-taupe">
                <li>Can a stranger understand the offer in three seconds?</li>
                <li>Is proof placed where doubt peaks?</li>
                <li>Is the next step a booked conversation, not a vague form?</li>
                <li>Is any scarcity claim honest and defensible?</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <BookCta />
                <Link
                  href="/neuromarketing"
                  className="inline-flex h-14 items-center text-sm font-medium text-crimson underline"
                >
                  See the full approach
                </Link>
              </div>
            </div>
          </article>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
