"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";

export function MetricsStrip() {
  const { copy } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);

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
    <section id="impact" className="section-shell">
      <FadeIn
        delay={0.2}
        className="border-y border-ink/10 bg-paper/65 py-4 backdrop-blur dark:border-paper/10 dark:bg-paper/5"
      >
      <div className="flex items-center justify-between gap-4 px-3 pb-3 sm:px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
          {copy.nav.impact}
        </p>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard("previous")}
            className="focus-ring motion-surface grid h-9 w-9 place-items-center rounded-md border border-ink/10 bg-white/55 text-ink-muted transition hover:border-ink/25 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:text-paper/60 dark:hover:border-paper/25 dark:hover:text-paper"
            aria-label={copy.ui.previousImpact}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("next")}
            className="focus-ring motion-surface grid h-9 w-9 place-items-center rounded-md border border-ink/10 bg-white/55 text-ink-muted transition hover:border-ink/25 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:text-paper/60 dark:hover:border-paper/25 dark:hover:text-paper"
            aria-label={copy.ui.nextImpact}
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-3 pb-2 sm:px-4"
        aria-label={copy.ui.impactCarousel}
      >
        {copy.heroImpactCards.map((metric) => (
          <article
            key={`${metric.value}-${metric.label}`}
            data-impact-card
            className="min-h-52 flex-[0_0_86%] snap-start rounded-md border border-ink/10 bg-white/62 p-5 shadow-line transition hover:-translate-y-1 hover:border-ink/20 dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25 sm:min-h-56 md:flex-[0_0_48%] lg:flex-[0_0_32%]"
          >
            <div className="font-serif text-4xl leading-none text-ink dark:text-paper">
              {metric.value}
            </div>
            <div className="mt-4 text-sm font-semibold text-ink dark:text-paper">
              {metric.label}
            </div>
            <p className="mt-3 text-sm leading-6 text-ink-muted dark:text-paper/62">
              {metric.detail}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-2 flex justify-center gap-1.5 px-3 sm:hidden">
        {copy.heroImpactCards.map((metric) => (
          <span
            key={`dot-${metric.value}-${metric.label}`}
            className="h-1.5 w-1.5 rounded-full bg-ink/20 dark:bg-paper/25"
            aria-hidden
          />
        ))}
      </div>
      </FadeIn>
    </section>
  );
}
