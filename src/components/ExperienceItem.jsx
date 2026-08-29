import EditorialLink from './EditorialLink'

function ExperienceImages({ image, secondaryImage, org, imageAlt, secondaryImageAlt }) {
  if (image && secondaryImage) {
    return (
      <div className="flex w-36 shrink-0 flex-col gap-2 md:w-44 md:gap-3">
        <img
          src={image}
          alt={imageAlt || org}
          className="w-full border border-neutral-300 object-contain"
        />
        <img
          src={secondaryImage}
          alt={secondaryImageAlt || `${org} partners`}
          className="w-full border border-neutral-300 object-contain"
        />
      </div>
    )
  }

  if (image) {
    return (
      <div className="flex w-32 shrink-0 md:w-44">
        <img
          src={image}
          alt={org}
          className="max-h-44 w-full border border-neutral-300 object-contain md:max-h-52"
        />
      </div>
    )
  }

  return null
}

export default function ExperienceItem({
  role,
  org,
  location,
  dates,
  bullets,
  github,
  image,
  secondaryImage,
  imageAlt,
  secondaryImageAlt,
}) {
  const meta = (
    <>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-neutral-950">{role}</h3>
        <p className="text-sm text-neutral-700">{org}</p>
        <p className="text-sm text-neutral-600">
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
        <EditorialLink
          href={github}
          label="GitHub"
          className="mt-4 inline-flex"
        />
      ) : null}
    </>
  )

  if (image) {
    return (
      <article>
        <div className="flex items-center gap-8 md:gap-10">
          <ExperienceImages
            image={image}
            secondaryImage={secondaryImage}
            org={org}
            imageAlt={imageAlt}
            secondaryImageAlt={secondaryImageAlt}
          />
          <div className="min-w-0 flex-1">{meta}</div>
        </div>
      </article>
    )
  }

  return <article>{meta}</article>
}
