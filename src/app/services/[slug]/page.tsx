import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/constants/site";
import { portfolioProjects } from "@/content/portfolio";
import { getServiceCategory, serviceCategories } from "@/content/services";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return serviceCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) return {};
  return getMetadata({
    title: `${category.name} Services`,
    description: category.description,
    path: `/services/${category.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = getServiceCategory(slug);
  if (!category) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.name,
    description: category.description,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "United States",
    url: `${site.url}/services/${category.slug}`,
  };

  const relatedWork = portfolioProjects.slice(0, 2);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: category.name, path: `/services/${category.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="bg-crimson pb-20 pt-40 text-ivory">
        <Container>
          <Eyebrow onDark>service</Eyebrow>
          <div className="mt-6 flex items-center gap-5">
            <category.icon className="h-12 w-12 shrink-0 text-gold" aria-hidden="true" />
            <h1 className="font-display text-h1 font-bold text-balance">
              {category.name}
            </h1>
          </div>
          <p className="mt-6 max-w-2xl text-body text-sand">
            {category.description}
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* What's included — the complete service list from services.md */}
      <section className="bg-ivory py-24">
        <Container>
          <h2 className="font-display text-h2 font-bold text-espresso">
            What&apos;s included
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {category.services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-3 border border-taupe/30 bg-ivory p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="font-medium text-espresso">{service}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Related work */}
      <section className="bg-espresso py-24 text-ivory">
        <Container>
          <h2 className="font-display text-h2 font-bold">Related work</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {relatedWork.map((project) => (
              <article key={project.slug} className="group relative overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-espresso/90 to-transparent"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat) => (
                      <Badge key={cat} onDark>
                        {cat}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold">
                    <Link href={`/portfolio/${project.slug}`}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {project.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
