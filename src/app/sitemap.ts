import { MetadataRoute } from "next"

import COMPONENTS from "@/data/components"

import { transformToSlug } from "@/lib/utils"

const root = "https://www.neobrutalism.dev"

const DOCS_PAGES = [
  "/docs",
  "/docs/resources",
  "/docs/figma",
  "/docs/changelog",
  "/docs/installation",
  "/docs/stars",
  "/docs/migrating-from-v3",
  "/templates",
  "/showcase",
  "/stars",
  "/styling",
  "/charts",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: root,
      lastModified: new Date(),
      priority: 1,
    },
    ...DOCS_PAGES.map((page) => ({
      url: root + page,
      lastModified: new Date(),
      priority: 1,
    })),
    ...COMPONENTS.map((page) => ({
      url: root + "/docs/" + transformToSlug(page.name),
      lastModified: new Date(),
      priority: 0.8,
    })),
  ]
}
