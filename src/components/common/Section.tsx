import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  'aria-labelledby'?: string
}

export function Section({ id, children, className, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 rounded-3xl border border-border bg-surface p-6 shadow-card sm:p-8 lg:p-10',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  )
}
