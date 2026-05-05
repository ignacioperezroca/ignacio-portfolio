import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { caseStudies, type Metric } from "@/data/portfolio";
import {
  robotsMetadata,
  siteName,
  siteUrl,
  socialImageAlt,
  socialImageUrl
} from "@/lib/seo";
import { cn } from "@/lib/utils";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type StoryModule = {
  title: string;
  key:
    | "context"
    | "problem"
    | "userPain"
    | "businessPain"
    | "constraints"
    | "myRole"
    | "strategy"
    | "research"
    | "solution"
    | "execution"
    | "stakeholderManagement"
    | "lessons";
  spanClassName: string;
  variant: "text" | "summary" | "comparison" | "process" | "takeaways";
};

const storyModules: readonly StoryModule[] = [
  { title: "Context", key: "context", spanClassName: "lg:col-span-2", variant: "summary" },
  { title: "Problem", key: "problem", spanClassName: "", variant: "comparison" },
  { title: "User pain", key: "userPain", spanClassName: "", variant: "text" },
  { title: "Business pain", key: "businessPain", spanClassName: "", variant: "text" },
  { title: "Constraints", key: "constraints", spanClassName: "", variant: "summary" },
  { title: "My role", key: "myRole", spanClassName: "lg:col-span-2", variant: "process" },
  { title: "Strategy", key: "strategy", spanClassName: "", variant: "process" },
  { title: "Research / insights", key: "research", spanClassName: "", variant: "comparison" },
  { title: "Solution", key: "solution", spanClassName: "lg:col-span-2", variant: "summary" },
  { title: "Execution", key: "execution", spanClassName: "", variant: "process" },
  { title: "Stakeholder management", key: "stakeholderManagement", spanClassName: "", variant: "comparison" },
  { title: "Lessons learned", key: "lessons", spanClassName: "lg:col-span-2", variant: "takeaways" }
] as const;

function sectionId(title: string) {
  return title.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-");
}

const heroPanelClassName =
  "spotlight-card motion-surface transition-premium transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 group rounded-[1.5rem] border border-ink/10 bg-white/78 p-5 shadow-[0_1px_0_rgba(255,255,255,0.84),0_18px_40px_rgba(18,17,15,0.05)] dark:border-paper/10 dark:bg-paper/5 hover:border-ink/18 hover:bg-white dark:hover:border-paper/20 dark:hover:bg-[#181512] sm:p-6";

const metricCardClassName =
  "motion-surface transition-premium transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 group rounded-[1rem] border border-ink/10 bg-white/62 p-4 shadow-[0_1px_0_rgba(255,255,255,0.88),0_10px_22px_rgba(18,17,15,0.04)] dark:border-paper/10 dark:bg-paper/5 dark:shadow-[0_1px_0_rgba(255,255,255,0.03),0_10px_22px_rgba(0,0,0,0.18)] hover:border-ink/18 hover:bg-white dark:hover:border-paper/20 dark:hover:bg-[#181512]";

const moduleCardClassName =
  "motion-surface transition-premium transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 group rounded-[1.35rem] border border-ink/10 bg-white/78 p-6 shadow-[0_1px_0_rgba(255,255,255,0.84),0_16px_36px_rgba(18,17,15,0.04)] dark:border-paper/10 dark:bg-paper/5 hover:border-ink/18 hover:bg-white dark:hover:border-paper/20 dark:hover:bg-[#181512] sm:p-7";

const infoCardClassName =
  "motion-surface transition-premium transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 group rounded-[1rem] border border-ink/10 bg-paper/78 px-3 py-3 shadow-[0_1px_0_rgba(255,255,255,0.72),0_12px_26px_rgba(18,17,15,0.035)] dark:border-paper/10 dark:bg-ink/24 hover:border-ink/18 hover:bg-white dark:hover:border-paper/20 dark:hover:bg-[#181512]";

const sidebarPanelClassName =
  "motion-surface transition-premium transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 group rounded-[1.35rem] border border-ink/10 bg-white/80 p-5 shadow-[0_1px_0_rgba(255,255,255,0.84),0_16px_36px_rgba(18,17,15,0.04)] dark:border-paper/10 dark:bg-paper/5 hover:border-ink/18 hover:bg-white dark:hover:border-paper/20 dark:hover:bg-[#181512]";

