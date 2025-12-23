import { LogoKavalerka } from '@/components/logos/projects/LogoKavalerka'
import { LogoProjectExtReviewBot } from '@/components/logos/projects/LogoProjectExtReviewBot'
import { LogoSleepCalculator } from '@/components/logos/projects/LogoSleepCalculator'
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
}

const projects: Array<Project> = [
  {
    name: 'ExtReviewBot',
    description: 'Browser extension review tracking & analytics.',
    status: 'active',
    icon: <LogoProjectExtReviewBot className="-ml-0.5" />,
    link: links.projects.extreviewbot,
  },
  {
    name: 'Kavalerka.pl',
    description: 'Real estate platform for studio apartments.',
    status: 'active',
    icon: <LogoKavalerka />,
    link: links.projects.kavalerka,
  },
  {
    name: 'Sleep Calculator',
    description: 'Find out the perfect bedtime or wake up time to rise feeling energized.',
    status: 'active',
    icon: <LogoSleepCalculator className="rounded-sm" />,
    link: links.projects.sleepcalculator,
  },
  {
    name: 'InGastro.pl',
    description: 'Job board for finding hospitality jobs in Poland.',
    status: 'sold',
    icon: <div className="size-4 bg-[#FDB71C] rounded-sm p-1" />,
    link: links.projects.ingastro,
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
