import { IconBox } from '@/components/common/IconBox'
import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { portfolio } from '@/data/portfolio'
import { staggerDelay } from '@/lib/motion'

export function Services() {
  return (
    <Section id="services" aria-labelledby="services-heading">
      <Reveal>
        <SectionHeading id="services-heading" eyebrow="What I'm Doing" title="Services I bring to the table" />
      </Reveal>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {portfolio.services.map((service, index) => (
          <Reveal
            key={service.title}
            as="li"
            delay={staggerDelay(index, 0.08)}
            className="group h-full rounded-2xl border border-border bg-surface-secondary p-6 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-card-hover"
          >
            <IconBox icon={service.icon} size="lg" className="transition-colors duration-300 group-hover:border-accent" />
            <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
