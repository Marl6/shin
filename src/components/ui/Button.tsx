import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "ghost" | "muted";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 border font-ui uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-secondary text-on-secondary border-secondary hover:bg-accent-gold-light",
  outline:
    "bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-background",
  ghost:
    "bg-transparent text-on-surface border-divider hover:bg-surface-container",
  muted:
    "bg-transparent text-on-surface-variant border-divider hover:text-on-surface hover:border-secondary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[10px]",
  md: "px-6 py-3 text-[12px]",
  lg: "px-10 py-4 text-[12px]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export default function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button className={buttonStyles({ variant, size, className })} {...props} />
  );
}
