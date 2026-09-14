import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function SliderDemo() {
  return (
    <div className="grid w-full gap-3 text-foreground">
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <span className="text-sm font-base">40%</span>
      </div>
      <Slider defaultValue={[40]} max={100} step={1} />
    </div>
  )
}
