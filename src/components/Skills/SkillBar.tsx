import { motion, useReducedMotion } from 'framer-motion'

import { viewportOnce } from '@/lib/motion'
import type { SkillItem } from '@/types/portfolio'

interface SkillBarProps {
  skill: SkillItem
  delay: number
}

export function SkillBar({ skill, delay }: SkillBarProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-faint">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface-secondary">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-hover"
          initial={prefersReducedMotion ? { width: `${skill.level}%` } : { width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}
