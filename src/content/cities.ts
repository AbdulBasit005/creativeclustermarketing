export type CityPage = {
  slug: string;
  name: string;
  metro: string;
  headline: string;
  support: string;
  localProof: string[];
  nicheSlugs: string[];
  title: string;
  description: string;
};

/** Assumption (plan A7): metros chosen from client density — confirm with ads data. */
export const cities: CityPage[] = [
  {
    slug: "northern-virginia",
    name: "Northern Virginia",
    metro: "Northern Virginia / DC metro",
    headline: "Neuromarketing for Northern Virginia businesses ready to grow",
    support:
      "From Tysons to Arlington, we help local operators book more of the right conversations — with nationwide playbooks tuned to NoVA buyers.",
    localProof: [
      "Virginia HQ with face-to-face strategy when it matters",
      "Campaigns proven with Mid-Atlantic showrooms and restaurants",
      "Google-reviewed by clients who bought locally and scaled out",
    ],
    nicheSlugs: ["car-showrooms", "restaurants", "weddings-nikkah"],
    title: "Marketing Agency Northern Virginia | Creative Clusters",
    description:
      "Virginia-based neuromarketing agency serving Northern Virginia and the DC metro — strategy calls for showrooms, restaurants, weddings, and more.",
  },
  {
    slug: "richmond",
    name: "Richmond",
    metro: "Richmond, VA",
    headline: "Richmond brands that want psychology working harder than discounts",
    support:
      "We bring nationwide creative and media systems to Richmond operators who need consistent booked demand.",
    localProof: [
      "Remote-first delivery with Virginia accountability",
      "Case patterns from food, auto, and hospitality verticals",
      "Local SEO + paid that respects how Richmond searches",
    ],
    nicheSlugs: ["restaurants", "food-trucks", "car-showrooms"],
    title: "Richmond Marketing Agency | Creative Clusters",
    description:
      "Book a free strategy call with Creative Clusters — neuromarketing for Richmond restaurants, food trucks, and showrooms.",
  },
  {
    slug: "charlotte",
    name: "Charlotte",
    metro: "Charlotte, NC",
    headline: "Charlotte growth without the generic agency playbook",
    support:
      "Serving Charlotte clients nationwide-style: clear offers, psychology-led creative, and a calendar that fills with qualified calls.",
    localProof: [
      "Cross-market learnings applied to Carolinas competition",
      "Fast creative cycles for seasonal and weekend demand",
      "Reporting tied to booked calls — not vanity metrics",
    ],
    nicheSlugs: ["car-showrooms", "universities", "weddings-nikkah"],
    title: "Charlotte Marketing Agency | Creative Clusters",
    description:
      "Creative Clusters helps Charlotte businesses grow with neuromarketing — book a free 20-minute strategy call.",
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
