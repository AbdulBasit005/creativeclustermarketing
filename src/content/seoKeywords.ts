/**
 * Agency keyword bank for SEO / GEO / AEO.
 * Used in metadata, location pages, FAQ answers, and answer blocks.
 */
export const primaryKeywords = [
  "digital marketing agency northern virginia",
  "creative marketing agency northern virginia",
  "full service marketing agency virginia",
  "marketing agency near me",
] as const;

export const locationKeywords = {
  "northern-virginia": [
    "digital marketing agency northern virginia",
    "social media marketing agency northern virginia",
    "creative marketing agency northern virginia",
    "commercial videography northern virginia",
    "social media video production virginia",
    "professional content creation northern virginia",
    "web design company northern virginia",
    "restaurant website design northern virginia",
    "wordpress website designer northern virginia",
    "meta ads agency northern virginia",
    "local seo services northern virginia",
    "lead generation agency northern virginia",
    "restaurant marketing agency northern virginia",
    "social media content creation northern virginia",
    "social media management northern virginia",
    "tiktok marketing agency northern virginia",
  ],
  woodbridge: [
    "marketing agency woodbridge va",
    "social media marketing agency woodbridge va",
    "business videographer woodbridge va",
    "website design woodbridge va",
    "facebook ads management woodbridge va",
    "seo agency woodbridge va",
    "small business marketing agency woodbridge va",
  ],
  fairfax: [
    "digital marketing agency fairfax va",
    "instagram marketing agency fairfax va",
    "promotional video production fairfax va",
    "small business website design fairfax va",
    "google ads management fairfax va",
    "restaurant content creation fairfax va",
  ],
  alexandria: [
    "digital marketing company alexandria va",
    "social media marketing agency alexandria va",
    "website development alexandria va",
    "digital advertising agency alexandria va",
  ],
  dmv: [
    "food truck marketing agency dmv",
    "marketing agency near me",
    "web design agency near me",
  ],
} as const;

export const serviceKeywords = [
  "social media management for small businesses",
  "monthly social media management packages",
  "reels production for businesses",
  "restaurant videography northern virginia",
  "short form video production agency",
  "website design and seo services",
  "google business profile optimization virginia",
  "restaurant social media management virginia",
  "automotive social media marketing agency",
  "car dealership video marketing virginia",
  "restaurant videography and social media packages",
] as const;

export const allKeywords = [
  ...primaryKeywords,
  ...Object.values(locationKeywords).flat(),
  ...serviceKeywords,
] as const;

export type SeoLocationSlug =
  | "northern-virginia"
  | "woodbridge-va"
  | "fairfax-va"
  | "alexandria-va";

export type SeoLocation = {
  slug: SeoLocationSlug;
  name: string;
  shortName: string;
  state: string;
  title: string;
  description: string;
  headline: string;
  answer: string;
  keywords: string[];
  nearby: string[];
};

export const seoLocations: SeoLocation[] = [
  {
    slug: "northern-virginia",
    name: "Northern Virginia",
    shortName: "NoVA",
    state: "VA",
    title:
      "Digital Marketing Agency Northern Virginia | Creative Clusters",
    description:
      "Creative marketing agency in Northern Virginia for social media, Meta ads, Google ads, local SEO, web design, and videography. Book a free 20-minute strategy call.",
    headline: "Digital marketing agency for Northern Virginia businesses",
    answer:
      "Creative Clusters Marketing is a Virginia-based full-service digital marketing agency serving Northern Virginia with social media management, Meta and Google ads, local SEO, website design, and commercial videography for restaurants, showrooms, and small businesses.",
    keywords: [...locationKeywords["northern-virginia"]],
    nearby: ["Woodbridge", "Fairfax", "Alexandria", "Arlington", "Tysons"],
  },
  {
    slug: "woodbridge-va",
    name: "Woodbridge",
    shortName: "Woodbridge",
    state: "VA",
    title: "Marketing Agency Woodbridge VA | Social, SEO & Video",
    description:
      "Marketing agency in Woodbridge VA for Facebook ads, SEO, website design, and business videography. Monthly social packages for local operators.",
    headline: "Marketing agency Woodbridge VA owners actually call",
    answer:
      "Creative Clusters is a marketing agency serving Woodbridge VA with social media marketing, Facebook ads management, SEO, website design, and business videography — built to book more customer conversations for local businesses.",
    keywords: [...locationKeywords.woodbridge],
    nearby: ["Northern Virginia", "Fairfax", "Alexandria"],
  },
  {
    slug: "fairfax-va",
    name: "Fairfax",
    shortName: "Fairfax",
    state: "VA",
    title:
      "Digital Marketing Agency Fairfax VA | Instagram, Ads & Web",
    description:
      "Digital marketing agency in Fairfax VA for Instagram marketing, Google ads, promotional video, restaurant content, and small business website design.",
    headline: "Digital marketing agency Fairfax VA trusts for growth",
    answer:
      "Creative Clusters Marketing is a digital marketing agency serving Fairfax VA with Instagram marketing, Google ads management, promotional video production, restaurant content creation, and small business website design.",
    keywords: [...locationKeywords.fairfax],
    nearby: ["Northern Virginia", "Woodbridge", "Alexandria"],
  },
  {
    slug: "alexandria-va",
    name: "Alexandria",
    shortName: "Alexandria",
    state: "VA",
    title:
      "Digital Marketing Company Alexandria VA | Ads, Web & Social",
    description:
      "Digital marketing company in Alexandria VA for social media marketing, digital advertising, and website development. Book a free strategy call.",
    headline: "Digital marketing company Alexandria VA can count on",
    answer:
      "Creative Clusters is a digital marketing company serving Alexandria VA with social media marketing, digital advertising, and website development for restaurants, retailers, and service businesses across the DMV.",
    keywords: [...locationKeywords.alexandria],
    nearby: ["Northern Virginia", "Fairfax", "Woodbridge"],
  },
];

export function getSeoLocation(slug: string) {
  return seoLocations.find((l) => l.slug === slug);
}
