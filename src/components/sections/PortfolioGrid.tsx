"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { portfolioCategories, portfolioProjects } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<string | null>(null);

  const projects = filter
    ? portfolioProjects.filter((p) => p.categories.includes(filter))
    : portfolioProjects;

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
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
        {portfolioCategories.map((cat) => (
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
        {projects.map((project) => (
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
                className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent"
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
              <h2 className="mt-3 font-display text-xl font-bold text-ivory">
                <Link href={`/portfolio/${project.slug}`}>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {project.title}
                </Link>
              </h2>
              <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-coral opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View case study →
              </p>
            </div>
          </article>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="mt-12 text-taupe">No projects in this category yet.</p>
      )}
    </div>
  );
}
