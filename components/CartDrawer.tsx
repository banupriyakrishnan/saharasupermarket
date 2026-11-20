"use client";

import { useEffect, useState } from "react";
import { formatINR } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import { useCart } from "./CartProvider";
import { CloseIcon, WhatsAppIcon } from "./Icons";
import { QtyStepper } from "./QtyStepper";

/**
 * Order list → WhatsApp.
 * Phase 1 sends the order as a formatted WhatsApp message (no payment gateway
 * needed). Phase 2 can replace `sendOrder` with a real checkout + payment.
 */
export function CartDrawer() {
  const { lines, total, isOpen, close, clear } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const freeDelivery = total >= site.delivery.minimumFree;
  const canSend = lines.length > 0 && name.trim() && (mode === "pickup" || address.trim());

  function buildMessage() {
    const itemsText = lines
      .map((l, i) => `${i + 1}. ${l.product.name} (${l.product.unit}) × ${l.qty} = ${formatINR(l.qty * l.product.price)}`)
      .join("\n");
    return [
      `🛒 *New order — ${site.name}*`,
      "",
      itemsText,
      "",
      `*Estimated total: ${formatINR(total)}*`,
      "",
      `Name: ${name.trim()}`,
      mode === "delivery" ? `Deliver to: ${address.trim()}` : "Store pickup",
      "",
      "Please confirm availability and final amount. Thank you!",
    ].join("\n");
  }

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div
        onClick={close}
        className={`absolute inset-0 bg-palm-900/50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your order list"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-sand-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-sand-200 px-5 py-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-palm-800">Your list</h2>
            <p className="text-sm text-ink-soft">We&apos;ll confirm on WhatsApp before packing.</p>
          </div>
          <button onClick={close} className="rounded-full p-2 hover:bg-sand-100" aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="text-5xl">🧺</p>
                <p className="mt-3 font-semibold">Your list is empty</p>
                <p className="text-sm text-ink-soft">Add items from the shop to build your order.</p>
              </div>
            </div>
          ) : (
            <ul className="space-y-3">
              {lines.map(({ product, qty }) => (
                <li key={product.id} className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-sand-200">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sand-100 text-2xl">{product.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{product.name}</p>
                    <p className="text-xs text-ink-soft">
                      {product.unit} · {formatINR(product.price)}
                    </p>
                  </div>
                  <QtyStepper id={product.id} qty={qty} compact />
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="space-y-3 border-t border-sand-200 bg-white px-5 py-4">
            <div className="grid grid-cols-2 gap-2 rounded-full bg-sand-100 p-1 text-sm font-semibold">
              {(["delivery", "pickup"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`rounded-full py-2 ${mode === m ? "bg-palm-800 text-sand-50" : "text-ink-soft"}`}
                >
                  {m === "delivery" ? "Home delivery" : "Store pickup"}
                </button>
              ))}
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              aria-label="Your name"
              className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 outline-none focus:border-palm-500"
            />
            {mode === "delivery" && (
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Delivery address & landmark"
                aria-label="Delivery address"
                rows={2}
                className="w-full resize-none rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 outline-none focus:border-palm-500"
              />
            )}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-soft">Estimated total</p>
                <p className="font-display text-3xl font-semibold text-palm-800">{formatINR(total)}</p>
              </div>
              {mode === "delivery" && (
                <p className={`text-right text-xs font-semibold ${freeDelivery ? "text-palm-500" : "text-dune-500"}`}>
                  {freeDelivery
                    ? "✓ Free delivery"
                    : `Add ${formatINR(site.delivery.minimumFree - total)} for free delivery`}
                </p>
              )}
            </div>
            <a
              href={canSend ? whatsappLink(buildMessage()) : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!canSend}
              onClick={(e) => !canSend && e.preventDefault()}
              className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-semibold text-white transition ${
                canSend ? "bg-[#1fa855] hover:bg-[#178a45]" : "cursor-not-allowed bg-ink-soft/40"
              }`}
            >
              <WhatsAppIcon /> Send order on WhatsApp
            </a>
            <button onClick={clear} className="w-full text-center text-xs text-ink-soft underline-offset-2 hover:underline">
              Clear list
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
