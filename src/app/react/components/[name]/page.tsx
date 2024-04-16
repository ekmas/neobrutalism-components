import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import components from '@/data/components/react'

import Component from '@/components/app/Component'
import Pagination from '@/components/app/Pagination'

import { addSpaces } from '@/lib/utils'

const readFilePath = async (filePath: string) => {
  const readFile = promisify(fs.readFile)
  const fileContent = await readFile(path.join(process.cwd(), filePath), 'utf8')
  return fileContent
}

const getCode = async (filePath: string) => {
  const code = await readFilePath(filePath)

  if (code.includes("'use client'")) {
    return code.slice(14)
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

export async function generateMetadata({
  params,
}: {
  params: { name: string }
}): Promise<Metadata> {
  const component = addSpaces(params.name)

  return {
    title: component,
    description: `Start using ${component} component in your next project.`,
  }
}

export default async function Installation({
  params,
}: {
  params: { name: string }
}) {
  const currentComponent = components.find(
    (component) => component.name === params.name,
  )

  if (!currentComponent) {
    redirect('/react/installation')
  }

  const filePath = `./src/components/react/components/${params.name}.tsx`

  const code = await getCode(filePath)
  let tailwindConfig = null

  if (params.name === 'Marquee') {
    tailwindConfig = await getCode(
      './src/components/react/components/Marquee.tailwind.txt',
    )
  }

  return (
    <>
      <Component
        name={addSpaces(currentComponent.name)}
        component={code}
        codeSnippetName={currentComponent.name}
        tailwindConfig={tailwindConfig}
        exampleComponent={<currentComponent.exampleComponent />}
      />

      <Pagination
        prev={
          currentComponent.prevComponent
            ? {
                name: `${addSpaces(currentComponent.prevComponent)}`,
                path: `/react/components/${currentComponent.prevComponent}`,
              }
            : undefined
        }
        next={
          currentComponent.nextComponent
            ? {
                name: `${addSpaces(currentComponent.nextComponent)}`,
                path: `/react/components/${currentComponent.nextComponent}`,
              }
            : undefined
        }
      />
    </>
  )
}
