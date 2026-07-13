import { identity } from '../data/portfolio'

function ContactLink({ href, label }) {
  if (!href) return null

  return (
    <a href={href} className="block text-sm hover:underline">
      {label}
    </a>
  )
}

export default function Hero() {
  const nameParts = identity.name.toLowerCase().split(' ')
  const firstName = nameParts[0]
  const restOfName = nameParts.slice(1).join(' ')

  return (
    <section className="min-h-screen py-16 md:py-24">
      <h1 className="text-5xl font-bold tracking-tight text-neutral-950 md:text-7xl">
        {firstName}
        <br />
        {restOfName}.
      </h1>

      <div className="mt-12 hairline-t md:mt-16" />

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-20">
        <div className="space-y-6">
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
        </div>

        <div className="space-y-3 md:text-right">
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
        </div>
      </div>
    </section>
  )
}
