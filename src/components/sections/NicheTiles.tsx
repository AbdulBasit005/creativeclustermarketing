import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { niches } from "@/content/niches";

export function NicheTiles() {
  return (
    <section className="bg-ivory py-24">
      <Container>
        <SectionHeading
          eyebrow="who we help"
          title="Five niches. One conversion system."
          description="Every vertical page ends the same way — a free 20-minute strategy call."
        />
        <ul className="mt-14 grid gap-px bg-taupe/30 sm:grid-cols-2 lg:grid-cols-5">
          {niches.map((niche) => (
            <li key={niche.slug} className="bg-ivory">
              <Link
                href={`/niches/${niche.slug}`}
                className="group flex h-full flex-col justify-between p-6 transition-colors hover:bg-espresso hover:text-ivory"
              >
                <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Niche
                </span>
                <span className="mt-8 font-display text-h3 font-bold text-espresso group-hover:text-ivory">
                  {niche.shortName}
                </span>
                <span className="mt-4 text-sm text-taupe group-hover:text-sand">
                  {niche.proofStat.value} {niche.proofStat.label}
                </span>
                <span className="mt-6 text-sm font-medium text-crimson group-hover:text-gold">
                  Explore →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
