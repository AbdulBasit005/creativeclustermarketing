import Image from "next/image";

import { cn } from "@/lib/utils";

export interface ClientLogo {
  src: string;
  alt: string;
}

interface LogoMarqueeProps {
  logos: ClientLogo[];
  className?: string;
  /** Duration of one full loop, in seconds */
  duration?: number;
}

const fadeMask = {
  maskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
} as const;

export function LogoMarquee({
  logos,
  className,
  duration = 40,
}: LogoMarqueeProps) {
  const row = (ariaHidden: boolean, keyPrefix: string) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-20 md:gap-28"
    >
      {logos.map((logo, i) => (
        <li key={`${keyPrefix}-${logo.src}-${i}`} className="shrink-0">
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={960}
            height={384}
            className="h-32 w-auto object-contain opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100 sm:h-40 md:h-48"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={
        {
          "--marquee-duration": `${duration}s`,
          ...fadeMask,
        } as React.CSSProperties
      }
    >
      <div className="marquee-track flex w-max">
        {row(false, "a")}
        {row(true, "b")}
      </div>
    </div>
  );
}
