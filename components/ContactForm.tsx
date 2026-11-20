"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const topics = ["Place an order", "Bulk / function order", "Product availability", "Feedback", "Other"];

/**
 * Lead capture form. Phase 1 delivers the enquiry straight to the owner's
 * WhatsApp (zero cost, nothing to maintain, the owner already checks it).
 * Phase 2 option: POST to an API route that saves leads + emails the owner.
 */
export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", topic: topics[0], message: "" });
  const [error, setError] = useState("");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").slice(-10))) {
      setError("Please enter your name and a valid 10-digit mobile number.");
      return;
    }
    setError("");
    const text = [
      `📩 *Website enquiry — ${site.name}*`,
      `Topic: ${form.topic}`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.message.trim() && `Message: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  const field = "w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 outline-none focus:border-palm-500";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-[2rem] bg-white p-6 ring-1 ring-sand-200 sm:p-10">
      <h2 className="font-display text-3xl font-semibold text-palm-800">Send us a message</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Name
          <input value={form.name} onChange={update("name")} autoComplete="name" className={`mt-1 ${field}`} required />
        </label>
        <label className="block text-sm font-semibold">
          Mobile number
          <input
            value={form.phone}
            onChange={update("phone")}
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="98xxxxxxxx"
            className={`mt-1 ${field}`}
            required
          />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        What can we help with?
        <select value={form.topic} onChange={update("topic")} className={`mt-1 ${field}`}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold">
        Message
        <textarea value={form.message} onChange={update("message")} rows={4} className={`mt-1 resize-none ${field}`} />
      </label>
      {error && (
        <p role="alert" className="text-sm font-semibold text-dune-600">
          {error}
        </p>
      )}
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1fa855] py-4 font-semibold text-white hover:bg-[#178a45]">
        <WhatsAppIcon /> Send via WhatsApp
      </button>
      <p className="text-center text-xs text-ink-soft">Opens WhatsApp with your message ready to send. We usually reply within an hour.</p>
    </form>
  );
}
