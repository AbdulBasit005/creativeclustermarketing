"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceCategories } from "@/content/services";
import { cn } from "@/lib/utils";

/**
 * Homepage services section — renders all categories from services.md
 * (via src/content/services.ts) as expandable numbered rows.
 */
export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const count = String(serviceCategories.length).padStart(2, "0");

  return (
    <section className="bg-espresso py-24 text-ivory">
      <Container>
        <SectionHeading
          onDark
          eyebrow={`${count} service categories`}
          title="Services of Creative Clusters"
          description="At our creative agency, imagination meets strategy. Our talented team crafts vibrant visuals and compelling narratives. We transform your vision into a dynamic brand experience that stands out."
        />

        <ul className="mt-16 border-t border-ivory/15">
          {serviceCategories.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={cat.slug} className="border-b border-ivory/15">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group flex w-full items-center gap-3 py-6 text-left sm:gap-6"
                >
                  <span className="font-display text-lg font-bold text-taupe">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <cat.icon
                    className="h-6 w-6 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span className="flex-1 font-display text-h3 font-bold transition-colors group-hover:text-gold">
                    {cat.name}
                  </span>
                  <ArrowUpRight
                    className={cn(
                      "h-6 w-6 text-gold transition-transform duration-300",
                      isOpen && "rotate-90"
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-6 sm:pl-18">
                        <p className="max-w-2xl text-body text-sand">
                          {cat.description}
                        </p>
                        <ul className="mt-4 flex max-w-3xl flex-wrap gap-2">
                          {cat.services.map((service) => (
                            <li
                              key={service}
                              className="border border-ivory/15 px-3 py-1.5 text-xs text-sand"
                            >
                              {service}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/services/${cat.slug}`}
                          className="mt-6 inline-block font-display text-sm font-semibold uppercase tracking-wide text-coral hover:text-gold"
                        >
                          View service →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
