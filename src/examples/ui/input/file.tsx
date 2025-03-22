import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputFileDemo() {
  return (
    <div className="grid w-full max-w-64 items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}
