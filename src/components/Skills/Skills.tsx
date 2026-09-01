import { IconBox } from '@/components/common/IconBox'
import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SkillBar } from '@/components/Skills/SkillBar'
import { portfolio } from '@/data/portfolio'
import { staggerDelay } from '@/lib/motion'
import type { IconKey, SkillItem } from '@/types/portfolio'

const CATEGORY_ORDER: SkillItem['category'][] = [
  'Frontend',
  'Backend',
  'Cloud & DevOps',
  'Mobile',
  'Tools',
]

const CATEGORY_ICON: Record<SkillItem['category'], IconKey> = {
  Frontend: 'code',
  Backend: 'server',
  'Cloud & DevOps': 'cloud',
  Mobile: 'smartphone',
  Tools: 'wrench',
}

function groupByCategory(skills: SkillItem[]) {
  return CATEGORY_ORDER.map((category) => ({
    category,
    skills: skills.filter((skill) => skill.category === category),
  })).filter((group) => group.skills.length > 0)
}

export function Skills() {
  const groups = groupByCategory(portfolio.skills)

  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <Reveal>
        <SectionHeading id="skills-heading" eyebrow="My Skills" title="Technologies I work with" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {groups.map((group, groupIndex) => (
          <Reveal key={group.category} delay={staggerDelay(groupIndex, 0.08)}>
            <div className="h-full rounded-2xl border border-border bg-surface-secondary p-6 shadow-card">
              <div className="flex items-center gap-3">
                <IconBox icon={CATEGORY_ICON[group.category]} size="sm" />
                <h3 className="text-base font-semibold text-foreground">{group.category}</h3>
              </div>

              <div className="mt-5 space-y-4">
                {group.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} delay={staggerDelay(skillIndex, 0.05, 0.3)} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
