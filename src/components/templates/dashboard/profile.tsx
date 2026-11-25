"use client"

import { useState } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import { NOTIFICATIONS, USER } from "./data"
import { ChartCard } from "./shared"

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "role", label: "Role", type: "text", autoComplete: "off" },
  { name: "store", label: "Store", type: "text", autoComplete: "off" },
] as const

export default function Profile() {
  const [saved, setSaved] = useState(false)

  return (
    <div className="grid items-start gap-5 xl:grid-cols-3">
      <ChartCard
        title="Your details"
        description="Shown to your team and on exported reports"
        className="xl:col-span-2"
      >
        <form
          className="flex flex-col gap-5"
          onChange={() => setSaved(false)}
          onSubmit={(event) => {
            event.preventDefault()
            // Send the form to your API here.
            setSaved(true)
          }}
        >
          <div className="flex items-center gap-4">
            <Avatar size="lg">
              <AvatarFallback className="bg-chart-3">
                {USER.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate font-heading text-lg">{USER.name}</p>
              <p className="truncate text-sm">Member since {USER.since}</p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {FIELDS.map(({ name, label, ...field }) => (
              <div key={name} className="flex flex-col gap-2">
                <Label htmlFor={`profile-${name}`}>{label}</Label>
                <Input
                  id={`profile-${name}`}
                  name={name}
                  defaultValue={USER[name]}
                  required
                  {...field}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button type="submit">Save changes</Button>
            <p aria-live="polite" className="text-sm">
              {saved && "Changes saved."}
            </p>
          </div>
        </form>
      </ChartCard>

      <ChartCard title="Notifications" description="Sent to your email">
        <ul className="flex flex-col gap-5">
          {NOTIFICATIONS.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <Label htmlFor={`notify-${item.id}`}>{item.label}</Label>
                <p id={`notify-${item.id}-text`} className="text-sm">
                  {item.description}
                </p>
              </div>
              <Switch
                id={`notify-${item.id}`}
                aria-describedby={`notify-${item.id}-text`}
                defaultChecked={item.enabled}
              />
            </li>
          ))}
        </ul>
      </ChartCard>
    </div>
  )
}
