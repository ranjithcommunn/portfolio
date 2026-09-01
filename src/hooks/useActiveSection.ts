import { useEffect, useRef, useState } from 'react'

/**
 * Tracks which of the given section ids is currently "active" (i.e. the
 * topmost section crossing a line near the top of the viewport). Sections
 * are compared in the order they were given, so the first id in DOM order
 * that is currently intersecting wins — avoiding flicker when two sections
 * are briefly visible at once.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? '')
  const intersecting = useRef(new Map<string, boolean>())
  const idsKey = ids.join('|')

  useEffect(() => {
    const sectionIds = idsKey.split('|').filter(Boolean)
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.current.set(entry.target.id, entry.isIntersecting)
        }
        const firstVisible = sectionIds.find((id) => intersecting.current.get(id))
        if (firstVisible) setActiveId(firstVisible)
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [idsKey])

  return activeId
}
