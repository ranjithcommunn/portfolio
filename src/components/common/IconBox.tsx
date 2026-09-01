import type { IconKey } from '@/types/portfolio'
import { ICONS } from '@/lib/icons'
import { cn } from '@/lib/cn'

interface IconBoxProps {
  icon: IconKey
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: { box: 'h-9 w-9 rounded-lg', icon: 16 },
  md: { box: 'h-11 w-11 rounded-xl', icon: 20 },
  lg: { box: 'h-14 w-14 rounded-2xl', icon: 24 },
}

export function IconBox({ icon, size = 'md', className }: IconBoxProps) {
  const Icon = ICONS[icon]
  const { box, icon: iconSize } = sizeMap[size]

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center border border-border bg-surface-secondary text-accent',
        box,
        className,
      )}
      aria-hidden="true"
    >
      <Icon size={iconSize} strokeWidth={2} />
    </span>
  )
}
