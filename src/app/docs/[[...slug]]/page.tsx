import "@/styling/code.css"

import { docs } from "@docs"
import { ExternalLink } from "lucide-react"

import { notFound } from "next/navigation"

import { MAIN_SIDEBAR } from "@/data/sidebar-links"

import { MDXContent, MDXTableOfContents } from "@/components/app/mdx-components"
import Pagination from "@/components/app/pagination"
import { TableOfContents } from "@/components/app/toc"
import { Badge } from "@/components/ui/badge"

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

  const paginationProps = {
    prev: prevItem ? { name: prevItem.text, path: prevItem.href } : undefined,
    next: nextItem ? { name: nextItem.text, path: nextItem.href } : undefined,
  }

  const isTocEmpty = tableOfContents.length < 2

  return (
    <div className="docs min-h-[100dvh] w-full bg-background pt-[70px]">
      <div className="lg:ml-[250px] xl:mr-[250px] mr-0 ml-0 prose-p:text-foreground prose-p:mt-6 prose-headings:scroll-mt-32 prose-h1:mb-4 prose-ul:pl-5 prose-ul:list-disc prose-li:font-base sm:prose-li:text-base prose-li:text-sm prose-li:mt-2 lg:py-20 sm:py-16 py-12 leading-relaxed prose-h2:mt-10 prose-h2:mb-6 prose-h3:mt-8 prose-headings:font-heading sm:prose-h1:text-3xl prose-h1:text-2xl sm:prose-h2:text-2xl prose-h2:text-xl prose-h3:mb-6 sm:prose-h3:text-xl prose-h3:text-lg prose-p:leading-7 sm:prose-p:text-base prose-p:text-sm prose-p:font-base prose-code:px-[5px] prose-code:py-[2px] prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 prose-a:font-heading prose-code:rounded-base prose-code:font-base prose-code:font-[inherit] prose-code:border-2 prose-code:text-foreground prose-code:whitespace-nowrap prose-code:text-sm prose-code:mx-0.5 prose-code:border-border prose-code:bg-secondary-background">
        <div className="2xl:max-w-[750px] max-w-[650px] w-full px-5 mx-auto">
          <article>
            <div className="mb-8">
              <h1>{title}</h1>
              {description && (
                <p className="mt-0 mb-4 not-prose sm:text-lg text-base font-base text-foreground">
                  {description}
                </p>
              )}
              {shadcnDocsLink && (
                <a href={shadcnDocsLink} target="_blank">
                  <Badge variant="neutral" className="gap-2">
                    shadcn/ui docs
                    <ExternalLink />
                  </Badge>
                </a>
              )}
            </div>
            <MDXContent code={body} />

            <div className="mt-14">
              <Pagination {...paginationProps} />
            </div>
          </article>
          {!isTocEmpty && (
            <aside className="fixed bg-secondary-background border-l-4 not-prose border-l-border overflow-hidden top-[70px] xl:flex hidden flex-col right-0 w-[250px] h-[calc(100svh-70px)]">
              <TableOfContents items={tableOfContents} />

              <div className="shrink-0 border-t-4 border-t-border bg-secondary-background px-3 py-3 text-foreground">
                <p className="font-heading text-base">cnlibs.com</p>
                <p className="mt-2 text-sm font-base">
                  Check out other shadcn/ui libraries I made
                </p>
                <a
                  href="https://cnlibs.com/"
                  target="_blank"
                  className="px-rounded-md px-ring px-border-md mt-4 inline-flex h-9 w-full items-center justify-center text-sm font-base whitespace-nowrap text-white transition-all outline-none select-none [--pixel-size:4px] [--px-bg:black] [--px-border-color:transparent] [--px-border-offset:2px] [--px-face-offset:2px] hover:[--px-bg:color-mix(in_oklab,black_80%,transparent)] active:translate-y-px"
                >
                  Visit
                </a>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
