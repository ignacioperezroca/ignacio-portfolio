import { achievements } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

export function Achievements() {
  return (
    <section className="border-y border-ink/10 bg-ink py-20 text-paper dark:border-paper/10 sm:py-28" id="impact">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            eyebrow="Measured impact"
            title="Outcomes that show product range: growth, trust, operations, and platform leverage."
            description="Selected outcomes across growth, trust, platform strategy, and product execution."
            tone="inverse"
          />
        </FadeIn>

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <FadeIn key={achievement.label} delay={index * 0.04}>
              <article className="min-h-56 bg-ink p-6 transition hover:bg-paper/[0.06]">
                <p className="font-serif text-5xl leading-none text-paper sm:text-6xl">
                  {achievement.value}
                </p>
                <h3 className="mt-6 text-lg font-semibold text-paper">
                  {achievement.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-paper/62">
                  {achievement.detail}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
