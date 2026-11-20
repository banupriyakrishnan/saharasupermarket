import type { Metadata } from "next";
import { fullAddress, mapsEmbed, mapsLink, site } from "@/lib/site";
import { PageHero } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { ClockIcon, PhoneIcon, PinIcon, TruckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: `Call, WhatsApp or visit ${site.name} near the Old Bus Stand, Thiruvarur. ${site.hours.label}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const cards = [
    { icon: PinIcon, t: "Address", d: fullAddress, href: mapsLink },
    { icon: PhoneIcon, t: "Call us", d: site.phoneDisplay, href: `tel:${site.phone}` },
    { icon: ClockIcon, t: "Hours", d: site.hours.label },
    { icon: TruckIcon, t: "Delivery", d: site.delivery.note },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="We're a message away." sub="Orders, bulk enquiries for functions, or just checking if something's in stock: ask us anything." />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {cards.map(({ icon: Icon, t, d, href }) => {
            const body = (
              <>
                <span className="arch grid h-14 w-12 shrink-0 place-items-center bg-sand-100 text-dune-500">
                  <Icon />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink-soft">{t}</span>
                  <span className="block font-semibold text-palm-800">{d}</span>
                </span>
              </>
            );
            const cls = "flex items-center gap-4 rounded-3xl bg-white p-5 ring-1 ring-sand-200";
            return href ? (
              <a key={t} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${cls} transition hover:ring-palm-500`}>
                {body}
              </a>
            ) : (
              <div key={t} className={cls}>
                {body}
              </div>
            );
          })}
          <iframe
            title="Map showing Sahara Super Market, Thiruvarur"
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full rounded-3xl border-0 ring-1 ring-sand-200"
          />
        </div>
        <ContactForm />
      </section>
    </>
  );
}
