"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";

export function MetricsStrip({ previewLimit }: { previewLimit?: number }) {
  const { copy } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const isPreview = typeof previewLimit === "number" && !expanded;
  const metrics = isPreview
    ? copy.heroImpactCards.slice(0, previewLimit)
    : copy.heroImpactCards;

  function scrollByCard(direction: "previous" | "next") {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const card = scroller.querySelector<HTMLElement>("[data-impact-card]");
    const cardWidth = card?.offsetWidth ?? scroller.clientWidth;
    const gap = 12;

    scroller.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth"
    });
  }

  return (
    <section id="impact" className="border-y border-ink/10 bg-white/48 py-20 dark:border-paper/10 dark:bg-paper/5 sm:py-28">
      <div className="section-shell">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <SectionHeader
              eyebrow={copy.impact.kicker}
              title={copy.impact.title}
              description={copy.impact.intro}
            />
            <div className="hidden justify-end gap-2 lg:flex">
              <button
                type="button"
                onClick={() => scrollByCard("previous")}
                className="focus-ring motion-surface grid h-10 w-10 place-items-center rounded-md border border-ink/10 bg-paper/65 text-ink-muted shadow-line transition hover:border-ink/25 hover:bg-white hover:text-ink dark:border-paper/10 dark:bg-ink/55 dark:text-paper/60 dark:hover:border-paper/25 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label={copy.ui.previousImpact}
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard("next")}
                className="focus-ring motion-surface grid h-10 w-10 place-items-center rounded-md border border-ink/10 bg-paper/65 text-ink-muted shadow-line transition hover:border-ink/25 hover:bg-white hover:text-ink dark:border-paper/10 dark:bg-ink/55 dark:text-paper/60 dark:hover:border-paper/25 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label={copy.ui.nextImpact}
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-[#fbf8f1] to-transparent dark:from-[#181612] sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-[#fbf8f1] to-transparent dark:from-[#181612] sm:block" />

          <div
            ref={scrollerRef}
            tabIndex={0}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3"
            aria-label={copy.ui.impactCarousel}
          >
            {metrics.map((metric, index) => (
              <article
                key={`${metric.value}-${metric.label}`}
                data-impact-card
                className="motion-surface group flex min-h-72 flex-[0_0_88%] snap-start flex-col justify-between overflow-hidden rounded-md border border-ink/10 bg-paper/78 p-6 shadow-line transition hover:border-ink/24 hover:bg-white dark:border-paper/10 dark:bg-ink/62 dark:hover:border-paper/25 dark:hover:bg-paper/8 sm:flex-[0_0_58%] md:flex-[0_0_44%] lg:flex-[0_0_31%]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-4 dark:border-paper/10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                      {copy.impact.categoryLabel}
                    </p>
                    <span className="font-serif text-lg text-ink/30 dark:text-paper/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-8 font-serif text-[3.25rem] leading-none text-ink dark:text-paper sm:text-6xl">
                    {metric.value}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink dark:text-paper">
                    {metric.label}
                  </h3>
                </div>
                <p className="mt-8 border-t border-ink/10 pt-5 text-sm leading-6 text-ink-muted dark:border-paper/10 dark:text-paper/65">
                  {metric.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-1.5 lg:hidden">
          {metrics.map((metric) => (
          <span
            key={`dot-${metric.value}-${metric.label}`}
            className="h-1.5 w-1.5 rounded-full bg-ink/20 dark:bg-paper/25"
            aria-hidden
          />
          ))}
        </div>
        {isPreview ? (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="focus-ring motion-surface inline-flex items-center gap-2 rounded-md border border-ink/10 bg-paper/72 px-4 py-3 text-sm font-semibold text-ink shadow-line transition hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-ink/60 dark:text-paper dark:hover:border-paper/25"
            >
              {copy.ui.viewAll}
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
