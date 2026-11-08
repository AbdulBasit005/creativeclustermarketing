import { Star } from "lucide-react";

import { site } from "@/constants/site";
import { cn } from "@/lib/utils";

export function GoogleReviews({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <a
      href={site.googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className
      )}
    >
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-gold text-gold"
          />
        ))}
      </span>
      <span
        className={cn(
          "text-sm",
          onDark ? "text-sand" : "text-taupe"
        )}
      >
        <span className={onDark ? "text-ivory" : "text-espresso"}>
          {site.reviewRating}
        </span>{" "}
        Google rating · {site.reviewCount}+ reviews
      </span>
    </a>
  );
}
