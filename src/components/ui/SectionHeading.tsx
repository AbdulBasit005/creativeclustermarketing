import { cn } from "@/lib/utils";

import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  onDark?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Heading
        className={cn(
          "mt-4 font-display text-h2 font-bold text-balance",
          onDark ? "text-ivory" : "text-espresso"
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 text-body",
            onDark ? "text-sand" : "text-taupe"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
