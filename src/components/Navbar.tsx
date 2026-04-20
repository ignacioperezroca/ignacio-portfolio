"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, personalInfo } from "@/data/portfolio";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    queueMicrotask(() => setIsDark(shouldUseDark));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-paper/70 text-ink shadow-line backdrop-blur transition hover:border-ink/25 dark:border-paper/15 dark:bg-ink/70 dark:text-paper dark:hover:border-paper/35"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const hrefFor = (href: string) => (isHome ? href : `/${href}`);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-0.5 origin-left bg-accent-blue"
        style={{ scaleX: scrollYProgress }}
      />
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/82 backdrop-blur-xl dark:border-paper/10 dark:bg-ink/82">
        <nav
          className="section-shell flex h-16 items-center justify-between gap-4"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="focus-ring group inline-flex items-center gap-3 rounded-md"
            aria-label="Go to homepage"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md border border-ink/12 bg-ink text-xs font-bold text-paper transition group-hover:bg-accent-green dark:border-paper/15 dark:bg-paper dark:text-ink">
              IP
            </span>
            <span className="hidden text-sm font-semibold text-ink dark:text-paper sm:block">
              {personalInfo.displayName}
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={hrefFor(item.href)}
                className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 md:flex">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label="Email"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <ThemeToggle />
            <button
              type="button"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-paper/70 text-ink shadow-line backdrop-blur transition hover:border-ink/25 dark:border-paper/15 dark:bg-ink/70 dark:text-paper dark:hover:border-paper/35 lg:hidden"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {open ? (
        <div className="fixed inset-x-0 top-16 z-30 origin-top border-b border-ink/10 bg-paper/96 px-5 pb-6 pt-4 shadow-lift backdrop-blur-xl transition lg:hidden dark:border-paper/10 dark:bg-ink/96">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={hrefFor(item.href)}
                className="focus-ring rounded-md border border-ink/10 px-4 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5 dark:border-paper/10 dark:text-paper dark:hover:bg-paper/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { label: "LinkedIn", href: personalInfo.linkedinUrl, Icon: Linkedin },
              { label: "GitHub", href: personalInfo.githubUrl, Icon: Github },
              { label: "Email", href: `mailto:${personalInfo.email}`, Icon: Mail }
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-ink/10 px-3 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5 dark:border-paper/10 dark:text-paper dark:hover:bg-paper/10"
                onClick={() => setOpen(false)}
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
