"use client";

import { useInView } from "@/hooks/use-in-view";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      className={`${inView ? "animate-rise" : "opacity-0"} ${className}`}
      style={inView ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
