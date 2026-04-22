import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

const leveragePoints = [
  {
    title: "Product judgment with technical fluency",
    body: "I can frame the bet, pressure-test the UX, and reason through technical consequences before the team commits."
  },
  {
    title: "Growth where trust is part of the metric",
    body: "I improve activation and conversion in environments where user quality, compliance, and confidence cannot be treated as secondary concerns."
  },
  {
    title: "Identity systems made legible",
    body: "KYC, authentication, recovery, and access are complex systems. I make them clearer for users and more operable for teams."
  }
];

export function About() {
  return (
    <section className="py-20 sm:py-28" id="about">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeIn>
          <SectionHeader
            eyebrow="About / positioning"
            title="Product leadership for identity, onboarding, and trust-critical systems"
            description="I work at the intersection of product strategy, UX, technical systems, and regulated user journeys."
          />
        </FadeIn>

        <div className="grid gap-6">
          <FadeIn delay={0.05}>
            <div className="border-l-2 border-accent-green pl-6">
              <p className="text-xl leading-9 text-ink dark:text-paper">
                My edge is not just shipping features. It is helping teams make
                better product decisions when growth, trust, compliance, risk,
                and technical constraints all matter at the same time.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-base leading-8 text-ink-muted dark:text-paper/70">
              I&apos;m most useful in environments where the funnel is leaking but
              the reason is unclear, where identity or security requirements create
              friction, or where a platform decision needs to improve the user
              experience instead of just adding complexity underneath it.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="text-base leading-8 text-ink-muted dark:text-paper/70">
              My background across design, frontend, analytics, onboarding, KYC,
              authentication, and platform work lets me connect the layers that
              often stay fragmented across teams: user trust, business outcomes,
              product clarity, technical feasibility, and operational reality.
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
              View selected work
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
