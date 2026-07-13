export default function EditorialLink({ href, label, className = '' }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm text-neutral-950 no-underline hover:no-underline ${className}`}
    >
      <span className="border-b border-transparent pb-px transition-colors duration-300 group-hover:border-neutral-950">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="text-neutral-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-neutral-950"
      >
        →
      </span>
    </a>
  )
}
