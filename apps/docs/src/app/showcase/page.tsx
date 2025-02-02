import { Metadata } from 'next'

import SHOWCASE from '@/data/showcase'

import ShowcaseLayout from '@/layouts/Showcase'

export const metadata: Metadata = {
  title: 'Showcase',
  description: 'Showcase of websites built with neobrutalism components.',
}

export default function Page() {
  return (
    <ShowcaseLayout
      title="Showcase"
      description="Showcase of websites built with neobrutalism components."
      items={SHOWCASE}
    />
  )
}
