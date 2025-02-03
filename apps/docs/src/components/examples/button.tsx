import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-5">
      <Button>Default</Button>
      <Button variant="reverse">Reverse</Button>
      <Button variant="noShadow">No Shadow</Button>
      <Button variant="neutral">Neutral</Button>
    </div>
  )
}
