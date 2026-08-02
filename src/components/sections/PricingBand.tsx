import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const bullets = [
  "Save costs for your brand",
  "Comprehensive package for all stages",
];

export function PricingBand() {
  return (
    <section className="relative overflow-hidden bg-espresso py-24 text-ivory">
      {/* Decorative palette-derived glow behind the price */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-crimson/40 blur-3xl"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Unlock your brand&apos;s potential with a tailored plan
            </p>
            <p className="mt-6 font-display text-h1 font-bold">
              All from just <span className="text-gold">$1,499</span>
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-sand">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-md text-sm text-taupe">
              Our pricing plan is designed with flexibility in mind, empowering
              creators of all scales.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/services">See all plans</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden aspect-[4/3] overflow-hidden lg:block">
            <Image
              src="/images/pricing-band.jpeg"
              alt="Creative Clusters Marketing team working on a client brand project"
              fill
              sizes="(min-width: 1024px) 50vw, 0vw"
              className="object-cover opacity-80"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
