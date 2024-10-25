import { transformToSlug } from '@/lib/utils'

import REACT_COMPONENTS from './components/react'
import SHADCN_COMPONENTS from './components/shadcn'

const REACT_LINKS = REACT_COMPONENTS.map((component) => {
  return {
    href: `/react/components/${transformToSlug(component.name)}`,
    text: component.name,
  }
})

const SHADCN_LINKS = SHADCN_COMPONENTS.map((component) => {
  return {
    href: `/shadcn/components/${transformToSlug(component.name)}`,
    text: component.name,
  }
})

const GETTING_STARTED_LINKS = [
  {
    href: '/docs',
    text: 'Introduction',
  },
  {
    href: '/docs/styling',
    text: 'Styling',
  },
  {
    href: '/docs/resources',
    text: 'Resources',
  },
  {
    href: '/templates',
    text: 'Templates',
  },
  {
    href: '/showcase',
    text: 'Showcase',
  },
]

const MAIN_SIDEBAR = [
  'Getting started',
  {
    href: '/docs',
    text: 'Introduction',
  },
  {
    href: '/docs/styling',
    text: 'Styling',
  },
  {
    href: '/docs/resources',
    text: 'Resources',
  },
  'Components',
  {
    href: '/react/installation',
    text: 'React',
  },
  {
    href: '/shadcn/installation',
    text: 'Shadcn',
  },
]

const REACT_SIDEBAR = [
  'Getting Started',
  {
    href: '/react/installation',
    text: 'Installation',
  },
  'Components',
  ...REACT_LINKS,
]

const SHADCN_SIDEBAR = [
  'Getting Started',
  {
    href: '/shadcn/installation',
    text: 'Installation',
  },
  'Components',
  ...SHADCN_LINKS,
]

const MOBILE_REACT_SIDEBAR = [
  'Getting started',
  ...GETTING_STARTED_LINKS,
  {
    href: '/shadcn/installation',
    text: 'Shadcn components',
  },
  'React',
  {
    href: '/react/installation',
    text: 'Installation',
  },
  'React components',
  ...REACT_LINKS,
]

const MOBILE_SHADCN_SIDEBAR = [
  'Getting started',
  ...GETTING_STARTED_LINKS,
  {
    href: '/react/installation',
    text: 'React components',
  },
  'Shadcn',
  {
    href: '/shadcn/installation',
    text: 'Installation',
  },
  'Shadcn components',
  ...SHADCN_LINKS,
]

const MOBILE_MAIN_SIDEBAR = [
  'Getting started',
  ...GETTING_STARTED_LINKS,
  'Components',
  {
    href: '/react/installation',
    text: 'React',
  },
  {
    href: '/shadcn/installation',
    text: 'Shadcn',
  },
]

export {
  MAIN_SIDEBAR,
  REACT_SIDEBAR,
  SHADCN_SIDEBAR,
  MOBILE_REACT_SIDEBAR,
  MOBILE_SHADCN_SIDEBAR,
  MOBILE_MAIN_SIDEBAR,
  REACT_LINKS,
  SHADCN_LINKS,
  GETTING_STARTED_LINKS,
}
