"use client";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";

export function WorkingStyle() {
  const { copy } = useLanguage();

  return (
    <section className="border-y border-ink/10 bg-white/48 py-20 dark:border-paper/10 dark:bg-paper/5 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn>
          <SectionHeader
            eyebrow={copy.operate.kicker}
            title={copy.operate.title}
            description={copy.operate.intro}
          />
        </FadeIn>

        <div className="grid gap-5">
          <FadeIn>
            <div className="rounded-md border border-ink/10 bg-paper/72 p-6 shadow-line dark:border-paper/10 dark:bg-ink/60">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                {copy.operate.decisionModelTitle}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {copy.operate.decisionModel.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-t border-ink/10 pt-4 dark:border-paper/10"
                  >
                    <span className="font-serif text-3xl text-accent-bronze dark:text-paper-warm">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-ink dark:text-paper">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.operate.principles.map((principle, index) => (
              <FadeIn key={principle.title} delay={0.05 + index * 0.05}>
                <article className="h-full rounded-md border border-ink/10 bg-white/68 p-5 shadow-line dark:border-paper/10 dark:bg-paper/5">
                  <h3 className="text-lg font-semibold text-ink dark:text-paper">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted dark:text-paper/62">
                    {principle.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
