"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Creative Clusters understood our brand from day one. Their strategy and creative execution elevated Shah's Halal across every channel — polished, consistent, and built to convert.",
    author: "Khaled Mashriqi",
    role: "CEO, Shah's Halal",
  },
  {
    quote:
      "Working with this team felt like having an extension of our own. From content to campaigns, they captured Holly Philly's energy perfectly and helped us grow with work that actually performs.",
    author: "Abdel Rahman",
    role: "Owner, Holly Philly",
  },
  {
    quote:
      "Professional, thoughtful, and results-focused. Creative Clusters delivered media and marketing support that matched the standards we expect — clear communication and exceptional quality throughout.",
    author: "Fabrice",
    role: "INQAHE",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setActive((a) => (a + 1) % testimonials.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setActive(((index % testimonials.length) + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, advance]);

  return (
    <section
      className="bg-ivory py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Trusted by clients worldwide"
            title="Crafting Visions, Earning Trust"
            description="Real partners. Real results. Here's what leaders say about working with Creative Clusters."
          />
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(active - 1)}
              className="flex h-11 w-11 items-center justify-center border border-taupe/40 text-espresso transition-colors hover:border-coral hover:text-coral"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(active + 1)}
              className="flex h-11 w-11 items-center justify-center border border-taupe/40 text-espresso transition-colors hover:border-coral hover:text-coral"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div className="min-h-[18rem]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="flex gap-1"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-6">
                  <p className="font-display text-h3 font-medium italic leading-snug text-espresso">
                    <span
                      aria-hidden="true"
                      className="mr-1 font-display text-4xl text-gold"
                    >
                      &ldquo;
                    </span>
                    {testimonials[active].quote}
                    <span
                      aria-hidden="true"
                      className="ml-1 font-display text-4xl text-gold"
                    >
                      &rdquo;
                    </span>
                  </p>
                </blockquote>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="border-t border-taupe/30 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`meta-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-display text-xl font-bold text-espresso">
                  {testimonials[active].author}
                </p>
                <p className="mt-1 text-sm text-taupe">{testimonials[active].role}</p>
              </motion.div>
            </AnimatePresence>

            <div
              className="mt-8 flex flex-col gap-2"
              role="tablist"
              aria-label="Testimonials"
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "border-l-2 px-4 py-2.5 text-left transition-colors",
                    active === i
                      ? "border-coral text-espresso"
                      : "border-taupe/30 text-taupe hover:text-espresso"
                  )}
                >
                  <span className="block font-display text-sm font-semibold">
                    {t.author}
                  </span>
                  <span className="block text-xs">{t.role}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
