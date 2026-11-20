export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-dune-500">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-palm-800 sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-ink-soft">{sub}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="grain border-b border-sand-200 bg-sand-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-dune-500">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-palm-800 sm:text-6xl">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-lg text-ink-soft">{sub}</p>}
      </div>
    </section>
  );
}
