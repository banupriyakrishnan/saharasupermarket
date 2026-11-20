/**
 * Single source of truth for all business details.
 *
 * ⚠️ VERIFY WITH THE CLIENT BEFORE LAUNCH ⚠️
 * These were collected from public directory listings (Justdial, magicpin,
 * Facebook) which disagree with each other. Confirm every field below with
 * the owner — especially the WhatsApp number, because every order and enquiry
 * from the site is sent there.
 */
export const site = {
  name: "Sahara Super Market",
  shortName: "Sahara",
  tagline: "Thiruvarur's neighbourhood supermarket since 2000",
  taglineTamil: "திருவாரூரின் நம்பிக்கையான சூப்பர் மார்க்கெட்",
  description:
    "Groceries, fresh staples, household essentials and personal care at fair prices. Order on WhatsApp for home delivery across Thiruvarur.",
  url: "https://saharasupermarket.in", // TODO: replace with the real domain once bought

  // VERIFY: listings show both +91 90202 02602 and 86869 96996
  phone: "+919020202602",
  phoneDisplay: "+91 90202 02602",
  whatsapp: "919020202602", // country code + number, digits only

  email: "", // TODO: add if the client has one

  // VERIFY: one listing says "Santhamangalam, Madappuram" instead
  address: {
    street: "Panagal Salai, Near Old Bus Stand",
    locality: "Thiruvarur",
    region: "Tamil Nadu",
    postalCode: "610001",
    country: "IN",
  },
  mapsQuery: "Sahara Super Market, Thiruvarur",

  // VERIFY: listings say 9 AM–10 PM, one says open 24 hours
  hours: { open: "09:00", close: "22:00", label: "Open daily · 9:00 AM – 10:00 PM" },

  established: 2000, // VERIFY (Justdial)
  rating: { value: "4.2", count: "1,600+", source: "Justdial" }, // VERIFY — update from Google reviews
  facebook: "https://www.facebook.com/Saharasupermarket01/",
  payments: ["Cash", "UPI", "Cards"], // VERIFY
  delivery: {
    available: true, // listings mention home delivery — VERIFY area + minimum order
    note: "Free home delivery within Thiruvarur town on orders above ₹500",
    minimumFree: 500,
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
