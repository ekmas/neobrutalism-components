import { MetadataRoute } from 'next'

import REACT_COMPONENTS from '@/data/components/react'
import SHADCN_COMPONENTS from '@/data/components/shadcn'

const root = 'https://neobrutalism-components.vercel.app'

const DOCS_PAGES = [
  '/docs',
  '/docs/styling',
  '/docs/resources',
  '/react/installation',
  '/shadcn/installation',
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
      priority: 0.8,
    })),
    ...REACT_COMPONENTS.map((page) => ({
      url: root + '/react/components/' + page.name,
      lastModified: new Date(),
      priority: 0.6,
    })),
    ...SHADCN_COMPONENTS.map((page) => ({
      url: root + '/shadcn/components/' + page.url,
      lastModified: new Date(),
      priority: 0.6,
    })),
  ]
}
