"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import { staggerContainer, staggerItem } from "@/lib/motion";

type ImpactCard = {
  value: string;
  label: string;
  detail: string;
  category: string;
};

type MiniVisualKind = "conversion" | "growth" | "identity" | "none";

const evidenceChips = {
  conversion: "Funnel improvement",
  growth: "Growth infrastructure",
  identity: "Identity platform"
} as const;

function ConversionMiniBar() {
  return (
    <div className="rounded-[1rem] border border-ink/10 bg-white/72 p-4 dark:border-paper/10 dark:bg-paper/5">
      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/45">
        <span>Before</span>
        <span>After</span>
      </div>
      <div className="mt-4 grid gap-3">
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-ink dark:text-paper">
            <span>8%</span>
            <span className="text-ink-muted dark:text-paper/45">Baseline</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-ink/8 dark:bg-paper/10">
            <div className="h-full w-[16%] rounded-full bg-ink/30 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-[1.03] group-hover:origin-left dark:bg-paper/35" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-ink dark:text-paper">
            <span>29%</span>
            <span className="text-accent-green dark:text-paper-warm">Improved</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-ink/8 dark:bg-paper/10">
            <div className="h-full w-[48%] rounded-full bg-accent-green transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-[1.03] group-hover:origin-left dark:bg-paper-warm" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-ink-muted dark:text-paper/55">
        Before / after onboarding conversion
      </p>
    </div>
  );
}

function GrowthMiniChart() {
  return (
    <div className="rounded-[1rem] border border-ink/10 bg-white/72 p-4 dark:border-paper/10 dark:bg-paper/5">
      <svg
        viewBox="0 0 320 120"
        className="h-28 w-full overflow-visible"
        aria-hidden
      >
        <defs>
          <linearGradient id="growthLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M18 88H302"
          className="stroke-ink/10 dark:stroke-paper/10"
          fill="none"
          strokeWidth="1"
        />
        <path
          d="M18 70C48 68 62 66 84 64C104 62 116 56 136 50C159 44 171 32 188 26C209 18 230 16 302 14"
          className="text-accent-green dark:text-paper-warm"
          fill="none"
          stroke="url(#growthLine)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="70" r="4.5" className="fill-accent-green dark:fill-paper-warm" />
        <circle cx="302" cy="14" r="5" className="fill-accent-green dark:fill-paper-warm" />
        <circle cx="84" cy="64" r="3.5" className="fill-paper dark:fill-ink" />
        <circle cx="136" cy="50" r="3.5" className="fill-paper dark:fill-ink" />
        <circle cx="188" cy="26" r="3.5" className="fill-paper dark:fill-ink" />
      </svg>
      <div className="mt-1 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted dark:text-paper/50">
        <span>60K</span>
        <span className="text-accent-green dark:text-paper-warm">2M</span>
      </div>
      <p className="mt-3 text-xs leading-5 text-ink-muted dark:text-paper/55">
        LatAm crypto growth curve
      </p>
    </div>
  );
}

