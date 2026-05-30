import Link from "next/link";

import { cn } from "@/lib/utils";

type IconCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  className?: string;
};

export default function IconCard({
  icon,
  title,
  description,
  href,
  linkLabel,
  className,
}: IconCardProps) {
  return (
    <div
      className={cn(
        "bg-surface-container border border-divider p-10 transition-colors duration-300 hover:border-secondary",
        className,
      )}
    >
      <div className="text-secondary mb-6">{icon}</div>
      <h3 className="font-display text-[28px] leading-tight text-on-surface mb-4">
        {title}
      </h3>
      <p className="font-body text-[16px] leading-relaxed text-on-surface-variant mb-8">
        {description}
      </p>
      {href && linkLabel ? (
        <Link
          href={href}
          className="font-ui text-[12px] uppercase tracking-[0.2em] text-secondary inline-flex items-center gap-2"
        >
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}
