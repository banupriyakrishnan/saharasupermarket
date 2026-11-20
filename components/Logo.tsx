import Link from "next/link";

/** Placeholder brand mark (sun over a dune). Swap for the client's real logo. */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect width="48" height="48" rx="14" fill="var(--color-palm-800)" />
      <circle cx="24" cy="21" r="8" fill="var(--color-turmeric-500)" />
      <path d="M4 34c7-6 13-6 20-2s13 4 20-2v10a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V34Z" fill="var(--color-dune-500)" />
      <path d="M4 39c8-4 14-3 21 0s12 3 19-1v4a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-3Z" fill="var(--color-sand-200)" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Sahara Super Market — home">
      <LogoMark />
      <span className="leading-none">
        <span className={`block font-display text-2xl font-semibold tracking-tight ${light ? "text-sand-50" : "text-palm-800"}`}>
          Sahara
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-sand-200" : "text-dune-500"}`}>
          Super Market · Thiruvarur
        </span>
      </span>
    </Link>
  );
}
