"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  className?: string;
  delayMs?: number;
  children: React.ReactNode;
};

const delayClassMap: Record<number, string> = {
  150: "reveal-delay-150",
  200: "reveal-delay-200",
  300: "reveal-delay-300",
  400: "reveal-delay-400",
  450: "reveal-delay-450",
};

export default function Reveal({ className, delayMs, children }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const delayClass = delayMs ? delayClassMap[delayMs] : undefined;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", delayClass, className)}>
      {children}
    </div>
  );
}
