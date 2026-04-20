import { skillCategories } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";

export function Skills() {
  return (
    <section className="py-20 sm:py-28" id="expertise">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            eyebrow="Skills and expertise"
            title="A product toolkit organized around leverage, not labels."
            description="This is not a tag cloud. It is the operating system behind how I frame problems, lead teams, and ship products in high-trust environments."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.035}>
              <article className="h-full rounded-md border border-ink/10 bg-white/65 p-5 shadow-line transition hover:-translate-y-1 hover:border-ink/25 dark:border-paper/10 dark:bg-paper/5 dark:hover:border-paper/25">
                <category.icon className="h-6 w-6 text-accent-green dark:text-paper-warm" aria-hidden />
                <h3 className="mt-5 text-lg font-semibold text-ink dark:text-paper">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted dark:text-paper/62">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.methods.map((method) => (
                    <span
                      key={method}
                      className="rounded-md border border-ink/10 px-2.5 py-1 text-xs font-semibold text-ink-muted dark:border-paper/10 dark:text-paper/55"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
