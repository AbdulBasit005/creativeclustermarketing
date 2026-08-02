"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { blogCategories, blogPosts } from "@/content/blog";
import { cn } from "@/lib/utils";

export function BlogGrid() {
  const [filter, setFilter] = useState<string | null>(null);

  const posts = filter
    ? blogPosts.filter((p) => p.categories.includes(filter))
    : blogPosts;

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter posts by category">
        <button
          type="button"
          aria-pressed={filter === null}
          onClick={() => setFilter(null)}
          className={cn(
            "border px-4 py-2 text-sm font-medium transition-colors",
            filter === null
              ? "border-coral bg-coral text-ivory"
              : "border-taupe/40 text-taupe hover:border-espresso hover:text-espresso"
          )}
        >
          All
        </button>
        {blogCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={filter === cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "border px-4 py-2 text-sm font-medium transition-colors",
              filter === cat
                ? "border-coral bg-coral text-ivory"
                : "border-taupe/40 text-taupe hover:border-espresso hover:text-espresso"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
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
              <h2 className="mt-4 font-display text-xl font-bold text-espresso group-hover:text-crimson">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}
                </Link>
              </h2>
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

      {posts.length === 0 && (
        <p className="mt-12 text-taupe">No posts in this category yet.</p>
      )}
    </div>
  );
}
