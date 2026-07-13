export default function SectionHeader({ label }) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="text-xs font-medium uppercase tracking-editorial text-neutral-950">
        {label}
      </p>
      <div className="mt-4 max-w-xs hairline-t" />
    </div>
  )
}
