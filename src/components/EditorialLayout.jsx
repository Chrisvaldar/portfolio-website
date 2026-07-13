export default function EditorialLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[35%] hidden w-px bg-neutral-300 md:block"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">{children}</div>
    </div>
  )
}
