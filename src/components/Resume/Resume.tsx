import { Badge } from '@/components/common/Badge'
import { IconBox } from '@/components/common/IconBox'
import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Timeline } from '@/components/Resume/Timeline'
import { portfolio } from '@/data/portfolio'
import { staggerDelay } from '@/lib/motion'

export function Resume() {
  const { experience, education, certifications } = portfolio

  return (
    <Section id="resume" aria-labelledby="resume-heading">
      <Reveal>
        <SectionHeading id="resume-heading" eyebrow="Resume" title="A summary of my experience" />
      </Reveal>

      <div className="mt-10">
        <Reveal className="mb-6 flex items-center gap-3">
          <IconBox icon="briefcase" size="sm" />
          <h3 className="text-lg font-semibold text-foreground">Experience</h3>
        </Reveal>

        <Timeline
          entries={experience.map((item) => ({
            title: item.role,
            subtitle: item.company,
            duration: item.duration,
            location: item.location,
            description: item.description,
            technologies: item.technologies,
          }))}
        />
      </div>

      <div className="mt-16">
        <Reveal className="mb-6 flex items-center gap-3">
          <IconBox icon="graduation-cap" size="sm" />
          <h3 className="text-lg font-semibold text-foreground">Education</h3>
        </Reveal>

        <Timeline
          entries={education.map((item) => ({
            title: item.degree,
            subtitle: item.institution,
            duration: item.duration,
            location: item.location,
            description: item.description,
          }))}
        />
      </div>

      {certifications.length > 0 && (
        <div className="mt-16">
          <Reveal className="mb-6 flex items-center gap-3">
            <IconBox icon="layers" size="sm" />
            <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
          </Reveal>

          <ul className="flex flex-wrap gap-2">
            {certifications.map((certification, index) => (
              <Reveal as="li" key={certification} delay={staggerDelay(index, 0.05)}>
                <Badge>{certification}</Badge>
              </Reveal>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}
