import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { MetricsStrip } from "@/components/MetricsStrip";
import { personalInfo, trustThemes } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-8 sm:pt-12 lg:pb-14 lg:pt-14" id="top">
      <div className="section-shell grid items-center gap-8 py-5 lg:min-h-[calc(74svh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-8">
        <div>
          <FadeIn>
            <p className="text-reveal mb-5 inline-flex rounded-md border border-ink/10 bg-white/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green shadow-line backdrop-blur dark:border-paper/10 dark:bg-paper/5 dark:text-paper-warm sm:mb-6 sm:tracking-[0.2em]">
              {personalInfo.heroEyebrow}
            </p>
            <h1 className="text-reveal max-w-4xl font-serif text-[2.65rem] leading-[0.98] text-ink dark:text-paper sm:text-6xl lg:text-7xl 2xl:text-8xl">
              {personalInfo.displayName}
            </h1>
            <p className="mt-5 max-w-3xl text-balance text-xl font-semibold leading-tight text-ink dark:text-paper sm:mt-6 sm:text-3xl">
              {personalInfo.heroHeadline}
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-7 text-ink-muted dark:text-paper/70 sm:mt-6 sm:text-lg sm:leading-8">
              {personalInfo.heroSubheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#work">
              View selected work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={personalInfo.resumeUrl} variant="secondary" download>
              <Download className="h-4 w-4" aria-hidden />
              Download resume
            </ButtonLink>
            <ButtonLink href="/why-companies-hire-me" variant="secondary">
              Why companies hire me
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              <Mail className="h-4 w-4" aria-hidden />
              Let’s talk
            </ButtonLink>
          </FadeIn>

          <FadeIn delay={0.18} className="mt-6 hidden flex-wrap items-center gap-3 text-sm text-ink-muted dark:text-paper/60 sm:mt-8 sm:flex">
            <span className="inline-flex items-center gap-2 rounded-md border border-ink/10 bg-white/45 px-3 py-2 dark:border-paper/10 dark:bg-paper/5">
              <MapPin className="h-4 w-4 text-accent-bronze" aria-hidden />
              {personalInfo.location}
            </span>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring hidden items-center gap-2 rounded-md border border-ink/10 bg-white/45 px-3 py-2 transition hover:border-ink/30 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/35 dark:hover:text-paper sm:inline-flex"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring hidden items-center gap-2 rounded-md border border-ink/10 bg-white/45 px-3 py-2 transition hover:border-ink/30 hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/35 dark:hover:text-paper sm:inline-flex"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="relative">
          <div className="relative mx-auto max-w-[480px]">
            <div className="line-draw absolute -left-3 top-10 h-24 w-1 bg-accent-green" />
            <div className="line-draw absolute -right-3 bottom-12 h-24 w-1 bg-accent-blue [animation-delay:180ms]" />
            <figure className="float-slow motion-surface relative overflow-hidden rounded-md border border-ink/10 bg-ink shadow-lift dark:border-paper/10">
              <Image
                src={personalInfo.profileImage}
                alt={`${personalInfo.displayName} profile placeholder`}
                width={960}
                height={1200}
                priority
                unoptimized
                className="aspect-[4/5] w-full object-cover transition duration-700 ease-out will-change-transform hover:scale-[1.025]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-ink/86 p-5 text-paper backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
                      Product operating zone
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Growth where trust, risk, and UX meet.
                    </p>
                  </div>
                  <ShieldCheck className="h-6 w-6 shrink-0 text-paper-warm" aria-hidden />
                </div>
              </figcaption>
            </figure>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {trustThemes.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="motion-surface rounded-md border border-ink/10 bg-white/65 p-3 text-sm font-semibold text-ink shadow-line backdrop-blur dark:border-paper/10 dark:bg-paper/5 dark:text-paper"
                >
                  <Icon className="mb-3 h-5 w-5 text-accent-green dark:text-paper-warm" aria-hidden />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
      <MetricsStrip />
    </section>
  );
}
