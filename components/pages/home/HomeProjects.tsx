import { LogoKavalerka } from '@/components/logos/projects/LogoKavalerka'
import { LogoProjectExtReviewBot } from '@/components/logos/projects/LogoProjectExtReviewBot'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'
import type { ProjectStatusType } from '@/types/ProjectStatusType'

interface Project {
  name: string
  description: string
  status: ProjectStatusType
  icon: React.ReactNode
  link?: string
  github?: string
}

const projects: Array<Project> = [
  {
    name: 'ExtReviewBot',
    description: 'IRL Bug Fixer.',
    status: 'development',
    icon: <LogoProjectExtReviewBot className="-ml-0.5" />,
    link: links.projects.extreviewbot,
    github: links.projects.github.extreviewbot,
  },
  {
    name: 'EduDrive',
    description: 'An one-stop digital platform built for exam preparation.',
    status: 'development',
    icon: <LogoKavalerka />,
    link: links.projects.edudrive,
    github: links.projects.github.edudrive,
  },
]

export function HomeProjects() {
  return (
    <section className="@container/projects">
      <SectionHeader
        heading="Personal Projects"
        text="These are my personal projects, both past and ongoing:"
      />

      <ul className="grid gap-3 @lg/projects:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
