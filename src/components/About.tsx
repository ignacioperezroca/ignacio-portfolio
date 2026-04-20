import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { personalInfo } from "@/data/portfolio";

const leveragePoints = [
  {
    title: "Product strategy with implementation taste",
    body: "I can frame the bet, pressure-test the UX, and reason through the technical consequences before the team commits."
  },
  {
    title: "Growth without ignoring risk",
    body: "I improve activation and conversion in environments where user quality, compliance, and trust are part of the metric."
  },
  {
    title: "Identity expertise with human clarity",
    body: "KYC, authentication, and recovery flows are complex systems. I make them legible to users and operable for teams."
  }
];

export function About() {
  return (
    <section className="py-20 sm:py-28" id="about">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeIn>
          <SectionHeader
            eyebrow="About / positioning"
            title="A product leader for moments where trust, growth, and complexity collide."
            description={personalInfo.shortPositioning}
          />
        </FadeIn>

        <div className="grid gap-6">
          <FadeIn delay={0.05}>
            <div className="border-l-2 border-accent-green pl-6">
              <p className="text-xl leading-9 text-ink dark:text-paper">
                My path combines product strategy, UX/UI craft, frontend fluency,
                data-driven growth, and deep exposure to identity and verification
                problems. That mix gives me unusual leverage in cross-functional
                rooms: I can connect user trust, business outcomes, design quality,
                engineering constraints, and regulated operating reality.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-base leading-8 text-ink-muted dark:text-paper/70">
              I am most useful when a team is working through ambiguity: where the
              funnel is leaking but the reasons are unclear, where compliance or
              security constraints are real but the user journey is breaking, or
              where a platform decision needs to translate into a better product
              experience. I do not treat complexity as a reason to slow down. I
              use it as the raw material for sharper sequencing, clearer systems,
              and better adoption.
            </p>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-3">
            {leveragePoints.map((point, index) => (
              <FadeIn key={point.title} delay={0.15 + index * 0.05}>
                <article className="h-full rounded-md border border-ink/10 bg-white/62 p-5 shadow-line transition hover:-translate-y-1 hover:border-ink/20 dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25">
                  <CheckCircle2 className="mb-5 h-5 w-5 text-accent-green dark:text-paper-warm" />
                  <h3 className="text-base font-semibold text-ink dark:text-paper">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted dark:text-paper/62">
                    {point.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.32}>
            <a
              href="#work"
              className="focus-ring group inline-flex items-center gap-2 rounded-md text-sm font-semibold text-ink underline decoration-ink/20 underline-offset-4 transition hover:decoration-ink dark:text-paper dark:decoration-paper/25 dark:hover:decoration-paper"
            >
              See how this shows up in selected work
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
