"use client"

import * as React from "react"

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const items = [
  { name: "name", required: true },
  { name: "email", required: true },
] as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function QuestionnaireValidationDemo() {
  const [email, setEmail] = React.useState("")
  const [result, setResult] = React.useState<{
    name: string
    email: string
  } | null>(null)

  const emailInvalid = email.length > 0 && !EMAIL_PATTERN.test(email)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setResult({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
    })
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Questionnaire items={items} onSubmit={handleSubmit}>
        <QuestionnaireProgress />
        <QuestionnaireItem name="name" required>
          <QuestionnaireTitle>What should we call you?</QuestionnaireTitle>
          <QuestionnaireInput
            aria-label="Name"
            placeholder="Your name"
            autoComplete="name"
          />
          <QuestionnaireError>Enter your name to continue.</QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireItem name="email" required invalid={emailInvalid}>
          <QuestionnaireTitle>Where can we reach you?</QuestionnaireTitle>
          <QuestionnaireDescription>
            We only use this to send you the results.
          </QuestionnaireDescription>
          <QuestionnaireInput
            type="email"
            aria-label="Email"
            placeholder="you@example.com"
            autoComplete="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <QuestionnaireError>
            {email
              ? "Enter a valid email address."
              : "Enter your email to continue."}
          </QuestionnaireError>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireNext />
          <QuestionnaireSubmit />
        </QuestionnaireActions>
      </Questionnaire>
      {result ? (
        <p className="text-sm font-base text-foreground">
          Thanks {result.name}, we&apos;ll be in touch at {result.email}.
        </p>
      ) : null}
    </div>
  )
}
