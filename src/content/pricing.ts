/**
 * Live listed prices for new clients (Phase 1 — Nov 2026 brief).
 * June 2027: raise 10% for new clients — toggle `applyJune2027Increase`.
 */
export const applyJune2027Increase = true;

const BASE_TIERS = [
  {
    id: "starter",
    name: "Starter",
    min: 800,
    max: 1200,
    blurb: "For local businesses ready to test psychology-led campaigns.",
    includes: [
      "Channel audit & positioning brief",
      "Monthly content system (8–12 assets)",
      "Meta or Google campaign setup",
      "Monthly performance readout",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    min: 1500,
    max: 2500,
    blurb: "For operators who need consistent leads and booked conversations.",
    includes: [
      "Everything in Starter",
      "Full-funnel ads (Meta + Google)",
      "Landing page or offer creative",
      "Bi-weekly optimization sprints",
      "Review & reputation prompts",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    min: 3000,
    max: 5000,
    blurb: "For multi-location or high-ticket brands scaling nationwide.",
    includes: [
      "Everything in Growth",
      "Dedicated strategist",
      "Creative production block",
      "CRM / booking funnel integration",
      "Weekly war-room calls",
    ],
  },
] as const;

function adjust(n: number) {
  return applyJune2027Increase ? Math.round(n * 1.1) : n;
}

export const pricingTiers = BASE_TIERS.map((tier) => {
  const min = adjust(tier.min);
  const max = adjust(tier.max);
  return {
    ...tier,
    min,
    max,
    displayRange: `$${min.toLocaleString()}–$${max.toLocaleString()}/mo`,
  };
});

export const pricingAddOns = [
  { name: "Video / reel production block", price: "From $750" },
  { name: "Website conversion rebuild", price: "From $2,500" },
  { name: "Brand identity refresh", price: "From $1,800" },
  { name: "Local SEO sprint (90 days)", price: "From $1,200" },
  { name: "Holiday campaign package", price: "Custom — see seasonal offer" },
] as const;

export const pricingNote = applyJune2027Increase
  ? "Rates shown reflect our June 2027 new-client pricing (+10%). Existing clients are grandfathered on their current agreement."
  : "Custom scopes quoted on the strategy call. Existing clients keep their current agreement.";
