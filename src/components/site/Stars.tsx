import { Star } from "lucide-react";

export function Stars({ value = 5, className = "" }: { value?: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`size-4 ${i <= value ? "fill-gold text-gold" : "text-border"}`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
