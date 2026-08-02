import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  /** Set true when rendered on a dark (crimson/espresso) background */
  onDark?: boolean;
}

export function Eyebrow({ children, className, onDark = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold",
        className
      )}
    >
      <span aria-hidden="true">{"//"}</span>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-12",
          onDark ? "bg-ivory/20" : "bg-taupe/40"
        )}
      />
    </p>
  );
}
