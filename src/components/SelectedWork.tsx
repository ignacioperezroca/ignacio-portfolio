"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Fingerprint,
  LucideIcon,
  FlaskConical,
  LineChart,
  Network,
  ShieldCheck,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

type WorkCardCopy = {
  artifactLabel: string;
  artifactTitle: string;
  artifactMeta: string;
  tags: readonly string[];
  meta: string;
  title: string;
  body: string;
  bullets: readonly string[];
  cta: string;
};

type LocalizedStudy = (typeof caseStudies)[number] & {
  localized: WorkCardCopy;
};

type WorkLabels = {
  caseStudyLabel: string;
  readCaseStudy: string;
  viewAll: string;
  viewLess: string;
};

const studyIcons: Record<string, LucideIcon> = {
  "kyc-onboarding-optimization": Fingerprint,
  "authentication-trust-platform": ShieldCheck,
  "profiler-personalized-activation-engine": FlaskConical,
  "activation-growth-system": LineChart,
  "kyc-operations-backoffice": Network
};

function StudyGlyph({
  slug,
  className
}: {
  slug: string;
  className?: string;
}) {
  const Icon = studyIcons[slug] ?? Fingerprint;

  return <Icon className={className} aria-hidden />;
}

function stripCaseStudyPrefix(title: string) {
  return title.replace(/^Case Study:\s*/, "");
}

function WorkTile({
  study,
  labels
}: {
  study: LocalizedStudy;
  labels: WorkLabels;
}) {
  const href = `/case-studies/${study.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        "focus-ring motion-surface min-w-0 text-left transition-premium group relative flex h-full flex-col rounded-[1.35rem] border border-ink/10 bg-paper/92 p-4 shadow-[0_1px_0_rgba(255,255,255,0.82),0_12px_26px_rgba(18,17,15,0.035)] hover:border-ink/20 hover:bg-white dark:border-paper/10 dark:bg-paper/5 dark:shadow-[0_1px_0_rgba(255,255,255,0.035),0_12px_26px_rgba(0,0,0,0.16)] dark:hover:border-paper/25 dark:hover:bg-[#181512] sm:p-5"
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "grid h-10 w-10 shrink-0 place-items-center rounded-full border",
            "border-ink/10 bg-ink/5 text-ink dark:border-paper/10 dark:bg-paper/8 dark:text-paper"
          )}
        >
          <StudyGlyph slug={study.slug} className="h-5 w-5" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted dark:text-paper/52">
              {labels.caseStudyLabel}
            </p>
            <span
              className="rounded-full border border-ink/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:border-paper/10 dark:bg-paper/5 dark:text-paper/58"
            >
              {study.localized.meta}
            </span>
          </div>

          <h3 className="mt-3 text-[clamp(1.2rem,1.8vw,1.85rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-ink text-balance dark:text-paper">
            {stripCaseStudyPrefix(study.localized.title)}
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-ink-muted dark:text-paper/68">
            {study.localized.body}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {study.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-ink/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted dark:border-paper/10 dark:bg-paper/5 dark:text-paper/58"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-ink/10 pt-4 dark:border-paper/10">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted dark:text-paper/52">
          {labels.readCaseStudy}
        </span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" aria-hidden />
      </div>
    </Link>
  );
}
export function SelectedWork({ previewLimit }: { previewLimit?: number }) {
  const { copy } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const labels: WorkLabels = {
    caseStudyLabel: copy.work.caseStudyLabel,
    readCaseStudy: copy.work.readCaseStudy,
    viewAll: copy.ui.viewAll,
    viewLess: copy.ui.viewLess
  };

  const localizedStudies = caseStudies.map((study, index) => {
    const localized = copy.work.cards[index] ?? copy.work.cards[0];

    return {
      ...study,
      localized: {
        ...localized,
        tags: [...localized.tags],
        bullets: [...localized.bullets]
      }
    } as LocalizedStudy;
  });

  const showPreview = typeof previewLimit === "number" && !expanded;
  const visibleStudies = showPreview ? localizedStudies.slice(0, previewLimit) : localizedStudies;
  const showToggle = typeof previewLimit === "number" && localizedStudies.length > previewLimit;

  return (
    <section className="scroll-mt-24 py-20 sm:scroll-mt-28 sm:py-28" id="work">
      <div className="section-shell">
        <div className="grid gap-6">
          <FadeIn variant="softReveal">
            <SectionHeader
              eyebrow={copy.work.kicker}
              title={copy.work.title}
              description={copy.work.intro}
            />
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visibleStudies.map((study) => (
            <WorkTile
              key={study.slug}
              study={study}
              labels={labels}
            />
          ))}
        </div>

        {showToggle ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="focus-ring group motion-surface transition-premium inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-3 text-sm font-semibold text-ink shadow-[0_1px_0_rgba(255,255,255,0.84),0_12px_28px_rgba(18,17,15,0.05)] hover:border-ink/20 hover:bg-white dark:border-paper/10 dark:bg-paper/6 dark:text-paper dark:shadow-[0_1px_0_rgba(255,255,255,0.03),0_12px_28px_rgba(0,0,0,0.16)] dark:hover:border-paper/25 dark:hover:bg-paper/10"
            >
              {expanded ? labels.viewLess : labels.viewAll}
              <ArrowRight
                className={cn(
                  "h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  expanded ? "rotate-180" : "group-hover:translate-x-0.5"
                )}
                aria-hidden
              />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
