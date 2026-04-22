import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { thoughts } from "@/data/portfolio";

export function Thoughts() {
  return (
    <section className="border-y border-ink/10 bg-white/48 py-20 dark:border-paper/10 dark:bg-paper/5 sm:py-28">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            eyebrow="Product thinking"
            title="Identity, onboarding, growth, and full-stack product leadership."
            description="Product perspectives on identity, onboarding, KYC, authentication, trust systems, and product leadership in high-growth environments."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {thoughts.map((thought, index) => (
            <FadeIn key={thought.title} delay={index * 0.05}>
              <article className="group h-full rounded-md border border-ink/10 bg-paper/72 p-5 shadow-line transition hover:-translate-y-1 hover:border-ink/25 dark:border-paper/10 dark:bg-ink/60 dark:hover:border-paper/25">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                  Product perspective
                </p>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-ink dark:text-paper">
                  {thought.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink-muted dark:text-paper/62">
                  {thought.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition group-hover:gap-3 group-hover:text-ink dark:text-paper/55 dark:group-hover:text-paper">
                  Perspective
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
