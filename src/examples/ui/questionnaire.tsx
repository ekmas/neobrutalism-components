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
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const items = [
  {
    name: "framework",
    choices: [{ value: "next" }, { value: "vite" }, { value: "astro" }],
    required: true,
  },
  {
    name: "features",
    choices: [{ value: "docs" }, { value: "registry" }, { value: "themes" }],
  },
  {
    name: "feedback",
  },
] as const

export default function QuestionnaireDemo() {
  const [answers, setAnswers] = React.useState<Record<
    string,
    string | string[]
  > | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setAnswers({
      framework: String(formData.get("framework") ?? ""),
      features: formData.getAll("features").map(String),
      feedback: String(formData.get("feedback") ?? ""),
    })
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="w-full">
        <Questionnaire
          items={items}
          shortcuts="letters"
          onSubmit={handleSubmit}
        >
          <QuestionnaireProgress />
          <QuestionnaireItem name="framework" required>
            <QuestionnaireTitle>Which framework do you use?</QuestionnaireTitle>
            <QuestionnaireDescription>
              Pick the one you use most of the time.
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="next">
                Next.js
                <QuestionnaireChoiceDescription>
                  App router with React Server Components
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="vite">
                Vite
                <QuestionnaireChoiceDescription>
                  Single page application
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="astro">
                Astro
                <QuestionnaireChoiceDescription>
                  Content focused sites
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>
          <QuestionnaireItem name="features" multiple>
            <QuestionnaireTitle>
              What do you use from the library?
            </QuestionnaireTitle>
            <QuestionnaireDescription>
              Select all that apply, or skip this question.
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="docs">
                Documentation
              </QuestionnaireChoice>
              <QuestionnaireChoice value="registry">
                Registry
              </QuestionnaireChoice>
              <QuestionnaireChoice value="themes">Themes</QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>
          <QuestionnaireItem name="feedback">
            <QuestionnaireTitle>Anything else?</QuestionnaireTitle>
            <QuestionnaireDescription>
              Tell us what you would like to see next.
            </QuestionnaireDescription>
            <QuestionnaireInput
              aria-label="Feedback"
              placeholder="Type your answer..."
            />
            <QuestionnaireError />
          </QuestionnaireItem>
          <QuestionnaireActions>
            <QuestionnairePrevious />
            <QuestionnaireSkip />
            <QuestionnaireNext />
            <QuestionnaireSubmit />
          </QuestionnaireActions>
        </Questionnaire>
      </div>
      {answers ? (
        <pre className="w-full overflow-x-auto rounded-base border-2 border-border bg-secondary-background p-4 text-xs font-base">
          {JSON.stringify(answers, null, 2)}
        </pre>
      ) : null}
    </div>
  )
}
