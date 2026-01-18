// import { HomeBlog } from '@/components/pages/home/HomeBlog'
import { HomeContact } from '@/components/pages/home/HomeContact'
import { HomeHero } from '@/components/pages/home/HomeHero'
import { HomeProjects } from '@/components/pages/home/HomeProjects'
import { HomeSocials } from '@/components/pages/home/HomeSocials'
import { HomeTechStack } from '@/components/pages/home/HomeTechStack'
import { getLastUpdatedDate } from '@/utils/getLastUpdated'
// import { HomeWorkExperience } from '@/components/pages/home/HomeWorkExperience'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ritaban Ghosh - Full Stack Developer',
  description: `Full stack developer based in Kolkata, India. If you need a reliable developer to build your product, I'm here to help.`,
  alternates: {
    canonical: 'https://ritaban.xyz',
  },
}

export default async function Page() {
  const lastUpdated = await getLastUpdatedDate()
  return (
    <div className="mx-auto pt-6 pb-12 max-w-160 space-y-12 sm:py-10 relative">
      <div className="absolute right-0 top-0 mt-2 mr-4 text-xs text-secondary text-right z-10">
        Last updated: {lastUpdated ? lastUpdated : 'Unknown'}
      </div>
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
