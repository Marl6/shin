"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Quote =
  | string
  | {
      text: string;
      name?: string;
      title?: string;
    };

type QuoteRotatorProps = {
  quotes: Quote[];
  className?: string;
  intervalMs?: number;
};

function resolveQuote(quote: Quote) {
  if (typeof quote === "string")
    return { text: quote, name: undefined, title: undefined };
  return { text: quote.text, name: quote.name, title: quote.title };
}

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

  const { text, name, title } = resolveQuote(quotes[index]);

  return (
    <div
      className={cn(
        "transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      <blockquote className="font-display text-[28px] md:text-[32px] italic text-on-surface mb-10">
        {text}
      </blockquote>

      {(name || title) && (
        <div className="flex flex-col items-center">
          {name && (
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface">
              {name}
            </p>
          )}
          {title && (
            <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mt-1">
              {title}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
