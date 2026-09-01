import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { portfolio } from '@/data/portfolio'
import { staggerDelay } from '@/lib/motion'

export function About() {
  const { about } = portfolio

  return (
    <Section id="about" aria-labelledby="about-heading">
      <Reveal>
        <SectionHeading id="about-heading" eyebrow={about.eyebrow} title={about.title} />
      </Reveal>

      <div className="mt-8 space-y-5">
        {about.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph.slice(0, 24)} delay={staggerDelay(index, 0.06)}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {about.stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={staggerDelay(index, 0.06)}
            className="flex flex-col-reverse rounded-2xl border border-border bg-surface-secondary p-5 text-center shadow-card sm:text-left"
          >
            <dt className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</dt>
            <dd className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
