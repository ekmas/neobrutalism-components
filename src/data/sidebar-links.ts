import { transformToSlug } from "@/lib/utils"

import COMPONENTS from "./components"

const COMPONENTS_LINKS = COMPONENTS.map((component) => {
  return {
    href: `/docs/${transformToSlug(component.name)}`,
    text: component.name,
  }
})

const GETTING_STARTED_LINKS = [
  {
    href: "/docs/migrating-from-v3",
    text: "Migrating from V3",
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
    href: "/docs/resources",
    text: "Resources",
  },
  {
    href: "/docs/figma",
    text: "Figma",
  },
  {
    href: "/docs/changelog",
    text: "Changelog",
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
    href: "/templates",
    text: "Templates",
  },
  {
    href: "/showcase",
    text: "Showcase",
  },
]

const MAIN_SIDEBAR = [
  "Getting started",
  {
    href: "/docs/migrating-from-v3",
    text: "Migrating from V3",
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
    href: "/docs/resources",
    text: "Resources",
  },
  {
    href: "/docs/figma",
    text: "Figma",
  },
  {
    href: "/docs/changelog",
    text: "Changelog",
  },
  "Components",
  ...COMPONENTS_LINKS,
  "Stars",
  {
    href: "/docs/stars",
    text: "Installation",
  },
]

export { MAIN_SIDEBAR, COMPONENTS_LINKS, GETTING_STARTED_LINKS }
