import REACT_COMPONENTS from './components/react'

const REACT_LINKS = REACT_COMPONENTS.map((component) => {
  return { href: `/react/components/${component.name}`, text: component.name }
})

const MAIN_SIDEBAR = [
  'Getting started',
  {
    href: '/docs',
    text: 'Introduction',
  },
  {
    href: '/docs/colors',
    text: 'Colors',
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
]

export { MAIN_SIDEBAR, REACT_SIDEBAR, SHADCN_SIDEBAR }
