import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  id?: string
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ id, eyebrow, title, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">{eyebrow}</p>
      <h2
        id={id}
        className={cn(
          'relative mt-3 inline-block pb-3 text-2xl font-bold text-foreground sm:text-3xl',
        )}
      >
        {title}
        <span
          aria-hidden="true"
          className={cn(
            'absolute bottom-0 h-[3px] w-10 rounded-full bg-gradient-to-r from-accent to-accent-hover',
            align === 'center' && 'left-1/2 -translate-x-1/2',
            align === 'left' && 'left-0',
          )}
        />
      </h2>
    </div>
  )
}
