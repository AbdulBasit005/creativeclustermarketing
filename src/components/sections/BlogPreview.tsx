import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/content/blog";

export function BlogPreview() {
  return (
    <section className="bg-ivory py-24">
      <Container>
        <SectionHeading
          title="Explore our blog"
          description="Dive into the creative process, explore innovative design solutions, and discover how we help brands like yours stand out."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col overflow-hidden border border-taupe/30 bg-ivory transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-espresso/10"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-espresso px-3 py-1 text-xs font-medium text-ivory">
                  {post.date}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((cat) => (
                    <Badge key={cat}>{cat}</Badge>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-espresso group-hover:text-crimson">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-taupe">
                  {post.excerpt}
                </p>
                <p className="mt-5 font-display text-sm font-semibold uppercase tracking-wide text-coral">
                  Read more →
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
