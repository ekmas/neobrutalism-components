import components from "@/data/components"

import { transformToSlug } from "@/lib/utils"

export default function ComponentPreview({ component }: { component: string }) {
  const componentData = components.find(
    (c) => transformToSlug(c.name) === component,
  )
  if (!componentData) return null

  return (
    <div className="not-prose flex w-full items-center justify-center z-15 relative border-2 mb-5 border-border bg-bw bg-[radial-gradient(#80808080_1px,transparent_1px)] px-10 py-20 shadow-shadow [background-size:16px_16px]">
      <componentData.exampleComponent />
    </div>
  )
}
