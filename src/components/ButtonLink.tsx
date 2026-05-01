"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
  external,
  className
}: ButtonLinkProps) {
  const classes = cn(
    "focus-ring transition-premium inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold sm:w-auto",
    variant === "primary" &&
      "bg-ink text-paper hover:bg-accent-green dark:bg-paper dark:text-ink dark:hover:bg-paper-warm",
    variant === "secondary" &&
      "border border-ink/15 bg-paper/65 text-ink hover:border-ink/35 hover:bg-white dark:border-paper/15 dark:bg-paper/5 dark:text-paper dark:hover:border-paper/35",
    variant === "ghost" &&
      "text-ink hover:bg-ink/5 dark:text-paper dark:hover:bg-paper/10",
    className
  );

  if (external || download) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classes}
      >
        <span className="inline-flex items-center gap-2">
          {children}
          {external ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
        </span>
      </a>
    );
  }

  return (
    <span className="inline-flex w-full sm:w-auto">
      <Link href={href} className={classes}>
        <span className="inline-flex items-center gap-2">{children}</span>
      </Link>
    </span>
  );
}
