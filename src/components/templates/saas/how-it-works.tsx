import { FileInput, Rocket, Workflow } from "lucide-react"

import Star4 from "@/components/stars/s4"
import Star29 from "@/components/stars/s29"
import { cn } from "@/lib/utils"

import { SectionStars } from "./decor-star"
import SectionHeading from "./section-heading"

const STEPS = [
  {
    icon: FileInput,
    title: "Import in one click",
    description:
      "Bring issues, projects and people over from Jira, GitHub or a CSV. History and comments come along too.",
    color: "bg-chart-1",
  },
  {
    icon: Workflow,
    title: "Automate the busywork",
    description:
      "Turn on agents and rules that triage, label and assign, so humans only touch what needs a human.",
    color: "bg-chart-3",
  },
  {
    icon: Rocket,
    title: "Ship on schedule",
    description:
      "Plan cycles, spot blockers early and release on time, every time. Your stakeholders get live updates.",
    color: "bg-chart-4",
  },
]

export default function HowItWorks() {
  return (
    <section className="relative isolate overflow-hidden border-b-4 border-border bg-background px-5 py-24">
      <SectionStars
        stars={[
          {
            star: Star29,
            color: "var(--chart-3)",
            className: "-left-16 lg:-left-10 top-[40%] size-24 rotate-[50deg] lg:size-40",
          },
          {
            star: Star4,
            color: "var(--chart-2)",
            className: "-right-16 lg:-right-10 top-4 size-24 -rotate-12 lg:size-40",
          },
        ]}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="How it works"
          title="Up and running before your coffee cools"
          description="Most teams switch in an afternoon. No consultants, no migration project."
        />

        <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden
            className="absolute left-[16.67%] right-[16.67%] top-6 hidden -translate-y-1/2 border-t-2 border-border md:block"
          />
          {STEPS.map(({ icon: Icon, title, description, color }) => (
            <li
              key={title}
              className="relative flex flex-col items-center text-center"
            >
              <span
                className={cn(
                  "flex size-12 items-center justify-center rounded-base border-2 border-border",
                  color,
                )}
              >
                <Icon className="size-6" />
              </span>
              <h3 className="mt-6 font-heading text-xl">{title}</h3>
              <p className="mt-2 max-w-xs text-sm font-base">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
