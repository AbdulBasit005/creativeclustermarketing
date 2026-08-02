"use client";

import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { portfolioReels } from "@/content/reels";
import { cn } from "@/lib/utils";

function PortfolioReelCard({
  src,
  poster,
  title,
  index,
  shouldPlay,
  offsetClass,
}: {
  src: string;
  poster: string;
  title: string;
  index: number;
  shouldPlay: boolean;
  offsetClass?: string;
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn("w-full", offsetClass)}
    >
      <div className="relative mx-auto aspect-[9/16] max-w-[240px] overflow-hidden bg-espresso shadow-[0_24px_48px_-12px_rgba(26,18,16,0.35)] ring-1 ring-espresso/10 lg:max-w-none">
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
      </div>
      <div className="mt-5 flex items-baseline gap-3 px-1">
        <span className="font-display text-xs font-bold tracking-widest text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-sm font-semibold text-espresso">{title}</h3>
      </div>
    </motion.article>
  );
}

export function PortfolioReels() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, {
    amount: 0.25,
    margin: "80px 0px",
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

  const offsets = ["lg:translate-y-8", "lg:translate-y-0", "lg:translate-y-12"];

  return (
    <section ref={sectionRef} className="bg-ivory pb-8 pt-20 md:pt-24">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
          <div className="max-w-md">
            <Eyebrow>motion reel</Eyebrow>
            <h2 className="mt-4 font-display text-h2 font-bold text-balance text-espresso">
              Short films that sell the brand
            </h2>
            <p className="mt-4 text-body text-taupe">
              Vertical production from live campaigns — swipe on mobile, or watch
              the full set on desktop.
            </p>
            <p className="mt-8 hidden font-display text-xs font-semibold uppercase tracking-[0.25em] text-sand lg:block">
              {String(portfolioReels.length).padStart(2, "0")} pieces
            </p>
          </div>

          {/* Mobile carousel */}
          <div className="lg:hidden">
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[11%] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-[18%]"
            >
              {portfolioReels.map((reel, i) => (
                <div
                  key={reel.src}
                  className="w-[78%] shrink-0 snap-center sm:w-[52%]"
                >
                  <PortfolioReelCard
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
              className="mt-8 flex items-center justify-center gap-3"
              role="tablist"
              aria-label="Portfolio reels"
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
                    "h-1.5 rounded-full transition-all duration-300",
                    active === i
                      ? "w-8 bg-coral"
                      : "w-1.5 bg-taupe/40 hover:bg-taupe"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Desktop staggered filmstrip */}
          <div className="hidden pb-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 xl:gap-8">
            {portfolioReels.map((reel, i) => (
              <PortfolioReelCard
                key={reel.src}
                src={reel.src}
                poster={reel.poster}
                title={reel.title}
                index={i}
                shouldPlay={sectionInView && !isMobile}
                offsetClass={offsets[i]}
              />
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-taupe/40 to-transparent md:mt-28"
        />
      </Container>
    </section>
  );
}
