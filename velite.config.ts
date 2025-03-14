import fs from "fs"
import rehypeToc from "@stefanprobst/rehype-extract-toc"
import rehypeTocExtract from "@stefanprobst/rehype-extract-toc/mdx"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import codeImport from "remark-code-import"
import { visit } from "unist-util-visit"
import { defineCollection, defineConfig, s } from "velite"

const computedFields = <T extends { slug: string }>(data: T) => {
  return {
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
  }
}

const docs = defineCollection({
  name: "docs",
  pattern: "**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(50),
      description: s.string().max(100),
      shadcnDocsLink: s.string().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

export default defineConfig({
  root: "./src/markdown/",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { docs },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeToc,
      [rehypeTocExtract, { name: "toc" }],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children

            if (codeEl.tagName !== "code") return

            node.__rawstring__ = codeEl.children?.[0].value
          }
        })
      },
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: JSON.parse(fs.readFileSync("./src/data/theme.json", "utf-8")),
          keepBackground: false,
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "figure") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return
            }

            const preElement = node.children.at(-1)
            if (preElement.tagName !== "pre") {
              return
            }

            preElement.properties["__rawstring__"] = node.__rawstring__
          }
        })
      },
    ],
    remarkPlugins: [[codeImport, { removeRedundantIndentations: true }]],
  },
})
