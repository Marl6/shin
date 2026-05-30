import { cn } from "@/lib/utils";

type FooterShellProps = {
  className?: string;
  children: React.ReactNode;
};

export default function FooterShell({ className, children }: FooterShellProps) {
  return (
    <footer
      className={cn(
        "bg-surface-container-lowest border-t border-divider",
        className,
      )}
    >
      {children}
    </footer>
  );
}
