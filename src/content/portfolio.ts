export interface PortfolioProject {
  title: string;
  slug: string;
  categories: string[];
  image: string;
  /* TODO: placeholder case-study copy below — replace with real project
     details from the client before launch. */
  problem: string;
  research: string;
  strategy: string;
  execution: string;
  results: string;
  resultStat: { value: string; label: string };
}

export const portfolioCategories = [
  "Branding",
  "Digital Marketing",
  "Website Design",
  "Graphic Design",
  "Creative",
] as const;

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "The Art of Digital Storytelling",
    slug: "the-art-of-digital-storytelling",
    categories: ["Digital Marketing", "Website Design"],
    image: "/images/portfolio/the-art-of-digital-storytelling.jpeg",
    problem:
      "A growing lifestyle brand had strong products but a fragmented digital narrative — its website, social channels, and campaigns each told a different story, and engagement was flatlining.",
    research:
      "We audited every customer touchpoint, interviewed loyal customers, and mapped where the brand's voice diverged across channels.",
    strategy:
      "We built a unified storytelling framework: one narrative arc, adapted per channel, anchored by a redesigned website that acted as the story's home base.",
    execution:
      "A new content system, a rebuilt website with editorial-style landing pages, and a 12-week rollout of coordinated story-driven campaigns.",
    results:
      "Session duration doubled and campaign click-through rates rose sharply within the first quarter after launch.",
    resultStat: { value: "2.1x", label: "increase in average session duration" },
  },
  {
    title: "Telling Stories That Matter",
    slug: "telling-stories-that-matter",
    categories: ["Branding", "Graphic Design"],
    image: "/images/portfolio/telling-stories-that-matter.jpeg",
    problem:
      "A nonprofit with a powerful mission was struggling to translate its impact into a visual identity donors could connect with.",
    research:
      "Stakeholder workshops and donor surveys revealed the existing identity felt institutional rather than human.",
    strategy:
      "Reposition the organization around the people it serves — warm photography, handcrafted illustration, and a story-first brand system.",
    execution:
      "Full identity redesign: logo, typography, print collateral, annual report design, and brand guidelines for internal teams.",
    results:
      "The rebrand launch campaign drove the organization's strongest giving season to date.",
    resultStat: { value: "+38%", label: "year-over-year donation growth" },
  },
  {
    title: "Redefining Creativity",
    slug: "redefining-creativity",
    categories: ["Branding", "Website Design"],
    image: "/images/portfolio/redefining-creativity.jpeg",
    problem:
      "A boutique architecture studio's dated website undersold the caliber of its portfolio and lost pitches to flashier competitors.",
    research:
      "Competitive analysis of award-winning studio sites plus interviews with past clients about what actually won their trust.",
    strategy:
      "Let the work lead: a minimal, gallery-first site architecture with confident typography and an updated wordmark.",
    execution:
      "Brand refinement, full website redesign and build, and a structured case-study template the studio could maintain itself.",
    results:
      "Inbound project inquiries increased significantly in the six months following launch.",
    resultStat: { value: "+60%", label: "increase in qualified inbound inquiries" },
  },
  {
    title: "Marketing with Emotion",
    slug: "marketing-with-emotion",
    categories: ["Branding", "Graphic Design"],
    image: "/images/portfolio/marketing-with-emotion.jpeg",
    problem:
      "A regional food brand had loyal local customers but couldn't articulate what made it special as it expanded into new markets.",
    research:
      "Taste-testing events and social listening surfaced the emotional driver: nostalgia for family recipes.",
    strategy:
      "Build the entire brand voice and packaging system around 'made like family' — warm, personal, story-rich.",
    execution:
      "Packaging redesign across 14 SKUs, launch campaign creative, and in-store point-of-sale materials.",
    results:
      "New-market retail velocity beat projections in the first two quarters.",
    resultStat: { value: "+45%", label: "retail sales velocity vs. forecast" },
  },
  {
    title: "Creativity Without Borders",
    slug: "creativity-without-borders",
    categories: ["Creative", "Digital Marketing"],
    image: "/images/portfolio/creativity-without-borders.png",
    problem:
      "A SaaS startup expanding internationally needed campaign creative that worked across five markets without losing its personality.",
    research:
      "Market-by-market cultural review with local consultants to find shared creative territory.",
    strategy:
      "A modular campaign system — one core concept with locally adaptable visuals, copy frameworks, and channel mixes.",
    execution:
      "Campaign toolkit, localized ad creative for five markets, and centralized performance dashboards.",
    results:
      "Cost per acquisition dropped while the brand maintained a consistent global identity.",
    resultStat: { value: "-32%", label: "reduction in blended cost per acquisition" },
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}
