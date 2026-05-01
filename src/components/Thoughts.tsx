"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";

function getArticleUrl(article: { title: string; directUrl?: string }) {
  if (!article.directUrl) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Missing directUrl for article: ${article.title}`);
    }

    return "#";
  }

  return article.directUrl;
}

export function Thoughts({ previewLimit }: { previewLimit?: number }) {
  const { copy } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const isPreview = typeof previewLimit === "number" && !expanded;
  const articles = isPreview
    ? copy.thinking.articles.slice(0, previewLimit)
    : copy.thinking.articles;

  return (
    <section className="scroll-mt-24 border-y border-ink/10 bg-white/48 py-20 dark:border-paper/10 dark:bg-paper/5 sm:scroll-mt-28 sm:py-28" id="writing">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            eyebrow={copy.thinking.kicker}
            title={copy.thinking.title}
            description={copy.thinking.intro}
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {articles.map((thought) => (
            <motion.a
              key={thought.title}
              href={getArticleUrl(thought)}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-premium block h-full rounded-md border border-ink/10 bg-paper/72 p-5 shadow-line hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-ink/60 dark:hover:border-paper/25 dark:hover:bg-paper/8"
            >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                  {thought.label}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted dark:text-paper/55">
                  <span>{thought.date}</span>
                  <span aria-hidden>•</span>
                  <span>{thought.readTime}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-ink dark:text-paper">
                  {thought.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink-muted dark:text-paper/62">
                  {thought.teaser}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {thought.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-ink/10 px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-paper/10 dark:text-paper/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-premium group-hover:text-ink dark:text-paper/55 dark:group-hover:text-paper">
                  {thought.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
                </div>
              </motion.a>
          ))}
        </div>
        {isPreview ? (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="focus-ring group transition-premium inline-flex items-center gap-2 rounded-md border border-ink/10 bg-paper/72 px-4 py-3 text-sm font-semibold text-ink shadow-line hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-ink/60 dark:text-paper dark:hover:border-paper/25"
            >
              {copy.ui.viewWritingHub}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
