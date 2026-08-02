/**
 * SOURCE OF TRUTH: services.md (project root).
 * Category names, order, and every service item are transcribed verbatim.
 * Do not shorten, merge, or omit services. If services.md changes, update
 * this file and re-check: Navbar mega-menu, Footer services column,
 * homepage Services section, /services hub, /services/[slug] pages,
 * and the contact form category dropdown.
 */
import {
  Clapperboard,
  Globe,
  Lightbulb,
  Megaphone,
  Palette,
  PenTool,
  Search,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Video, Photo & Creative Production",
    slug: "video-photo-creative-production",
    icon: Clapperboard,
    description:
      "Full-service production — from promotional videos and brand stories to photography, drone work, and motion graphics.",
    services: [
      "Video Ads & Promotional Videos",
      "Brand Story Videos",
      "Corporate Documentaries",
      "Photography (Product, Corporate, Events)",
      "Drone Videography",
      "Reels & Shorts Production",
      "Animation & Motion Graphics",
    ],
  },
  {
    name: "Branding & Creative",
    slug: "branding-creative",
    icon: Palette,
    description:
      "We craft brand identities that speak with clarity, personality, and purpose — from strategy and logo design to complete visual systems.",
    services: [
      "Brand Strategy & Positioning",
      "Logo Design & Visual Identity",
      "Brand Guidelines",
      "Packaging Design",
      "Corporate Identity Development",
      "Rebranding Services",
    ],
  },
  {
    name: "Consulting & Strategy",
    slug: "consulting-strategy",
    icon: Lightbulb,
    description:
      "Data-backed strategy, research, and audits that give your business a clear path to growth.",
    services: [
      "Marketing Strategy Development",
      "Business Growth Consulting",
      "Competitor Analysis",
      "Market Research",
      "Brand Audit",
    ],
  },
  {
    name: "Marketing",
    slug: "marketing",
    icon: Megaphone,
    description:
      "High-performance campaigns across social, search, email, and SMS that maximize ROI and grow your audience.",
    services: [
      "Social Media Marketing (Facebook, Instagram, TikTok, YouTube)",
      "Social Media Management",
      "Paid Ad Campaigns (Meta, Google Ads, TikTok Ads)",
      "Email Marketing & Automation",
      "SMS Marketing",
      "Influencer Marketing",
    ],
  },
  {
    name: "Search & SEO",
    slug: "search-seo",
    icon: Search,
    description:
      "Every SEO plan is customized to your industry, audience, and goals — we optimize websites and build authority through trusted methods.",
    services: [
      "Search Engine Optimization (SEO)",
      "Local SEO",
      "SEO Audits & Strategy",
      "Content Optimization",
      "Keyword Research",
    ],
  },
  {
    name: "Content Creation",
    slug: "content-creation",
    icon: PenTool,
    description:
      "Compelling copy and creative storytelling that gives your brand a voice people remember.",
    services: [
      "Social Media Content",
      "Blog Writing & Copywriting",
      "Script Writing",
      "Creative Storytelling",
      "Press Releases",
    ],
  },
  {
    name: "E-Commerce Marketing",
    slug: "e-commerce-marketing",
    icon: ShoppingCart,
    description:
      "We help online stores grow through strategic marketing that increases traffic, improves conversions, and builds customer loyalty.",
    services: [
      "Shopify / WooCommerce Setup",
      "Product Listing Optimization",
      "Amazon / Etsy Store Optimization",
      "Retargeting Campaigns",
      "Email Flows for E-Commerce",
      "Payment Gateway Integration",
      "Inventory & Order Management Systems",
    ],
  },
  {
    name: "Website Development",
    slug: "website-development",
    icon: Globe,
    description:
      "We build modern, user-focused websites and web applications that represent your brand with professionalism and clarity.",
    services: [
      "Website Design & Development",
      "Custom Web Applications",
      "E-Commerce Store Development",
      "Landing Pages for Campaigns",
      "WordPress Development",
      "Shopify Development",
      "UI/UX Design & Prototyping",
      "Website Optimization (Speed, Performance, UX)",
      "Website Maintenance & Support",
    ],
  },
];

export function getServiceCategory(slug: string) {
  return serviceCategories.find((c) => c.slug === slug);
}
