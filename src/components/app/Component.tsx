import { SquareArrowOutUpRight } from 'lucide-react'

import ComponentWrapper from '@/components/app/ComponentWrapper'

type Props = {
  name: string
  exampleComponent: JSX.Element
  docsLink?: string
}

export default function Component({ name, exampleComponent, docsLink }: Props) {
  return (
    <div id={name} className="not-prose m400:text-sm">
      <h2 className="mb-5 text-2xl font-heading m400:text-xl">{name}</h2>

      {docsLink && (
        <a
          className="mb-5 flex w-max items-center gap-3 rounded-base border-2 border-black bg-main px-2 py-0.5 text-[13px]"
          target="_blank"
          href={docsLink}
        >
          shadcn docs
          <SquareArrowOutUpRight size={16} />
        </a>
      )}

      <ComponentWrapper>{exampleComponent}</ComponentWrapper>
    </div>
  )
}
