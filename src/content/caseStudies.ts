export type CaseStudy = {
  slug: string;
  client: string;
  niche: string;
  problem: string;
  whatWeDid: string;
  result: string;
  resultStat: { value: string; label: string };
  featured?: boolean;
};

/** Five launch stories + three May 2027 additions — all live now. */
export const caseStudies: CaseStudy[] = [
  {
    slug: "metro-motors-showroom-pipeline",
    client: "Metro Motors",
    niche: "Car showrooms",
    problem:
      "Paid traffic hit the inventory site, but sales desks still sat quiet — leads were curious, not committed.",
    whatWeDid:
      "Rebuilt the offer around a 20-minute appraisal + test-drive ritual, rewrote ad creative around loss-aversion and social proof, and synced SMS follow-up within 5 minutes.",
    result:
      "Qualified showroom appointments rose sharply while cost per lead held flat.",
    resultStat: { value: "38%", label: "more qualified showroom leads in 90 days" },
    featured: true,
  },
  {
    slug: "bloom-nikkah-booking-engine",
    client: "Bloom & Co. Events",
    niche: "Weddings & nikkah",
    problem:
      "Beautiful Instagram, inconsistent deposits — most inquiries ghosted after the first consult.",
    whatWeDid:
      "Mapped the couple decision journey, launched a scarcity-honest calendar, and built a proof-led landing page with clear next steps.",
    result:
      "Consult-to-deposit conversion more than doubled in a single peak season.",
    resultStat: { value: "2.4×", label: "qualified consult bookings vs. prior season" },
    featured: true,
  },
  {
    slug: "ridgeview-enrollment-yield",
    client: "Ridgeview University Extension",
    niche: "Universities",
    problem:
      "Program ads generated clicks, but families stalled before submitting applications.",
    whatWeDid:
      "Clarified outcomes in plain language, added parent-facing proof, and sequenced nurture that answered objections before the deadline.",
    result:
      "Completed applications from paid channels increased within one enrollment cycle.",
    resultStat: { value: "22%", label: "increase in completed applications from paid" },
    featured: true,
  },
  {
    slug: "ember-truck-line-builder",
    client: "Ember Street Eats",
    niche: "Food trucks",
    problem:
      "Strong food, unpredictable lines — followers rarely translated into lunchtime crowds.",
    whatWeDid:
      "Installed location-drop rituals, Reels hooks tied to scarcity, and an SMS list that pinged the next pin 90 minutes out.",
    result:
      "Weekend ticket averages climbed without discounting the menu.",
    resultStat: { value: "61%", label: "higher weekend ticket average after relaunch" },
    featured: true,
  },
  {
    slug: "harbor-table-cover-recovery",
    client: "Harbor Table",
    niche: "Restaurants",
    problem:
      "Weekend waitlists, empty Tuesdays — discounts were training the wrong behavior.",
    whatWeDid:
      "Replaced blanket promos with weekday rituals, local SEO fixes, and creative that sold atmosphere over price.",
    result:
      "Weekday covers recovered while average check stayed healthy.",
    resultStat: { value: "19%", label: "lift in weekday covers in 60 days" },
    featured: true,
  },
  {
    slug: "northline-multi-rooftop",
    client: "Northline Auto Group",
    niche: "Car showrooms",
    problem:
      "Three rooftops competed with each other in ads and diluted brand trust.",
    whatWeDid:
      "Unified messaging under one psychology framework, geo-fenced offers per rooftop, and a shared booking spine.",
    result:
      "Cross-rooftop lead quality improved and brand search rose.",
    resultStat: { value: "27%", label: "rise in brand search with lower CPL" },
  },
  {
    slug: "saffron-venue-yield",
    client: "Saffron Hall",
    niche: "Weddings & nikkah",
    problem:
      "Venue tours were plentiful; signed contracts lagged behind competitors with weaker spaces.",
    whatWeDid:
      "Installed a tour script grounded in commitment consistency and a follow-up sequence with social proof from recent celebrations.",
    result:
      "Tour-to-contract rate improved within two quarters.",
    resultStat: { value: "31%", label: "higher tour-to-contract rate" },
  },
  {
    slug: "campus-kitchen-catering",
    client: "Campus Kitchen Collective",
    niche: "Restaurants",
    problem:
      "Catering was an afterthought — no pipeline beyond word of mouth.",
    whatWeDid:
      "Built a catering offer page, LinkedIn + Meta mix for office managers, and a same-day quote SLA.",
    result:
      "Catering revenue became a predictable second engine.",
    resultStat: { value: "3.1×", label: "catering revenue vs. prior year" },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const homeResults = caseStudies
  .filter((c) => c.featured)
  .slice(0, 3)
  .map((c) => ({
    value: c.resultStat.value,
    label: c.resultStat.label,
    client: c.client,
  }));
