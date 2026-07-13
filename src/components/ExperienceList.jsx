import SectionHeader from './SectionHeader'
import ExperienceItem from './ExperienceItem'

export default function ExperienceList({ label, items }) {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <SectionHeader label={label} />

      <div className="max-w-3xl">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={index > 0 ? 'hairline-t' : undefined}
          >
            <ExperienceItem {...item} />
          </div>
        ))}
      </div>
    </section>
  )
}
