import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const motionEase = ease;

export const motionDuration = {
  section: 0.58,
  card: 0.44,
  page: 0.42,
  hover: 0.2
} as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.985 },
  visible: { opacity: 1, scale: 1 }
};

export const softReveal: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: motionDuration.card,
      ease
    }
  }
};
