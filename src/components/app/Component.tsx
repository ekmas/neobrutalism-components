import React from 'react'
import Code from './Code'
import ComponentWrapper from './ComponentWrapper'
import CopyCode from './CopyCode'

type Props = {
  name: string
  component: string
  exampleComponent: JSX.Element
}

export default function Component({
  name,
  component,
  exampleComponent,
}: Props) {
  return (
    <div id={name} className="pt-[100px] m600:pt-[50px] m400:text-sm">
      <h2 className="mb-5 text-2xl font-bold m400:text-xl">{name}</h2>

      <ComponentWrapper>{exampleComponent}</ComponentWrapper>

      <Code code={component} />

      <CopyCode code={component} />
    </div>
  )
}
