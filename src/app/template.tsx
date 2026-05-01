"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, motionDuration, motionEase } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : "hidden"}
      animate="visible"
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(6px)" }}
      variants={fadeInUp}
      transition={reduceMotion ? { duration: 0 } : { duration: motionDuration.page, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}
