"use client"

import * as React from "react"

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const items = [
  {
    name: "indentation",
    choices: [
      { value: "tabs" },
      { value: "spaces" },
      { value: "both", disabled: true },
    ],
    required: true,
  },
] as const

export default function QuestionnaireSingleStepDemo() {
  const [vote, setVote] = React.useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setVote(String(formData.get("indentation") ?? ""))
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire items={items} shortcuts="numbers" onSubmit={handleSubmit}>
        <QuestionnaireItem name="indentation" required>
          <QuestionnaireTitle>Tabs or spaces?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Use the number keys to pick an answer, then press Enter.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="tabs" defaultChecked>
              Tabs
            </QuestionnaireChoice>
            <QuestionnaireChoice value="spaces">Spaces</QuestionnaireChoice>
            <QuestionnaireChoice value="both" disabled>
              Both
              <QuestionnaireChoiceDescription>
                Not available in this poll.
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Vote</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
      {vote ? (
        <p className="text-sm font-base text-foreground">
          You voted for {vote}.
        </p>
      ) : null}
    </div>
  )
}
