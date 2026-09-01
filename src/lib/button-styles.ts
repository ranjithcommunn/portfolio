import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-foreground hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_30px_-10px_var(--color-accent)]',
  secondary:
    'border border-border bg-surface-secondary text-foreground hover:border-border-strong hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-muted hover:text-foreground hover:bg-surface-secondary',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
}

export function buttonStyles(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}
