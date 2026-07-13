import { motion as Motion } from 'framer-motion'
import { flyIn, useFlyInTransition, useMotionEnabled } from '../motion/presets'

export default function SectionHeader({ label }) {
  const transition = useFlyInTransition()
  const motionEnabled = useMotionEnabled()

  return (
    <Motion.div
      className="mb-10 md:mb-12"
      variants={motionEnabled ? flyIn : undefined}
      initial={motionEnabled ? 'hidden' : false}
      animate={motionEnabled ? 'visible' : false}
      transition={transition}
    >
      <p className="text-xs font-medium uppercase tracking-editorial text-neutral-950">
        {label}
      </p>
      <div className="mt-4 max-w-xs hairline-t" />
    </Motion.div>
  )
}
