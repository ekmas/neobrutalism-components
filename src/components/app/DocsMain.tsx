import components from '@/data/components'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import Component from './Component'

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile)
  const fileContent = await readFile(path.join(process.cwd(), filePath), 'utf8')
  return fileContent
}

export default async function DocsMain() {
  const promises = components.map(async (component) => {
    const filePath = `./src/components/neobrutalism/${component.name}.tsx`
    const code = await readFilePath(filePath)
    return code
  })

  const componentCodes = await Promise.all(promises)

  return (
    <div className="docs ml-[250px] w-[full-250px] bg-[#c9dcd8] px-5 pt-[80px]">
      <div className="mx-auto w-[600px] py-16">
        {components.map((component, index) => {
          return (
            <Component
              key={index}
              name={component.name}
              component={componentCodes[index]}
              exampleComponent={<component.exampleComponent />}
            />
          )
        })}
      </div>
    </div>
  )
}
