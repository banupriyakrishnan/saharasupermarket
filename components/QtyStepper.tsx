"use client";

import { useCart } from "./CartProvider";

export function QtyStepper({ id, qty, compact = false }: { id: string; qty: number; compact?: boolean }) {
  const { setQty } = useCart();
  const size = compact ? "h-8 w-8" : "h-10 w-10";
  return (
    <div className="flex items-center rounded-full bg-palm-800 text-sand-50">
      <button onClick={() => setQty(id, qty - 1)} className={`${size} rounded-full text-lg hover:bg-palm-700`} aria-label="Decrease quantity">
        −
      </button>
      <span className="min-w-6 text-center text-sm font-bold" aria-live="polite">
        {qty}
      </span>
      <button onClick={() => setQty(id, qty + 1)} className={`${size} rounded-full text-lg hover:bg-palm-700`} aria-label="Increase quantity">
        +
      </button>
    </div>
  );
}
