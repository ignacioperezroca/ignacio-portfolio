import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Why companies hire me",
  description:
    "Product problems Ignacio Perez Roca is best at solving across onboarding, identity, authentication, growth, trust, and platform work.",
  openGraph: {
    title: `Why companies hire me - ${personalInfo.displayName}`,
    description:
      "A focused view of best-fit product problems, strengths, roles, and selected evidence."
  }
};

const sections = [
  {
    title: "Best-fit problems",
    bullets: [
      "Leaky onboarding funnels where the root cause is unclear",
      "KYC, authentication, or recovery flows creating avoidable drop-off",
      "Identity or access systems that need to scale across products or teams",
      "Platform decisions that need to improve the user experience, not just the backend",
      "High-growth environments where trust, security, and conversion must move together"
    ]
  },
  {
    title: "What I bring",
    bullets: [
      "Product strategy with technical fluency",
      "UX judgment shaped by a design and frontend background",
      "Strong cross-functional leadership across design, engineering, data, operations, risk, and compliance",
      "Experience in fintech, crypto, digital identity, and trust-critical user journeys",
      "A bias for clarity, instrumentation, and measurable progress"
    ]
  },
  {
    title: "Roles where I create the most leverage",
    bullets: [
      "Senior Product Manager, Onboarding",
      "Senior Product Manager, Identity",
      "Senior Product Manager, Authentication / Trust",
      "Platform Product Manager",
      "Growth PM in regulated or trust-sensitive products"
    ]
  },
  {
    title: "Selected evidence",
    bullets: [
      "Improved Bitso onboarding conversion from 8% to 29%",
      "Supported Lemon Cash through growth from 60K to 2M users",
      "Leading product strategy for a 2.5M+ identity ecosystem",
      "16+ years across product, UX, and software development",
      "Experience across 7 countries in LatAm"
    ]
  }
];

export default function WhyCompaniesHireMePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-ink/10 bg-white/48 py-16 dark:border-paper/10 dark:bg-paper/5 sm:py-24">
          <div className="section-shell">
            <div className="max-w-4xl">
              <h1 className="font-serif text-5xl leading-[1] text-ink dark:text-paper sm:text-6xl lg:text-7xl">
                Why companies hire me
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-8 text-ink-muted dark:text-paper/70">
                I’m most useful in product environments where growth, trust, technical constraints, and operational reality all matter at the same time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="section-shell">
            <div className="grid gap-5 lg:grid-cols-2">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-md border border-ink/10 bg-white/70 p-6 shadow-line dark:border-paper/10 dark:bg-paper/5 sm:p-8"
                >
                  <h2 className="max-w-xl text-2xl font-semibold leading-tight text-ink dark:text-paper">
                    {section.title}
                  </h2>
                  <ul className="mt-7 grid gap-4">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-base leading-7 text-ink-muted dark:text-paper/70"
                      >
                        <CheckCircle2
                          className="mt-1 h-4 w-4 shrink-0 text-accent-green dark:text-paper-warm"
                          aria-hidden
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <section className="mt-6 rounded-md border border-ink/10 bg-ink p-6 text-paper shadow-line dark:border-paper/10 sm:p-8">
              <div className="flex">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="focus-ring group inline-flex max-w-4xl flex-wrap items-center gap-2 rounded-md text-2xl font-semibold leading-tight text-paper transition hover:text-paper-warm sm:text-3xl"
                >
                  <span>
                    If you’re hiring for onboarding, identity, authentication, growth, or platform work, let’s talk.
                  </span>
                  <ArrowRight
                    className="h-5 w-5 transition group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
