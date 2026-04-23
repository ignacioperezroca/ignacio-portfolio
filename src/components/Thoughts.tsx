"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";

export function Thoughts({ limit }: { limit?: number }) {
  const { copy } = useLanguage();
  const articles =
    typeof limit === "number" ? copy.thinking.articles.slice(0, limit) : copy.thinking.articles;

  return (
    <section className="border-y border-ink/10 bg-white/48 py-20 dark:border-paper/10 dark:bg-paper/5 sm:py-28">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            eyebrow={copy.thinking.kicker}
            title={copy.thinking.title}
            description={copy.thinking.intro}
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {articles.map((thought, index) => (
            <FadeIn key={thought.title} delay={index * 0.05}>
              <article className="group h-full rounded-md border border-ink/10 bg-paper/72 p-5 shadow-line transition hover:-translate-y-1 hover:border-ink/25 dark:border-paper/10 dark:bg-ink/60 dark:hover:border-paper/25">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                  {thought.label}
                </p>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-ink dark:text-paper">
                  {thought.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink-muted dark:text-paper/62">
                  {thought.teaser}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition group-hover:gap-3 group-hover:text-ink dark:text-paper/55 dark:group-hover:text-paper">
                  {thought.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        {typeof limit === "number" ? (
          <div className="mt-10">
            <Link
              href="/writing"
              className="focus-ring motion-surface inline-flex items-center gap-2 rounded-md border border-ink/10 bg-paper/72 px-4 py-3 text-sm font-semibold text-ink shadow-line transition hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-ink/60 dark:text-paper dark:hover:border-paper/25"
            >
              {copy.ui.viewAllWriting}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
