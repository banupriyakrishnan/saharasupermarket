# Sahara Super Market — Thiruvarur

Website for Sahara Super Market (near Old Bus Stand, Thiruvarur). Built with Next.js 16 (App Router) + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass before deploying)
```

## Where things live

| What | File |
| --- | --- |
| Phone, WhatsApp, address, hours, delivery rules | `lib/site.ts` |
| Products, categories, prices | `lib/products.ts` |
| Colours & fonts (design tokens) | `app/globals.css`, `app/layout.tsx` |
| Cart state (saved in browser) | `components/CartProvider.tsx` |
| WhatsApp order message | `components/CartDrawer.tsx` |
| Contact / lead form | `components/ContactForm.tsx` |
| SEO: metadata, Google business schema, sitemap | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` |

## ✅ Before launch — confirm with the client

Public listings disagree, so every `VERIFY` comment in `lib/site.ts` must be checked:

- [ ] WhatsApp number (orders + enquiries go here!) and phone number
- [ ] Exact address & pincode (Panagal Salai vs Santhamangalam)
- [ ] Opening hours (9–10 PM or 24 hrs?)
- [ ] Delivery area, minimum order for free delivery
- [ ] Payment methods (UPI / card?)
- [ ] Rating shown on home page — use current Google rating
- [ ] Real product list + prices (`lib/products.ts` is sample data)
- [ ] Logo (`components/Logo.tsx`, `app/icon.svg` are placeholders) and store photos
- [ ] Owner's real story for the About page
- [ ] Domain name → update `site.url`

## Deploy

1. Push to GitHub → import into Vercel (free tier is fine) → deploy.
2. Connect the domain in Vercel.
3. Add the site to Google Search Console and submit `/sitemap.xml`.
4. Add the website link to the store's Google Business Profile.

## Roadmap

- **Phase 1 (this build):** showcase site, product catalogue, WhatsApp ordering, WhatsApp lead form.
- **Phase 2:** full online store — move products to a database/CMS (e.g. Supabase or Sanity), admin panel for the owner, Razorpay checkout, order tracking. The `Product` type and cart are already shaped for this.
