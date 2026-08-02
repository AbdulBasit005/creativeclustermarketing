import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/constants/site";
import { blogPosts, getBlogPost, type BlogBlock } from "@/content/blog";
import { generateBreadcrumbSchema, getMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return getMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading": {
      const Heading = block.level === 2 ? "h2" : "h3";
      return (
        <Heading
          className={
            block.level === 2
              ? "mt-12 font-display text-h3 font-bold text-espresso"
              : "mt-10 font-display text-xl font-bold text-espresso"
          }
        >
          {block.text}
        </Heading>
      );
    }
    case "pullquote":
      return (
        <blockquote className="my-10 border-l-4 border-gold py-2 pl-6">
          <p className="font-display text-h3 font-medium italic text-crimson">
            {block.text}
          </p>
        </blockquote>
      );
    default:
      return <p className="mt-6 text-body text-espresso/90">{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.dateISO,
    author: { "@type": "Organization", name: post.author },
    image: `${site.url}${post.image}`,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="bg-espresso pb-16 pt-40 text-ivory">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-sand">{post.date}</span>
              {post.categories.map((cat) => (
                <Badge key={cat} onDark>
                  {cat}
                </Badge>
              ))}
            </div>
            <h1 className="mt-6 font-display text-h1 font-bold text-balance">
              {post.title}
            </h1>
            <div className="mt-8 flex items-center gap-4 border-t border-ivory/15 pt-6">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display font-bold text-espresso"
              >
                {post.author.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold">{post.author}</p>
                <p className="text-xs text-sand">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <article className="bg-ivory py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
            {/* Opening paragraph is the real excerpt from the current site */}
            <p className="mt-10 text-lg font-medium leading-relaxed text-espresso">
              {post.excerpt}
            </p>
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </Container>
      </article>

      {/* Related posts */}
      <section className="border-t border-taupe/30 bg-ivory py-20">
        <Container>
          <h2 className="font-display text-h3 font-bold text-espresso">
            Related posts
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((p) => (
              <article key={p.slug} className="group relative">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs text-taupe">{p.date}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-espresso group-hover:text-crimson">
                  <Link href={`/blog/${p.slug}`}>
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
