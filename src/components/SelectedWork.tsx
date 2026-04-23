"use client";

import type { PointerEvent } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function SelectedWork({ previewLimit }: { previewLimit?: number }) {
  const { copy } = useLanguage();
  const filters = useMemo(
    () => ["All", ...Array.from(new Set(caseStudies.flatMap((study) => study.topics)))],
    []
  );
  const [activeFilter, setActiveFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const isPreview = typeof previewLimit === "number" && !expanded;
  const localizedStudies = caseStudies.map((study, index) => ({
    ...study,
    localized: copy.work.cards[index] ?? copy.work.cards[0]
  }));

  const filteredStudies =
    activeFilter === "All"
      ? localizedStudies
      : localizedStudies.filter((study) => study.topics.includes(activeFilter));
  const visibleStudies = isPreview ? filteredStudies.slice(0, previewLimit) : filteredStudies;

  const filterLabelFor = (filter: string) =>
    copy.work.filters[filter as keyof typeof copy.work.filters] ?? filter;

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--spotlight-x",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--spotlight-y",
      `${event.clientY - rect.top}px`
    );
  }

  return (
    <section className="py-20 sm:py-28" id="work">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <SectionHeader
            eyebrow={copy.work.kicker}
            title={copy.work.title}
            description={copy.work.intro}
          />

          {!isPreview ? (
          <div className="lg:justify-self-end">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted dark:text-paper/55">
              <SlidersHorizontal className="h-4 w-4" />
              {copy.work.filterLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "focus-ring relative overflow-hidden rounded-md border px-3 py-2 text-sm font-semibold transition",
                    activeFilter === filter
                      ? "border-ink text-paper dark:border-paper dark:text-ink"
                      : "border-ink/10 bg-white/55 text-ink-muted hover:border-ink/25 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:text-paper/60 dark:hover:border-paper/25 dark:hover:text-paper"
                  )}
                >
                  {activeFilter === filter ? (
                    <motion.span
                      layoutId="case-filter"
                      className="absolute inset-0 bg-ink dark:bg-paper"
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                  <span className="relative">{filterLabelFor(filter)}</span>
                </button>
              ))}
            </div>
          </div>
          ) : (
            <div className="lg:justify-self-end">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="focus-ring motion-surface inline-flex items-center gap-2 rounded-md border border-ink/10 bg-white/62 px-4 py-3 text-sm font-semibold text-ink shadow-line transition hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-paper/5 dark:text-paper dark:hover:border-paper/25"
              >
                {copy.ui.viewAll}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          )}
        </div>

        <motion.div layout className="mt-12 grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleStudies.map((study, index) => (
              <motion.article
                key={study.slug}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.98, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 12, scale: 0.98, filter: "blur(8px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.46, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
                onPointerMove={handlePointerMove}
                className="spotlight-card motion-surface group overflow-hidden rounded-md border border-ink/10 bg-white/72 shadow-line hover:border-ink/24 hover:shadow-lift dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25"
              >
                <Link href={`/case-studies/${study.slug}`} className="focus-ring block h-full">
                  <div className={cn("min-h-48 bg-gradient-to-br p-6 transition duration-500 group-hover:scale-[1.015]", study.accentClass)}>
                  <div className="flex items-start justify-between gap-4">
                    <p className="rounded-md bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-line dark:bg-ink/70 dark:text-paper">
                      {study.localized.artifactLabel}
                    </p>
                    <p className="text-right text-sm font-semibold text-ink/70 dark:text-paper/70">
                      {study.localized.artifactTitle}
                    </p>
                  </div>
                  <div className="mt-14 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-ink dark:text-ink">
                    <div className="h-px origin-left scale-x-75 bg-ink/20 transition duration-500 group-hover:scale-x-100" />
                    <div className="rounded-md bg-ink px-4 py-3 text-center text-paper shadow-line transition duration-500 group-hover:-translate-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
                        {study.localized.artifactTitle}
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        {study.localized.artifactMeta}
                      </p>
                    </div>
                    <div className="h-px origin-right scale-x-75 bg-ink/20 transition duration-500 group-hover:scale-x-100" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {study.localized.tags.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md border border-ink/10 px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-paper/10 dark:text-paper/55"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                    {study.localized.meta}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink dark:text-paper">
                    {study.localized.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ink-muted dark:text-paper/65">
                    {study.localized.body}
                  </p>

                  <ul className="mt-5 grid gap-3">
                    {study.localized.bullets.map((bullet) => (
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
                    {study.localized.cta}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
