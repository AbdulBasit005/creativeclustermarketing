import Link from "next/link";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";

type BookCtaProps = {
  className?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  href?: string;
  label?: string;
};

export function BookCta({
  className,
  size = "lg",
  variant = "primary",
  href = site.ctaHref,
  label = site.ctaLabel,
}: BookCtaProps) {
  return (
    <Button asChild size={size} variant={variant} className={cn(className)}>
      <Link href={href} data-cta="book-strategy-call">
        {label}
      </Link>
    </Button>
  );
}
