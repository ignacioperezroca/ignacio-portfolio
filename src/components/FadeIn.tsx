"use client";

import type { MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeIn" | "fadeInUp" | "softReveal" | "scaleIn";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  variant = "fadeInUp"
}: FadeInProps) {
  void delay;
  void variant;
  return <div className={cn(className)}>{children}</div>;
}
