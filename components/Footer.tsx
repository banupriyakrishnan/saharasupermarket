import Link from "next/link";
import { fullAddress, mapsLink, nav, site, whatsappLink } from "@/lib/site";
import { categories } from "@/lib/products";
import { Logo } from "./Logo";
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { DuneDivider } from "./DuneDivider";

export function Footer() {
  return (
    <footer className="mt-24 bg-palm-900 text-sand-100">
      <DuneDivider className="-mt-px text-sand-50" flip />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-6 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm text-sand-200">{site.description}</p>
          <p className="font-tamil text-sm text-turmeric-400">{site.taglineTamil}</p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg text-sand-50">Explore</h3>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sand-200 hover:text-turmeric-400">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg text-sand-50">Shop by aisle</h3>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}>
                <Link href={`/products?category=${c.id}`} className="text-sand-200 hover:text-turmeric-400">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="mb-4 font-display text-lg text-sand-50">Visit us</h3>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-sand-200 hover:text-turmeric-400">
            <PinIcon className="mt-0.5 shrink-0" /> {fullAddress}
          </a>
          <p className="flex gap-3 text-sand-200">
            <ClockIcon className="mt-0.5 shrink-0" /> {site.hours.label}
          </p>
          <a href={`tel:${site.phone}`} className="flex gap-3 text-sand-200 hover:text-turmeric-400">
            <PhoneIcon className="mt-0.5 shrink-0" /> {site.phoneDisplay}
          </a>
          <a
            href={whatsappLink("Hi Sahara Super Market! ")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 text-sand-200 hover:text-turmeric-400"
          >
            <WhatsAppIcon className="mt-0.5 shrink-0" /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-palm-700">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-4 py-5 text-xs text-sand-300 sm:flex-row sm:px-6">
          <p>© {site.name}, Thiruvarur. Serving families since {site.established}.</p>
          <p>Prices are indicative and may vary in store.</p>
        </div>
      </div>
    </footer>
  );
}
