import { ArrowRight, Blocks, Globe, Paintbrush } from "lucide-react"

import { Metadata } from "next"
import Link from "next/link"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Hire Me",
  description:
    "Samuel Breznjak is available for freelance web development. Need a beautiful, modern website? Let's work together.",
}

const services = [
  {
    title: "Web Development",
    description:
      "Full-stack web apps and sites, built from the ground up and tailored to your needs.",
    icon: Globe,
  },
  {
    title: "UI Design & Implementation",
    description:
      "Creating and implementing designs that are pixel-perfect, interactive, and consistent.",
    icon: Paintbrush,
  },
  {
    title: "Component Libraries",
    description:
      "Custom component systems built on top of shadcn/ui or from scratch, tailored to your brand.",
    icon: Blocks,
  },
]

export default function HireMePage() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Available for Hire</PageHeading>

        <PageDescription>
          Hi, I&apos;m Samuel - the developer behind this library. Open to
          full-time, part-time, and freelance work.
        </PageDescription>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            size="lg"
            className="text-base px-4 sm:text-lg sm:px-5"
            nativeButton={false}
            render={
              <Link
                href="https://samuelbreznjak.com"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            Get in touch
            <ArrowRight className="size-5!" />
          </Button>
        </div>
      </PageHeader>

      <section className="mb-16">
        <h2 className="font-heading text-2xl mb-8 text-center mt-10">
          What I do
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((s) => (
            <Card
              key={s.title}
              className="bg-secondary-background items-center text-center px-6 py-6 gap-3 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <s.icon className="size-10" />
              <p className="font-heading text-xl">{s.title}</p>
              <p className="font-base leading-relaxed text-foreground/80 text-sm">
                {s.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
