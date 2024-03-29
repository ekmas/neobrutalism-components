import components from '@/data/components'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import Component from '@/components/app/Component'
import { redirect } from 'next/navigation'
import Pagination from '@/components/app/Pagination'

const readFilePath = async (filePath: string) => {
  const readFile = promisify(fs.readFile)
  const fileContent = await readFile(path.join(process.cwd(), filePath), 'utf8')
  return fileContent
}

const getCode = async (filePath: string) => {
  const code = await readFilePath(filePath)

  if (code.includes("'use client'")) {
    return code.slice(13)
  }

  // if component has use client in it we will remove it because these are react components, not nextjs components

  return code
}

export async function generateStaticParams() {
  const componentSlugs = components.map((component) => ({
    name: component.name,
  }))

  return componentSlugs
}

export const dynamicParams = false

export default async function Installation({
  params,
}: {
  params: { name: string }
}) {
  const currentComponent = components.find(
    (component) => component.name === params.name,
  )

  if (!currentComponent) {
    redirect('/docs')
  }

  const filePath = `./src/components/neobrutalism/${params.name}.tsx`

  const code = await getCode(filePath)
  let tailwindConfig = null

  if (params.name === 'Marquee') {
    tailwindConfig = await getCode(
      './src/components/neobrutalism/Marquee.tailwind.txt',
    )
  }

  return (
    <>
      <Component
        name={params.name}
        component={code}
        tailwindConfig={tailwindConfig}
        exampleComponent={<currentComponent.exampleComponent />}
      />

      <Pagination
        prev={
          currentComponent.prevComponent
            ? {
                name: `${currentComponent.prevComponent}`,
                path: `/docs/components/${currentComponent.prevComponent}`,
              }
            : undefined
        }
        next={
          currentComponent.nextComponent
            ? {
                name: `${currentComponent.nextComponent}`,
                path: `/docs/components/${currentComponent.nextComponent}`,
              }
            : undefined
        }
      />
    </>
  )
}
