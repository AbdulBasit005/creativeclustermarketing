import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}

export function Badge({ children, className, onDark = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider",
        onDark
          ? "border-ivory/20 text-sand"
          : "border-taupe/40 text-taupe",
        className
      )}
    >
      {children}
    </span>
  );
}
