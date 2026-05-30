import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-16", className)}
    >
      {children}
    </div>
  );
}
