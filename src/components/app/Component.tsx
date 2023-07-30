import React from 'react'
import Code from './Code'

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
    <div>
      <h2>{name}</h2>

      <Code code={component} />

      {exampleComponent}
    </div>
  )
}
