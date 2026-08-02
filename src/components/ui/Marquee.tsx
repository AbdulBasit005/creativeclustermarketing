import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  /** Duration of one full loop, in seconds */
  duration?: number;
  separator?: string;
}

export function Marquee({
  items,
  className,
  itemClassName,
  duration = 30,
  separator = "—",
}: MarqueeProps) {
  // The list is rendered twice so the CSS -50% translate loops seamlessly.
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className={cn(
            "flex items-center gap-6 pr-6 whitespace-nowrap",
            itemClassName
          )}
        >
          <span>{item}</span>
          <span aria-hidden="true">{separator}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
