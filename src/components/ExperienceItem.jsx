export default function ExperienceItem({ role, org, location, dates, bullets, github }) {
  return (
    <article className="py-10 first:pt-0 md:py-12">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-neutral-950">{role}</h3>
          <p className="text-sm text-neutral-700">{org}</p>
        </div>
        <p className="text-sm text-neutral-600 sm:text-right">
          {dates}
          {location ? ` · ${location}` : ''}
        </p>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="text-sm leading-relaxed text-neutral-800">
            {bullet}
          </li>
        ))}
      </ul>

      {github ? (
        <a
          href={github}
          className="mt-4 inline-block text-sm text-neutral-950 hover:underline"
        >
          GitHub
        </a>
      ) : null}
    </article>
  )
}
