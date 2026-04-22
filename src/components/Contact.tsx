"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";

export function Contact() {
  const { copy } = useLanguage();

  return (
    <section className="py-20 sm:py-28" id="contact">
      <div className="section-shell">
        <div className="overflow-hidden rounded-md border border-ink/10 bg-ink text-paper shadow-lift dark:border-paper/10">
          <div className="grid gap-px bg-paper/10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="bg-ink p-6 sm:p-8 lg:p-10">
          <SectionHeader
            eyebrow={copy.contact.kicker}
            title={copy.contact.title}
            description={copy.contact.intro}
            tone="inverse"
          />

              <div className="mt-8 flex flex-wrap gap-2">
                {copy.contact.bullets.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-paper/12 bg-paper/6 px-3 py-2 text-sm font-semibold text-paper/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="bg-paper p-5 text-ink dark:bg-paper/95 sm:p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
                {copy.contact.directConnection}
              </p>
              <p className="mt-4 text-xl font-semibold leading-tight text-ink sm:text-2xl">
                {copy.contact.body}
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="focus-ring motion-surface mt-7 flex items-center justify-between gap-4 rounded-md bg-ink px-5 py-5 text-paper shadow-line transition hover:bg-accent-green"
              >
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-paper/55">
                    {copy.contact.primaryCta}
                  </span>
                  <span className="mt-2 flex items-center gap-3 text-base font-semibold">
                    <Mail className="h-4 w-4 text-paper-warm" aria-hidden />
                    {copy.contact.email}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-paper/70" aria-hidden />
              </a>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring motion-surface flex items-center justify-between gap-3 rounded-md border border-ink/10 bg-white/70 px-4 py-4 text-sm font-semibold text-ink transition hover:border-ink/25 hover:bg-white dark:bg-white/80"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon className="h-4 w-4 text-accent-bronze" aria-hidden />
                      {label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-muted" aria-hidden />
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-ink/10 pt-5">
                {copy.contact.metadata.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-ink/5 px-2.5 py-1.5 text-xs font-semibold text-ink-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
