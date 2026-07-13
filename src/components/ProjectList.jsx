import SectionHeader from './SectionHeader'
import ProjectItem from './ProjectItem'

export default function ProjectList({ label, items }) {
  const featuredItems = items.filter((item) => item.featured)
  const secondaryItems = items.filter((item) => !item.featured)

  return (
    <section className="py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-3 md:gap-16">
        <div>
          <SectionHeader label={label} />
        </div>

        <div className="md:col-span-2">
          {featuredItems.map((item, index) => (
            <div key={item.id} className={index > 0 ? 'hairline-t' : undefined}>
              <ProjectItem {...item} index={index + 1} />
            </div>
          ))}

          {secondaryItems.length > 0 ? (
            <>
              <div className="mt-8 hairline-t pt-8">
                <p className="text-xs font-medium uppercase tracking-editorial text-neutral-500">
                  more
                </p>
              </div>

              {secondaryItems.map((item, index) => (
                <div
                  key={item.id}
                  className={index > 0 ? 'hairline-t' : undefined}
                >
                  <ProjectItem
                    {...item}
                    index={featuredItems.length + index + 1}
                  />
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </section>
  )
}
