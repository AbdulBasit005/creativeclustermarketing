export type Niche = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  headline: string;
  support: string;
  problems: string[];
  packageId: "starter" | "growth" | "premium";
  packageWhy: string;
  proofStat: { value: string; label: string };
  caseStudySlug: string;
  keywords: string;
};

export const niches: Niche[] = [
  {
    slug: "car-showrooms",
    name: "Car showrooms",
    shortName: "Showrooms",
    title: "Car Showroom Marketing | Neuromarketing for Dealerships",
    description:
      "Fill the lot with buyers who are ready to talk — psychology-driven ads, offers, and follow-up for car showrooms nationwide.",
    headline: "Turn lot browsers into booked test drives",
    support:
      "We map the decision triggers that move shoppers from scroll to showroom — then build campaigns around them.",
    problems: [
      "High ad spend, low showroom traffic",
      "Offers that attract tire-kickers, not buyers",
      "Sales team follow-up that goes cold overnight",
      "No clear story beyond price and inventory",
    ],
    packageId: "growth",
    packageWhy:
      "Most showrooms land in Growth for multi-channel ads + landing creative; multi-rooftop groups often need Premium.",
    proofStat: { value: "38%", label: "lift in qualified showroom leads in 90 days" },
    caseStudySlug: "metro-motors-showroom-pipeline",
    keywords: "car showroom marketing, dealership neuromarketing",
  },
  {
    slug: "weddings-nikkah",
    name: "Weddings & nikkah",
    shortName: "Weddings",
    title: "Wedding & Nikkah Marketing | Book More Ideal Couples",
    description:
      "Attract couples who value craft and clarity — neuromarketing for wedding and nikkah planners, venues, and vendors.",
    headline: "Book couples who already feel the yes",
    support:
      "We design desire, trust, and urgency into every touchpoint so inquiries arrive warmer and closer.",
    problems: [
      "Seasonal feast-or-famine inquiry flow",
      "Price shoppers flooding the inbox",
      "Weak proof on Instagram vs. competitors",
      "No system to convert consults into deposits",
    ],
    packageId: "growth",
    packageWhy:
      "Growth covers content + ads through peak season; Premium adds production-heavy video for destination brands.",
    proofStat: { value: "2.4×", label: "qualified consult bookings vs. prior season" },
    caseStudySlug: "bloom-nikkah-booking-engine",
    keywords: "wedding marketing, nikkah marketing agency",
  },
  {
    slug: "universities",
    name: "Universities",
    shortName: "Universities",
    title: "University Marketing | Enrollment & Reputation Growth",
    description:
      "Enrollment and reputation campaigns grounded in decision psychology for universities and academic programs.",
    headline: "Enrollment campaigns that respect how families decide",
    support:
      "We translate academic strengths into clear emotional and rational reasons to apply — then measure what moves yield.",
    problems: [
      "Generic program pages that fail to convert",
      "Admissions leads that never complete applications",
      "Brand that feels institutional, not human",
      "Fragmented campaigns across departments",
    ],
    packageId: "premium",
    packageWhy:
      "Universities typically need Premium for multi-stakeholder strategy, creative production, and reporting rigor.",
    proofStat: { value: "22%", label: "increase in completed applications from paid" },
    caseStudySlug: "ridgeview-enrollment-yield",
    keywords: "university marketing agency, enrollment neuromarketing",
  },
  {
    slug: "food-trucks",
    name: "Food trucks",
    shortName: "Food trucks",
    title: "Food Truck Marketing | Lines, Locations & Loyalty",
    description:
      "Location drops, menu hooks, and loyalty loops that turn passersby into regulars for food truck brands.",
    headline: "Build lines before the truck arrives",
    support:
      "We use anticipation, scarcity, and social proof so your next spot is busy before the generator starts.",
    problems: [
      "Inconsistent daily revenue by location",
      "Followers who never show up in person",
      "Menu stories that don’t travel on Reels",
      "No email/SMS list to re-activate fans",
    ],
    packageId: "starter",
    packageWhy:
      "Starter fits single-truck operators; multi-truck fleets often step into Growth for paid + SMS.",
    proofStat: { value: "61%", label: "more weekend ticket average after relaunch" },
    caseStudySlug: "ember-truck-line-builder",
    keywords: "food truck marketing, food truck social media agency",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    shortName: "Restaurants",
    title: "Restaurant Marketing | Covers, Catering & Repeat Visits",
    description:
      "Fill covers and grow catering with psychology-led offers, creative, and local SEO for restaurants.",
    headline: "Fill more covers without racing to the bottom on discounts",
    support:
      "We craft offers and creative that feel generous — while protecting margin and brand.",
    problems: [
      "Discount dependency that trains cheap visits",
      "Slow weeknights and empty early seatings",
      "Weak Google presence vs. nearby competitors",
      "Catering demand that never compounds",
    ],
    packageId: "growth",
    packageWhy:
      "Growth is the default for full-service restaurants; groups and seasonal campaigns may need Premium.",
    proofStat: { value: "19%", label: "lift in weekday covers in 60 days" },
    caseStudySlug: "harbor-table-cover-recovery",
    keywords: "restaurant marketing agency, restaurant neuromarketing",
  },
];

export function getNiche(slug: string) {
  return niches.find((n) => n.slug === slug);
}
