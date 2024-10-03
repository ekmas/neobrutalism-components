import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import components from '@/data/components/react'

import Component from '@/components/app/Component'
import EditThisPage from '@/components/app/EditThisPage'
import Pagination from '@/components/app/Pagination'

import {
  transformToName,
  transformToPascalCase,
  transformToSlug,
} from '@/lib/utils'

export async function generateStaticParams() {
  const componentSlugs = components.map((component) => ({
    name: transformToSlug(component.name),
  }))

  return componentSlugs
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { name: string }
}): Promise<Metadata> {
  const component = transformToName(params.name)

  return {
    title: `React ${component}`,
    description: `Start using React ${component} component in your next project.`,
  }
}

export default async function Installation({
  params,
}: {
  params: { name: string }
}) {
  const currentComponent = components.find(
    (component) => transformToSlug(component.name) === params.name,
  )

  if (!currentComponent) {
    redirect('/react/installation')
  }

  return (
    <>
      <Component
        name={currentComponent.name}
        exampleComponent={<currentComponent.exampleComponent />}
      />

      <currentComponent.markdown />

      <EditThisPage
        markdownPath={`/react/components/${transformToPascalCase(
          currentComponent.name,
        )}.mdx`}
      />

      <Pagination
        prev={
          currentComponent.prevComponent
            ? {
                name: `${transformToName(currentComponent.prevComponent)}`,
                path: `/react/components/${currentComponent.prevComponent}`,
              }
            : undefined
        }
        next={
          currentComponent.nextComponent
            ? {
                name: `${transformToName(currentComponent.nextComponent)}`,
                path: `/react/components/${currentComponent.nextComponent}`,
              }
            : undefined
        }
      />
    </>
  )
}
