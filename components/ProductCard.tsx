"use client";

import { discountPct, formatINR, type Product } from "@/lib/products";
import { useCart } from "./CartProvider";
import { QtyStepper } from "./QtyStepper";

export function ProductCard({ product }: { product: Product }) {
  const { add, qtyOf } = useCart();
  const qty = qtyOf(product.id);
  const off = discountPct(product);

  return (
    <article className="group flex flex-col rounded-3xl bg-white p-3 ring-1 ring-sand-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sand-300/40">
      <div className="arch relative grid aspect-[4/3] place-items-center bg-gradient-to-b from-sand-100 to-sand-200/70">
        <span className="text-5xl transition-transform duration-300 group-hover:scale-110" aria-hidden>
          {product.emoji}
        </span>
        {off > 0 && (
          <span className="absolute left-2 top-2 rounded-full bg-dune-500 px-2.5 py-1 text-[11px] font-bold text-white">
            {off}% OFF
          </span>
        )}
        {product.bestseller && (
          <span className="absolute right-2 top-2 rounded-full bg-turmeric-400 px-2.5 py-1 text-[11px] font-bold text-ink">
            ★ Popular
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-1 pt-3">
        <h3 className="font-semibold leading-snug">{product.name}</h3>
        <p className="text-xs text-ink-soft">{product.unit}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <p className="leading-tight">
            <span className="text-lg font-bold text-palm-800">{formatINR(product.price)}</span>
            {off > 0 && <span className="ml-1.5 text-xs text-ink-soft line-through">{formatINR(product.mrp!)}</span>}
          </p>
          {qty > 0 ? (
            <QtyStepper id={product.id} qty={qty} compact />
          ) : (
            <button
              onClick={() => add(product.id)}
              className="rounded-full border-2 border-palm-800 px-4 py-1.5 text-sm font-bold text-palm-800 transition hover:bg-palm-800 hover:text-sand-50"
              aria-label={`Add ${product.name} to list`}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
