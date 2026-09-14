import { REGISTRY_URL, SITE_URL } from "@/lib/site"

import {
  DocsTabs as Tabs,
  DocsTabsContent as TabsContent,
  DocsTabsList as TabsList,
  DocsTabsTrigger as TabsTrigger,
} from "./docs-tabs"
import { Pre } from "./pre"

const RUNNERS = [
  { value: "pnpm", bin: "pnpm", prefix: " dlx" },
  { value: "npm", bin: "npx", prefix: "" },
  { value: "yarn", bin: "npx", prefix: "" },
  { value: "bun", bin: "bunx", prefix: " --bun" },
] as const

/**
 * Package-manager tabs with a shadcn CLI command. Pass a registry `component`
 * name for `shadcn add <registry>/<component>.json`, or a `url` and a
 * `command` (`add` or `init`) for anything else, such as the styling items.
 * A `url` starting with `/r/` is resolved against the current registry
 * origin (localhost in development, the site in production); absolute URLs
 * are used as given. With `multiline` the URL is shown on its own line, while
 * the copy button still copies a single line.
 */
export default function ShadcnCliCommand({
  component,
  url,
  command = "add",
  multiline = false,
}: {
  component?: string
  url?: string
  command?: "add" | "init"
  multiline?: boolean
}) {
  const target = url
    ? url.startsWith("/")
      ? `${SITE_URL}${url}`
      : url
    : `${REGISTRY_URL}/${component}.json`

  return (
    <Tabs defaultValue="pnpm" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        {RUNNERS.map((runner) => (
          <TabsTrigger key={runner.value} value={runner.value}>
            {runner.value}
          </TabsTrigger>
        ))}
      </TabsList>
      {RUNNERS.map((runner) => {
        const rest = `${runner.prefix} shadcn@latest ${command}`
        const shown = multiline ? `${rest}\n${target}` : `${rest} ${target}`

        return (
          <TabsContent key={runner.value} value={runner.value}>
            <Pre
              __rawstring__={`${runner.bin}${rest} ${target}`}
              className="whitespace-pre-wrap wrap-anywhere pr-14"
              data-language="bash"
            >
              <code>
                <span className="text-white font-bold">{runner.bin}</span>
                <span className="text-white/[0.53] ">{shown}</span>
              </code>
            </Pre>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
