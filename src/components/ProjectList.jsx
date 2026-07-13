import SectionHeader from './SectionHeader'
import ProjectItem from './ProjectItem'

export default function ProjectList({ label, items }) {
  const featuredItems = items.filter((item) => item.featured)
  const secondaryItems = items.filter((item) => !item.featured)

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <SectionHeader label={label} />

      <div className="max-w-4xl">
        {featuredItems.map((item, index) => (
          <div
            key={item.id}
            className={`${index > 0 ? 'hairline-t pt-12 md:pt-16' : ''} ${
              index < featuredItems.length - 1 || secondaryItems.length > 0
                ? 'pb-12 md:pb-16'
                : ''
            }`}
          >
            <ProjectItem {...item} index={index + 1} />
          </div>
        ))}

        {secondaryItems.length > 0 ? (
          <>
            <div className="hairline-t pt-10 md:pt-12">
              <p className="pb-10 text-xs font-medium uppercase tracking-editorial text-neutral-500 md:pb-12">
                more
              </p>
            </div>

            {secondaryItems.map((item, index) => (
              <div
                key={item.id}
                className={`${index > 0 ? 'hairline-t pt-8 md:pt-10' : ''} ${
                  index < secondaryItems.length - 1 ? 'pb-8 md:pb-10' : ''
                }`}
              >
                <ProjectItem {...item} index={featuredItems.length + index + 1} />
              </div>
            ))}
          </>
        ) : null}
      </div>
    </section>
  )
}
