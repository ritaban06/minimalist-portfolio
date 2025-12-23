import { SectionHeader } from '@/components/SectionHeader'
import { TechBadge } from '@/components/TechBadge'
import { techStackIcons } from '@/data/techStack'

interface WorkExperience {
  company: string
  role: string
  period: string
  description: string
  link?: string
  responsibilities?: string[]
  technologies?: string[]
}

const workExperience: Array<WorkExperience> = [
  {
    company: 'NordSecurity @NordPass',
    role: 'Senior Frontend Developer',
    period: 'Jan 2024 - Present',
    description:
      'NordPass is a secure password manager that auto-fills logins and forms and lets you access it all from anywhere.',
    link: 'https://nordpass.com/',
    responsibilities: [
      'Building and maintaining NordPass',
      'Identifying key product expansion opportunities and building PoCs',
      'Collaborating with cross-functional teams',
      'Conducting technical interviews',
    ],
    technologies: ['React', 'TypeScript', 'Electron', 'Redux', 'Tailwind', 'Storybook'],
  },
  {
    company: 'NordSecurity @NordLocker',
    role: 'Senior Frontend Developer',
    period: 'Dec 2022 - Jan 2024',
    description: 'NordLocker is an end-to-end encrypted cloud storage web app.',
    link: 'https://nordlocker.com/',
    responsibilities: [
      'Developed and maintained the web application',
      'Implemented encryption features and security protocols',
      'Optimized application performance',
      'Conducting technical interviews',
      'Training interns and junior engineers',
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'TanStack Query', 'MUI', 'Storybook'],
  },
  {
    company: 'Centra',
    role: 'Frontend Developer (React)',
    period: 'Jul 2020 - Dec 2022',
    description: 'Centra is an e-commerce platform for fashion and lifestyle brands.',
    link: 'https://centra.com/',
    responsibilities: [
      'Built wholesale features for the platform',
      'Conducting technical interviews',
      'Training interns and junior engineers',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'GraphQL', 'RxJS'],
  },
  {
    company: 'blue veery GmbH',
    role: 'Fullstack Developer',
    period: 'Jun 2017 - Jul 2020',
    description: 'Worked on various client projects as a fullstack developer.',
    link: 'https://blue-veery.com/',
    responsibilities: [
      'Built features for clients including Purtel, AMS Online, and Meta-Level',
      'Implemented Smart Checkout for Secupay',
      'Worked with pharmaceutical industry clients like Roche',
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'MUI', 'PostgreSQL', 'Docker'],
  },
]

export function HomeWorkExperience() {
  return (
    <section className="@container/work">
      <SectionHeader
        heading="Work Experience"
        text="My professional journey and the companies I've worked with:"
      />

      <ul className="space-y-6">
        {workExperience.map((job) => (
          <li
            key={job.company + job.period}
            className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-accent"
          >
            <div className="space-y-2">
              <div>
                {job.link ? (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:text-accent transition-colors"
                  >
                    {job.company}
                  </a>
                ) : (
                  <h3 className="font-semibold text-primary">{job.company}</h3>
                )}
                <div className="flex flex-col @sm/work:flex-row @sm/work:items-center @sm/work:gap-2 text-sm">
                  <span className="text-secondary font-medium">{job.role}</span>
                  <span className="hidden @sm/work:inline text-tertiary">•</span>
                  <span className="text-tertiary">{job.period}</span>
                </div>
              </div>

              <p className="text-sm text-secondary leading-relaxed">{job.description}</p>

              {job.responsibilities && (
                <ul className="space-y-1">
                  {job.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="text-sm text-tertiary pl-4 relative before:absolute before:left-0 before:top-2 before:size-1 before:rounded-full before:bg-zinc-400"
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
              )}

              {job.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} icon={techStackIcons[tech]} />
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
