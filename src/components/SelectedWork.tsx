"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { motionDuration, motionEase } from "@/lib/motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
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
  const itemVariants = staggerItem;
  const listVariants = staggerContainer;

  return (
    <section className="scroll-mt-24 py-20 sm:scroll-mt-28 sm:py-28" id="work">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <FadeIn variant="softReveal">
            <SectionHeader
              eyebrow={copy.work.kicker}
              title={copy.work.title}
              description={copy.work.intro}
            />
          </FadeIn>

          {!isPreview ? (
            <FadeIn delay={0.06} className="lg:justify-self-end">
              <div>
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
                        "focus-ring transition-premium relative overflow-hidden rounded-md border px-3 py-2 text-sm font-semibold",
                        activeFilter === filter
                          ? "border-ink text-paper dark:border-paper dark:text-ink"
                          : "border-ink/10 bg-white/55 text-ink-muted hover:border-ink/25 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:text-paper/60 dark:hover:border-paper/25 dark:hover:text-paper"
                      )}
                    >
                      {activeFilter === filter ? (
                        <motion.span
                          layoutId="case-filter"
                          className="absolute inset-0 bg-ink dark:bg-paper"
                          transition={{ duration: motionDuration.hover, ease: motionEase }}
                        />
                      ) : null}
                      <span className="relative">{filterLabelFor(filter)}</span>
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.06} className="lg:justify-self-end">
              <div>
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="focus-ring group motion-surface transition-premium inline-flex items-center gap-2 rounded-md border border-ink/10 bg-white/62 px-4 py-3 text-sm font-semibold text-ink shadow-line hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-paper/5 dark:text-paper dark:hover:border-paper/25"
                >
                  {copy.ui.viewAll}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
                </button>
              </div>
            </FadeIn>
          )}
        </div>

        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={listVariants}
          className="mt-12 grid gap-5 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visibleStudies.map((study) => (
              <motion.article
                key={study.slug}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, y: 10, scale: 0.985, filter: "blur(8px)" }}
                viewport={{ once: true, margin: "-80px" }}
                className="spotlight-card motion-surface transition-premium group overflow-hidden rounded-md border border-ink/10 bg-white/72 shadow-line hover:border-ink/24 hover:shadow-lift dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25"
              >
                <Link href={`/case-studies/${study.slug}`} className="focus-ring block h-full">
                  <div className={cn("bg-gradient-to-br p-6", study.accentClass)}>
                    <div className="flex items-start justify-between gap-4">
                      <p className="rounded-md bg-white/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-line dark:bg-ink/75 dark:text-paper">
                        {copy.work.caseStudyLabel}
                      </p>
                      <p className="text-right text-sm font-semibold text-ink/70 dark:text-paper/70">
                        {study.localized.artifactLabel}
                      </p>
                    </div>
                    <div className="mt-10 rounded-md border border-ink/10 bg-paper/88 p-4 shadow-line dark:border-paper/10 dark:bg-ink/88">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                        {study.localized.artifactTitle}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-ink-muted dark:text-paper/68">
                        {study.localized.artifactMeta}
                      </p>
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
                      {study.summary}
                    </p>

                    <div className="mt-6 grid gap-4 border-t border-ink/10 pt-5 dark:border-paper/10">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/55">
                          {copy.work.problemLabel}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-ink-muted dark:text-paper/68">
                          {study.story.problem[0]}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/55">
                          {copy.work.approachLabel}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-ink-muted dark:text-paper/68">
                          {study.story.strategy[0]}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/55">
                          {copy.work.impactLabel}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-ink-muted dark:text-paper/68">
                          {study.story.metrics[0]?.detail ?? study.previewBullets[0]}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-premium dark:text-paper">
                      {copy.work.readCaseStudy}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" />
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
