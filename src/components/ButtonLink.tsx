"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });
  const rotateX = useTransform(springY, [-12, 12], [2.5, -2.5]);
  const rotateY = useTransform(springX, [-12, 12], [-2.5, 2.5]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(
    "focus-ring kinetic-link inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition duration-200 sm:w-auto",
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
      <motion.a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classes}
        style={{ x: springX, y: springY, rotateX, rotateY }}
        whileTap={{ scale: 0.985 }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <span className="inline-flex items-center gap-2">
          {children}
          {external ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
        </span>
      </motion.a>
    );
  }

  return (
    <motion.div
      className="inline-flex w-full sm:w-auto"
      style={{ x: springX, y: springY, rotateX, rotateY }}
      whileTap={{ scale: 0.985 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Link href={href} className={classes}>
        <span className="inline-flex items-center gap-2">{children}</span>
      </Link>
    </motion.div>
  );
}
