function ImagePlaceholder({ featured, image, name }) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={
          featured
            ? 'aspect-[16/9] w-full bg-zinc-200 object-cover'
            : 'h-24 w-24 shrink-0 bg-zinc-200 object-cover md:h-32 md:w-32'
        }
      />
    )
  }

  return (
    <div
      className={
        featured
          ? 'flex aspect-[16/9] min-h-[200px] w-full items-center justify-center bg-zinc-200 md:min-h-[280px]'
          : 'flex h-24 w-24 shrink-0 items-center justify-center bg-zinc-200 md:h-32 md:w-32'
      }
      aria-label={`${name} image placeholder`}
    />
  )
}

function ProjectLinks({ github, liveUrl }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
      {github ? (
        <a href={github} className="hover:underline">
          GitHub
        </a>
      ) : null}
      {liveUrl ? (
        <a href={liveUrl} className="hover:underline">
          Live demo
        </a>
      ) : null}
    </div>
  )
}

function formatIndex(index) {
  return String(index).padStart(2, '0')
}

export default function ProjectItem({
  name,
  dates,
  techStack,
  summary,
  github,
  liveUrl,
  image,
  featured,
  index,
}) {
  const indexLabel = formatIndex(index)

  if (featured) {
    return (
      <article className="py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <ImagePlaceholder featured image={image} name={name} />
          <div className="flex flex-col justify-center">
            <p className="text-5xl font-bold tracking-tight text-neutral-200 md:text-6xl">
              {indexLabel}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-neutral-950 md:text-3xl">
              {name}
            </h3>
            {dates ? (
              <p className="mt-1 text-sm text-neutral-600">{dates}</p>
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
    <article className="py-8">
      <div className="flex gap-6">
        <ImagePlaceholder featured={false} image={image} name={name} />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-medium text-neutral-300">
              {indexLabel}
            </span>
            <h3 className="text-base font-medium text-neutral-950">{name}</h3>
          </div>
          {dates ? (
            <p className="mt-1 text-xs text-neutral-600">{dates}</p>
          ) : null}
          <p className="mt-2 text-xs uppercase tracking-editorial text-neutral-500">
            {techStack.join(' · ')}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            {summary}
          </p>
          <ProjectLinks github={github} liveUrl={liveUrl} />
        </div>
      </div>
    </article>
  )
}
