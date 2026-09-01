import type { MouseEvent } from 'react'

import { ThemeToggle } from '@/components/common/ThemeToggle'
import { cn } from '@/lib/cn'
import { useActiveSection } from '@/hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function Nav() {
  const activeId = useActiveSection(SECTION_IDS)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-4 bottom-4 z-30 flex items-center gap-2 rounded-2xl border border-border bg-surface/95 p-2 shadow-card backdrop-blur-sm sm:inset-x-6 lg:sticky lg:inset-x-auto lg:top-6 lg:bottom-auto"
    >
      <div className="min-w-0 flex-1 overflow-x-auto">
        <ul className="flex min-w-max items-center gap-1 sm:min-w-full sm:justify-between">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id} className="flex-1">
                <a
                  href={`#${item.id}`}
                  onClick={(event) => handleClick(event, item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'block whitespace-nowrap rounded-xl px-3.5 py-2 text-center text-sm font-medium transition-colors duration-200',
                    isActive ? 'bg-surface-secondary text-accent' : 'text-muted hover:text-foreground',
                  )}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="h-6 w-px shrink-0 bg-border" aria-hidden="true" />

      <ThemeToggle />
    </nav>
  )
}
