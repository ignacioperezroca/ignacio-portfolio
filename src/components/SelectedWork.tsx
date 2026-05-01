"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, CircleHelp, Shield, SlidersHorizontal, UserRound, Workflow } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const caseIcons = [UserRound, Shield, BarChart3] as const;
const rowIcons = [CircleHelp, Workflow, BarChart3] as const;

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
                        "focus-ring transition-premium rounded-md border px-3 py-2 text-sm font-semibold",
                        activeFilter === filter
                          ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                          : "border-ink/10 bg-white/55 text-ink-muted hover:border-ink/25 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:text-paper/60 dark:hover:border-paper/25 dark:hover:text-paper"
                      )}
                    >
                      {filterLabelFor(filter)}
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.06} className="lg:justify-self-end">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="focus-ring group motion-surface transition-premium inline-flex items-center gap-2 rounded-md border border-ink/10 bg-white/62 px-4 py-3 text-sm font-semibold text-ink shadow-line hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-paper/5 dark:text-paper dark:hover:border-paper/25"
              >
                {copy.ui.viewAll}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
              </button>
            </FadeIn>
          )}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {visibleStudies.map((study, index) => {
            const CardIcon = caseIcons[index % caseIcons.length];
            const rows = [
              { label: copy.work.problemLabel, text: study.localized.bullets[0] },
              { label: copy.work.approachLabel, text: study.localized.bullets[1] },
              { label: copy.work.impactLabel, text: study.localized.bullets[2] ?? study.localized.body }
            ] as const;

            return (
              <article
                key={study.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[1.1rem] border border-ink/10 bg-paper/92 p-6 shadow-[0_1px_0_rgba(255,255,255,0.85),0_18px_40px_rgba(18,17,15,0.05)] transition-premium hover:border-ink/20 hover:bg-white hover:shadow-[0_1px_0_rgba(255,255,255,0.92),0_20px_46px_rgba(18,17,15,0.07)] dark:border-paper/10 dark:bg-ink/72 dark:shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] dark:hover:border-paper/25 dark:hover:bg-paper/8"
              >
                <Link href={`/case-studies/${study.slug}`} className="focus-ring block h-full">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start gap-4">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-ink/10 bg-ink/5 text-ink dark:border-paper/10 dark:bg-paper/8 dark:text-paper">
                        <CardIcon className="h-7 w-7" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted dark:text-paper/55">
                          {copy.work.caseStudyLabel}
                        </p>
                        <h3 className="mt-3 max-w-[14ch] text-[clamp(2rem,3vw,3.2rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-ink dark:text-paper">
                          {study.localized.title.replace(/^Case Study:\s*/, "")}
                        </h3>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-ink-muted dark:text-paper/68">
                          {study.localized.body}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-ink/10 pt-2 dark:border-paper/10">
                      {rows.map(({ label, text }, rowIndex) => {
                        const RowIcon = rowIcons[rowIndex];

                        return (
                          <div
                            key={label}
                            className="grid gap-4 border-b border-ink/10 py-4 last:border-b-0 sm:grid-cols-[auto_7rem_1px_1fr] sm:items-center dark:border-paper/10"
                          >
                            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink/5 text-ink dark:bg-paper/8 dark:text-paper">
                              <RowIcon className="h-5 w-5" aria-hidden />
                            </span>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink dark:text-paper">
                              {label}
                            </p>
                            <span className="hidden h-full w-px bg-ink/10 sm:block dark:bg-paper/10" />
                            <p className="text-sm leading-6 text-ink-muted dark:text-paper/68">{text}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-auto border-t border-ink/10 pt-4 dark:border-paper/10">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink dark:text-paper">
                        {copy.work.readCaseStudy}
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
