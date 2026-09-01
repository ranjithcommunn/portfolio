import type { LucideProps } from 'lucide-react'

/**
 * Lucide no longer ships brand/logo icons, so these two are small original
 * line-art glyphs drawn to match Lucide's stroke style (not traced from any
 * official logo) for the social links Lucide doesn't cover.
 */

export function GithubGlyph({ size = 24, color = 'currentColor', ...props }: LucideProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
      <circle cx="7.5" cy="7.5" r="3.2" fill={color} />
      <circle cx="16.5" cy="7.5" r="3.2" fill={color} />
      <circle cx="12" cy="14" r="8" fill={color} />
    </svg>
  )
}

export function LinkedinGlyph({ size = 24, strokeWidth = 1.8, color = 'currentColor', ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <line x1="7.5" y1="10.2" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.7" r="0.75" fill={color} stroke="none" />
      <path d="M11.5 17v-6.8" />
      <path d="M11.5 12.7c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V17" />
    </svg>
  )
}
