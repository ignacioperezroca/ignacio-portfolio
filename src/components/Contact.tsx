"use client";

import { FormEvent, useMemo, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { contactIntents, personalInfo } from "@/data/portfolio";

export function Contact() {
  const [intent, setIntent] = useState(contactIntents[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`${intent} inquiry for ${personalInfo.displayName}`);
    const body = encodeURIComponent(
      [`Hi Nacho,`, "", message || "I would like to connect about...", "", name ? `- ${name}` : ""].join("\n")
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }, [intent, message, name]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <section className="py-20 sm:py-28" id="contact">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk about products where trust and growth both matter."
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

        <form
          onSubmit={handleSubmit}
          className="rounded-md border border-ink/10 bg-white/70 p-5 shadow-line dark:border-paper/10 dark:bg-paper/5 sm:p-6"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="intent" className="text-sm font-semibold text-ink dark:text-paper">
                What should we discuss?
              </label>
              <select
                id="intent"
                value={intent}
                onChange={(event) => setIntent(event.target.value)}
                className="focus-ring mt-2 h-12 w-full rounded-md border border-ink/12 bg-paper px-3 text-sm font-medium text-ink dark:border-paper/15 dark:bg-ink dark:text-paper"
              >
                {contactIntents.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="name" className="text-sm font-semibold text-ink dark:text-paper">
                Your name
              </label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="focus-ring mt-2 h-12 w-full rounded-md border border-ink/12 bg-paper px-3 text-sm font-medium text-ink placeholder:text-ink-muted/60 dark:border-paper/15 dark:bg-ink dark:text-paper dark:placeholder:text-paper/35"
                placeholder="Name and company"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold text-ink dark:text-paper">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="focus-ring mt-2 min-h-40 w-full resize-y rounded-md border border-ink/12 bg-paper px-3 py-3 text-sm font-medium leading-6 text-ink placeholder:text-ink-muted/60 dark:border-paper/15 dark:bg-ink dark:text-paper dark:placeholder:text-paper/35"
                placeholder="Share the role, product context, company stage, or collaboration idea."
              />
            </div>

            <button
              type="submit"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-accent-green dark:bg-paper dark:text-ink dark:hover:bg-paper-warm"
            >
              <Send className="h-4 w-4" aria-hidden />
              Open email draft
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
