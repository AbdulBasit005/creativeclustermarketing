import { notFound } from "next/navigation";

import { NicheLanding } from "@/components/sections/NicheLanding";
import { JsonLd } from "@/components/seo/JsonLd";
import { getNiche, niches } from "@/content/niches";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return niches.map((niche) => ({ slug: niche.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const niche = getNiche(slug);
  if (!niche) return {};
  return getMetadata({
    title: niche.title,
    description: niche.description,
    path: `/niches/${niche.slug}`,
  });
}

export default async function NichePage({ params }: Props) {
  const { slug } = await params;
  const niche = getNiche(slug);
  if (!niche) notFound();

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Niches", path: "/niches" },
          { name: niche.name, path: `/niches/${niche.slug}` },
        ])}
      />
      <NicheLanding niche={niche} />
    </>
  );
}
