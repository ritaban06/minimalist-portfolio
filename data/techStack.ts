import { LogoDocker } from '@/components/logos/tech/LogoDocker'
import { LogoElectron } from '@/components/logos/tech/LogoElectron'
import { LogoGraphql } from '@/components/logos/tech/LogoGraphql'
import { LogoJest } from '@/components/logos/tech/LogoJest'
import { LogoMUI } from '@/components/logos/tech/LogoMUI'
import { LogoNest } from '@/components/logos/tech/LogoNest'
import { LogoNextjs } from '@/components/logos/tech/LogoNextjs'
import { LogoNode } from '@/components/logos/tech/LogoNode'
import { LogoReact } from '@/components/logos/tech/LogoReact'
import { LogoRedux } from '@/components/logos/tech/LogoRedux'
import { LogoRxjs } from '@/components/logos/tech/LogoRxjs'
import { LogoShadcnUi } from '@/components/logos/tech/LogoShadcnUi'
import { LogoSupabase } from '@/components/logos/tech/LogoSupabase'
import { LogoTailwind } from '@/components/logos/tech/LogoTailwind'
import { LogoTypescript } from '@/components/logos/tech/LogoTypescript'
import { LogoClerk } from '@/components/logos/tech/LogoClerk'

type TechStackMap = Record<string, React.ComponentType<{ className?: string }> | undefined>

export const techStackIcons: TechStackMap = {
  React: LogoReact,
  'Next.js': LogoNextjs,
  'TanStack Start': undefined,
  'TanStack Query': undefined,
  TypeScript: LogoTypescript,
  Clerk: LogoClerk,
  'Google Cloud OAuth': undefined,
  Node: LogoNode,
  'Node.js': LogoNode,
  Fastify: undefined,
  Nest: LogoNest,
  Postgres: undefined,
  PostgreSQL: undefined,
  Prisma: undefined,
  Supabase: LogoSupabase,
  Docker: LogoDocker,
  Turborepo: undefined,
  'shadcn/ui': LogoShadcnUi,
  Tailwind: LogoTailwind,
  'AI SDK': undefined,
  Electron: LogoElectron,
  Redux: LogoRedux,
  Storybook: undefined,
  Jest: LogoJest,
  MUI: LogoMUI,
  GraphQL: LogoGraphql,
  RxJS: LogoRxjs,
  Angular: undefined,
  'React Native': LogoReact,
  // Technologies without icons
  'Styled Components': undefined,
  Express: undefined,
}
