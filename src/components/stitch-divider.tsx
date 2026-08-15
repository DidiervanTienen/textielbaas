"use client";

import { useInView } from "@/hooks/use-in-view";

export function StitchDivider({ className = "" }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.6);

  return (
    <div ref={ref} className={`w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 8"
        preserveAspectRatio="none"
        className="h-2 w-full overflow-visible"
      >
        <line
          x1="0"
          y1="4"
          x2="800"
          y2="4"
          stroke="var(--hairline)"
          strokeWidth="1"
          strokeDasharray="10 8"
          strokeLinecap="round"
          style={
            inView
              ? {
                  strokeDashoffset: 0,
                  transition: "stroke-dashoffset 1.2s cubic-bezier(.65,0,.35,1)",
                }
              : { strokeDashoffset: 800 }
          }
        />
      </svg>
    </div>
  );
}
