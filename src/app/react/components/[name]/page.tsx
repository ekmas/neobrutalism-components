import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import components from '@/data/components/react'

import Component from '@/components/app/Component'
import Pagination from '@/components/app/Pagination'

import { addSpaces } from '@/lib/utils'

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

  return (
    <>
      <Component
        name={addSpaces(currentComponent.name)}
        exampleComponent={<currentComponent.exampleComponent />}
      />

      {/* <div className="prose-code:mx-[unset] prose-code:font-[400] prose-pre:text-sm prose-code:border-none prose-code:bg-transparent prose-code:px-[unset]"> */}
      <currentComponent.markdown />
      {/* </div> */}

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
