import { Eye } from "lucide-react"

import { Metadata } from "next"
import Link from "next/link"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"
import { Button } from "@/components/ui/button"

import dashboardPreview from "../../../../public/previews/dashboard.webp"
import saasPreview from "../../../../public/previews/saas.webp"
import InstallTemplateBtn from "./_components/install-template-btn"

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Neobrutalism templates you can install with a single shadcn command.",
}

// Imported rather than linked from /public, so they get hashed file names the
// browser can cache for good.
const TEMPLATES = [
  {
    name: "SaaS Landing Page",
    description:
      "A complete SaaS landing page with a product-board hero, bento features, tabbed product views, pricing toggle, testimonial marquee and more. Built entirely with neobrutalism components.",
    href: "/templates/saas",
    image: saasPreview,
    registryItem: "/r/saas-landing.json",
  },
  {
    name: "Dashboard",
    description:
      "A store analytics dashboard with a collapsible sidebar and six pages: overview, revenue, marketing, orders, customers and inventory. Date ranges, charts, heatmaps and searchable tables, all built with neobrutalism components.",
    href: "/templates/dashboard",
    image: dashboardPreview,
    registryItem: "/r/dashboard.json",
  },
]

export default function TemplatesPage() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Templates</PageHeading>
        <PageDescription>
          Full page templates built with neobrutalism components.
        </PageDescription>
      </PageHeader>

      <div className="grid gap-8 lg:grid-cols-2">
        {TEMPLATES.map((template) => (
          <div
            key={template.name}
            className="min-w-0 overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow"
          >
            {/* preview */}
            <div className="relative border-b-2 border-border">
              <img
                src={template.image.src}
                alt={`${template.name} preview`}
                width={template.image.width}
                height={template.image.height}
                decoding="sync"
                className="block h-auto w-full bg-cover"
                // A tiny inline version shows until the image arrives.
                style={{
                  backgroundImage: `url("${template.image.blurDataURL}")`,
                }}
              />
              <Link
                href={template.href}
                target="_blank"
                className="absolute inset-0 z-10"
                aria-label={`Preview ${template.name}`}
              />
            </div>

            {/* info */}
            <div className="p-6">
              <h3 className="font-heading text-xl">{template.name}</h3>
              <p className="mt-1 font-base text-sm text-foreground">
                {template.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <Button
                  variant="neutral"
                  nativeButton={false}
                  render={<Link href={template.href} target="_blank" />}
                >
                  Preview
                  <Eye />
                </Button>
                <InstallTemplateBtn item={template.registryItem} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
