"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Skills({ previewLimit }: { previewLimit?: number }) {
  const { copy } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const isPreview = typeof previewLimit === "number" && !expanded;
  const visibleCategories = isPreview
    ? skillCategories.slice(0, previewLimit)
    : skillCategories;
  const containerVariants = reduceMotion ? { hidden: {}, visible: {} } : staggerContainer;
  const itemVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerItem;

  return (
    <section className="scroll-mt-24 py-20 sm:scroll-mt-28 sm:py-28" id="expertise">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            eyebrow={copy.expertise.kicker}
            title={copy.expertise.title}
            description={copy.expertise.intro}
          />
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={containerVariants}
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleCategories.map((category, index) => {
            const localized = copy.expertise.groups[index] ?? copy.expertise.groups[0];

            return (
            <motion.article
              key={category.title}
              variants={itemVariants}
              className="transition-premium h-full rounded-md border border-ink/10 bg-white/65 p-5 shadow-line hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25 dark:hover:bg-paper/8"
            >
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
              </motion.article>
          );
          })}
        </motion.div>
        {isPreview ? (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="focus-ring group transition-premium inline-flex items-center gap-2 rounded-md border border-ink/10 bg-white/62 px-4 py-3 text-sm font-semibold text-ink shadow-line hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-paper/5 dark:text-paper dark:hover:border-paper/25"
            >
              {copy.ui.exploreExpertise}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
