export const site = {
  name: "Creative Clusters Marketing",
  shortName: "Creative Clusters",
  url: "https://creativeclustersmarketing.com",
  tagline: "Design. Innovate. Inspire — Crafting Your Creative Future.",
  description:
    "Digital marketing agency in Northern Virginia for social media, Meta & Google ads, local SEO, website design, and videography. Creative marketing agency serving Woodbridge, Fairfax, Alexandria, and clients nationwide.",
  address: "Woodbridge, Virginia, United States of America",
  phone: "+1 (703) 454-1448",
  phoneHref: "tel:+17034541448",
  whatsapp: "https://wa.me/17034541448",
  email: "creativeclustersmarketing@gmail.com",
  emailHref: "mailto:creativeclustersmarketing@gmail.com",
  handle: "@creativeclustersmarketing",
  /** Primary CTA — locked across the site */
  ctaLabel: "Book a free 20-minute strategy call",
  ctaHref: "/contact",
  /**
   * Booking calendar embed. Set NEXT_PUBLIC_BOOKING_URL in env to your
   * Calendly/Cal.com event URL. Falls back to contact form on /contact.
   */
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    "https://calendly.com/creativeclustersmarketing/strategy-call",
  googleReviewsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ??
    "https://www.google.com/search?q=Creative+Clusters+Marketing+Virginia+reviews",
  reviewRating: 4.9,
  reviewCount: 47,
  social: {
    facebook: "https://www.facebook.com/share/1CtRxtnpgY/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/creativeclustersmarketing/",
    linkedin: "https://www.linkedin.com/company/creativeclustersmarketingllc",
    tiktok: "#",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Niches", href: "/niches" },
  { label: "About", href: "/about" },
  { label: "Book a Call", href: "/contact" },
] as const;

export const footerExtraLinks = [
  { label: "Locations", href: "/locations" },
  { label: "Northern Virginia", href: "/locations/northern-virginia" },
  { label: "Woodbridge VA", href: "/locations/woodbridge-va" },
  { label: "Fairfax VA", href: "/locations/fairfax-va" },
  { label: "Alexandria VA", href: "/locations/alexandria-va" },
  { label: "Neuromarketing", href: "/neuromarketing" },
  { label: "Referral Program", href: "/refer" },
  { label: "Free Guide", href: "/resources/neuromarketing-guide" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
] as const;
