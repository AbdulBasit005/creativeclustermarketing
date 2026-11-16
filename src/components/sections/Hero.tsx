"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

const headlineLines = ["Your vision.", "Our creativity.", "Real results."];

const marqueeWords = [
  "Strategy",
  "Branding",
  "Creative",
  "Growth",
  "Performance",
  "Digital",
  "Content",
  "Experience",
];

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-espresso pt-32">
      {/* Background image + legibility overlay */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/80 to-crimson/40"
      />

      {/* Floating brand mark — decorative, desktop only */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute right-[6%] top-1/2 hidden -translate-y-1/2 lg:block xl:right-[10%]"
      >
        {/* Soft gold glow behind the mark */}
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-gold) 22%, transparent) 0%, transparent 70%)",
          }}
        />
        {/* Offset outline ring echoing the square mark */}
        <motion.div
          animate={{ rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-5 border border-gold/30"
        />
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/logos/logo-main.png"
            alt=""
            width={736}
            height={800}
            priority
            className="h-auto w-64 drop-shadow-[0_24px_48px_color-mix(in_srgb,var(--color-espresso)_60%,transparent)] xl:w-80"
          />
        </motion.div>
      </motion.div>

      <Container className="relative pb-16 pt-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          <span aria-hidden="true">{"//"}</span> Virginia-based creative agency
        </motion.p>

        <h1 className="mt-6 font-display text-display font-bold text-ivory">
          {headlineLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 max-w-xl text-body text-sand"
        >
          We help brands grow with bold, strategic creative — turning content
          into powerful digital experiences that connect and convert.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="/contact">Start a Project</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-ivory">
            <Link href="/portfolio">See our work</Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 text-small text-taupe"
        >
          150+ projects delivered for clients across the US
        </motion.p>
      </Container>

      <div className="relative border-t border-ivory/15 py-4">
        <Marquee
          items={marqueeWords}
          duration={25}
          itemClassName="font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold"
        />
      </div>
    </section>
  );
}
