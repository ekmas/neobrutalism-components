import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DirectionProvider } from "@/components/ui/direction"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DirectionDemo() {
  return (
    <DirectionProvider direction="rtl">
      <div dir="rtl" className="flex flex-col items-start gap-4">
        <Popover>
          <PopoverTrigger render={<Button variant="neutral" />}>
            افتح القائمة
            <ArrowRightIcon />
          </PopoverTrigger>
          <PopoverContent side="inline-end" align="start">
            <p className="text-sm font-base">
              This popover opens on the inline end side. In RTL that is the
              left, because the provider tells Base UI which direction to use.
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </DirectionProvider>
  )
}
