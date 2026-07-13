import { motion as Motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import ExperienceItem from './ExperienceItem'
import {
  flyIn,
  pageTransition,
  staggerContainer,
  useFlyInTransition,
  useMotionEnabled,
} from '../motion/presets'

export default function ExperienceList({ label, items }) {
  const transition = useFlyInTransition()
  const motionEnabled = useMotionEnabled()

  return (
    <Motion.section
      className="pt-24 pb-16 md:pt-32 md:pb-24"
      variants={motionEnabled ? pageTransition : undefined}
      initial={motionEnabled ? 'hidden' : false}
      animate={motionEnabled ? 'visible' : false}
      exit={motionEnabled ? 'exit' : undefined}
    >
      <SectionHeader label={label} />

      <Motion.div
        className="max-w-3xl"
        variants={motionEnabled ? staggerContainer : undefined}
        initial={motionEnabled ? 'hidden' : false}
        animate={motionEnabled ? 'visible' : false}
      >
        {items.map((item, index) => (
          <Motion.div
            key={item.id}
            className={`${index > 0 ? 'hairline-t pt-10 md:pt-12' : ''} ${
              index < items.length - 1 ? 'pb-10 md:pb-12' : ''
            }`}
            variants={motionEnabled ? flyIn : undefined}
            transition={transition}
          >
            <ExperienceItem {...item} />
          </Motion.div>
        ))}
      </Motion.div>
    </Motion.section>
  )
}
