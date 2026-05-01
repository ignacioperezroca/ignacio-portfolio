"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { navItems, personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { copy } = useLanguage();
  const hrefFor = (href: string) => (href.startsWith("/") ? href : `/${href}`);
  const navLabelFor = (href: string, fallback: string) => {
    const labels: Record<string, string> = {
      "#impact": copy.nav.impact,
      "#work": copy.nav.work,
      "#timeline": copy.nav.timeline,
      "#expertise": copy.nav.expertise,
      "#writing": copy.nav.writing,
      "#about": copy.nav.about,
      "#contact": copy.nav.contact
    };

    return labels[href] ?? fallback;
  };

  return (
    <footer className="border-t border-ink/10 bg-ink py-10 text-paper dark:border-paper/10">
      <div className="section-shell">
        <FadeIn variant="softReveal">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-paper text-xs font-bold text-ink">
                  IP
                </span>
                <span className="text-sm font-semibold">{personalInfo.displayName}</span>
              </Link>
              <p className="mt-4 max-w-md text-sm leading-6 text-paper/58">
                {copy.footer.brandLine}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:text-right">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
                  {copy.footer.navigate}
                </p>
                <div className="mt-3 flex flex-wrap gap-3 md:justify-end">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={hrefFor(item.href)}
                      className="focus-ring transition-premium rounded-md text-sm text-paper/65 hover:text-paper"
                    >
                      {navLabelFor(item.href, item.label)}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
                  {copy.footer.connect}
                </p>
                <div className="mt-3 flex gap-2 md:justify-end">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring transition-premium grid h-10 w-10 place-items-center rounded-md border border-paper/10 text-paper/65 hover:border-paper/35 hover:text-paper"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring transition-premium grid h-10 w-10 place-items-center rounded-md border border-paper/10 text-paper/65 hover:border-paper/35 hover:text-paper"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="focus-ring transition-premium grid h-10 w-10 place-items-center rounded-md border border-paper/10 text-paper/65 hover:border-paper/35 hover:text-paper"
                    aria-label={copy.ui.email}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-10 flex flex-col gap-3 border-t border-paper/10 pt-5 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
            <p>{copy.footer.copyright}</p>
            <p>{copy.footer.builtWith}</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
