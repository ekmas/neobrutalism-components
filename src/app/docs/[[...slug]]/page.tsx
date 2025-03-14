import "@/styling/code.css"

import { docs } from "@docs"
import { ExternalLink, SquarePenIcon } from "lucide-react"

import { notFound } from "next/navigation"

import { MAIN_SIDEBAR } from "@/data/sidebar-links"

import { MDXContent, MDXTableOfContents } from "@/components/app/mdx-components"
import Pagination from "@/components/app/Pagination"
import { TableOfContents } from "@/components/app/toc"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateMetadata(props: DocPageProps) {
  const doc = await getDocFromParams(props)
  if (doc == null) return {}
  return { title: doc.title, description: doc.description }
}

export async function generateStaticParams(): Promise<
  {
    slug: string[]
  }[]
> {
  return docs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = (await params).slug?.join("/") || ""
  const doc = docs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

interface TOCItem {
  depth: number
  value: string
  id: string
}

function transformTableOfContents(items: any[]): TOCItem[] {
  const flattened: TOCItem[] = []

  items.forEach((item) => {
    flattened.push({
      depth: item.depth,
      value: item.value,
      id: item.id,
    })

    if (item.children) {
      flattened.push(...transformTableOfContents(item.children))
    }
  })

  return flattened
}

export default async function DocPage(props: DocPageProps) {
  const doc = await getDocFromParams(props)
  if (doc == null) notFound()

  const { description, title, body, shadcnDocsLink, slug, slugAsParams } = doc

  const filteredSidebar = MAIN_SIDEBAR.filter(
    (item): item is { href: string; text: string } => typeof item === "object",
  )

  const currentIndex = filteredSidebar.findIndex((item) => {
    const isIndex = slugAsParams === ""

    if (isIndex) {
      return item.href === "/docs"
    }

    return item.href === "/docs/" + slugAsParams
  })

  const prevItem = filteredSidebar[currentIndex - 1]
  const nextItem = filteredSidebar[currentIndex + 1]

  const rawTableOfContents = MDXTableOfContents({ code: body })
  const tableOfContents = transformTableOfContents(rawTableOfContents)

  const docsSlug = slug === "/docs" ? "index" : slug

  const repoDocsUrl =
    "https://github.com/ekmas/neobrutalism-components/tree/main/src/markdown/" +
    docsSlug +
    ".mdx"

  const paginationProps = {
    prev: prevItem ? { name: prevItem.text, path: prevItem.href } : undefined,
    next: nextItem ? { name: nextItem.text, path: nextItem.href } : undefined,
  }

  const isTocEmpty = tableOfContents.length < 2

  return (
    <div className="docs min-h-[100dvh] w-[full-250px] bg-bg px-5 pt-[88px]">
      <div className="prose-p:text-text prose-p:mt-6 prose-headings:scroll-mt-32 prose-h1:mb-4 prose-ul:pl-5 prose-ul:list-disc prose-li:font-base mx-auto w-[750px] py-20 leading-relaxed prose-h2:mt-10 prose-h2:mb-6 prose-h3:mt-8 prose-headings:font-heading prose-h1:text-3xl prose-h2:text-2xl prose-h3:mb-4 prose-h3:text-xl prose-p:leading-7 prose-p:font-base prose-code:p-[3px] prose-a:underline prose-a:font-heading prose-code:mx-1 prose-code:rounded-base prose-code:font-bold prose-code:border prose-code:text-text prose-code:text-sm prose-code:border-border prose-code:bg-main prose-code:px-2">
        <article>
          <div className="mb-8">
            <h1>{title}</h1>
            {description && (
              <p className="mt-0 mb-4 text-lg text-text">{description}</p>
            )}
            {shadcnDocsLink && (
              <a href={shadcnDocsLink} target="_blank">
                <Badge className="gap-2">
                  shadcn/ui docs
                  <ExternalLink />
                </Badge>
              </a>
            )}
          </div>
          <MDXContent code={body} />

          <div className="mt-14">
            {isTocEmpty && (
              <Button
                className="bg-bw text-text mb-10 not-prose px-5 py-2"
                variant="noShadow"
                asChild
              >
                <a target="_blank" href={repoDocsUrl}>
                  <SquarePenIcon className="w-4 h-4" />
                  Edit this page
                </a>
              </Button>
            )}

            <Pagination {...paginationProps} />
          </div>
        </article>
        {!isTocEmpty && (
          <aside className="fixed bg-bw border-l-4 not-prose border-l-border overflow-hidden top-[88px] flex flex-col justify-between right-0 w-[250px] h-[calc(100svh-88px)] overflow-y-auto">
            <TableOfContents items={tableOfContents} />
            <Button
              className="bg-bw w-full border-0 rounded-none border-t-3 text-text border-t-border not-prose px-5 py-2 m400:px-3.5 h-[unset] m400:text-xs font-base gap-2 mt-12"
              variant="noShadow"
              asChild
            >
              <a target="_blank" href={repoDocsUrl}>
                <SquarePenIcon className="w-4 h-4" />
                Edit this page
              </a>
            </Button>
          </aside>
        )}
      </div>
    </div>
  )
}
