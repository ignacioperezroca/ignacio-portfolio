"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { timelineRoles, type TimelineRole } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { motionDuration, motionEase, staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

const logoTreatments: Record<string, string> = {
  Itti: "bg-white ring-[#21bf72]/25",
  Bitso: "bg-[#5f65f6] p-0 ring-[#5c64ff]/25",
  "Lemon Cash": "bg-[#f6ff58] ring-[#39ff14]/30",
  "Personal Pay": "bg-[#f7f8ff] ring-[#6257ff]/25",
  IUNIGO: "bg-white p-1.5 ring-[#eecece]/35",
  Ripio: "bg-[#17104f] ring-[#17104f]/25",
  "Personal - Telecom": "bg-[#5514a6] ring-[#5514a6]/25",
  "Thet Studio": "bg-white p-0 ring-[#ee2a68]/25"
};

const logoImageTreatments: Record<string, string> = {
  Bitso: "max-h-full md:max-h-full",
  IUNIGO: "max-h-16 md:max-h-12",
  "Thet Studio": "max-h-full md:max-h-full"
};

function CompanyLogo({
  item,
  className
}: {
  item: TimelineRole;
  className?: string;
}) {
  return (
    <span className={cn("flex w-28 shrink-0 flex-col items-center md:w-24", className)}>
      <span className="mb-3 h-0 w-0 border-x-[7px] border-b-[10px] border-x-transparent border-b-ink/40 dark:border-b-paper/40" />
      <span
        className={cn(
          "grid h-28 w-28 place-items-center overflow-hidden rounded-md border border-ink/10 p-5 shadow-line ring-1 dark:border-paper/12 md:h-24 md:w-24 md:p-4",
          logoTreatments[item.company] ?? "bg-white ring-ink/10"
        )}
      >
        <Image
          src={item.logoSrc}
          alt={item.logoAlt}
          width={120}
          height={60}
          sizes="(min-width: 768px) 64px, 80px"
          className={cn(
            "h-auto max-h-16 w-auto max-w-full object-contain md:max-h-14",
            logoImageTreatments[item.company]
          )}
          loading="lazy"
          unoptimized
        />
      </span>
    </span>
  );
}

export function Timeline({ previewLimit }: { previewLimit?: number }) {
  const { copy } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const isPreview = typeof previewLimit === "number" && !expanded;
  const visibleRoles = isPreview ? timelineRoles.slice(0, previewLimit) : timelineRoles;
  const listVariants = staggerContainer;
  const itemVariants = staggerItem;

  return (
    <section className="scroll-mt-24 border-y border-ink/10 bg-white/48 py-20 dark:border-paper/10 dark:bg-paper/5 sm:scroll-mt-28 sm:py-28" id="timeline">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <FadeIn variant="softReveal">
              <SectionHeader
                eyebrow={copy.timeline.kicker}
                title={copy.timeline.title}
                description={copy.timeline.intro1}
              />
            </FadeIn>
            <FadeIn delay={0.08} className="mt-8 hidden lg:block">
              <div className="rounded-md border border-ink/10 bg-paper/70 p-5 text-sm leading-6 text-ink-muted shadow-line dark:border-paper/10 dark:bg-ink/60 dark:text-paper/65">
                <TrendingUp className="mb-4 h-5 w-5 text-accent-green dark:text-paper-warm" />
                {copy.timeline.intro2}
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
              variants={listVariants}
              className="grid gap-5"
            >
              {visibleRoles.map((item, index) => {
                const isOpen = openIndex === index;
                const localized = copy.timeline.items[index];
                const impacts = "impact" in localized ? localized.impact : item.impacts;
                const details = "scope" in localized ? localized.scope : item.details;
                const detailTitle = "scopeTitle" in localized ? localized.scopeTitle : item.detailTitle;

                return (
                  <motion.article
                    key={`${item.company}-${item.dates}`}
                    variants={itemVariants}
                    className="relative"
                  >
                    <button
                      type="button"
                      className={cn(
                        "focus-ring transition-premium w-full rounded-md border bg-paper/78 p-5 text-left shadow-line backdrop-blur dark:bg-ink/70",
                        isOpen
                          ? "border-accent-green/60"
                          : "border-ink/10 hover:border-ink/25 dark:border-paper/10 dark:hover:border-paper/25"
                      )}
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4 sm:gap-5">
                          <CompanyLogo item={item} />
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-md bg-accent-green/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-green dark:bg-paper/10 dark:text-paper-warm">
                                {localized.badge}
                              </span>
                              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted dark:text-paper/45">
                                {localized.period}
                              </span>
                              <span className="rounded-md border border-ink/10 px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-paper/10 dark:text-paper/55">
                                {item.specialty}
                              </span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-ink dark:text-paper">
                              {localized.role}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-ink-muted dark:text-paper/60">
                              {localized.company}
                            </p>
                            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted dark:text-paper/68">
                              {localized.summary}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={cn(
                            "transition-premium h-5 w-5 shrink-0 text-ink-muted dark:text-paper/60",
                            isOpen && "rotate-180"
                          )}
                        />
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {localized.tags.map((scope) => (
                          <span
                            key={scope}
                            className="rounded-md border border-ink/10 px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-paper/10 dark:text-paper/55"
                          >
                            {scope}
                          </span>
                        ))}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: motionDuration.card, ease: motionEase }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 rounded-md border border-ink/10 bg-white/72 p-5 dark:border-paper/10 dark:bg-paper/5">
                            <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                                  {"impactTitle" in localized ? localized.impactTitle : copy.timeline.keyImpact}
                                </p>
                                <ul className="mt-4 grid gap-3">
                                  {impacts.map((impact) => (
                                    <li
                                      key={impact}
                                      className="flex gap-3 text-sm leading-6 text-ink-muted dark:text-paper/68"
                                    >
                                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                                      {impact}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bronze dark:text-paper-warm">
                                  {detailTitle ?? copy.timeline.proofPoints}
                                </p>
                                <ul className="mt-4 grid gap-3">
                                  {details.map((detail) => (
                                    <li
                                      key={detail}
                                      className="text-sm leading-6 text-ink-muted dark:text-paper/62"
                                    >
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </motion.div>
            {isPreview ? (
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="focus-ring transition-premium inline-flex items-center gap-2 rounded-md border border-ink/10 bg-paper/72 px-4 py-3 text-sm font-semibold text-ink shadow-line hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-ink/60 dark:text-paper dark:hover:border-paper/25"
                >
                  {copy.ui.seeFullExperience}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
