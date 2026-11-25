"use client"

import {
  ArrowRight,
  Bot,
  Plus,
  RotateCcw,
  Sparkles,
  TrendingDown,
} from "lucide-react"

import { useRef, useState } from "react"

import Star14 from "@/components/stars/s14"
import Star26 from "@/components/stars/s26"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import { GRID_BACKGROUND, SectionStars } from "./decor-star"

type Status = "todo" | "progress" | "done"

type Task = {
  id: string
  title: string
  tag: string
  tagColor: string
  status: Status
  agent?: boolean
}

const COLUMNS: { id: Status; title: string }[] = [
  { id: "todo", title: "Todo" },
  { id: "progress", title: "In progress" },
  { id: "done", title: "Done" },
]

const NEXT_STATUS: Record<Status, Status> = {
  todo: "progress",
  progress: "done",
  done: "todo",
}

const INITIAL_TASKS: Task[] = [
  {
    id: "PLN-142",
    title: "Onboarding checklist v2",
    tag: "Design",
    tagColor: "bg-chart-5",
    status: "todo",
  },
  {
    id: "PLN-139",
    title: "Rate limit the public API",
    tag: "Backend",
    tagColor: "bg-chart-2",
    status: "todo",
  },
  {
    id: "PLN-131",
    title: "Usage-based billing",
    tag: "Billing",
    tagColor: "bg-chart-4",
    status: "progress",
    agent: true,
  },
  {
    id: "PLN-128",
    title: "Fix flaky e2e tests",
    tag: "Infra",
    tagColor: "bg-chart-3",
    status: "progress",
  },
  {
    id: "PLN-120",
    title: "Dark mode for dashboard",
    tag: "Design",
    tagColor: "bg-chart-5",
    status: "done",
  },
  {
    id: "PLN-117",
    title: "Slack notifications",
    tag: "Integrations",
    tagColor: "bg-chart-1",
    status: "done",
  },
]

const NEW_ISSUES = [
  { title: "Write release notes", tag: "Docs", tagColor: "bg-chart-3" },
  { title: "Audit onboarding emails", tag: "Growth", tagColor: "bg-chart-4" },
  { title: "Fix avatar upload", tag: "Bug", tagColor: "bg-chart-2" },
  { title: "Add SSO to admin panel", tag: "Security", tagColor: "bg-chart-5" },
]

const titleOf = (status: Status) =>
  COLUMNS.find((column) => column.id === status)!.title

