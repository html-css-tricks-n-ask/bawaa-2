import { Variants } from "framer-motion";

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const BLUR_REVEAL: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
  show: { 
    opacity: 1, 
    filter: "blur(0px)", 
    scale: 1, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
};

export const SLIDE_IN_RIGHT: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const SCALE_UP: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

// Extremely slow zoom for background images to make them feel "alive" without being jarring
export const SLOW_ZOOM: Variants = {
  hidden: { scale: 1 },
  show: { scale: 1.05, transition: { duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" as const } }
};
