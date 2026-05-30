"use client";

import { cn } from "@/lib/utils";

type BackToTopButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export default function BackToTopButton({
  className,
  children,
}: BackToTopButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(className)}
    >
      {children}
    </button>
  );
}
