import { MetadataRoute } from "next"

import COMPONENTS from "@/data/components"

import { transformToSlug } from "@/lib/utils"

const root = "https://www.neobrutalism.dev"

const DOCS_PAGES = [
  "/docs",
  "/docs/styling",
  "/docs/resources",
  "/docs/figma",
  "/docs/changelog",
  "/docs/installation",
  "/templates",
  "/showcase",
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
      url: root + "/components/" + transformToSlug(page.name),
      lastModified: new Date(),
      priority: 0.8,
    })),
  ]
}
