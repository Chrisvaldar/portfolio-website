import SectionHeader from './SectionHeader'
import ExperienceItem from './ExperienceItem'

export default function ExperienceList({ label, items }) {
  return (
    <section className="py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-3 md:gap-16">
        <div>
          <SectionHeader label={label} />
        </div>

        <div className="md:col-span-2">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={index > 0 ? 'hairline-t' : undefined}
            >
              <ExperienceItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
