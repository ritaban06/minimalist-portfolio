import { IconHugeLinkedIn01 } from '@/components/icons/huge/IconHugeLinkedIn01'
import { IconHugeNewTwitter } from '@/components/icons/huge/IconHugeNewTwitter'
import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'

const socialLinks = [
  {
    label: 'X/Twitter',
    icon: IconHugeNewTwitter,
    href: links.social.x,
    fill: 'fill-primary',
  },
  {
    label: 'LinkedIn',
    icon: IconHugeLinkedIn01,
    href: links.social.linkedin,
    fill: 'fill-[#0a66c2]',
  },
]

export function HomeSocials() {
  return (
    <section>
      <SectionHeader
        heading="Find me on"
        text="You can find me on the following social platforms:"
      />

      <ul className="flex flex-wrap items-center gap-2.5">
        {socialLinks.map((link) => (
          <li className="group" key={link.label}>
            <a
              className="inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 rounded-full outline-none font-medium text-xs text-secondary transition-all hover:bg-zinc-200/75 focus:ring-3 focus:ring-zinc-200"
              href={link.href}
              target="_blank"
            >
              <link.icon className={`shrink-0 size-4 group-first:size-3.5 ${link.fill}`} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
