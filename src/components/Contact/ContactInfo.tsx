import { IconBox } from '@/components/common/IconBox'
import { Reveal } from '@/components/common/Reveal'
import { portfolio } from '@/data/portfolio'
import { staggerDelay } from '@/lib/motion'

export function ContactInfo() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {portfolio.contactDetails.map((detail, index) => (
        <Reveal
          as="li"
          key={detail.label}
          delay={staggerDelay(index, 0.08)}
          className="flex items-center gap-3 rounded-2xl border border-border bg-surface-secondary p-5 shadow-card"
        >
          <IconBox icon={detail.icon} />
          <div className="min-w-0">
            <p className="text-xs text-faint">{detail.label}</p>
            {detail.href ? (
              <a
                href={detail.href}
                className="block truncate text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {detail.value}
              </a>
            ) : (
              <p className="truncate text-sm font-medium text-foreground">{detail.value}</p>
            )}
          </div>
        </Reveal>
      ))}
    </ul>
  )
}
