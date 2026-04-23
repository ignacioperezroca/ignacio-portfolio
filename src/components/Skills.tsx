"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";

export function Skills({ limit }: { limit?: number }) {
  const { copy } = useLanguage();
  const visibleCategories =
    typeof limit === "number" ? skillCategories.slice(0, limit) : skillCategories;

  return (
    <section className="py-20 sm:py-28" id="expertise">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            eyebrow={copy.expertise.kicker}
            title={copy.expertise.title}
            description={copy.expertise.intro}
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {visibleCategories.map((category, index) => {
            const localized = copy.expertise.groups[index] ?? copy.expertise.groups[0];

            return (
            <FadeIn key={category.title} delay={index * 0.035}>
              <article className="h-full rounded-md border border-ink/10 bg-white/65 p-5 shadow-line transition hover:-translate-y-1 hover:border-ink/25 dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25">
                <category.icon className="h-6 w-6 text-accent-green dark:text-paper-warm" aria-hidden />
                <h3 className="mt-5 text-lg font-semibold text-ink dark:text-paper">
                  {localized.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted dark:text-paper/62">
                  {localized.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {localized.tags.map((method) => (
                    <span
                      key={method}
                      className="rounded-md border border-ink/10 px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-paper/10 dark:text-paper/55"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          );
          })}
        </div>
        {typeof limit === "number" ? (
          <div className="mt-10">
            <Link
              href="/expertise"
              className="focus-ring motion-surface inline-flex items-center gap-2 rounded-md border border-ink/10 bg-white/62 px-4 py-3 text-sm font-semibold text-ink shadow-line transition hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-paper/5 dark:text-paper dark:hover:border-paper/25"
            >
              {copy.ui.viewAllExpertise}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
