const tabs = [
  { id: 'home', label: 'home' },
  { id: 'work', label: 'work' },
  { id: 'community', label: 'community' },
  { id: 'projects', label: 'projects' },
  { id: 'hackathons', label: 'hackathons' },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav
      aria-label="Site sections"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-300 bg-white"
    >
      <div className="mx-auto flex max-w-6xl">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex-1 px-2 py-4 text-[10px] font-medium uppercase tracking-editorial transition-colors sm:px-4 sm:text-xs ${
                isActive
                  ? 'text-neutral-950 underline decoration-neutral-950 underline-offset-4'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
