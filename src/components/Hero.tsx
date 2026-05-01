"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { personalInfo, trustThemes } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  const { copy } = useLanguage();
  const reduceMotion = useReducedMotion();
  const containerVariants = reduceMotion ? { hidden: {}, visible: {} } : staggerContainer;
  const itemVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerItem;

  return (
    <section className="relative overflow-hidden pb-10 pt-8 sm:pt-12 lg:pb-14 lg:pt-14" id="top">
      <div className="section-shell grid items-center gap-8 py-5 lg:min-h-[calc(74svh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="mb-5 inline-flex rounded-md border border-ink/10 bg-white/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green shadow-line backdrop-blur dark:border-paper/10 dark:bg-paper/5 dark:text-paper-warm sm:mb-6 sm:tracking-[0.2em]"
          >
            {copy.hero.eyebrow}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/55 sm:text-[0.82rem]"
          >
            {copy.hero.name}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="mt-4 max-w-4xl font-serif text-[2.65rem] leading-[0.94] text-ink dark:text-paper sm:text-6xl lg:text-[4.9rem] xl:text-[5.3rem] 2xl:text-[5.9rem]"
          >
            {copy.hero.headline}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-balance text-xl font-semibold leading-tight text-ink dark:text-paper sm:mt-6 sm:text-2xl"
          >
            {copy.hero.subheadline}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-pretty text-[15px] leading-7 text-ink-muted dark:text-paper/70 sm:text-lg sm:leading-8"
          >
            {copy.hero.supportingLine}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap"
          >
            <ButtonLink href="#work">
              {copy.hero.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={personalInfo.resumeUrl} variant="secondary" download>
              <Download className="h-4 w-4" aria-hidden />
              {copy.hero.secondaryCta}
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              <Mail className="h-4 w-4" aria-hidden />
              {copy.hero.contactCta}
            </ButtonLink>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 hidden flex-wrap items-center gap-3 text-sm text-ink-muted dark:text-paper/60 sm:mt-8 sm:flex"
          >
            <span className="inline-flex items-center gap-2 rounded-md border border-ink/10 bg-white/45 px-3 py-2 dark:border-paper/10 dark:bg-paper/5">
              <MapPin className="h-4 w-4 text-accent-bronze" aria-hidden />
              {copy.hero.location}
            </span>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring transition-premium hidden items-center gap-2 rounded-md border border-ink/10 bg-white/45 px-3 py-2 hover:border-ink/30 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/35 dark:hover:text-paper sm:inline-flex"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring transition-premium hidden items-center gap-2 rounded-md border border-ink/10 bg-white/45 px-3 py-2 hover:border-ink/30 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/35 dark:hover:text-paper sm:inline-flex"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <FadeIn delay={0.12} className="relative" variant="scaleIn">
          <div className="relative mx-auto max-w-[480px]">
            <div className="line-draw absolute -left-3 top-10 h-24 w-1 bg-accent-green" />
            <div className="line-draw absolute -right-3 bottom-12 h-24 w-1 bg-accent-blue [animation-delay:180ms]" />
            <figure className="motion-surface relative overflow-hidden rounded-md border border-ink/10 bg-ink shadow-lift dark:border-paper/10">
              <Image
                src={personalInfo.profileImage}
                alt={`${personalInfo.displayName} profile portrait`}
                width={960}
                height={1200}
                priority
                unoptimized
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-ink/86 p-5 text-paper backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
                      {copy.heroStats[0].title}
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      {copy.heroStats[0].subtitle}
                    </p>
                  </div>
                  <ShieldCheck className="h-6 w-6 shrink-0 text-paper-warm" aria-hidden />
                </div>
              </figcaption>
            </figure>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={containerVariants}
              className="mt-4 grid gap-3 sm:grid-cols-3"
            >
              {trustThemes.map(({ label, icon: Icon }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="motion-surface rounded-md border border-ink/10 bg-white/65 p-3 text-sm font-semibold text-ink shadow-line backdrop-blur dark:border-paper/10 dark:bg-paper/5 dark:text-paper"
                >
                  <Icon className="mb-3 h-5 w-5 text-accent-green dark:text-paper-warm" aria-hidden />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
