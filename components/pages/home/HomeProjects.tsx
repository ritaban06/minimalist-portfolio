import { LogoEduDrive } from '@/components/logos/projects/LogoEduDrive'
import { LogoRoadEyeAI } from '@/components/logos/projects/LogoRoadEyeAI'
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
    name: 'NeuroCord',
    description:
      'Discord slash-command AI bot using Express and Groq, built for low-cost deployment on Render with deferred interaction handling and secure request verification.',
    status: 'active',
    // link: links.projects.fixinprod,
    github: links.projects.github.neurocord,
    icon: undefined,
  },
  {
    name: 'EduDrive',
    description: 'An one-stop digital platform built for exam preparation.',
    status: 'active',
    icon: <LogoEduDrive className="some-class" />,
    link: links.projects.edudrive,
    github: links.projects.github.edudrive,
  },
  {
    name: 'RoadEye.AI',
    description: 'Smart Traffic Management & Accident Prevention System',
    status: 'active',
    icon: <LogoRoadEyeAI className="some-class" />,
    link: links.projects.roadeye,
    github: links.projects.github.roadeye,
  },
  {
    name: 'DrawMe',
    description:
      'DSA Learning System with spaced repetition, pattern recognition, and graph-based topic navigation.',
    status: 'development',
    icon: undefined,
    link: undefined,
    github: undefined,
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