const mapLinkClassName =
  "focus-ring transition-premium transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group flex items-center justify-between gap-3 rounded-[1rem] border border-ink/10 bg-white/76 px-3.5 py-3 text-sm font-semibold text-ink-muted shadow-[0_1px_0_rgba(255,255,255,0.7),0_8px_18px_rgba(18,17,15,0.03)] hover:-translate-y-px hover:border-ink/20 hover:bg-white hover:text-ink dark:border-paper/10 dark:bg-paper/5 dark:text-paper/62 dark:hover:border-paper/25 dark:hover:bg-paper/10 dark:hover:text-paper";

const bulletCardClassName =
  "motion-surface transition-premium transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 group flex gap-3 rounded-[1rem] border border-ink/10 bg-paper/76 p-4 text-sm leading-6 text-ink-muted shadow-[0_1px_0_rgba(255,255,255,0.72),0_12px_26px_rgba(18,17,15,0.035)] dark:border-paper/10 dark:bg-ink/24 dark:text-paper/65 hover:border-ink/18 hover:bg-white dark:hover:border-paper/20 dark:hover:bg-[#181512]";

const nextCaseCardClassName =
  "motion-surface transition-premium transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 group flex flex-col gap-3 rounded-[1.35rem] border border-ink/10 bg-paper/86 p-5 shadow-[0_1px_0_rgba(255,255,255,0.72),0_16px_36px_rgba(18,17,15,0.04)] dark:border-paper/10 dark:bg-ink/60 hover:border-ink/18 hover:bg-white dark:hover:border-paper/20 dark:hover:bg-[#181512] sm:flex-row sm:items-center sm:justify-between";

type BarMeterProps = {
  label: string;
  value?: string;
  width: number;
  tone?: "green" | "blue" | "bronze";
};

function BarMeter({ label, value, width, tone = "green" }: BarMeterProps) {
  const toneClass =
    tone === "blue"
      ? "bg-accent-blue/75"
      : tone === "bronze"
        ? "bg-accent-bronze/75"
        : "bg-accent-green/75";

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/45">
          {label}
        </span>
        {value ? (
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink dark:text-paper">
            {value}
          </span>
        ) : null}
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-ink/8 dark:bg-paper/10">
        <div
          className={cn("h-full rounded-full", toneClass)}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function renderRichText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((segment, index) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return (
        <strong key={`${segment}-${index}`} className="font-semibold text-ink dark:text-paper">
          {segment.slice(2, -2)}
        </strong>
      );
    }

    return <span key={`${segment}-${index}`}>{segment}</span>;
  });
}

function HeroMetricCard({ metric, index }: { metric: Metric; index: number }) {
  return (
    <article className={metricCardClassName}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/52">
        {metric.label}
      </p>
      <p className="mt-2 font-serif text-[clamp(1.65rem,2.4vw,2.35rem)] leading-none tracking-[-0.05em] text-ink dark:text-paper">
        {metric.value}
      </p>
      <p className="mt-2 text-xs leading-5 text-ink-muted dark:text-paper/62 text-pretty">
        {renderRichText(metric.detail)}
      </p>
      <BarMeter
        label="Signal"
        width={index === 0 ? 86 : index === 1 ? 72 : 64}
        tone={index === 1 ? "blue" : index === 2 ? "bronze" : "green"}
      />
    </article>
  );
}

const summaryLabels: Record<string, readonly string[]> = {
  Context: ["Core move", "System shift", "Design stance"],
  Constraints: ["Policy", "Architecture", "Observability"],
  Solution: ["Primary change", "Support layer", "Measurement", "Rollout"],
  "What this shows": ["Outcome", "Scale", "System"]
} as const;

const comparisonLabels: Record<string, readonly string[]> = {
  Problem: ["User-facing", "System-facing"],
  "Research / insights": ["Behavioral signals", "Operational signals"],
  "Stakeholder management": ["Alignment", "Tradeoff"]
} as const;

const processLabels: Record<string, readonly string[]> = {
  "My role": ["Frame", "Partner", "Coordinate"],
  Strategy: ["Map", "Prioritize", "Clarify"],
  Execution: ["Sequence", "Instrument", "Measure"]
} as const;

const takeawayLabels: Record<string, readonly string[]> = {
  "Lessons learned": ["Principle", "System", "Measurement"]
} as const;

