"use client";

import { FadeIn } from "@/components/FadeIn";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Contact() {
  const { copy } = useLanguage();
  const reduceMotion = useReducedMotion();
  const containerVariants = reduceMotion ? { hidden: {}, visible: {} } : staggerContainer;
  const itemVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerItem;

  return (
    <section className="scroll-mt-24 py-20 sm:scroll-mt-28 sm:py-28" id="contact">
      <div className="section-shell">
        <FadeIn variant="softReveal">
          <div className="overflow-hidden rounded-md border border-ink/10 bg-ink text-paper shadow-lift dark:border-paper/10">
            <div className="grid gap-px bg-paper/10 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="bg-ink p-6 sm:p-8 lg:p-10">
                <SectionHeader
                  eyebrow={copy.contact.kicker}
                  title={copy.contact.title}
                  description={copy.contact.intro}
                  tone="inverse"
                />

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={containerVariants}
                  className="mt-8 flex flex-wrap gap-2"
                >
                  {copy.contact.bullets.map((item) => (
                    <motion.span
                      key={item}
                      variants={itemVariants}
                      className="rounded-md border border-paper/12 bg-paper/6 px-3 py-2 text-sm font-semibold text-paper/78"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <aside className="bg-paper p-5 text-ink dark:bg-paper/95 sm:p-6 lg:p-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="focus-ring motion-surface transition-premium group flex items-start justify-between gap-4 rounded-md bg-ink px-5 py-5 text-paper shadow-line hover:bg-accent-green"
                >
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
                      {copy.contact.primaryCta}
                    </span>
                    <span className="mt-2 flex items-center gap-3 text-sm font-semibold sm:text-base">
                      <Mail className="h-4 w-4 shrink-0 text-paper-warm" aria-hidden />
                      <span className="break-all">{copy.contact.email}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-paper/70 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
                </a>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={containerVariants}
                  className="mt-3 grid gap-3 sm:grid-cols-2"
                >
                  {[
                    {
                      label: copy.contact.secondaryLinkedin,
                      href: personalInfo.linkedinUrl,
                      icon: Linkedin
                    },
                    {
                      label: copy.contact.secondaryGithub,
                      href: personalInfo.githubUrl,
                      icon: Github
                    }
                  ].map(({ label, href, icon: Icon }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      variants={itemVariants}
                      className="focus-ring motion-surface transition-premium group flex items-center justify-between gap-3 rounded-md border border-ink/10 bg-white/70 px-4 py-4 text-sm font-semibold text-ink hover:border-ink/25 hover:bg-white dark:bg-white/80"
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon className="h-4 w-4 text-accent-bronze" aria-hidden />
                        {label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
                    </motion.a>
                  ))}
                </motion.div>

                <p className="mt-6 border-t border-ink/10 pt-5 text-xs font-semibold text-ink-muted">
                  {copy.contact.metadata.join(" · ")}
                </p>
              </aside>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
