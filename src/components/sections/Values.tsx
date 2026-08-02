"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const values = [
  {
    name: "Sustainability",
    copy: "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional.",
    image: "/images/our-values.jpeg",
  },
  {
    name: "Innovation",
    copy: "Out-of-the-box thinking and experimentation, staying updated with the latest trends in design and technology.",
    image: "/images/our-values.jpeg",
  },
  {
    name: "Human-centricity",
    copy: "This empathy-driven method allows us to craft solutions that genuinely resonate with and benefit the people they are designed for.",
    image: "/images/our-values.jpeg",
  },
];

const subPoints = [
  "Harnessing the Power of Ideas",
  "Ultimate Connectivity",
  "Technical Support and Education",
];

export function Values() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ivory py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>our values</Eyebrow>
          <h2 className="mt-4 font-display text-h2 font-bold text-balance text-espresso">
            We blend the power of strategy, design, and performance marketing to
            transform founder&apos;s visions into remarkable brands.
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          <div
            role="tablist"
            aria-label="Our values"
            className="flex flex-row justify-center gap-1 sm:justify-start lg:flex-col lg:justify-center"
          >
            {values.map((value, i) => (
              <button
                key={value.name}
                role="tab"
                id={`value-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`value-panel-${i}`}
                onClick={() => setActive(i)}
                className={cn(
                  "border-b-2 px-4 py-3 text-center font-display text-base font-semibold transition-colors sm:text-lg lg:border-b-0 lg:border-l-2 lg:px-5 lg:text-left",
                  active === i
                    ? "border-coral text-espresso"
                    : "border-transparent text-taupe hover:text-espresso lg:border-taupe/30"
                )}
              >
                {value.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              role="tabpanel"
              id={`value-panel-${active}`}
              aria-labelledby={`value-tab-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-10"
            >
              <div className="flex flex-col justify-center">
                <p className="text-body text-espresso">{values[active].copy}</p>
                <ul className="mt-6 space-y-3">
                  {subPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-sm text-taupe"
                    >
                      <CheckCircle2
                        className="h-5 w-5 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={values[active].image}
                  alt={`${values[active].name} at Creative Clusters`}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
