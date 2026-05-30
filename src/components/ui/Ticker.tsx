import { cn } from "@/lib/utils";

type TickerProps = {
  items: string[];
  className?: string;
};

export default function Ticker({ items, className }: TickerProps) {
  const tickerItems = [...items, ...items];

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="ticker-track flex items-center gap-16">
        {tickerItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface-variant/60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
