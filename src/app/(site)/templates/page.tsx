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

import InstallTemplateBtn from "./_components/install-template-btn"

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Neobrutalism templates you can install with a single shadcn command.",
}

const TEMPLATES = [
  {
    name: "SaaS Landing Page",
    description:
      "A complete SaaS landing page with a product-board hero, bento features, tabbed product views, pricing toggle, testimonial marquee and more. Built entirely with neobrutalism components.",
    href: "/templates/saas",
    image: "/previews/saas.webp",
    registryItem: "/r/saas-landing.json",
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
                src={template.image}
                alt={`${template.name} preview`}
                width={1440}
                height={900}
                className="block h-auto w-full"
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
