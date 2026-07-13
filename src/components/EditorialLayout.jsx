export default function EditorialLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">{children}</div>
    </div>
  )
}
