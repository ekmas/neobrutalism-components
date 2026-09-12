import { ComponentProps } from "react"

import ShowcaseContainer from "@/components/app/showcase-container"

// Add entries here to feature a project on the showcase page.
// Preview images go in public/showcase-previews and are imported at the top
// of this file, e.g. `import example from "@public/showcase-previews/example.webp"`.
const SHOWCASE: ComponentProps<typeof ShowcaseContainer>["items"] = []

export default SHOWCASE
