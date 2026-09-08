import { Kbd } from "@/components/ui/kbd"

export default function KbdDemo() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>Ctrl</Kbd>
      <Kbd>⌘K</Kbd>
      <Kbd>Ctrl + B</Kbd>
    </div>
  )
}
