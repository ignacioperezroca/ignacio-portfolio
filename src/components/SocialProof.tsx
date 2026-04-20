import { Quote } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { socialProof } from "@/data/portfolio";

export function SocialProof() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <FadeIn>
            <SectionHeader
              eyebrow="Social proof"
              title="A proof layer ready for references, logos, and stakeholder quotes."
              description="Add recognizable companies, product teams, or partner logos when you are ready. Keep only proof you can stand behind."
            />
          </FadeIn>

          <div className="grid gap-6">
            <FadeIn>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 dark:border-paper/10 dark:bg-paper/10 sm:grid-cols-5">
                {socialProof.logoPlaceholders.map((logo) => (
                  <div
                    key={logo}
                    className="grid min-h-24 place-items-center bg-white/70 px-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted dark:bg-ink/72 dark:text-paper/45"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="grid gap-4 md:grid-cols-3">
              {socialProof.testimonials.map((testimonial, index) => (
                <FadeIn key={`${testimonial.name}-${index}`} delay={index * 0.05}>
                  <figure className="h-full rounded-md border border-ink/10 bg-white/68 p-5 shadow-line dark:border-paper/10 dark:bg-paper/5">
                    <Quote className="h-5 w-5 text-accent-bronze dark:text-paper-warm" aria-hidden />
                    <blockquote className="mt-5 text-sm leading-7 text-ink-muted dark:text-paper/68">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-ink/10 pt-4 dark:border-paper/10">
                      <p className="text-sm font-semibold text-ink dark:text-paper">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-xs font-medium text-ink-muted dark:text-paper/50">
                        {testimonial.title}
                      </p>
                    </figcaption>
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
