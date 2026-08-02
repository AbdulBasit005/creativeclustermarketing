"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 93, suffix: "%", label: "Client Satisfaction (avg across surveyed clients)" },
  { value: 24, suffix: "", label: "Years Building Brands", pad: true },
];

const awards = [
  {
    group: "Awards & Recognition",
    items: [
      {
        date: "April 2025",
        name: "Video Production Award — World Bank Asia",
      },
    ],
  },
  {
    group: "Media Partnerships",
    items: [
      { date: "PNQAHE — HEC", name: "Media Partner" },
      {
        date: "Pak Austria Fachhochschule",
        name: "Institute of Applied Sciences and Technology — Media Partner",
      },
      { date: "SINO PAK", name: "Media Partner" },
    ],
  },
  {
    group: "Production & Coverage",
    items: [
      {
        date: "XUP Studios",
        name: "Video Production and Content Strategy",
      },
      { date: "Mutasil Pakistan", name: "MUN Coverage" },
      {
        date: "BIC Business Incubation Centre",
        name: "Media Coverage and Social Media Strategy",
      },
    ],
  },
];

function CountUp({
  target,
  suffix,
  pad,
}: {
  target: number;
  suffix: string;
  pad?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  const display = pad ? String(value).padStart(2, "0") : String(value);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsAwards() {
  return (
    <section className="bg-ivory py-24">
      <Container>
        <div className="grid gap-10 border-b border-taupe/30 pb-16 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-h1 font-bold text-gold">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  pad={stat.pad}
                />
              </p>
              <p className="mt-2 max-w-[16rem] text-sm text-taupe">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-h2 font-bold text-balance text-espresso">
              The digital world has been moving with a huge rhythm and it seems
              that&apos;s not going to stop.
            </h2>
            <p className="mt-5 text-body text-taupe">
              We grow brands through bold &amp; strategic creative, helping
              progressive companies advance.
            </p>
          </div>

          <div>
            {awards.map((group) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="mb-10 last:mb-0"
              >
                <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
                  {group.group}
                </h3>
                <ul className="mt-4">
                  {group.items.map((item) => (
                    <li
                      key={`${item.date}-${item.name}`}
                      className="flex flex-col gap-1 border-b border-taupe/30 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="shrink-0 text-sm text-taupe">
                        {item.date}
                      </span>
                      <span className="font-medium text-espresso sm:text-right">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
