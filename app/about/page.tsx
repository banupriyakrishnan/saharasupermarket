import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero, SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story of ${site.name}, serving Thiruvarur families since ${site.established}.`,
  alternates: { canonical: "/about" },
};

// TODO: Replace with the owner's real story — ask them how and why the store started.
export default function AboutPage() {
  const values = [
    { t: "Quality we'd serve at home", d: "We stock the same rice, oil and masala brands our own families use." },
    { t: "Prices that stay fair", d: "Everyday prices at or below MRP. No surprises at the billing counter." },
    { t: "People who know you", d: "Many of our customers have shopped with us for years — we remember your usual." },
  ];

  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`Part of Thiruvarur's daily life since ${site.established}.`}
        sub="A family-run supermarket near the Old Bus Stand, stocking everything from daily staples to festival essentials."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-5 text-lg text-ink-soft">
          <p>
            {site.name} started with a simple idea: the people of Thiruvarur deserve a well-stocked, clean and honest store close to
            home. Over the years we&apos;ve grown from a neighbourhood shop into the town&apos;s go-to supermarket.
          </p>
          <p>
            Today you&apos;ll find rice and dals, cold-pressed oils, fresh dairy, snacks, household and personal care, all under one
            roof. And if you can&apos;t make it in, send us your list on WhatsApp and we&apos;ll deliver it.
          </p>
          <Link href="/products" className="inline-flex items-center gap-2 font-semibold text-dune-500 hover:text-dune-600">
            Start shopping <ArrowIcon />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4" aria-hidden>
          <div className="arch grid place-items-center bg-palm-800 py-20 text-7xl">🏪</div>
          <div className="arch mt-12 grid place-items-center bg-turmeric-400 py-20 text-7xl">🪔</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="What we stand for" title="Three promises to every customer" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.t} className="rounded-3xl bg-white p-8 ring-1 ring-sand-200">
              <p className="font-display text-5xl font-semibold text-dune-500">{i + 1}</p>
              <h3 className="mt-4 text-lg font-bold text-palm-800">{v.t}</h3>
              <p className="mt-2 text-ink-soft">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
