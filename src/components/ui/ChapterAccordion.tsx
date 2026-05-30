"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type ChapterItem = {
  id: string;
  title: string;
  description: string;
};

type ChapterAccordionProps = {
  items: ChapterItem[];
  className?: string;
};

export default function ChapterAccordion({
  items,
  className,
}: ChapterAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = item.id === openId;

        return (
          <div key={item.id} className="border-b border-divider">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full py-8 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-6">
                <span className="font-ui text-[12px] uppercase tracking-[0.2em] text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[22px] md:text-[26px] text-on-surface">
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-on-surface-variant transition-transform duration-300",
                  isOpen ? "rotate-180" : "rotate-0",
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-[max-height] duration-500 ease-in-out",
                isOpen ? "max-h-40" : "max-h-0",
              )}
            >
              <p className="pb-8 font-body text-[16px] leading-relaxed text-on-surface-variant">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
