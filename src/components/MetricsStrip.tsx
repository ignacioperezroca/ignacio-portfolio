import { heroMetrics } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";

export function MetricsStrip() {
  return (
    <FadeIn
      delay={0.2}
      className="section-shell grid border-y border-ink/10 bg-paper/65 backdrop-blur md:grid-cols-4 dark:border-paper/10 dark:bg-paper/5"
    >
      {heroMetrics.map((metric) => (
        <div
          key={metric.label}
          className="border-b border-ink/10 px-5 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 dark:border-paper/10"
        >
          <div className="font-serif text-4xl leading-none text-ink dark:text-paper">
            {metric.value}
          </div>
          <div className="mt-2 text-sm font-semibold text-ink dark:text-paper">
            {metric.label}
          </div>
          <p className="mt-2 text-xs leading-5 text-ink-muted dark:text-paper/55">
            {metric.detail}
          </p>
        </div>
      ))}
    </FadeIn>
  );
}
