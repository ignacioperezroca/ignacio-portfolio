"use client";

import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";

export function CurrentFocus() {
  const { copy } = useLanguage();

  return (
    <section className="py-8 sm:py-10" aria-labelledby="current-focus-title">
      <div className="section-shell">
        <FadeIn>
          <div className="rounded-md border border-ink/10 bg-white/55 px-5 py-5 shadow-line backdrop-blur dark:border-paper/10 dark:bg-paper/5 sm:px-6 sm:py-6">
            <p
              id="current-focus-title"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm"
            >
              {copy.currentFocus.title}
            </p>
            <p className="mt-3 max-w-4xl text-base leading-7 text-ink-muted dark:text-paper/70 sm:text-lg sm:leading-8">
              {copy.currentFocus.body}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
