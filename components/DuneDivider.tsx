/** Wavy "sand dune" section divider — the site's signature shape. Colour comes from `text-*`. */
export function DuneDivider({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0 48c120-28 240-40 360-26s240 46 360 44 240-38 360-50 240 4 360 22V80H0Z"
      />
    </svg>
  );
}
