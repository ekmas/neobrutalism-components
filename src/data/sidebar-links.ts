import { transformToSlug } from "@/lib/utils"

import COMPONENTS from "./components"

type SidebarLink = { href: string; text: string; isNew?: boolean; noPagination?: boolean }
type SidebarItem = string | SidebarLink

const COMPONENTS_LINKS = COMPONENTS.map((component) => {
  return {
    href: `/docs/${transformToSlug(component.name)}`,
    text: component.name,
    isNew: component.isNew,
  }
})

// Getting started pages in the docs sidebar.
const DOCS_LINKS: SidebarLink[] = [
  {
    href: "/docs/migrating-to-base-ui",
    text: "Migrating to Base UI",
  },
  {
    href: "/docs",
    text: "Introduction",
  },
  {
    href: "/docs/installation",
    text: "Installation",
  },
  {
    href: "/docs/figma",
    text: "Figma",
  },
  {
    href: "/docs/changelog",
    text: "Changelog",
  },
]

// Pages outside the docs, listed only in search.
const SITE_LINKS: SidebarLink[] = [
  {
    href: "/templates",
    text: "Templates",
  },
  {
    href: "/styling",
    text: "Styling",
  },
  {
    href: "/charts",
    text: "Charts",
  },
  {
    href: "/stars",
    text: "Stars",
  },
  {
    href: "/hire-me",
    text: "Hire Me",
    noPagination: true,
  },
]

const GETTING_STARTED_LINKS = [...DOCS_LINKS, ...SITE_LINKS]

const MAIN_SIDEBAR: SidebarItem[] = [
  "Getting started",
  ...DOCS_LINKS,
  "Components",
  ...COMPONENTS_LINKS,
  "Stars",
  {
    href: "/docs/stars",
    text: "Installation",
  },
]

export { MAIN_SIDEBAR, COMPONENTS_LINKS, GETTING_STARTED_LINKS }
