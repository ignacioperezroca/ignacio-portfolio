"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/siteCopy";
import { motionDuration, motionEase } from "@/lib/motion";
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
      className="focus-ring motion-surface transition-premium inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-paper/70 text-ink shadow-line backdrop-blur hover:border-ink/25 dark:border-paper/15 dark:bg-ink/70 dark:text-paper dark:hover:border-paper/35"
      aria-label={isDark ? copy.ui.switchToLight : copy.ui.switchToDark}
      title={isDark ? copy.ui.switchToLight : copy.ui.switchToDark}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -40, scale: 0.72 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.72 }}
          transition={{ duration: motionDuration.hover, ease: motionEase }}
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
              "focus-ring transition-premium rounded-[6px] px-2.5 py-1.5 text-xs font-bold",
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
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const isHome = pathname === "/";

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

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sectionIds = navItems
      .map((item) => item.href)
      .filter((href): href is `#${string}` => href.startsWith("#"))
      .map((href) => href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry) {
          setActiveSection(activeEntry.target.id);
        }
      },
      {
        rootMargin: "-32% 0px -50% 0px",
        threshold: [0, 0.2, 0.4, 0.6]
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [isHome]);

  const hrefFor = (href: string) => {
    if (href.startsWith("/")) {
      return href;
    }

    return isHome ? href : `/${href}`;
  };

  const navLabelFor = (href: string, fallback: string) => {
    const labels: Record<string, string> = {
      "#impact": copy.nav.impact,
      "#work": copy.nav.work,
      "#timeline": copy.nav.timeline,
      "#expertise": copy.nav.expertise,
      "#writing": copy.nav.writing,
      "#about": copy.nav.about,
      "#contact": copy.nav.contact
    };

    return labels[href] ?? fallback;
  };

  const isActiveLink = (href: string) => isHome && href.startsWith("#") && activeSection === href.slice(1);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-0.5 origin-left bg-accent-blue"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={cn(
          "sticky top-0 z-40 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
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
            <span className="motion-surface transition-premium hover-stable grid h-9 w-9 place-items-center rounded-md border border-ink/12 bg-ink text-xs font-bold text-paper group-hover:bg-accent-green dark:border-paper/15 dark:bg-paper dark:text-ink">
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
                aria-current={isActiveLink(item.href) ? "location" : undefined}
                className={cn(
                  "focus-ring transition-premium group relative rounded-md px-3 py-2 text-sm font-medium",
                  isActiveLink(item.href)
                    ? "bg-ink/5 text-ink dark:bg-paper/10 dark:text-paper"
                    : "text-ink-muted hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                )}
              >
                {navLabelFor(item.href, item.label)}
                <span
                  className={cn(
                    "absolute inset-x-3 bottom-1 h-px bg-accent-green transition-premium dark:bg-paper-warm",
                    isActiveLink(item.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 md:flex">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring motion-surface transition-premium inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring motion-surface transition-premium inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="focus-ring motion-surface transition-premium inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted hover:bg-ink/5 hover:text-ink dark:text-paper/65 dark:hover:bg-paper/10 dark:hover:text-paper"
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
              className="focus-ring motion-surface transition-premium inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 bg-paper/70 text-ink shadow-line backdrop-blur hover:border-ink/25 dark:border-paper/15 dark:bg-ink/70 dark:text-paper dark:hover:border-paper/35 lg:hidden"
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
            transition={{ duration: motionDuration.card, ease: motionEase }}
            className="fixed inset-x-0 top-16 z-30 origin-top border-b border-ink/10 bg-paper px-5 pb-6 pt-4 shadow-lift backdrop-blur-xl lg:hidden dark:border-paper/10 dark:bg-ink"
          >
            <div className="grid gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: motionDuration.hover, delay: 0.04 + index * 0.025, ease: motionEase }}
                >
                  <Link
                    href={hrefFor(item.href)}
                    className={cn(
                      "focus-ring motion-surface transition-premium block rounded-md border px-4 py-3 text-sm font-semibold",
                      isActiveLink(item.href)
                        ? "border-ink/25 bg-ink/5 text-ink dark:border-paper/25 dark:bg-paper/10 dark:text-paper"
                        : "border-ink/10 text-ink hover:bg-ink/5 dark:border-paper/10 dark:text-paper dark:hover:bg-paper/10"
                    )}
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
                transition={{ duration: motionDuration.hover, delay: 0.13 + index * 0.03, ease: motionEase }}
                className="focus-ring motion-surface transition-premium inline-flex items-center justify-center gap-2 rounded-md border border-ink/10 px-3 py-3 text-sm font-semibold text-ink hover:bg-ink/5 dark:border-paper/10 dark:text-paper dark:hover:bg-paper/10"
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
