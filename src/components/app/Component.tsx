import React from 'react'
import Code from './Code'
import ComponentWrapper from './ComponentWrapper'
import CopyCode from './CopyCode'

type Props = {
  name: string
  component: string
  codeSnippetName: string
  exampleComponent: JSX.Element
  tailwindConfig: string | null
}

export default function Component({
  name,
  component,
  codeSnippetName,
  exampleComponent,
  tailwindConfig,
}: Props) {
  const indexHtml = codeSnippetName === 'Drawer' || codeSnippetName === 'Modal'

  return (
    <div id={name} className="m400:text-sm">
      <h2 className="mb-5 text-2xl font-bold m400:text-xl">{name}</h2>

      <ComponentWrapper>{exampleComponent}</ComponentWrapper>
      <Code code={component} name={codeSnippetName + '.tsx'} />
      <CopyCode copyBtnText="Copy this component" code={component} />

      {indexHtml && (
        <div>
          <Code
            limitedHeight={false}
            code={
              codeSnippetName === 'Drawer'
                ? '<div id="drawer"></div>'
                : '<div id="modal"></div>'
            }
            name={'index.html'}
          />
          <CopyCode
            copyBtnText="Copy this tag"
            code={
              codeSnippetName === 'Drawer'
                ? '<div id="drawer"></div>'
                : '<div id="modal"></div>'
            }
          />
        </div>
      )}

      {tailwindConfig && (
        <div>
          <Code
            limitedHeight={false}
            code={tailwindConfig}
            name={'tailwind.config.js'}
          />
          <CopyCode copyBtnText="Copy this config" code={tailwindConfig} />
        </div>
      )}
    </div>
  )
}
