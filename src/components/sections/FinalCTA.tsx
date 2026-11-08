"use client";

import { motion } from "framer-motion";

import { BookCta } from "@/components/conversion/BookCta";
import { ClickToCall } from "@/components/conversion/ClickToCall";
import { Container } from "@/components/ui/Container";
import { site } from "@/constants/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-espresso py-32 text-ivory">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-crimson/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[5%] h-[20rem] w-[20rem] rounded-full bg-gold/10 blur-3xl"
      />

      <Container className="relative">
        <h2 className="max-w-4xl font-display text-display font-bold text-balance">
          Ready when you are.
        </h2>
        <p className="mt-6 max-w-xl text-body text-sand">
          Twenty minutes. Clear next steps. No pitch theater — just a strategy
          conversation built around how your buyers actually decide.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <BookCta />
          <ClickToCall onDark />
        </div>
        <p className="mt-6 text-small text-taupe">{site.handle}</p>
      </Container>
    </section>
  );
}
