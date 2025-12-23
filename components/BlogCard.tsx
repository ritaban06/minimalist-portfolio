import { IconHugeLinkSquare02 } from '@/components/icons/huge/IconHugeLinkSquare02'

interface BlogCardProps {
  title: string
  url: string
  platform: 'dev.to' | 'indiehackers'
}

export function BlogCard({ title, url, platform }: BlogCardProps) {
  return (
    <a
      className="group flex items-center gap-2 py-3 -mx-3 px-3 rounded-lg text-md transition-all outline-none hover:bg-layout-secondary-active focus-visible:bg-layout-secondary-active"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconHugeLinkSquare02 className="size-3.5 fill-zinc-400 shrink-0 transition-all group-hover:fill-zinc-600 group-focus-visible:fill-zinc-600" />
      <span className="flex-1 transition-colors group-hover:text-primary group-focus-visible:text-primary">
        {title}
      </span>
      <span className="text-sm text-tertiary shrink-0">
        {platform === 'dev.to' ? 'dev.to' : 'Indie Hackers'}
      </span>
    </a>
  )
}
