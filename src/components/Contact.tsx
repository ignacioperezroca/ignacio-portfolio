import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
  return (
    <section className="py-20 sm:py-28" id="contact">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's discuss scaling your next identity platform"
            description={personalInfo.availability}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${personalInfo.email}`} variant="secondary" external>
              <Mail className="h-4 w-4" aria-hidden />
              Email
            </ButtonLink>
            <ButtonLink href={personalInfo.linkedinUrl} variant="secondary" external>
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </ButtonLink>
            <ButtonLink href={personalInfo.githubUrl} variant="secondary" external>
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </ButtonLink>
          </div>
        </div>

        <aside className="spotlight-card motion-surface overflow-hidden rounded-md border border-ink/10 bg-white/70 p-6 shadow-line dark:border-paper/10 dark:bg-paper/5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-green dark:text-paper-warm">
            Direct connection
          </p>
          <p className="mt-5 text-2xl font-semibold leading-tight text-ink dark:text-paper">
            Building the Infrastructure of Trust: Ready for the next 2M users.
            For product roles, advisory conversations, and collaborations where
            Identity strategy, KYC friction, and conversion quality matter.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              {
                label: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                icon: Mail
              },
              {
                label: "LinkedIn",
                href: personalInfo.linkedinUrl,
                icon: Linkedin
              },
              {
                label: "GitHub",
                href: personalInfo.githubUrl,
                icon: Github
              }
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring group flex items-center justify-between gap-4 rounded-md border border-ink/10 bg-paper/65 px-4 py-4 text-sm font-semibold text-ink transition hover:border-ink/25 hover:bg-white dark:border-paper/10 dark:bg-ink/50 dark:text-paper dark:hover:border-paper/25 dark:hover:bg-paper/10"
              >
                <span className="inline-flex items-center gap-3">
                  <Icon className="h-4 w-4 text-accent-bronze dark:text-paper-warm" aria-hidden />
                  {label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-paper/55" />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
