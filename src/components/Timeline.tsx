"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { timelineRoles, type TimelineRole } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function CompanyLogo({
  item,
  className
}: {
  item: TimelineRole;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-md border border-ink/10 bg-white p-2 shadow-line dark:border-paper/15",
        className
      )}
    >
      <Image
        src={item.logoSrc}
        alt={item.logoAlt}
        width={120}
        height={60}
        sizes="56px"
        className="h-auto max-h-full w-auto max-w-full object-contain"
        loading="lazy"
        unoptimized
      />
    </span>
  );
}

export function Timeline() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-y border-ink/10 bg-white/48 py-20 dark:border-paper/10 dark:bg-paper/5 sm:py-28" id="timeline">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Career timeline"
              title="From design and frontend to product leadership in identity, crypto, and fintech."
              description="A LinkedIn-aligned progression showing increasing scope: hands-on interface craft, crypto infrastructure, fintech onboarding, growth at scale, and unified identity platforms."
            />
            <div className="mt-8 hidden rounded-md border border-ink/10 bg-paper/70 p-5 text-sm leading-6 text-ink-muted shadow-line dark:border-paper/10 dark:bg-ink/60 dark:text-paper/65 lg:block">
              <TrendingUp className="mb-4 h-5 w-5 text-accent-green dark:text-paper-warm" />
              The arc is deliberate: every role adds a layer of leverage, from
              designing and coding interfaces to leading trust-critical product
              systems for millions of users.
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-gradient-to-b from-accent-green via-ink/15 to-accent-blue dark:via-paper/20 md:block" />
            <div className="grid gap-5">
              {timelineRoles.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.article
                    key={`${item.company}-${item.dates}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                    className="relative md:pl-16"
                  >
                    <CompanyLogo
                      item={item}
                      className="absolute left-0 top-5 z-10 hidden md:grid"
                    />

                    <button
                      type="button"
                      className={cn(
                        "focus-ring w-full rounded-md border bg-paper/78 p-5 text-left shadow-line backdrop-blur transition dark:bg-ink/70",
                        isOpen
                          ? "border-accent-green/60"
                          : "border-ink/10 hover:border-ink/25 dark:border-paper/10 dark:hover:border-paper/25"
                      )}
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <CompanyLogo item={item} className="md:hidden" />
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-md bg-accent-green/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-green dark:bg-paper/10 dark:text-paper-warm">
                                {item.specialty}
                              </span>
                              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted dark:text-paper/45">
                                {item.dates}
                              </span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-ink dark:text-paper">
                              {item.role}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-ink-muted dark:text-paper/60">
                              {item.company}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 text-ink-muted transition dark:text-paper/60",
                            isOpen && "rotate-180"
                          )}
                        />
                      </div>
                      <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted dark:text-paper/68">
                        {item.mission}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.scope.split(", ").map((scope) => (
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
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 rounded-md border border-ink/10 bg-white/72 p-5 dark:border-paper/10 dark:bg-paper/5">
                            <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                                  Key impact
                                </p>
                                <ul className="mt-4 grid gap-3">
                                  {item.impacts.map((impact) => (
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
                                  {item.detailTitle ?? "Proof points"}
                                </p>
                                <ul className="mt-4 grid gap-3">
                                  {item.details.map((detail) => (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