function IdentityNodeMap() {
  const nodes = [
    { x: 50, y: 36, label: "Auth", size: 30 },
    { x: 78, y: 66, label: "KYC", size: 34 },
    { x: 50, y: 96, label: "Access", size: 32 },
    { x: 168, y: 36, label: "Trust", size: 32 }
  ] as const;

  return (
    <div className="rounded-[1rem] border border-ink/10 bg-white/72 p-4 dark:border-paper/10 dark:bg-paper/5">
      <svg viewBox="0 0 240 130" className="h-28 w-full" aria-hidden>
        <path
          d="M120 68L84 48M120 68L86 66M120 68L84 88M120 68L162 48"
          className="stroke-ink/14 dark:stroke-paper/12"
          fill="none"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle
          cx="120"
          cy="68"
          r="22"
          className="fill-accent-green/10 stroke-accent-green dark:fill-paper-warm/10 dark:stroke-paper-warm"
          strokeWidth="1.5"
        />
        <text
          x="120"
          y="73"
          textAnchor="middle"
          className="fill-ink text-[12px] font-semibold dark:fill-paper"
        >
          Identity
        </text>
        {nodes.map((node) => (
          <g key={node.label}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size / 2}
              className="fill-paper stroke-ink/16 dark:fill-ink/65 dark:stroke-paper/12"
              strokeWidth="1.2"
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              className="fill-ink text-[11px] font-semibold dark:fill-paper"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-2 text-xs leading-5 text-ink-muted dark:text-paper/55">
        Identity hubs connect auth, KYC, access, and trust
      </p>
    </div>
  );
}

function ImpactMetricCard({
  metric,
  visualKind,
  evidenceChip
}: {
  metric: ImpactCard;
  visualKind: MiniVisualKind;
  evidenceChip: string;
}) {
  return (
    <motion.article
      variants={staggerItem}
      className="group motion-surface relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-[1rem] border border-ink/12 bg-paper/88 p-6 shadow-[0_1px_0_rgba(255,255,255,0.65),0_18px_42px_rgba(18,17,15,0.06)] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-ink/20 hover:bg-white dark:border-paper/10 dark:bg-ink/72 dark:shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_42px_rgba(0,0,0,0.22)] dark:hover:border-paper/25 dark:hover:bg-paper/8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,107,90,0.11),transparent_58%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_left,rgba(248,245,239,0.08),transparent_60%)]"
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
            {metric.category}
          </p>
          <span className="rounded-full border border-ink/10 bg-white/72 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted dark:border-paper/10 dark:bg-paper/6 dark:text-paper/58">
            {evidenceChip}
          </span>
        </div>

        <div className="mt-7 font-serif text-[clamp(3.4rem,5.2vw,5.75rem)] leading-[0.9] tracking-[-0.05em] text-ink dark:text-paper">
          {metric.value}
        </div>
        <h3 className="mt-4 text-[1.15rem] font-semibold leading-tight text-ink dark:text-paper sm:text-[1.3rem]">
          {metric.label}
        </h3>

        <div className="mt-6">{visualKind === "conversion" ? <ConversionMiniBar /> : null}</div>
        <div className="mt-6">{visualKind === "growth" ? <GrowthMiniChart /> : null}</div>
        <div className="mt-6">{visualKind === "identity" ? <IdentityNodeMap /> : null}</div>

        <p className="mt-auto border-t border-ink/10 pt-5 text-[0.98rem] leading-7 text-ink-muted dark:border-paper/10 dark:text-paper/66">
          {metric.detail}
        </p>
      </div>
    </motion.article>
  );
}

function ImpactCapabilityCard({ metric }: { metric: ImpactCard }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group motion-surface relative flex h-full min-h-[14rem] flex-col justify-between overflow-hidden rounded-[1rem] border border-ink/10 bg-white/70 p-5 shadow-[0_1px_0_rgba(255,255,255,0.6),0_10px_30px_rgba(18,17,15,0.04)] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-ink/20 hover:bg-white dark:border-paper/10 dark:bg-paper/5 dark:shadow-[0_1px_0_rgba(255,255,255,0.03),0_10px_30px_rgba(0,0,0,0.18)] dark:hover:border-paper/25 dark:hover:bg-paper/8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,107,90,0.06),transparent_60%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_left,rgba(248,245,239,0.05),transparent_60%)]"
      />
      <div className="relative">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-green dark:text-paper-warm">
          {metric.category}
        </p>
        <div className="mt-5 font-serif text-[clamp(1.85rem,2.6vw,2.75rem)] leading-none tracking-[-0.04em] text-ink dark:text-paper">
          {metric.value}
        </div>
        <h3 className="mt-3 text-[1rem] font-semibold leading-tight text-ink dark:text-paper">
          {metric.label}
        </h3>
      </div>
      <p className="relative mt-6 border-t border-ink/10 pt-4 text-sm leading-6 text-ink-muted dark:border-paper/10 dark:text-paper/62">
        {metric.detail}
      </p>
    </motion.article>
  );
}

export function MetricsStrip({ previewLimit }: { previewLimit?: number }) {
  const { copy } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const isPreview = typeof previewLimit === "number" && !expanded;
  const metrics = isPreview
    ? copy.heroImpactCards.slice(0, previewLimit)
    : copy.heroImpactCards;
  const topMetrics = metrics.slice(0, 3);
  const secondaryMetrics = metrics.slice(3);
  const containerVariants = reduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer;
  const secondaryVariants = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.07,
            delayChildren: 0.14
          }
        }
      };

  const visualKinds: MiniVisualKind[] = ["conversion", "growth", "identity"];

  return (
    <section
      id="impact"
      className="scroll-mt-24 border-y border-ink/10 bg-white/48 py-24 dark:border-paper/10 dark:bg-paper/5 sm:scroll-mt-28 sm:py-32"
    >
      <div className="section-shell relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-[min(72rem,92vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(15,107,90,0.11),transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(238,230,216,0.08),transparent_72%)]"
        />

        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
            <div>
              <SectionHeader
                eyebrow={copy.impact.kicker}
                title={copy.impact.title}
                description={copy.impact.intro}
              />
            </div>
            {isPreview ? (
              <div className="lg:justify-self-end">
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="focus-ring group inline-flex items-center gap-2 rounded-md border border-ink/10 bg-paper/72 px-4 py-3 text-sm font-semibold text-ink shadow-line transition-premium hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-ink/60 dark:text-paper dark:hover:border-paper/25"
                >
                  {copy.ui.viewAll}
                  <ChevronRight
                    className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </button>
              </div>
            ) : null}
          </div>
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {topMetrics.map((metric, index) => {
            const visualKind = visualKinds[index];

            return (
              <ImpactMetricCard
                key={`${metric.value}-${metric.label}`}
                metric={metric}
                visualKind={visualKind ?? "none"}
                evidenceChip={
                  visualKind
                    ? evidenceChips[visualKind as keyof typeof evidenceChips]
                    : copy.impact.categoryLabel
                }
              />
            );
          })}
        </motion.div>

        {secondaryMetrics.length ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            variants={secondaryVariants}
            className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5"
          >
            {secondaryMetrics.map((metric) => (
              <ImpactCapabilityCard key={`${metric.value}-${metric.label}`} metric={metric} />
            ))}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
