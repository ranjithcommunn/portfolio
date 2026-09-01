import { ProjectCard } from '@/components/Portfolio/ProjectCard'
import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { portfolio } from '@/data/portfolio'
import { staggerDelay } from '@/lib/motion'

export function Portfolio() {
  return (
    <Section id="portfolio" aria-labelledby="portfolio-heading">
      <Reveal>
        <SectionHeading id="portfolio-heading" eyebrow="My Portfolio" title="Selected projects I've worked on" />
      </Reveal>

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {portfolio.projects.map((project, index) => (
          <Reveal key={project.title} as="li" delay={staggerDelay(index, 0.08)} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
