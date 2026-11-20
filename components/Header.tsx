"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { useCart } from "./CartProvider";
import { Logo } from "./Logo";
import { BagIcon, ClockIcon, CloseIcon, MenuIcon, PhoneIcon, TruckIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40">
      {/* Utility strip */}
      <div className="bg-palm-900 text-sand-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6">
          <p className="flex items-center gap-2">
            <ClockIcon width={14} height={14} /> {site.hours.label}
          </p>
          <p className="hidden items-center gap-2 md:flex">
            <TruckIcon width={14} height={14} /> {site.delivery.note}
          </p>
          <a href={`tel:${site.phone}`} className="flex items-center gap-2 font-semibold hover:text-turmeric-400">
            <PhoneIcon width={14} height={14} /> {site.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-sand-200 bg-sand-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive(item.href) ? "bg-palm-800 text-sand-50" : "text-ink-soft hover:bg-sand-100 hover:text-palm-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={open}
              className="relative flex items-center gap-2 rounded-full bg-dune-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-dune-600"
              aria-label={`Open order list, ${count} items`}
            >
              <BagIcon />
              <span className="hidden sm:inline">My List</span>
              {count > 0 && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-turmeric-400 px-1 text-xs font-bold text-ink">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="rounded-full p-2.5 text-palm-800 hover:bg-sand-100 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile" className="border-t border-sand-200 px-4 pb-4 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`mt-1 block rounded-xl px-4 py-3 font-semibold ${
                  isActive(item.href) ? "bg-palm-800 text-sand-50" : "text-ink hover:bg-sand-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
