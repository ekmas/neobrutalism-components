import { addSpaces, transformToSlug } from '@/lib/utils'

import REACT_COMPONENTS from './components/react'
import SHADCN_COMPONENTS from './components/shadcn'

const REACT_LINKS = REACT_COMPONENTS.map((component) => {
  return {
    href: `/react/components/${component.name}`,
    text: addSpaces(component.name),
  }
})

const SHADCN_LINKS = SHADCN_COMPONENTS.map((component) => {
  return {
    href: `/shadcn/components/${transformToSlug(component.name)}`,
    text: component.name,
  }
})

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

export { MAIN_SIDEBAR, REACT_SIDEBAR, SHADCN_SIDEBAR }
