"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="bg-ivory py-24" ref={ref}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="about us"
              title="Creative Clusters"
              description="At Creative Cluster Marketing, we go beyond design — we build brands that perform. We're a team of strategists, creatives, and marketers dedicated to turning ideas into impactful digital experiences. We work closely with our clients to understand their goals, crafting tailored solutions that don't just meet expectations — they drive real results."
            />
            <div className="mt-8">
              <Button asChild variant="outline" className="text-espresso">
                <Link href="/about">More about us</Link>
              </Button>
            </div>
          </div>
          <motion.div style={{ y }} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/about-us.jpeg"
              alt="Creative Clusters Marketing team collaborating in the studio"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
