import { MessageCircle } from "lucide-react"

import Star22 from "@/components/stars/s22"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import DecorStar, { GRID_BACKGROUND } from "./decor-star"
import SectionHeading from "./section-heading"

const FAQS = [
  {
    question: "How long does it take to switch from Jira or GitHub Issues?",
    answer:
      "Most teams are fully moved in an afternoon. The importer brings over issues, comments, labels, assignees and history, and you can run both tools side by side while you switch.",
  },
  {
    question: "Is there really a free plan?",
    answer:
      "Yes. Starter is free forever for up to 10 members with unlimited issues. You only pay when you need AI triage, roadmaps or more seats.",
  },
  {
    question: "What do the AI agents have access to?",
    answer:
      "Agents only read the workspaces you enable them for, and every action they take is logged and reversible. Your data is never used to train shared models.",
  },
  {
    question: "Can I change plans or cancel at any time?",
    answer:
      "You can upgrade, downgrade or cancel whenever you like. Changes are prorated to the day and you can export all of your data at any point.",
  },
  {
    question: "Do you offer discounts for startups and non-profits?",
    answer:
      "Startups under two years old get 50% off Pro for the first year, and registered non-profits get Pro for free. Reach out to our team to apply.",
  },
]

export default function FAQ() {
  return (
    <section
      id="faq"
      className={cn(
        "scroll-mt-16 border-b-4 border-border bg-secondary-background px-5 py-24",
        GRID_BACKGROUND,
      )}
    >
      {/* Below lg the left column dissolves into the grid so the contact card
          can move below the accordion. */}
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
        <div className="contents lg:flex lg:flex-col">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions? Answers."
            description={
              <>
                Everything you need to know about Planly. Can&apos;t find what
                you&apos;re looking for?
              </>
            }
            align="left"
            className="mb-4 lg:mb-8"
          />
          <div className="relative order-last overflow-hidden lg:order-0 rounded-base border-2 border-border bg-background p-6 shadow-shadow">
            <DecorStar
              star={Star22}
              color="var(--chart-2)"
              className="absolute -bottom-10 -right-10 size-32 rotate-12"
            />
            <MessageCircle className="size-6" />
            <p className="mt-3 font-heading text-lg">Talk to a human</p>
            <p className="mt-1 text-sm font-base">
              Our team replies in under 2 hours on weekdays.
            </p>
            <Button variant="neutral" className="mt-5">
              Chat with us
            </Button>
          </div>
        </div>

        <Accordion className="space-y-4">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
