/**
 * Blog content is structured as typed blocks (not raw strings) so a real
 * CMS (Sanity, Contentful, headless WordPress) can be swapped in later
 * without touching the page components.
 */
export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "pullquote"; text: string };

export interface BlogPost {
  title: string;
  slug: string;
  categories: string[];
  excerpt: string;
  date: string;
  dateISO: string;
  author: string;
  authorRole: string;
  image: string;
  body: BlogBlock[];
}

/* TODO: body paragraphs below are placeholder editorial copy — replace with
   real articles from the client before launch. Excerpts are real content
   from the current site. */
const placeholderBody = (topic: string): BlogBlock[] => [
  {
    type: "heading",
    level: 2,
    text: "Why this matters now",
  },
  {
    type: "paragraph",
    text: `Audiences today are saturated with content, and attention is the scarcest resource a brand competes for. ${topic} isn't a nice-to-have — it's the difference between being remembered and being scrolled past.`,
  },
  {
    type: "pullquote",
    text: "Great brands aren't the loudest in the room — they're the clearest.",
  },
  {
    type: "heading",
    level: 2,
    text: "What we've learned from client work",
  },
  {
    type: "paragraph",
    text: "Across 150+ projects, the pattern is consistent: brands that invest in a clear strategy before execution see compounding returns. The creative gets sharper, the message gets tighter, and every channel starts pulling in the same direction.",
  },
  {
    type: "paragraph",
    text: "The practical starting point is an honest audit. Look at your last ten pieces of published content and ask whether a stranger could describe your brand's personality from them alone. If the answer is no, the problem isn't volume — it's coherence.",
  },
  {
    type: "heading",
    level: 3,
    text: "Where to go from here",
  },
  {
    type: "paragraph",
    text: "Start small, but start deliberately: define the one idea your brand should own, then let every design and marketing decision reinforce it. That discipline is what turns creative work into business results.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Design Without Limits: Pushing Creative Boundaries",
    slug: "design-without-limits-pushing-creative-boundaries",
    categories: ["Branding", "Marketing"],
    excerpt:
      "In today's crowded and fast-paced digital landscape, creating campaigns that truly stand out requires more than just eye-catching visuals or clever slogans.",
    date: "May 28, 2025",
    dateISO: "2025-05-28",
    author: "Creative Clusters Team",
    authorRole: "Editorial",
    image: "/images/blog/design-without-limits.jpeg",
    body: placeholderBody("Pushing creative boundaries"),
  },
  {
    title: "Building a Strong Brand Identity Through Visual Storytelling",
    slug: "building-a-strong-brand-identity-through-visual-storytelling",
    categories: ["Content", "Design"],
    excerpt:
      "A strong brand identity tells a story — one that your audience can see, feel, and remember.",
    date: "May 29, 2025",
    dateISO: "2025-05-29",
    author: "Creative Clusters Team",
    authorRole: "Editorial",
    image: "/images/blog/building-brand-identity.jpeg",
    body: placeholderBody("Visual storytelling"),
  },
  {
    title: "How Investing in Good Design Leads to Long-Term Business Success",
    slug: "how-investing-in-good-design-leads-to-long-term-business-success",
    categories: ["Design", "Marketing"],
    excerpt:
      "Great design isn't just a visual asset — it's a core business strategy.",
    date: "May 31, 2025",
    dateISO: "2025-05-31",
    author: "Creative Clusters Team",
    authorRole: "Editorial",
    image: "/images/blog/investing-in-design.jpeg",
    body: placeholderBody("Investing in good design"),
  },
  {
    title: "Questions To Ask Your Brand Designer Before You Book",
    slug: "questions-to-ask-your-brand-designer-before-you-book",
    categories: ["Branding", "Storytelling"],
    excerpt:
      "Hiring the right brand designer is a key step in shaping your visual identity and communicating your brand values effectively.",
    date: "Jun 2, 2025",
    dateISO: "2025-06-02",
    author: "Creative Clusters Team",
    authorRole: "Editorial",
    image: "/images/blog/questions-for-designer.jpeg",
    body: placeholderBody("Choosing the right brand designer"),
  },
];

export const blogCategories = [
  "Branding",
  "Marketing",
  "Content",
  "Design",
  "Storytelling",
] as const;

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
