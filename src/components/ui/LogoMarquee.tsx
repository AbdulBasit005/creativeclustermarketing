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

/**
 * Fixed slot size so logos with different intrinsic dimensions render
 * at a uniform visual weight (object-contain inside equal boxes).
 */
const LOGO_SLOT =
  "relative flex h-14 w-[7.5rem] shrink-0 items-center justify-center sm:h-16 sm:w-36 md:h-[4.5rem] md:w-40";

export function LogoMarquee({
  logos,
  className,
  duration = 40,
}: LogoMarqueeProps) {
  const row = (ariaHidden: boolean, keyPrefix: string) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 md:gap-14"
    >
      {logos.map((logo, i) => (
        <li key={`${keyPrefix}-${logo.src}-${i}`} className={LOGO_SLOT}>
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={160}
            height={72}
            sizes="160px"
            className="max-h-full max-w-full object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
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
