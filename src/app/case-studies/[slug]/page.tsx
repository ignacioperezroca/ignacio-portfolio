import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { caseStudies, personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
    openGraph: {
      title: `${study.title} - ${personalInfo.displayName}`,
      description: study.summary,
      type: "article"
    }
  };
}

const storySections = [
  ["Context", "context"],
  ["Problem", "problem"],
  ["User pain", "userPain"],
  ["Business pain", "businessPain"],
  ["Constraints", "constraints"],
  ["My role", "myRole"],
  ["Strategy", "strategy"],
  ["Research / insights", "research"],
  ["Solution", "solution"],
  ["Execution", "execution"],
  ["Stakeholder management", "stakeholderManagement"],
  ["Lessons learned", "lessons"]
] as const;

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-ink/10 bg-white/48 py-14 dark:border-paper/10 dark:bg-paper/5 sm:py-20">
          <div className="section-shell">
            <Link
              href="/#work"
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-ink-muted transition hover:text-ink dark:text-paper/60 dark:hover:text-paper"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to selected work
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-green dark:text-paper-warm">
                  {study.kicker}
                </p>
                <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1] text-ink dark:text-paper sm:text-6xl lg:text-7xl">
                  {study.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted dark:text-paper/70">
                  {study.summary}
                </p>
              </div>

              <div className={cn("rounded-md bg-gradient-to-br p-6", study.accentClass)}>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-md bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-line">
                    {study.stage}
                  </span>
                  <span className="text-sm font-semibold text-ink/70">
                    {study.impactMetric}
                  </span>
                </div>
                <div className="mt-24 border-t border-ink/15 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
                    Scope
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-ink">
                    {study.scope}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-md border border-ink/10 bg-white/70 p-5 shadow-line dark:border-paper/10 dark:bg-paper/5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                  Case study map
                </p>
                <div className="mt-5 grid gap-3">
                  {storySections.map(([title]) => (
                    <a
                      key={title}
                      href={`#${title.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-")}`}
                      className="focus-ring rounded-md border border-ink/10 px-3 py-2 text-sm font-semibold text-ink-muted transition hover:border-ink/25 hover:text-ink dark:border-paper/10 dark:text-paper/60 dark:hover:border-paper/25 dark:hover:text-paper"
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-md border border-ink/10 bg-paper/75 p-5 shadow-line dark:border-paper/10 dark:bg-ink/60">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bronze dark:text-paper-warm">
                  Topics
                </p>
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
            </aside>

            <div className="grid gap-5">
              {storySections.map(([title, key]) => (
                <section
                  key={title}
                  id={title.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-")}
                  className="scroll-mt-28 rounded-md border border-ink/10 bg-white/70 p-6 shadow-line dark:border-paper/10 dark:bg-paper/5 sm:p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
                    {title}
                  </p>
                  <div className="mt-5 grid gap-4">
                    {study.story[key].map((item) => (
                      <p
                        key={item}
                        className="text-base leading-8 text-ink-muted dark:text-paper/70"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="rounded-md border border-ink/10 bg-ink p-6 text-paper shadow-line dark:border-paper/10 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper-warm">
                  Metrics / impact
                </p>
                <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-paper/10 bg-paper/10 md:grid-cols-3">
                  {study.story.metrics.map((metric) => (
                    <article key={metric.label} className="bg-ink p-5">
                      <p className="font-serif text-4xl leading-none text-paper">
                        {metric.value}
                      </p>
                      <h2 className="mt-4 text-base font-semibold text-paper">
                        {metric.label}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-paper/62">
                        {metric.detail}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-md border border-ink/10 bg-white/70 p-6 shadow-line dark:border-paper/10 dark:bg-paper/5 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bronze dark:text-paper-warm">
                  What this demonstrates
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {study.previewBullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3 text-sm leading-6 text-ink-muted dark:text-paper/65">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-green dark:text-paper-warm" />
                      {bullet}
                    </div>
                  ))}
                </div>
              </section>

              <div className="flex flex-col gap-3 rounded-md border border-ink/10 bg-paper/75 p-5 shadow-line dark:border-paper/10 dark:bg-ink/60 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted dark:text-paper/45">
                    Next case
                  </p>
                  <p className="mt-1 text-lg font-semibold text-ink dark:text-paper">
                    {nextStudy.title}
                  </p>
                </div>
                <ButtonLink href={`/case-studies/${nextStudy.slug}`} variant="secondary">
                  Read next
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
