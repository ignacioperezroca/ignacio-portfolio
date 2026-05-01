"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function MetricsStrip({ previewLimit }: { previewLimit?: number }) {
  const { copy } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const isPreview = typeof previewLimit === "number" && !expanded;
  const metrics = isPreview
    ? copy.heroImpactCards.slice(0, previewLimit)
    : copy.heroImpactCards;
  const topMetrics = metrics.slice(0, 3);
  const secondaryMetrics = metrics.slice(3);
  const containerVariants = reduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer;
  const secondaryVariants = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.14
          }
        }
      };
  const itemVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerItem;

  return (
    <section id="impact" className="scroll-mt-24 border-y border-ink/10 bg-white/48 py-20 dark:border-paper/10 dark:bg-paper/5 sm:scroll-mt-28 sm:py-28">
      <div className="section-shell">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeader
              eyebrow={copy.impact.kicker}
              title={copy.impact.title}
              description={copy.impact.intro}
            />
            {isPreview ? (
              <div className="lg:justify-self-end">
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="focus-ring group transition-premium inline-flex items-center gap-2 rounded-md border border-ink/10 bg-paper/72 px-4 py-3 text-sm font-semibold text-ink shadow-line hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-ink/60 dark:text-paper dark:hover:border-paper/25"
                >
                  {copy.ui.viewAll}
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
                </button>
              </div>
            ) : null}
          </div>
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={containerVariants}
          className="mt-12 grid gap-4 lg:grid-cols-3"
        >
          {topMetrics.map((metric, index) => (
            <motion.article
              key={`${metric.value}-${metric.label}`}
              variants={itemVariants}
              className="motion-surface transition-premium flex h-full min-h-72 flex-col justify-between rounded-md border border-ink/10 bg-paper/80 p-6 shadow-line hover:border-ink/24 hover:bg-white dark:border-paper/10 dark:bg-ink/62 dark:hover:border-paper/25 dark:hover:bg-paper/8"
            >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-4 dark:border-paper/10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                      {metric.category}
                    </p>
                    <span className="font-serif text-lg text-ink/30 dark:text-paper/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-8 font-serif text-[3.5rem] leading-none text-ink dark:text-paper sm:text-[4.5rem]">
                    {metric.value}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink dark:text-paper">
                    {metric.label}
                  </h3>
                </div>
                <p className="mt-8 border-t border-ink/10 pt-5 text-sm leading-6 text-ink-muted dark:border-paper/10 dark:text-paper/65">
                  {metric.detail}
                </p>
              </motion.article>
          ))}
        </motion.div>

        {secondaryMetrics.length ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={secondaryVariants}
            className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
          >
            {secondaryMetrics.map((metric, index) => (
              <motion.article
                key={`${metric.value}-${metric.label}`}
                variants={itemVariants}
                className="motion-surface transition-premium flex h-full flex-col justify-between rounded-md border border-ink/10 bg-white/68 p-5 shadow-line hover:border-ink/24 hover:bg-white dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25 dark:hover:bg-paper/8"
              >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                      {metric.category}
                    </p>
                    <span className="font-serif text-lg text-ink/25 dark:text-paper/22">
                      {String(index + 4).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-6 font-serif text-[2rem] leading-none text-ink dark:text-paper">
                    {metric.value}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink dark:text-paper">
                    {metric.label}
                  </h3>
                  <p className="mt-4 border-t border-ink/10 pt-4 text-sm leading-6 text-ink-muted dark:border-paper/10 dark:text-paper/65">
                    {metric.detail}
                  </p>
                </motion.article>
            ))}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
