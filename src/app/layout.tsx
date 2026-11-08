import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { Analytics } from "@/components/analytics/Analytics";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/constants/site";
import { primaryKeywords } from "@/content/seoKeywords";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Digital Marketing Agency Northern Virginia | Creative Clusters Marketing",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...primaryKeywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "marketing",
  applicationName: site.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title:
      "Digital Marketing Agency Northern Virginia | Creative Clusters Marketing",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  other: {
    "geo.region": "US-VA",
    "geo.placename": "Northern Virginia",
    ICBM: "38.8462, -77.3064",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: ["Creative Clusters", "Creative Cluster Marketing"],
  url: site.url,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/logos/logo-main.png`,
  },
  email: site.email,
  telephone: "+17034541448",
  foundingLocation: {
    "@type": "Place",
    name: "Virginia, USA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Woodbridge",
    addressRegion: "VA",
    addressCountry: "US",
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.linkedin,
    site.social.tiktok,
  ].filter((url) => url !== "#"),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+17034541448",
      contactType: "sales",
      areaServed: ["US", "VA"],
      availableLanguage: ["English"],
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  url: site.url,
  image: `${site.url}/images/og-default.png`,
  logo: `${site.url}/logos/logo-main.png`,
  email: site.email,
  telephone: "+17034541448",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Woodbridge",
    addressLocality: "Woodbridge",
    addressRegion: "VA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.6581,
    longitude: -77.2497,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Northern Virginia" },
    { "@type": "City", name: "Woodbridge" },
    { "@type": "City", name: "Fairfax" },
    { "@type": "City", name: "Alexandria" },
    { "@type": "AdministrativeArea", name: "DMV" },
    { "@type": "Country", name: "United States" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(site.reviewRating),
    reviewCount: String(site.reviewCount),
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.linkedin,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "ReserveAction",
    name: site.ctaLabel,
    target: `${site.url}/contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-espresso"
        >
          Skip to content
        </a>
        <Analytics />
        <MotionProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </MotionProvider>
      </body>
    </html>
  );
}
