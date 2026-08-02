"use client";

import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioReels } from "@/content/reels";
import { cn } from "@/lib/utils";

function ReelCard({
  src,
  poster,
  title,
  index,
  shouldPlay,
  className,
}: {
  src: string;
  poster: string;
  title: string;
  index: number;
  shouldPlay: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldPlay) {
      if (video.dataset.hydrated !== "1") {
        video.dataset.hydrated = "1";
        video.preload = "metadata";
        video.load();
      }
      const play = video.play();
      if (play) play.catch(() => undefined);
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn("w-full max-w-[280px]", className)}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-espresso ring-1 ring-ivory/10">
        <video
          ref={videoRef}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            ready ? "opacity-100" : "opacity-0"
          )}
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          src={src}
          aria-label={`${title} reel`}
          onLoadedData={() => setReady(true)}
        />
        {!ready && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-espresso/80 to-transparent"
        />
        <p className="absolute bottom-4 left-4 right-4 font-display text-sm font-semibold text-ivory">
          {title}
        </p>
      </div>
    </motion.article>
  );
}

export function WorkReels() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, {
    amount: 0.2,
    margin: "100px 0px",
  });
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[0] as HTMLElement | undefined;
    if (!slide) return;
    const slideWidth = slide.offsetWidth;
    if (!slideWidth) return;
    setActive(Math.round(track.scrollLeft / slideWidth));
  }, []);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActive(index);
  }, []);

  return (
    <section ref={sectionRef} className="bg-espresso py-24 text-ivory">
      <Container>
        <SectionHeading
          onDark
          eyebrow="featured reels"
          title="Work that moves"
          description="Short-form production from recent client campaigns — videos load only when this section is in view."
        />

        {/* Mobile / tablet: swipeable carousel */}
        <div className="mt-14 lg:hidden">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6"
          >
            {portfolioReels.map((reel, i) => (
              <div
                key={reel.src}
                className="flex w-[78%] shrink-0 snap-center justify-center sm:w-[55%]"
              >
                <ReelCard
                  src={reel.src}
                  poster={reel.poster}
                  title={reel.title}
                  index={i}
                  shouldPlay={sectionInView && isMobile && active === i}
                />
              </div>
            ))}
          </div>
          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Reels"
          >
            {portfolioReels.map((reel, i) => (
              <button
                key={reel.src}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Show ${reel.title}`}
                onClick={() => scrollTo(i)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  active === i ? "bg-coral" : "bg-ivory/30 hover:bg-ivory/50"
                )}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3-up grid, all playing when in view */}
        <div className="mt-14 hidden grid-cols-3 justify-items-center gap-8 lg:grid">
          {portfolioReels.map((reel, i) => (
            <ReelCard
              key={reel.src}
              src={reel.src}
              poster={reel.poster}
              title={reel.title}
              index={i}
              shouldPlay={sectionInView && !isMobile}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
