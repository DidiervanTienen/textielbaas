export function PlaceholderPhoto({
  label,
  hint = "Voeg hier een eigen foto toe",
  aspect = "aspect-[4/3]",
  className = "",
  compact = false,
}: {
  label?: string;
  hint?: string;
  aspect?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex ${aspect} ${compact ? "" : "w-full"} flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-dashed border-[var(--hairline)] bg-linen-deep ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        className={compact ? "h-7 w-7 text-muted-foreground/60" : "h-10 w-10 text-muted-foreground/60"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          d="M22 8 L10 16 L14 24 L20 20 L20 56 L44 56 L44 20 L50 24 L54 16 L42 8 C42 8 39 12 32 12 C25 12 22 8 22 8 Z"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      {!compact && (
        <div className="px-4 text-center">
          {label && (
            <p className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-foreground/60">
              {label}
            </p>
          )}
          <p className="mt-1 text-[11px] text-muted-foreground">{hint}</p>
        </div>
      )}
    </div>
  );
}
