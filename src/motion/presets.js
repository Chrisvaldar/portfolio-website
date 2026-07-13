import { useReducedMotion } from 'framer-motion'

export const flyIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
}

export const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

export function useFlyInTransition() {
  const prefersReducedMotion = useReducedMotion()

  return prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
}

export function useMotionEnabled() {
  return !useReducedMotion()
}
