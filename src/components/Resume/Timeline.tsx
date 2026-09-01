import { Badge } from '@/components/common/Badge'
import { Reveal } from '@/components/common/Reveal'
import { staggerDelay } from '@/lib/motion'
import { ICONS } from '@/lib/icons'

interface TimelineEntry {
  title: string
  subtitle: string
  duration: string
  location: string
  description?: string
  technologies?: string[]
}

interface TimelineProps {
  entries: TimelineEntry[]
}

const CalendarIcon = ICONS.calendar
const MapPinIcon = ICONS['map-pin']

export function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="relative space-y-10 border-l-2 border-border pl-8">
      {entries.map((entry, index) => (
        <Reveal as="li" key={`${entry.title}-${entry.subtitle}`} delay={staggerDelay(index, 0.08)} className="relative">
          <span className="absolute -left-10 top-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />

          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
            <div>
              <h4 className="text-base font-semibold text-foreground">{entry.title}</h4>
              <p className="text-sm font-medium text-accent">{entry.subtitle}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-faint">
              <CalendarIcon size={13} aria-hidden="true" />
              {entry.duration}
            </span>
          </div>

          <p className="mt-1 flex items-center gap-1.5 text-xs text-faint">
            <MapPinIcon size={13} aria-hidden="true" />
            {entry.location}
          </p>

          {entry.description && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{entry.description}</p>
          )}

          {entry.technologies && entry.technologies.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
              {entry.technologies.map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </ol>
  )
}
