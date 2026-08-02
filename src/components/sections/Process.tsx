"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    number: "01",
    title: "Discovery and Research",
    copy: "Identify client needs and gather market insights through focused stakeholder discussions and market analysis.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    copy: "Craft a tailored strategy that aligns with client goals. Define project scope, timelines, and deliverables through detailed roadmaps.",
  },
  {
    number: "03",
    title: "Creative Design",
    copy: "Bring ideas to life with bold, purposeful design. From branding to visual storytelling, we create compelling visuals that captivate, connect, and convert.",
  },
  {
    number: "04",
    title: "Implementation & Delivery",
    copy: "Execute the vision with precision and care. We develop, test, and launch final assets while ensuring every detail meets our quality standards.",
  },
];

export function Process() {
  return (
    <section className="bg-crimson py-24 text-ivory">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow onDark>working process</Eyebrow>
            <p className="mt-4 font-display text-sm font-semibold uppercase tracking-widest text-gold">
              04 step process
            </p>
            <h2 className="mt-4 font-display text-h2 font-bold text-balance">
              Transforming Vision into Reality.
            </h2>
            <p className="mt-3 font-display text-h3 font-medium text-sand">
              Behind the Scenes of Our Creative Workflow
            </p>
            <p className="mt-6 max-w-md text-body text-sand">
              At our creative agency, every idea sparks with curiosity and
              care. Fueled by deep research and collaborative design, we
              transform concepts into bold brand experiences.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Let&apos;s work together</Link>
              </Button>
            </div>
          </div>

          <ol className="relative">
            <span
              aria-hidden="true"
              className="absolute bottom-8 left-[2.35rem] top-8 hidden w-px bg-ivory/20 md:block"
            />
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                <span className="relative z-10 flex h-[4.7rem] w-[4.7rem] shrink-0 items-center justify-center border border-gold bg-crimson font-display text-xl font-bold text-gold">
                  {step.number}
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-h3 font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-sand">
                    {step.copy}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
