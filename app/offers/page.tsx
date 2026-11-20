import type { Metadata } from "next";
import { discountPct, offers } from "@/lib/products";
import { PageHero } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Offers & Deals",
  description: "This week's savings at Sahara Super Market, Thiruvarur — staples, oils, coffee and more below MRP.",
  alternates: { canonical: "/offers" },
};

export default function OffersPage() {
  const sorted = [...offers].sort((a, b) => discountPct(b) - discountPct(a));
  const best = discountPct(sorted[0]);

  return (
    <>
      <PageHero
        eyebrow="Offers"
        title={`Save up to ${best}% this week.`}
        sub="Deals change every week. Follow us on WhatsApp to get the new list first."
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {sorted.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
