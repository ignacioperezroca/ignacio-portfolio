"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  const filters = useMemo(
    () => ["All", ...Array.from(new Set(caseStudies.flatMap((study) => study.topics)))],
    []
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.topics.includes(activeFilter));

  return (
    <section className="py-20 sm:py-28" id="work">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <SectionHeader
            eyebrow="Selected work"
            title="Case studies built around product judgment, not screenshots."
            description="Each story is structured around context, constraints, strategy, execution, stakeholder management, and impact. Replace placeholder numbers with verified metrics as you finalize the portfolio."
          />

          <div className="lg:justify-self-end">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted dark:text-paper/55">
              <SlidersHorizontal className="h-4 w-4" />
              Filter by theme
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "focus-ring rounded-md border px-3 py-2 text-sm font-semibold transition",
                    activeFilter === filter
                      ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                      : "border-ink/10 bg-white/55 text-ink-muted hover:border-ink/25 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:text-paper/60 dark:hover:border-paper/25 dark:hover:text-paper"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {filteredStudies.map((study, index) => (
            <motion.article
              key={study.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group overflow-hidden rounded-md border border-ink/10 bg-white/72 shadow-line transition hover:-translate-y-1 hover:border-ink/24 hover:shadow-lift dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25"
            >
              <Link href={`/case-studies/${study.slug}`} className="focus-ring block h-full">
                <div className={cn("min-h-48 bg-gradient-to-br p-6", study.accentClass)}>
                  <div className="flex items-start justify-between gap-4">
                    <p className="rounded-md bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-line dark:bg-ink/70 dark:text-paper">
                      {study.artifact.label}
                    </p>
                    <p className="text-right text-sm font-semibold text-ink/70 dark:text-paper/70">
                      {study.impactMetric}
                    </p>
                  </div>
                  <div className="mt-14 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-ink dark:text-ink">
                    <div className="h-px bg-ink/20" />
                    <div className="rounded-md bg-ink px-4 py-3 text-center text-paper shadow-line">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
                        {study.artifact.primary}
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        {study.artifact.secondary}
                      </p>
                    </div>
                    <div className="h-px bg-ink/20" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {study.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md border border-ink/10 px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-paper/10 dark:text-paper/55"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                    {study.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink dark:text-paper">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ink-muted dark:text-paper/65">
                    {study.summary}
                  </p>

                  <ul className="mt-5 grid gap-3">
                    {study.previewBullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-ink-muted dark:text-paper/62"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:gap-3 dark:text-paper">
                    Read case study
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
