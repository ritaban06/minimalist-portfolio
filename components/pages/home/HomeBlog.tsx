import { BlogCard } from '@/components/BlogCard'
import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'

interface BlogPost {
  title: string
  url: string
  platform: 'dev.to' | 'indiehackers'
}

const blogPosts: Array<BlogPost> = [
  {
    title: 'How I sold my niche job board for $13,500',
    url: links.blog.soldJobBoard,
    platform: 'indiehackers',
  },
  {
    title: 'Awesome animated cursor with React Hooks',
    url: links.blog.animatedCursor,
    platform: 'dev.to',
  },
  {
    title: 'React time input',
    url: links.blog.reactTimeInput,
    platform: 'dev.to',
  },
  {
    title: 'React + D3 Sunburst Chart',
    url: links.blog.sunburstChart,
    platform: 'dev.to',
  },
]

export function HomeBlog() {
  return (
    <section>
      <SectionHeader
        heading="Blog Posts"
        text="Articles I've written about development and entrepreneurship:"
      />

      <ul className="divide-y divide-layout-primary">
        {blogPosts.map((post) => (
          <li key={post.url}>
            <BlogCard {...post} />
          </li>
        ))}
      </ul>
    </section>
  )
}
