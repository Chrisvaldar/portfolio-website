import { motion as Motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import ProjectItem from './ProjectItem'
import {
  flyIn,
  pageTransition,
  staggerContainer,
  useFlyInTransition,
  useMotionEnabled,
} from '../motion/presets'

export default function ProjectList({ label, items }) {
  const transition = useFlyInTransition()
  const motionEnabled = useMotionEnabled()
  const featuredItems = items.filter((item) => item.featured)
  const secondaryItems = items.filter((item) => !item.featured)

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
        className="max-w-4xl"
        variants={motionEnabled ? staggerContainer : undefined}
        initial={motionEnabled ? 'hidden' : false}
        animate={motionEnabled ? 'visible' : false}
      >
        {featuredItems.map((item, index) => (
          <Motion.div
            key={item.id}
            className={`${index > 0 ? 'hairline-t pt-12 md:pt-16' : ''} ${
              index < featuredItems.length - 1 || secondaryItems.length > 0
                ? 'pb-12 md:pb-16'
                : ''
            }`}
            variants={motionEnabled ? flyIn : undefined}
            transition={transition}
          >
            <ProjectItem {...item} index={index + 1} />
          </Motion.div>
        ))}

        {secondaryItems.length > 0 ? (
          <>
            <Motion.div
              className="hairline-t pt-10 md:pt-12"
              variants={motionEnabled ? flyIn : undefined}
              transition={transition}
            >
              <p className="pb-12 text-xs font-medium uppercase tracking-editorial text-neutral-500 md:pb-14">
                more
              </p>
            </Motion.div>

            {secondaryItems.map((item, index) => (
              <Motion.div
                key={item.id}
                className={`${index > 0 ? 'hairline-t pt-10 md:pt-12' : ''} ${
                  index < secondaryItems.length - 1 ? 'pb-10 md:pb-12' : ''
                }`}
                variants={motionEnabled ? flyIn : undefined}
                transition={transition}
              >
                <ProjectItem {...item} index={featuredItems.length + index + 1} />
              </Motion.div>
            ))}
          </>
        ) : null}
      </Motion.div>
    </Motion.section>
  )
}
