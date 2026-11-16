"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-espresso py-32 text-ivory">
      {/* Animated palette-derived glow — the one flourish before the footer */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-crimson/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-[5%] bottom-0 h-[20rem] w-[20rem] rounded-full bg-gold/10 blur-3xl"
      />

      <Container className="relative">
        <h2 className="max-w-4xl font-display text-display font-bold text-balance">
          Let&apos;s work{" "}
          <span className="text-gold underline decoration-coral decoration-4 underline-offset-8">
            together
          </span>{" "}
          today!
        </h2>
        <p className="mt-6 text-body text-sand">
          We&apos;re here to bring your creative visions to life.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex h-14 items-center bg-coral px-8 font-display text-base font-medium uppercase tracking-wide text-ivory transition-colors duration-300 hover:bg-gold hover:text-espresso"
          >
            Book a discovery call
          </Link>
        </div>
      </Container>
    </section>
  );
}
