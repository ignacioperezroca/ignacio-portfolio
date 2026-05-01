"use client";

import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn, fadeInUp, motionDuration, motionEase, scaleIn, softReveal } from "@/lib/motion";

type FadeInProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeIn" | "fadeInUp" | "softReveal" | "scaleIn";
};

const variants = {
  fadeIn,
  fadeInUp,
  scaleIn,
  softReveal
} as const;

export function FadeIn({
  children,
  className,
  delay = 0,
  variant = "fadeInUp",
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const chosen = variants[variant];

  return (
    <motion.div
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      variants={{
        hidden: reduceMotion ? { opacity: 0 } : chosen.hidden,
        visible: chosen.visible
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        reduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: motionDuration.section, ease: motionEase, delay }
      }
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
