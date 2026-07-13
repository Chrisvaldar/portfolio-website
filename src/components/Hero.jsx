import { motion as Motion } from 'framer-motion'
import { identity } from '../data/portfolio'
import {
  flyIn,
  pageTransition,
  staggerContainer,
  useFlyInTransition,
  useMotionEnabled,
} from '../motion/presets'

function ContactLink({ href, label }) {
  if (!href) return null

  return (
    <a href={href} className="block text-sm hover:underline">
      {label}
    </a>
  )
}

export default function Hero() {
  const transition = useFlyInTransition()
  const motionEnabled = useMotionEnabled()
  const nameParts = identity.name.toLowerCase().split(' ')
  const firstName = nameParts[0]
  const restOfName = nameParts.slice(1).join(' ')

  return (
    <Motion.section
      className="relative flex min-h-[calc(100dvh-5rem)] flex-col justify-center py-16 md:py-24"
      variants={motionEnabled ? pageTransition : undefined}
      initial={motionEnabled ? 'hidden' : false}
      animate={motionEnabled ? 'visible' : false}
      exit={motionEnabled ? 'exit' : undefined}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[35%] hidden w-px bg-neutral-300 md:block"
      />
      <Motion.div
        variants={motionEnabled ? staggerContainer : undefined}
        initial={motionEnabled ? 'hidden' : false}
        animate={motionEnabled ? 'visible' : false}
      >
        <Motion.h1
          className="text-5xl font-bold tracking-tight text-neutral-950 md:text-7xl"
          variants={motionEnabled ? flyIn : undefined}
          transition={transition}
        >
          {firstName}
          <br />
          {restOfName}.
        </Motion.h1>

        <Motion.div
          className="mt-12 hairline-t md:mt-16"
          variants={motionEnabled ? flyIn : undefined}
          transition={transition}
        />

        <Motion.div
          className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-20"
          variants={motionEnabled ? staggerContainer : undefined}
        >
          <Motion.div className="space-y-6" variants={motionEnabled ? flyIn : undefined} transition={transition}>
            <p className="max-w-md text-base leading-relaxed text-neutral-950 md:text-lg">
              {identity.tagline.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
            <p className="text-xs uppercase tracking-editorial text-neutral-600">
              {identity.skills.join(' · ')}
            </p>
          </Motion.div>

          <Motion.div
            className="space-y-3 md:text-right"
            variants={motionEnabled ? flyIn : undefined}
            transition={transition}
          >
            <p className="text-xs font-medium uppercase tracking-editorial text-neutral-950">
              contact
            </p>
            <ContactLink href={`mailto:${identity.email}`} label={identity.email} />
            <ContactLink
              href={identity.github}
              label={identity.github.replace('https://', '')}
            />
            {identity.linkedin ? (
              <ContactLink href={identity.linkedin} label="LinkedIn" />
            ) : null}
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </Motion.section>
  )
}
