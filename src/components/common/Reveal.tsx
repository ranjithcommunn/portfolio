import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

import { fadeInUp, viewportOnce } from '@/lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variants?: Variants
  as?: 'div' | 'li'
}

export function Reveal({ children, className, delay = 0, variants = fadeInUp, as = 'div' }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  const MotionTag = as === 'li' ? motion.li : motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      custom={delay}
    >
      {children}
    </MotionTag>
  )
}
