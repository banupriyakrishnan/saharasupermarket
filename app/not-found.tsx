import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-6xl">🏜️</p>
      <h1 className="mt-6 font-display text-4xl font-semibold text-palm-800">Lost in the desert?</h1>
      <p className="mt-3 text-ink-soft">This page doesn&apos;t exist, but our aisles do.</p>
      <Link href="/products" className="mt-8 inline-block rounded-full bg-palm-800 px-7 py-4 font-semibold text-sand-50 hover:bg-palm-700">
        Go shopping
      </Link>
    </section>
  );
}
