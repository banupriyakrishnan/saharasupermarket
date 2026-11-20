"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories, products, type CategoryId } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { SearchIcon } from "./Icons";

type Sort = "popular" | "price-asc" | "price-desc";

export function ProductBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const raw = params.get("category");
  const active = categories.some((c) => c.id === raw) ? (raw as CategoryId) : "all";
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("popular");

  const setCategory = (id: CategoryId | "all") => {
    const next = new URLSearchParams(params);
    if (id === "all") next.delete("category");
    else next.set("category", id);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter(
      (p) => (active === "all" || p.category === active) && (!q || p.name.toLowerCase().includes(q)),
    );
    if (sort === "price-asc") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...list].sort((a, b) => b.price - a.price);
    return [...list].sort((a, b) => Number(!!b.bestseller) - Number(!!a.bestseller));
  }, [active, query, sort]);

  const chip = (selected: boolean) =>
    `shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
      selected ? "bg-palm-800 text-sand-50" : "bg-white text-ink-soft ring-1 ring-sand-200 hover:ring-palm-500"
    }`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search products</span>
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rice, dal, coffee…"
            className="w-full rounded-full border border-sand-200 bg-white py-3.5 pl-12 pr-4 outline-none focus:border-palm-500"
          />
        </label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          aria-label="Sort products"
          className="rounded-full border border-sand-200 bg-white px-5 py-3.5 font-semibold outline-none focus:border-palm-500"
        >
          <option value="popular">Popular first</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>

      <div className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        <button onClick={() => setCategory("all")} className={chip(active === "all")}>
          All
        </button>
        {categories.map((c) => (
          <button key={c.id} onClick={() => setCategory(c.id)} className={chip(active === c.id)}>
            <span aria-hidden>{c.emoji}</span> {c.name}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
        {results.length} {results.length === 1 ? "product" : "products"}
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl bg-white p-10 text-center ring-1 ring-sand-200">
          <p className="text-4xl">🔍</p>
          <p className="mt-3 font-semibold">Can&apos;t find it?</p>
          <p className="text-sm text-ink-soft">
            We stock far more in store than we list here — just add it to your WhatsApp message and we&apos;ll check.
          </p>
        </div>
      )}
    </div>
  );
}
