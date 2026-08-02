import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPortfolioProject, portfolioProjects } from "@/content/portfolio";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return {};
  return getMetadata({
    title: `${project.title} | Case Study`,
    description: project.problem,
    path: `/portfolio/${project.slug}`,
    image: project.image,
  });
}

/* Case study body copy in content/portfolio.ts is TODO-flagged placeholder
   copy — replace with real project details from the client before launch. */
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();

  const chapters = [
    { title: "Problem", copy: project.problem },
    { title: "Research", copy: project.research },
    { title: "Strategy", copy: project.strategy },
    { title: "Execution", copy: project.execution },
  ];

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${project.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative bg-espresso pb-24 pt-40 text-ivory">
        <Container>
          <Eyebrow onDark>case study</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-h1 font-bold text-balance">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.categories.map((cat) => (
              <Badge key={cat} onDark>
                {cat}
              </Badge>
            ))}
          </div>
        </Container>
        <Container className="mt-12">
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(min-width: 1440px) 1392px, 95vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Chapters */}
      <section className="bg-ivory py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {chapters.map((chapter) => (
              <div
                key={chapter.title}
                className="border-b border-taupe/30 py-10 first:pt-0"
              >
                <h2 className="font-display text-h3 font-bold text-espresso">
                  {chapter.title}
                </h2>
                <p className="mt-4 text-body text-espresso/90">{chapter.copy}</p>
              </div>
            ))}

            {/* Results with stat callout */}
            <div className="py-10">
              <h2 className="font-display text-h3 font-bold text-espresso">
                Results
              </h2>
              <p className="mt-4 text-body text-espresso/90">{project.results}</p>
              <div className="mt-8 border-l-4 border-gold bg-espresso p-8 text-ivory">
                <p className="font-display text-h1 font-bold text-gold">
                  {project.resultStat.value}
                </p>
                <p className="mt-2 text-sand">{project.resultStat.label}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery — placeholder image grid */}
      <section className="bg-ivory pb-24">
        <Container>
          <h2 className="font-display text-h3 font-bold text-espresso">Gallery</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — project visual ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client testimonial */}
      <section className="bg-crimson py-24 text-ivory">
        <Container>
          <figure className="mx-auto max-w-3xl text-center">
            <p aria-hidden="true" className="font-display text-6xl text-gold">
              &ldquo;
            </p>
            <blockquote className="mt-2 font-display text-h3 font-medium italic">
              What stood out was their ability to understand our vision and turn
              it into something even better. The team delivered beyond
              expectations, and the results spoke for themselves.
            </blockquote>
            <figcaption className="mt-6 text-sm text-sand">
              James Carter — Founder &amp; CEO
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* More work */}
      <section className="bg-ivory py-24">
        <Container>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-h3 font-bold text-espresso">
              More projects
            </h2>
            <Link
              href="/portfolio"
              className="font-display text-sm font-semibold uppercase tracking-wide text-coral hover:text-crimson"
            >
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {portfolioProjects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 2)
              .map((p) => (
                <article key={p.slug} className="group relative overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-espresso/90 to-transparent"
                    />
                  </div>
                  <h3 className="absolute bottom-0 left-0 p-6 font-display text-xl font-bold text-ivory">
                    <Link href={`/portfolio/${p.slug}`}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {p.title}
                    </Link>
                  </h3>
                </article>
              ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
