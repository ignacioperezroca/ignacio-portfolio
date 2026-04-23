"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/siteCopy";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { copy } = useLanguage();
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
      className="focus-ring motion-surface inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-paper/70 text-ink shadow-line backdrop-blur transition hover:border-ink/25 dark:border-paper/15 dark:bg-ink/70 dark:text-paper dark:hover:border-paper/35"
      aria-label={isDark ? copy.ui.switchToLight : copy.ui.switchToDark}
      title={isDark ? copy.ui.switchToLight : copy.ui.switchToDark}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -40, scale: 0.72 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.72 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function LanguageToggle() {
  const { language, setLanguage, copy } = useLanguage();
  const languages: Language[] = ["en", "es"];

  return (
    <div
      className="motion-surface inline-flex h-10 items-center rounded-md border border-ink/10 bg-paper/70 p-1 shadow-line backdrop-blur dark:border-paper/15 dark:bg-ink/70"
      aria-label={copy.ui.languageSwitch}
      role="group"
    >
      {languages.map((item) => {
        const isActive = language === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            className={cn(
              "focus-ring rounded-[6px] px-2.5 py-1.5 text-xs font-bold transition",
              isActive
                ? "bg-ink text-paper dark:bg-paper dark:text-ink"
                : "text-ink-muted hover:text-ink dark:text-paper/60 dark:hover:text-paper"
            )}
            aria-pressed={isActive}
          >
            {item === "en" ? copy.ui.languageEnglish : copy.ui.languageSpanish}
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const { copy } = useLanguage();
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const updateScrolled = () => setHasScrolled(window.scrollY > 12);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLabelFor = (href: string, fallback: string) => {
    const labels: Record<string, string> = {
      "/": copy.nav.home,
      "/about": copy.nav.about,
      "/experience": copy.nav.experience,
      "/work": copy.nav.work,
      "/expertise": copy.nav.expertise,
      "/writing": copy.nav.writing,
      "/contact": copy.nav.contact
    };

    return labels[href] ?? fallback;
  };

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-0.5 origin-left bg-accent-blue"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          hasScrolled || open
            ? "bg-paper/80 backdrop-blur-2xl dark:bg-ink/80"
            : "bg-transparent"
        )}
      >
        <nav
          className="section-shell flex h-16 items-center justify-between gap-4"
          aria-label={copy.ui.primaryNavigation}
        >
          <Link
            href="/"
            className="focus-ring group inline-flex items-center gap-3 rounded-md"
            aria-label={copy.ui.goHome}
          >
            <span className="motion-surface grid h-9 w-9 place-items-center rounded-md border border-ink/12 bg-ink text-xs font-bold text-paper transition group-hover:bg-accent-green dark:border-paper/15 dark:bg-paper dark:text-ink">
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
                href={item.href}
                className="focus-ring group relative rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {navLabelFor(item.href, item.label)}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-accent-green transition-transform duration-300 group-hover:scale-x-100 dark:bg-paper-warm" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 md:flex">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring motion-surface inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring motion-surface inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="focus-ring motion-surface inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label="Email"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              className="focus-ring motion-surface inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-paper/70 text-ink shadow-line backdrop-blur transition hover:border-ink/25 dark:border-paper/15 dark:bg-ink/70 dark:text-paper dark:hover:border-paper/35 lg:hidden"
              aria-label={open ? copy.ui.closeNavigation : copy.ui.openNavigation}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -18, scaleY: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scaleY: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, scaleY: 0.98, filter: "blur(8px)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-30 origin-top border-b border-ink/10 bg-paper px-5 pb-6 pt-4 shadow-lift backdrop-blur-xl lg:hidden dark:border-paper/10 dark:bg-ink"
          >
            <div className="grid gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.24, delay: 0.04 + index * 0.025 }}
                >
                  <Link
                    href={item.href}
                    className="focus-ring motion-surface block rounded-md border border-ink/10 px-4 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5 dark:border-paper/10 dark:text-paper dark:hover:bg-paper/10"
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {navLabelFor(item.href, item.label)}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: "LinkedIn", href: personalInfo.linkedinUrl, Icon: Linkedin },
                { label: "GitHub", href: personalInfo.githubUrl, Icon: Github },
                { label: copy.ui.email, href: `mailto:${personalInfo.email}`, Icon: Mail }
              ].map(({ label, href, Icon }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, delay: 0.13 + index * 0.03 }}
                  className="focus-ring motion-surface inline-flex items-center justify-center gap-2 rounded-md border border-ink/10 px-3 py-3 text-sm font-semibold text-ink transition hover:bg-ink/5 dark:border-paper/10 dark:text-paper dark:hover:bg-paper/10"
                  onClick={() => setOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
