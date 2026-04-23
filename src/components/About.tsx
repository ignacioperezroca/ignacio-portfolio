"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";

export function About({ preview = false }: { preview?: boolean }) {
  const { copy } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const isPreview = preview && !expanded;
  const cards = isPreview ? copy.about.cards.slice(0, 2) : copy.about.cards;

  return (
    <section className="py-20 sm:py-28" id="about">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeIn>
          <SectionHeader
            eyebrow={copy.about.kicker}
            title={copy.about.title}
            description={copy.about.intro}
          />
        </FadeIn>

        <div className="grid gap-6">
          <FadeIn delay={0.05}>
            <div className="border-l-2 border-accent-green pl-6">
              <p className="text-xl leading-9 text-ink dark:text-paper">
                {copy.about.p1}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-base leading-8 text-ink-muted dark:text-paper/70">
              {copy.about.p2}
            </p>
          </FadeIn>

          {!isPreview ? (
            <FadeIn delay={0.18}>
              <p className="text-base leading-8 text-ink-muted dark:text-paper/70">
                {copy.about.p3}
              </p>
            </FadeIn>
          ) : null}

          {!isPreview && "p4" in copy.about ? (
            <FadeIn delay={0.22}>
              <p className="text-base leading-8 text-ink-muted dark:text-paper/70">
                {copy.about.p4}
              </p>
            </FadeIn>
          ) : null}

          <div className="grid gap-4 md:grid-cols-3">
            {cards.map((point, index) => (
              <FadeIn key={point.title} delay={0.15 + index * 0.05}>
                <article className="h-full rounded-md border border-ink/10 bg-white/62 p-5 shadow-line transition hover:-translate-y-1 hover:border-ink/20 dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25">
                  <CheckCircle2 className="mb-5 h-5 w-5 text-accent-green dark:text-paper-warm" />
                  <h3 className="text-base font-semibold text-ink dark:text-paper">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted dark:text-paper/62">
                    {point.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.32}>
            {isPreview ? (
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="focus-ring group inline-flex items-center gap-2 rounded-md text-sm font-semibold text-ink underline decoration-ink/20 underline-offset-4 transition hover:decoration-ink dark:text-paper dark:decoration-paper/25 dark:hover:decoration-paper"
              >
                {copy.ui.readFullStory}
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            ) : (
              <a
                href="#work"
                className="focus-ring group inline-flex items-center gap-2 rounded-md text-sm font-semibold text-ink underline decoration-ink/20 underline-offset-4 transition hover:decoration-ink dark:text-paper dark:decoration-paper/25 dark:hover:decoration-paper"
              >
                {copy.about.cta}
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
