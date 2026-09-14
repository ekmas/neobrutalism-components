"use client"

import * as React from "react"

import { Progress, ProgressLabel } from "@/components/ui/progress"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const items = [
  {
    name: "role",
    choices: [
      { value: "designer" },
      { value: "developer" },
      { value: "founder" },
    ],
    required: true,
  },
  {
    name: "team",
    choices: [{ value: "solo" }, { value: "small" }, { value: "large" }],
    required: true,
  },
  {
    name: "usage",
    choices: [{ value: "side" }, { value: "work" }, { value: "both" }],
    required: true,
  },
] as const

export default function QuestionnaireControlledDemo() {
  const [item, setItem] = React.useState<string>(items[0].name)
  const [submitted, setSubmitted] = React.useState(false)

  const step = items.findIndex((entry) => entry.name === item) + 1

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Progress value={(step / items.length) * 100}>
        <ProgressLabel>
          Step {step} of {items.length}
        </ProgressLabel>
      </Progress>
      <Questionnaire
        items={items}
        item={item}
        onItemChange={setItem}
        onSubmit={handleSubmit}
      >
        <QuestionnaireItem name="role" required>
          <QuestionnaireTitle>What best describes you?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="designer">Designer</QuestionnaireChoice>
            <QuestionnaireChoice value="developer">
              Developer
            </QuestionnaireChoice>
            <QuestionnaireChoice value="founder">Founder</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="team" required>
          <QuestionnaireTitle>How big is your team?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="solo">Just me</QuestionnaireChoice>
            <QuestionnaireChoice value="small">
              2 to 10 people
            </QuestionnaireChoice>
            <QuestionnaireChoice value="large">
              More than 10 people
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="usage" required>
          <QuestionnaireTitle>Where will you use it?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="side">
              Side projects
            </QuestionnaireChoice>
            <QuestionnaireChoice value="work">At work</QuestionnaireChoice>
            <QuestionnaireChoice value="both">Both</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
          <QuestionnaireSubmit />
        </QuestionnaireActions>
      </Questionnaire>
      {submitted ? (
        <p className="text-sm font-base text-foreground">
          All done, thanks for your answers!
        </p>
      ) : null}
    </div>
  )
}
