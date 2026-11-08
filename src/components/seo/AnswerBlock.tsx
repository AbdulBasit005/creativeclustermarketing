import { cn } from "@/lib/utils";

/**
 * AEO / GEO answer-first block: short direct answer up front for
 * AI overviews, voice search, and featured-snippet extraction.
 */
export function AnswerBlock({
  answer,
  className,
  onDark = false,
}: {
  answer: string;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <p
      className={cn(
        "aeo-answer mt-6 max-w-3xl text-body leading-relaxed",
        onDark ? "text-sand" : "text-taupe",
        className
      )}
      data-aeo="direct-answer"
    >
      {answer}
    </p>
  );
}
