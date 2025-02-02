import { Metadata } from 'next'

import TEMPLATES from '@/data/templates'

import ShowcaseLayout from '@/layouts/Showcase'

export const metadata: Metadata = {
  title: 'Templates',
  description: 'Get started with neobrutalism templates.',
}

export default function Page() {
  return (
    <ShowcaseLayout
      title="Templates"
      description="These are free and open source neobrutalism styled taliwind templates you can use for your next project. All these templates are customizable. Check the template repo for more info."
      items={TEMPLATES}
    />
  )
}
