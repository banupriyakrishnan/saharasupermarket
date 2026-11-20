import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["SOFT", "opsz"] });
const tamil = Noto_Sans_Tamil({ variable: "--font-noto-tamil", subsets: ["tamil"], weight: ["400", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} Thiruvarur | Groceries & Home Delivery`,
    template: `%s | ${site.name} Thiruvarur`,
  },
  description: site.description,
  keywords: [
    "supermarket Thiruvarur",
    "grocery store Thiruvarur",
    "Sahara Super Market",
    "home delivery Thiruvarur",
    "திருவாரூர் சூப்பர் மார்க்கெட்",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: `${site.name} — Thiruvarur`,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#12382b" };

// LocalBusiness structured data → helps the store show up properly on Google.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  foundingDate: String(site.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: site.hours.open,
      closes: site.hours.close,
    },
  ],
  paymentAccepted: site.payments.join(", "),
  priceRange: "₹",
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${fraunces.variable} ${tamil.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <CartProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-palm-800 focus:px-4 focus:py-2 focus:text-white">
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
