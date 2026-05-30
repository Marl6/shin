"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type QuoteRotatorProps = {
  quotes: string[];
  className?: string;
  intervalMs?: number;
};

export default function QuoteRotator({
  quotes,
  className,
  intervalMs = 5000,
}: QuoteRotatorProps) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (quotes.length <= 1) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const intervalId = setInterval(() => {
      setIsVisible(false);
      timeoutId = setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, intervalMs);

    return () => {
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [quotes.length, intervalMs]);

  return (
    <blockquote
      className={cn(
        "font-display text-[28px] md:text-[32px] italic text-on-surface transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {quotes[index]}
    </blockquote>
  );
}
