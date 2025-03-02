import { Metadata } from "next"
import { redirect } from "next/navigation"

import components from "@/data/components"

import Component from "@/components/app/Component"
import EditThisPage from "@/components/app/EditThisPage"
import Pagination from "@/components/app/Pagination"

import { transformToName, transformToSlug } from "@/lib/utils"

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
    title: `${component}`,
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
    redirect("/docs/installation")
  }

  const docsLink = !currentComponent.notShadcn
    ? `https://ui.shadcn.com/docs/components/${transformToSlug(
        currentComponent.name,
      )}`
    : undefined

  return (
    <>
      <Component
        name={currentComponent.name}
        exampleComponent={<currentComponent.exampleComponent />}
        docsLink={docsLink}
      />

      <currentComponent.markdown />

      <EditThisPage
        markdownPath={`/components/${transformToSlug(
          currentComponent.name,
        )}.mdx`}
      />

      <Pagination
        prev={
          currentComponent.prevComponent
            ? {
                name: `${transformToName(currentComponent.prevComponent)}`,
                path: `/components/${currentComponent.prevComponent}`,
              }
            : undefined
        }
        next={
          currentComponent.nextComponent
            ? {
                name: `${transformToName(currentComponent.nextComponent)}`,
                path: `/components/${currentComponent.nextComponent}`,
              }
            : undefined
        }
      />
    </>
  )
}
