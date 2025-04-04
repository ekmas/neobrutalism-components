import components from "@/data/components"
import { STARS_EXAMPLES } from "@/data/stars"

import { transformToSlug } from "@/lib/utils"

import { sharedComponents } from "./mdx-components"

export default function ComponentPreview({
  component,
  children,
  example,
  type = "component",
}: {
  component: string
  children: React.ReactNode
  example?: string
  type?: "star" | "component"
}) {
  const { Tabs, TabsList, TabsTrigger, TabsContent } = sharedComponents

  let ExampleComponent: React.ComponentType | undefined

  if (type === "star") {
    const starData = STARS_EXAMPLES[component as keyof typeof STARS_EXAMPLES]
    if (!starData) return null

    ExampleComponent = starData
  } else {
    const componentData = components.find(
      (c) => transformToSlug(c.name) === component,
    )

    if (!componentData) return null

    if (type === "component") {
      ExampleComponent = example
        ? componentData.examples?.[example]
        : componentData.exampleComponent
    }
  }

  if (!ExampleComponent) return null

  return (
    <>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full border-b-0 grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="not-prose flex w-full items-center justify-center z-15 relative border-2 mb-5 min-h-[200px] border-border bg-secondary-background bg-[15px_20px] bg-[linear-gradient(to_right,#8080804D_1px,transparent_1px),linear-gradient(to_bottom,#80808090_1px,transparent_1px)] sm:px-10 px-5 sm:py-20 py-10 shadow-shadow [background-size:40px_40px]">
            <ExampleComponent />
          </div>
        </TabsContent>
        <TabsContent value="code">{children}</TabsContent>
      </Tabs>
    </>
  )
}
