import Link from "next/link";
import { bestsellers, categories, offers } from "@/lib/products";
import { fullAddress, mapsEmbed, mapsLink, site, whatsappLink } from "@/lib/site";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { DuneDivider } from "@/components/DuneDivider";
import { ArrowIcon, ClockIcon, PinIcon, ShieldIcon, TagIcon, TruckIcon, WhatsAppIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Aisles />
      <Bestsellers />
      <OffersBand />
      <WhySahara />
      <VisitUs />
    </>
  );
}

function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-sand-100">
      {/* Sun */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-turmeric-400/30 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-10 pt-12 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 font-tamil text-sm text-palm-700 ring-1 ring-sand-200">
            <span className="h-2 w-2 rounded-full bg-palm-500" /> {site.taglineTamil}
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-palm-800 sm:text-6xl lg:text-7xl">
            Your weekly shop, <em className="font-normal text-dune-500">sorted</em> — right by the Old Bus Stand.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Rice, dals, gingelly oil, filter coffee and everything in between. Build your list online, send it on WhatsApp,
            and we&apos;ll pack it fresh for delivery or pickup.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-palm-800 px-7 py-4 font-semibold text-sand-50 shadow-lg shadow-palm-900/20 transition hover:bg-palm-700"
            >
              Start your list <ArrowIcon />
            </Link>
            <a
              href={whatsappLink("Hi Sahara Super Market! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-palm-800 ring-1 ring-sand-300 transition hover:ring-palm-500"
            >
              <WhatsAppIcon className="text-[#1fa855]" /> Order on WhatsApp
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-sand-300 pt-6">
            {[
              [`Since ${site.established}`, "Serving Thiruvarur"],
              [`${site.rating.value}★`, `${site.rating.count} ratings`],
              ["Home", "delivery in town"],
            ].map(([a, b]) => (
              <div key={a}>
                <dt className="font-display text-2xl font-semibold text-palm-800">{a}</dt>
                <dd className="text-xs text-ink-soft">{b}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Arch collage */}
        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 lg:max-w-none" aria-hidden>
          <div className="arch col-span-1 row-span-2 grid place-items-center bg-palm-800 py-24 text-8xl shadow-xl">🌾</div>
          <div className="arch grid place-items-center bg-dune-500 py-10 text-6xl shadow-xl">🌶️</div>
          <div className="arch grid place-items-center bg-turmeric-400 py-10 text-6xl shadow-xl">☕</div>
          <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-sand-200">
            <p className="text-xs text-ink-soft">This week</p>
            <p className="font-semibold text-palm-800">
              Gingelly oil 1 L · <span className="text-dune-500">₹320</span>
            </p>
          </div>
        </div>
      </div>
      <DuneDivider className="text-sand-50" />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Build your list", d: "Browse aisles and tap Add — no account or app download needed." },
    { n: "02", t: "Send on WhatsApp", d: "Your list, total and address go to us in one ready-made message." },
    { n: "03", t: "We pack & deliver", d: "We confirm stock and price, then deliver to your door or keep it ready for pickup." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-3xl bg-white p-6 ring-1 ring-sand-200">
            <p className="font-display text-4xl font-semibold text-turmeric-500">{s.n}</p>
            <h3 className="mt-3 text-lg font-bold text-palm-800">{s.t}</h3>
            <p className="mt-1 text-sm text-ink-soft">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Aisles() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Shop by aisle" title="Everything a Thiruvarur kitchen needs" />
        <Link href="/products" className="inline-flex items-center gap-2 font-semibold text-dune-500 hover:text-dune-600">
          View all products <ArrowIcon />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Link
            key={c.id}
            href={`/products?category=${c.id}`}
            className={`group relative overflow-hidden rounded-3xl p-5 ring-1 ring-sand-200 transition hover:-translate-y-1 hover:shadow-lg ${
              i % 3 === 0 ? "bg-palm-100" : i % 3 === 1 ? "bg-dune-100" : "bg-white"
            }`}
          >
            <span className="text-4xl transition-transform group-hover:scale-110 inline-block" aria-hidden>
              {c.emoji}
            </span>
            <h3 className="mt-4 font-bold text-palm-800">{c.name}</h3>
            <p className="font-tamil text-xs text-dune-600">{c.tamil}</p>
            <p className="mt-1 text-xs text-ink-soft">{c.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="Customer favourites" title="What Thiruvarur buys every week" />
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function OffersBand() {
  return (
    <section className="relative bg-palm-800 text-sand-50">
      <DuneDivider className="-mt-px text-sand-50" flip />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-turmeric-400">Sahara savings</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Fair prices, <em className="font-normal text-turmeric-400">every single day.</em>
          </h2>
          <p className="mt-4 max-w-md text-sand-200">
            {offers.length} products are below MRP right now — from Ponni rice to filter coffee.
          </p>
          <Link
            href="/offers"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-turmeric-400 px-7 py-4 font-semibold text-ink transition hover:bg-turmeric-500"
          >
            See all offers <ArrowIcon />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 text-ink sm:grid-cols-4">
          {offers.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
      <DuneDivider className="-mb-px text-sand-50" />
    </section>
  );
}

function WhySahara() {
  const points = [
    { icon: ShieldIcon, t: "Trusted since 2000", d: "Over two decades of serving families around the Old Bus Stand." },
    { icon: TagIcon, t: "Honest pricing", d: "Everyday prices at or below MRP, with weekly deals on staples." },
    { icon: TruckIcon, t: "Home delivery", d: site.delivery.note + "." },
    { icon: ClockIcon, t: "Open late, every day", d: site.hours.label + " — shop after work." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeading align="center" eyebrow="Why Sahara" title="A neighbourhood store that knows your list by heart" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ icon: Icon, t, d }) => (
          <div key={t} className="text-center">
            <div className="arch mx-auto grid h-20 w-16 place-items-center bg-sand-100 text-dune-500 ring-1 ring-sand-200">
              <Icon width={26} height={26} />
            </div>
            <h3 className="mt-4 font-bold text-palm-800">{t}</h3>
            <p className="mt-1 text-sm text-ink-soft">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VisitUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid overflow-hidden rounded-[2rem] bg-white ring-1 ring-sand-200 lg:grid-cols-2">
        <div className="p-8 sm:p-12">
          <SectionHeading eyebrow="Visit the store" title="Find us near the Old Bus Stand" />
          <ul className="mt-8 space-y-4 text-ink-soft">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 shrink-0 text-dune-500" /> {fullAddress}
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-0.5 shrink-0 text-dune-500" /> {site.hours.label}
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-palm-800 px-6 py-3 font-semibold text-sand-50 hover:bg-palm-700"
            >
              Get directions <ArrowIcon />
            </a>
            <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-palm-800 ring-1 ring-sand-300 hover:ring-palm-500">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
        <iframe
          title="Map showing Sahara Super Market, Thiruvarur"
          src={mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-80 w-full border-0 lg:h-full"
        />
      </div>
    </section>
  );
}
