import components from '@/data/components'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import Component from './Component'
import Installation from './Installation'

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile)
  const fileContent = await readFile(path.join(process.cwd(), filePath), 'utf8')
  return fileContent
}

export default async function DocsMain() {
  const promises = components.map(async (component) => {
    const filePath = `./src/components/neobrutalism/${component.name}.tsx`
    const code = await readFilePath(filePath)
    if (code.includes("'use client'")) {
      return code.slice(13)
    }
    // if component has use client in it we will remove it because these are react components, not nextjs components :)
    return code
  })

  const componentCodes = await Promise.all(promises)

  return (
    <div className="docs ml-[250px] w-[full-250px] bg-[#c9dcd8] px-5 pt-[80px] m800:ml-[180px] m800:w-[full-180px] m600:m-0 m600:w-full m500:pt-16">
      <div className="mx-auto w-[700px] py-16 m1000:w-[500px] m750:w-[350px] m400:w-full m400:py-10">
        <h2 className="text-3xl font-bold m400:text-2xl">Docs</h2>

        <Installation />

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