function CaseStudyModule({
  title,
  items,
  variant,
  spanClassName
}: {
  title: string;
  items: readonly string[];
  variant: StoryModule["variant"];
  spanClassName: string;
}) {
  const summaryCardLabels = summaryLabels[title] ?? [];
  const comparisonCardLabels = comparisonLabels[title] ?? [];
  const processCardLabels = processLabels[title] ?? [];
  const takeawayCardLabels = takeawayLabels[title] ?? [];

  return (
    <FadeIn variant="softReveal" className={spanClassName}>
      <section id={sectionId(title)} className={`${moduleCardClassName} scroll-mt-28`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
            {title}
          </p>
          <span className="rounded-full border border-ink/10 bg-paper/78 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:border-paper/10 dark:bg-ink/30 dark:text-paper/55">
            {items.length} notes
          </span>
        </div>

        {variant === "summary" ? (
          <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1.15fr)_minmax(230px,0.85fr)]">
            <div className="rounded-[1rem] border border-ink/10 bg-paper/74 p-4 shadow-line dark:border-paper/10 dark:bg-ink/24">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                Summary
              </p>
              <p className="mt-3 text-pretty text-base leading-7 text-ink-muted dark:text-paper/72">
                {renderRichText(items[0] ?? "")}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {items.slice(1).map((item, index) => (
                <div
                  key={item}
                  className="rounded-[0.95rem] border border-ink/10 bg-white/68 p-4 shadow-line dark:border-paper/10 dark:bg-paper/5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/45">
                    {summaryCardLabels[index] ?? `0${index + 1}`}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink-muted dark:text-paper/68 text-pretty">
                    {renderRichText(item)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {variant === "comparison" ? (
          <div className="mt-5 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            {items.map((item, index) => (
              <div
                key={item}
                className="rounded-[1rem] border border-ink/10 bg-paper/74 p-4 shadow-line dark:border-paper/10 dark:bg-ink/24"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/45">
                  {comparisonCardLabels[index] ?? `0${index + 1}`}
                </p>
                <p className="mt-2 text-pretty text-sm leading-6 text-ink-muted dark:text-paper/68">
                  {renderRichText(item)}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {variant === "process" ? (
          <div className="mt-5 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            {items.map((item, index) => (
              <div
                key={item}
                className="relative rounded-[1rem] border border-ink/10 bg-paper/78 p-4 shadow-[0_1px_0_rgba(255,255,255,0.72),0_12px_26px_rgba(18,17,15,0.035)] dark:border-paper/10 dark:bg-ink/24"
              >
                <div className="absolute inset-x-4 top-0 h-px rounded-full bg-ink/8 dark:bg-paper/10" />
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/76 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:border-paper/10 dark:bg-paper/10 dark:text-paper/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                    {processCardLabels[index] ?? "Step"}
                  </p>
                </div>
                <p className="mt-3 text-pretty text-base leading-7 text-ink-muted dark:text-paper/72">
                  {renderRichText(item)}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {variant === "takeaways" ? (
          <div className="mt-5 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            {items.map((item, index) => (
              <div
                key={item}
                className="rounded-[1rem] border border-ink/10 bg-paper/74 p-4 shadow-line dark:border-paper/10 dark:bg-ink/24"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/45">
                  {takeawayCardLabels[index] ?? `0${index + 1}`}
                </p>
                <p className="mt-2 text-pretty text-sm leading-6 text-ink-muted dark:text-paper/68">
                  {renderRichText(item)}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {variant === "text" ? (
          <div className="mt-5 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {items.map((item, index) => (
              <div
                key={item}
                className="rounded-[1rem] border border-ink/10 bg-paper/74 p-4 shadow-line dark:border-paper/10 dark:bg-ink/24"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/45">
                  {title}
                  <span className="mx-2 text-ink/20 dark:text-paper/20">/</span>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-pretty text-base leading-7 text-ink-muted dark:text-paper/72">
                  {renderRichText(item)}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </FadeIn>
  );
}

function SidebarFact({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className={infoCardClassName}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/45">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold leading-5 text-ink dark:text-paper text-pretty">{value}</p>
    </div>
  );
}

function CaseStudyMap({
  title,
  id,
  index
}: {
  title: string;
  id: string;
  index: number;
}) {
  return (
    <a href={`#${id}`} className={mapLinkClassName}>
      <span className="flex items-center gap-2.5 min-w-0">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/74 text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-muted dark:border-paper/10 dark:bg-paper/8 dark:text-paper/50">
          {String(index).padStart(2, "0")}
        </span>
        <span className="truncate">{title}</span>
      </span>
      <ArrowRight
        className="h-3.5 w-3.5 shrink-0 text-ink-muted transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 dark:text-paper/45"
        aria-hidden
      />
    </a>
  );
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `${siteUrl}/case-studies/${study.slug}`
    },
    robots: robotsMetadata,
    openGraph: {
      title: `${study.title} | ${siteName}`,
      description: study.summary,
      url: `${siteUrl}/case-studies/${study.slug}`,
      type: "article",
      siteName,
      locale: "en_US",
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: socialImageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.summary,
      images: [
        {
          url: socialImageUrl,
          alt: socialImageAlt
        }
      ]
    }
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  const sidebarSections = [
    ...storyModules.map((module, index) => ({
      title: module.title,
      id: sectionId(module.title),
      index: index + 1
    })),
    {
      title: "What this shows",
      id: "what-this-shows",
      index: storyModules.length + 1
    }
  ] as const;

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-ink/10 bg-white/48 py-14 dark:border-paper/10 dark:bg-paper/5 sm:py-20">
          <div className="section-shell">
            <Link
              href="/#work"
              className="focus-ring transition-premium group inline-flex items-center gap-2 rounded-md text-sm font-semibold text-ink-muted hover:text-ink dark:text-paper/60 dark:hover:text-paper"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-0.5"
                aria-hidden
              />
              Back to selected work
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start">
              <FadeIn variant="softReveal">
                <div className="space-y-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green dark:text-paper-warm">
                    {study.kicker}
                  </p>
                  <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.75rem,5.4vw,5.25rem)] leading-[0.95] text-ink text-balance dark:text-paper">
                    {study.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-ink-muted dark:text-paper/70">
                    {study.summary}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {study.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md border border-ink/10 bg-white/68 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted shadow-line dark:border-paper/10 dark:bg-paper/5 dark:text-paper/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.06} variant="softReveal">
                <div className={heroPanelClassName}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-md bg-ink px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-paper shadow-line dark:bg-paper dark:text-ink">
                      {study.stage}
                    </span>
                    <span className="text-sm font-semibold text-ink-muted dark:text-paper/60">
                      {study.scope}
                    </span>
                  </div>

                  <div className="mt-8 border-t border-ink/10 pt-6 dark:border-paper/10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-green dark:text-paper-warm">
                      Impact
                    </p>
                    <p className="mt-4 font-serif text-[clamp(2.3rem,5vw,4.5rem)] leading-none tracking-[-0.05em] text-ink dark:text-paper">
                      {study.impactMetric}
                    </p>
                    <p className="mt-5 max-w-xl text-base leading-7 text-ink-muted dark:text-paper/68">
                      {study.artifact.primary}
                    </p>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-ink-muted dark:text-paper/60">
                      {study.artifact.secondary}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {study.story.metrics.slice(0, 3).map((metric, index) => (
                      <HeroMetricCard key={metric.label} metric={metric} index={index} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="section-shell grid gap-10 xl:grid-cols-[300px_minmax(0,1fr)] xl:items-start">
            <aside className="space-y-5 xl:sticky xl:top-28">
              <FadeIn delay={0.04}>
                <div className={sidebarPanelClassName}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                    Case study map
                  </p>
                  <div className="mt-5 grid gap-2">
                    {sidebarSections.map((section) => (
                      <CaseStudyMap
                        key={section.id}
                        title={section.title}
                        id={section.id}
                        index={section.index}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className={`${sidebarPanelClassName} bg-paper/80 dark:bg-ink/60`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bronze dark:text-paper-warm">
                    Quick facts
                  </p>
                  <div className="mt-4 grid gap-3">
                    <SidebarFact label="Stage" value={study.stage} />
                    <SidebarFact label="Scope" value={study.scope} />
                    <SidebarFact label="Impact" value={study.impactMetric} />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md border border-ink/10 px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-paper/10 dark:text-paper/55"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </aside>

            <div className="grid gap-5 md:grid-cols-2">
              {storyModules.map((module) => (
                <CaseStudyModule
                  key={module.title}
                  title={module.title}
                  items={study.story[module.key]}
                  variant={module.variant}
                  spanClassName={cn(
                    module.variant === "comparison" ? "md:col-span-1" : "md:col-span-2",
                    module.spanClassName
                  )}
                />
              ))}

              <FadeIn delay={0.22} className="md:col-span-2">
                <section
                  id="what-this-shows"
                  className={`${moduleCardClassName} scroll-mt-28`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bronze dark:text-paper-warm">
                    What this shows
                  </p>
                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {study.previewBullets.map((bullet) => (
                      <div
                        key={bullet}
                        className={bulletCardClassName}
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-green dark:text-paper-warm" />
                        <span className="text-pretty">{renderRichText(bullet)}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.28} className="md:col-span-2">
                <div className={nextCaseCardClassName}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/45">
                      Next case
                    </p>
                    <p className="mt-1 text-lg font-semibold text-ink dark:text-paper">
                      {nextStudy.title}
                    </p>
                  </div>
                  <ButtonLink href={`/case-studies/${nextStudy.slug}`} variant="secondary" className="group">
                    Read next
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </ButtonLink>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