function TaskBoard() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [dragId, setDragId] = useState<string | null>(null)
  const [overColumn, setOverColumn] = useState<Status | null>(null)
  const [activity, setActivity] = useState({
    actor: "Agent",
    text: "moved PLN-131 to In progress",
  })
  const nextNumber = useRef(143)

  function move(id: string, to: Status) {
    setTasks((current) => {
      const task = current.find((t) => t.id === id)
      if (!task || task.status === to) return current
      return [...current.filter((t) => t.id !== id), { ...task, status: to }]
    })
    setActivity({ actor: "You", text: `moved ${id} to ${titleOf(to)}` })
  }

  function addIssue() {
    const id = `PLN-${nextNumber.current}`
    const template = NEW_ISSUES[nextNumber.current % NEW_ISSUES.length]
    nextNumber.current += 1
    setTasks((current) => [...current, { id, ...template, status: "todo" }])
    setActivity({ actor: "You", text: `created ${id}` })
  }

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="absolute -right-2 -top-5 z-10 flex rotate-3 items-center gap-1.5 rounded-base border-2 border-border bg-chart-3 px-3 py-1.5 text-sm font-heading shadow-shadow">
        <TrendingDown className="size-4" /> Cycle time −32%
      </div>

      <div className="overflow-hidden rounded-base border-2 border-border bg-background shadow-shadow">
        <div className="flex items-center justify-between border-b-2 border-border bg-background px-4 py-2.5">
          <div className="flex flex-1 items-center gap-1.5">
            <span className="size-3 rounded-full border-2 border-border bg-chart-2" />
            <span className="size-3 rounded-full border-2 border-border bg-chart-3" />
            <span className="size-3 rounded-full border-2 border-border bg-chart-4" />
            <span className="ml-3 hidden text-xs font-base md:inline">
              Drag cards to move them
            </span>
          </div>
          <span className="shrink-0 text-xs font-heading">
            Sprint 24 · Planly
          </span>
          <span className="flex-1" />
        </div>

        <div className="grid auto-cols-[78%] grid-flow-col gap-3 overflow-x-auto p-4 pb-12 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:p-6 sm:pb-12">
          {COLUMNS.map((column) => {
            const columnTasks = tasks.filter((t) => t.status === column.id)

            return (
              <div
                key={column.id}
                onDragOver={(e) => {
                  e.preventDefault()
                  setOverColumn(column.id)
                }}
                onDragLeave={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOverColumn(null)
                  }
                }}
                onDrop={(e) => {
                  e.preventDefault()
                  const id = e.dataTransfer.getData("text/plain")
                  if (id) move(id, column.id)
                  setOverColumn(null)
                  setDragId(null)
                }}
                className={cn(
                  "-m-2 flex flex-col gap-3 rounded-base border-2 border-transparent p-2 transition-colors",
                  overColumn === column.id &&
                    dragId &&
                    "border-dashed border-border bg-secondary-background",
                )}
              >
                <div className="flex items-center justify-between text-xs font-heading">
                  {column.title}
                  <span className="rounded-base border-2 border-border bg-secondary-background px-1.5">
                    {columnTasks.length}
                  </span>
                </div>

                {columnTasks.map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData("text/plain", task.id)
                      e.dataTransfer.effectAllowed = "move"
                      setDragId(task.id)
                    }}
                    onDragEnd={() => {
                      setDragId(null)
                      setOverColumn(null)
                    }}
                    className={cn(
                      "cursor-grab rounded-base border-2 border-border bg-secondary-background p-3 shadow-[2px_2px_0_0_var(--border)] active:cursor-grabbing",
                      dragId === task.id && "border-dashed shadow-none",
                    )}
                  >
                    <div className="flex items-center justify-between text-[11px] font-base">
                      <span className="flex items-center gap-1.5">
                        {task.id}
                        {task.agent && <Bot className="size-3.5" />}
                      </span>
                      <button
                        type="button"
                        onClick={() => move(task.id, NEXT_STATUS[task.status])}
                        aria-label={`Move ${task.id} to ${titleOf(NEXT_STATUS[task.status])}`}
                        className="flex size-6 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground transition-transform hover:translate-x-px hover:translate-y-px"
                      >
                        {task.status === "done" ? (
                          <RotateCcw className="size-3" />
                        ) : (
                          <ArrowRight className="size-3" />
                        )}
                      </button>
                    </div>
                    <p
                      className={cn(
                        "mt-1 text-sm font-heading leading-snug",
                        task.status === "done" && "line-through",
                      )}
                    >
                      {task.title}
                    </p>
                    <span
                      className={cn(
                        "mt-2 inline-block rounded-base border-2 border-border px-1.5 text-[10px] font-heading",
                        task.tagColor,
                      )}
                    >
                      {task.tag}
                    </span>
                  </div>
                ))}

                {column.id === "todo" && (
                  <button
                    type="button"
                    onClick={addIssue}
                    className="flex items-center justify-center gap-1.5 rounded-base border-2 border-dashed border-border px-3 py-2 text-xs font-heading transition-colors hover:bg-main hover:text-main-foreground"
                  >
                    <Plus className="size-3.5" /> New issue
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div
        aria-live="polite"
        className="absolute -bottom-6 -left-2 z-10 flex -rotate-3 items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-3 py-2 text-sm font-base shadow-shadow sm:-left-6"
      >
        <span className="flex size-6 items-center justify-center rounded-base border-2 border-border bg-chart-3">
          <Sparkles className="size-3.5" />
        </span>
        <span>
          <span className="font-heading">{activity.actor}</span> {activity.text}
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b-4 border-border bg-secondary-background",
        GRID_BACKGROUND,
      )}
    >
      <SectionStars
        stars={[
          {
            star: Star14,
            color: "var(--chart-3)",
            className:
              "-left-16 lg:-left-12 top-8 size-24 rotate-[15deg] lg:size-40",
          },
          {
            star: Star26,
            color: "var(--chart-4)",
            className:
              "-right-16 lg:-right-12 top-[30%] size-24 -rotate-[40deg] lg:size-40",
          },
        ]}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-5 py-20 lg:py-24">
        <div className="flex flex-col items-center gap-7 text-center">
          <h1 className="font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Plan less.
            <br />
            Ship{" "}
            <span className="inline-block -rotate-2 rounded-base border-2 border-border bg-chart-3 px-3 shadow-shadow">
              more.
            </span>
          </h1>

          <p className="max-w-xl text-lg font-base">
            Planly is the project tracker for teams that move fast. Issues,
            roadmaps and AI triage in one fast, focused workspace.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button className="sm:h-11 sm:px-8">Start free trial</Button>
            <Button variant="neutral" className="sm:h-11 sm:px-8">
              Book a demo
            </Button>
          </div>
        </div>

        <TaskBoard />
      </div>
    </section>
  )
}
