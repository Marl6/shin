import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type StarsProps = {
  rating: number;
  className?: string;
};

export default function Stars({ rating, className }: StarsProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className={cn("flex items-center gap-1 text-secondary", className)}>
      {stars.map((star) => (
        <Star
          key={star}
          className={cn(
            "h-4 w-4",
            star <= rating ? "fill-current" : "fill-transparent",
          )}
        />
      ))}
    </div>
  );
}
