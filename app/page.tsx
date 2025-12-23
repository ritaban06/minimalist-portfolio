// import { HomeBlog } from '@/components/pages/home/HomeBlog'
import { HomeContact } from '@/components/pages/home/HomeContact'
import { HomeHero } from '@/components/pages/home/HomeHero'
import { HomeProjects } from '@/components/pages/home/HomeProjects'
import { HomeSocials } from '@/components/pages/home/HomeSocials'
import { HomeTechStack } from '@/components/pages/home/HomeTechStack'
// import { HomeWorkExperience } from '@/components/pages/home/HomeWorkExperience'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ritaban Ghosh - Full Stack Developer',
  description: `Full stack developer based in Kolkata, India. If you need a reliable developer to build your product, I'm here to help.`,
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return (
    <div className="mx-auto pt-6 pb-12 max-w-160 space-y-12 sm:py-10">
      <HomeHero />
      <HomeTechStack />
      {/* <HomeWorkExperience /> */}
      <HomeProjects />
      {/* <HomeBlog /> */}
      <HomeSocials />
      <HomeContact />
    </div>
  )
}
