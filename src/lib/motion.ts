import type { Variants } from 'framer-motion'

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_PREMIUM, delay },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_PREMIUM, delay },
  }),
}

export const viewportOnce = { once: true, margin: '-80px 0px -80px 0px' } as const

/** Small per-item delay for staggered card grids, capped so long lists don't lag. */
export const staggerDelay = (index: number, step = 0.08, max = 0.4) => Math.min(index * step, max)
