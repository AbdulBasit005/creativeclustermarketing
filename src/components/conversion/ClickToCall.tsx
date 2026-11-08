import { Phone } from "lucide-react";

import { site } from "@/constants/site";
import { cn } from "@/lib/utils";

export function ClickToCall({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <a
      href={site.phoneHref}
      data-cta="click-to-call"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline",
        onDark ? "text-gold" : "text-crimson",
        className
      )}
    >
      <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{site.phone}</span>
    </a>
  );
}
