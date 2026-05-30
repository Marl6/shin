import { cn } from "@/lib/utils";

type GrainOverlayProps = {
  className?: string;
};

export default function GrainOverlay({ className }: GrainOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-40 grain-overlay",
        className,
      )}
    />
  );
}
