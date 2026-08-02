export interface OpenRole {
  title: string;
  slug: string;
  type: string;
  location: string;
  summary: string;
}

/**
 * Add real roles here as they open — the careers page renders an
 * empty-state message when this array is empty.
 */
export const openRoles: OpenRole[] = [];

/* TODO: placeholder benefits — confirm real benefits with the client. */
export const benefits = [
  {
    title: "Flexible & remote-friendly",
    description:
      "Work where you do your best thinking. We care about output and craft, not hours in a chair.",
  },
  {
    title: "Creative ownership",
    description:
      "You'll lead real projects for real clients — your ideas ship, and your name is on the work.",
  },
  {
    title: "Growth budget",
    description:
      "An annual budget for courses, conferences, and tools so you keep sharpening your skills.",
  },
] as const;
