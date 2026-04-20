import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink py-10 text-paper dark:border-paper/10">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-paper text-xs font-bold text-ink">
                IP
              </span>
              <span className="text-sm font-semibold">{personalInfo.displayName}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-paper/58">
              Product strategy for fintech, crypto, identity, onboarding,
              authentication, and growth products where user trust is part of the system.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:text-right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
                Navigate
              </p>
              <div className="mt-3 flex flex-wrap gap-3 md:justify-end">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${item.href}`}
                    className="focus-ring rounded-md text-sm text-paper/65 transition hover:text-paper"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
                Connect
              </p>
              <div className="mt-3 flex gap-2 md:justify-end">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-paper/10 text-paper/65 transition hover:border-paper/35 hover:text-paper"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-paper/10 text-paper/65 transition hover:border-paper/35 hover:text-paper"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-paper/10 text-paper/65 transition hover:border-paper/35 hover:text-paper"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-paper/10 pt-5 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 {personalInfo.displayName}. All rights reserved.</p>
          <p>Built for high-signal product conversations.</p>
        </div>
      </div>
    </footer>
  );
}
