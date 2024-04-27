import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import components from '@/data/components/shadcn'

import Component from '@/components/app/Component'
import Pagination from '@/components/app/Pagination'

import { transformToName, transformToSlug } from '@/lib/utils'

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
    (component) => transformToSlug(component.name) === params.name,
  )

  if (!currentComponent) {
    redirect('/shadcn/installation')
  }

  return (
    <>
      <Component
        name={currentComponent.name}
        exampleComponent={<currentComponent.exampleComponent />}
        docsLink={`https://ui.shadcn.com/docs/components/${transformToSlug(
          currentComponent.name,
        )}`}
      />

      {/* <div className="prose-code:mx-[unset] prose-code:font-[400] prose-pre:text-sm prose-code:border-none prose-code:bg-transparent prose-code:px-[unset]"> */}
      <currentComponent.markdown />
      {/* </div> */}

      <Pagination
        prev={
          currentComponent.prevComponent
            ? {
                name: `${transformToName(currentComponent.prevComponent)}`,
                path: `/shadcn/components/${currentComponent.prevComponent}`,
              }
            : undefined
        }
        next={
          currentComponent.nextComponent
            ? {
                name: `${transformToName(currentComponent.nextComponent)}`,
                path: `/shadcn/components/${currentComponent.nextComponent}`,
              }
            : undefined
        }
      />
    </>
  )
}
