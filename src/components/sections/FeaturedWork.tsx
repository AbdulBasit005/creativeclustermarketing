"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioProjects } from "@/content/portfolio";

export function FeaturedWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = portfolioProjects.length;

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, total - 1));
    const slide = track.children[clamped] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setCurrent(clamped);
  }, [total]);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = (track.children[0] as HTMLElement)?.offsetWidth || 1;
    setCurrent(Math.round(track.scrollLeft / slideWidth));
  }, []);

  return (
    <section className="overflow-hidden bg-espresso py-24 text-ivory">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SectionHeading
            onDark
            eyebrow="Showcasing Our Outstanding Projects"
            title="Imagine - Create - Innovate"
            description="Featured projects"
          />
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => scrollTo(current - 1)}
              className="flex h-12 w-12 items-center justify-center border border-ivory/15 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => scrollTo(current + 1)}
              className="flex h-12 w-12 items-center justify-center border border-ivory/15 text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {portfolioProjects.map((project) => (
          <motion.div
            key={project.slug}
            whileHover={{ scale: 1.01 }}
            className="group relative aspect-[16/10] w-[85vw] max-w-[900px] shrink-0 snap-start overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="85vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent"
            />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <Badge key={cat} onDark>
                    {cat}
                  </Badge>
                ))}
              </div>
              <h3 className="mt-4 font-display text-h3 font-bold text-ivory">
                <Link href={`/portfolio/${project.slug}`}>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-coral opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View case study →
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Container className="mt-4 flex justify-end">
        <p className="font-display text-sm font-semibold tracking-widest text-taupe">
          <span className="text-gold">{String(current + 1).padStart(2, "0")}</span>
          /{String(total).padStart(2, "0")}
        </p>
      </Container>
    </section>
  );
}
