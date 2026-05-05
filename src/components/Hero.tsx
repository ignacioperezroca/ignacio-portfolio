"use client";

import Image from "next/image";
import { ArrowRight, Clock3, Download, Github, Linkedin, Mail, MapPin, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { copy } = useLanguage();
  const [firstName, ...restOfName] = copy.hero.name.split(" ");
  const lastName = restOfName.join(" ");
  const proofPoints = [
    {
      value: "+262%",
      label: "onboarding conversion",
      icon: TrendingUp
    },
    {
      value: "60K → 2M",
      label: "users",
      icon: Users
    },
    {
      value: "16+ years",
      label: "of experience",
      icon: Clock3
    }
  ] as const;

  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14" id="top">
      <div className="section-shell grid items-start gap-10 py-4 lg:min-h-[calc(82svh-4rem)] lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:gap-16 lg:py-8">
        <div className="max-w-3xl">
          <p
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-green dark:text-paper-warm sm:text-[0.8rem]"
          >
            <span className="h-px w-10 bg-accent-green/70 dark:bg-paper-warm/70" aria-hidden />
            {copy.hero.eyebrow}
          </p>
          <h1
            className="mt-5 font-serif text-[3.35rem] leading-[0.9] text-ink dark:text-paper sm:text-[4.95rem] lg:text-[5.85rem] xl:text-[6.6rem]"
          >
            <span className="block">{firstName}</span>
            <span className="block">{lastName}</span>
          </h1>
          <p
            className="mt-7 max-w-3xl text-balance text-[1.45rem] font-semibold leading-tight text-ink dark:text-paper sm:text-3xl lg:text-[2.2rem]"
          >
            {copy.hero.headline}
          </p>
          <p
            className="mt-5 max-w-2xl text-pretty text-[15px] leading-7 text-ink-muted dark:text-paper/70 sm:text-lg sm:leading-8"
          >
            {copy.hero.subheadline}
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap"
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
          </div>

          <div className="mt-6 grid gap-2 text-sm text-ink-muted dark:text-paper/60 sm:mt-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-md border border-ink/10 bg-white/50 px-3 py-2 dark:border-paper/10 dark:bg-paper/5">
              <MapPin className="h-4 w-4 text-accent-bronze" aria-hidden />
              {copy.hero.location}
            </span>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring transition-premium inline-flex w-fit items-center gap-2 rounded-md px-1 py-2 hover:text-ink dark:hover:text-paper"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring transition-premium inline-flex w-fit items-center gap-2 rounded-md px-1 py-2 hover:text-ink dark:hover:text-paper"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          </div>
        </div>

        <FadeIn delay={0.1} className="relative" variant="scaleIn">
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:pb-12">
            <div
              aria-hidden
              className="absolute inset-[-14px] rounded-[2rem] border border-ink/10 bg-white/30 dark:border-paper/10 dark:bg-paper/5"
            />
            <figure className="motion-surface relative overflow-hidden rounded-[2rem] border border-ink/10 bg-paper/85 shadow-lift dark:border-paper/10 dark:bg-ink">
              <Image
                src={personalInfo.profileImage}
                alt={`${personalInfo.displayName} portrait`}
                width={2000}
                height={2000}
                priority
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 48vw, 92vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>

            <FadeIn delay={0.18} className="relative mt-4 w-full max-w-[340px] sm:mt-5 lg:absolute lg:-bottom-8 lg:-right-6 lg:mt-0" variant="softReveal">
              <div className="overflow-hidden rounded-[1.5rem] border border-ink/10 bg-paper/95 p-4 text-ink shadow-lift backdrop-blur ring-1 ring-black/5 dark:border-paper/20 dark:bg-[#141414]/95 dark:text-paper dark:ring-white/5">
                <div className="flex items-center justify-between border-b border-ink/10 pb-3 dark:border-paper/15">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                    Proof
                  </p>
                  <ShieldCheck className="h-5 w-5 shrink-0 text-accent-green dark:text-paper-warm" aria-hidden />
                </div>

                <div className="divide-y divide-ink/10 dark:divide-paper/12">
                  {proofPoints.map(({ value, label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-3 py-3 first:pt-4 last:pb-2">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-accent-green/10 text-accent-green dark:bg-paper-warm/10 dark:text-paper-warm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[1.05rem] font-semibold leading-none text-ink dark:text-paper">
                          {value}
                        </p>
                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted dark:text-paper/60">
                          {label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
