import EditorialLink from './EditorialLink'

function BorderedImage({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`border border-neutral-300 object-contain ${className}`}
    />
  )
}

function ProjectImages({ featured, image, secondaryImage, name }) {
  if (image && secondaryImage) {
    if (featured) {
      return (
        <div className="flex w-full flex-col gap-3 md:gap-4">
          <BorderedImage
            src={image}
            alt={name}
            className="max-h-[180px] w-full md:max-h-[220px]"
          />
          <BorderedImage
            src={secondaryImage}
            alt={`${name} demo`}
            className="max-h-[280px] w-full md:max-h-[360px]"
          />
        </div>
      )
    }

    return (
      <div className="flex w-36 shrink-0 flex-col gap-2 md:w-48 md:gap-3">
        <BorderedImage src={image} alt={name} className="w-full" />
        <BorderedImage
          src={secondaryImage}
          alt={`${name} demo`}
          className="w-full"
        />
      </div>
    )
  }

  if (image) {
    if (featured) {
      return (
        <div className="flex w-full items-center justify-center md:min-h-[280px]">
          <BorderedImage
            src={image}
            alt={name}
            className="max-h-[320px] w-full md:max-h-[420px]"
          />
        </div>
      )
    }

    return (
      <div className="flex w-32 shrink-0 md:w-44">
        <BorderedImage
          src={image}
          alt={name}
          className="max-h-44 w-full md:max-h-52"
        />
      </div>
    )
  }

  return (
    <div
      className={
        featured
          ? 'aspect-[16/9] min-h-[200px] w-full border border-neutral-300 md:min-h-[280px]'
          : 'h-32 w-32 shrink-0 border border-neutral-300 md:h-44 md:w-44'
      }
      aria-label={`${name} image placeholder`}
    />
  )
}

function ProjectLinks({ github, liveUrl }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
      {github ? <EditorialLink href={github} label="GitHub" /> : null}
      {liveUrl ? <EditorialLink href={liveUrl} label="Live demo" /> : null}
    </div>
  )
}

function formatIndex(index) {
  return String(index).padStart(2, '0')
}

export default function ProjectItem({
  name,
  hackathonName,
  techStack,
  summary,
  github,
  liveUrl,
  image,
  secondaryImage,
  featured,
  index,
}) {
  const indexLabel = formatIndex(index)

  if (featured) {
    return (
      <article>
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <ProjectImages
            featured
            image={image}
            secondaryImage={secondaryImage}
            name={name}
          />
          <div className="flex flex-col justify-center">
            <p className="text-5xl font-bold tracking-tight text-neutral-200 md:text-6xl">
              {indexLabel}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-neutral-950 md:text-3xl">
              {name}
            </h3>
            {hackathonName ? (
              <p className="mt-1 text-sm text-neutral-600">{hackathonName}</p>
            ) : null}
            <p className="mt-3 text-xs uppercase tracking-editorial text-neutral-600">
              {techStack.join(' · ')}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-800 md:text-base">
              {summary}
            </p>
            <ProjectLinks github={github} liveUrl={liveUrl} />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article>
      <div
        className={`flex gap-8 md:gap-10 ${
          secondaryImage ? 'items-start' : 'items-center'
        }`}
      >
        <ProjectImages
          featured={false}
          image={image}
          secondaryImage={secondaryImage}
          name={name}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <span className="text-base font-medium text-neutral-300">
              {indexLabel}
            </span>
            <h3 className="text-lg font-medium text-neutral-950 md:text-xl">
              {name}
            </h3>
          </div>
          {hackathonName ? (
            <p className="mt-1.5 text-sm text-neutral-600">{hackathonName}</p>
          ) : null}
          <p className="mt-2.5 text-xs uppercase tracking-editorial text-neutral-500">
            {techStack.join(' · ')}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
            {summary}
          </p>
          <ProjectLinks github={github} liveUrl={liveUrl} />
        </div>
      </div>
    </article>
  )
}
