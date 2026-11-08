import type { Metadata } from "next";

import { site } from "@/constants/site";
import { allKeywords, primaryKeywords } from "@/content/seoKeywords";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}

export function getMetadata({
  title,
  description,
  path,
  image = "/images/og-default.png",
  keywords = [...primaryKeywords],
}: SeoInput): Metadata {
  const url = `${site.url}${path}`;
  const keywordList = Array.from(new Set(keywords)).join(", ");
  return {
    title,
    description,
    keywords: keywordList,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    other: {
      "geo.region": "US-VA",
      "geo.placename": "Northern Virginia",
      "ICBM": "38.8462, -77.3064",
    },
  };
}

export function generateBreadcrumbSchema(
  crumbs: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", path: "/" },
      ...crumbs,
    ].map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}

export function generateFaqSchema(
  items: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Speakable + answer-first article shape for AEO / AI overviews */
export function generateSpeakableSchema(opts: {
  headline: string;
  description: string;
  path: string;
  cssSelectors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.headline,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: opts.cssSelectors ?? [".aeo-answer", "h1"],
    },
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  };
}

export function generateServiceSchema(services: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    image: `${site.url}/logos/logo-main.png`,
    telephone: "+17034541448",
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
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
      { "@type": "AdministrativeArea", name: "Virginia" },
      { "@type": "Country", name: "United States" },
    ],
    knowsAbout: [...allKeywords].slice(0, 40),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing services",
      itemListElement: services.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@type": "Organization", name: site.name },
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(site.reviewRating),
      reviewCount: String(site.reviewCount),
      bestRating: "5",
    },
  };
}
