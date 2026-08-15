"use client";

import { useEffect, useRef, useState } from "react";

/** Wraps a word/phrase with a hand-stitched underline that draws in once, on mount. */
export function StitchedUnderline({
  children,
  delay = 0.4,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span className="relative inline-block">
      {children}
      <svg
        viewBox="0 0 180 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 -bottom-1 h-3 w-full"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d="M2 7 C 30 3, 45 10, 70 6 S 120 2, 148 7 S 170 9, 178 5"
          fill="none"
          stroke="var(--thread-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={100}
          style={{
            strokeDasharray: 100,
            strokeDashoffset: ready ? 0 : 100,
            transition: "stroke-dashoffset 0.9s cubic-bezier(.65,0,.35,1), stroke 0.4s ease",
          }}
        />
      </svg>
    </span>
  );
}
