import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/SectionHeading";
import { ProductBrowser } from "@/components/ProductBrowser";

export const metadata: Metadata = {
  title: "Shop Groceries Online",
  description: "Browse rice, dals, oils, spices, snacks, dairy and household essentials. Build your list and order on WhatsApp.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Fill your list, aisle by aisle."
        sub="Tap Add on anything you need, then send your list to us on WhatsApp. We confirm stock and the final bill before packing."
      />
      <Suspense fallback={<div className="mx-auto h-96 max-w-7xl px-4 py-10 sm:px-6" />}>
        <ProductBrowser />
      </Suspense>
    </>
  );
}
