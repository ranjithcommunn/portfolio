import { ExternalLink } from 'lucide-react'

import { Badge } from '@/components/common/Badge'
import type { ProjectItem } from '@/types/portfolio'

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const link = project.live ?? project.github

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-secondary shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-card-hover">
      <div className="relative aspect-video overflow-hidden bg-surface-secondary">
        <img
          src={project.image}
          alt={`Preview of the ${project.title} project`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${project.title}`}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-background/70 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${project.title}`}>
          {project.technologies.slice(0, 3).map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
