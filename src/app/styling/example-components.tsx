import ChartBarMultiple from "@/examples/ui/chart/chart-bar-multiple"

import AlertDemo from "./demos/alert"
import ChatDemo from "./demos/chat"
import CollapsibleDemo from "./demos/collapsible"
import InputGroupDemo from "./demos/input-group"
import InputGroupTextareaDemo from "./demos/input-group-textarea"
import ItemsDemo from "./demos/items"
import ScrollAreaDemo from "./demos/scroll-area"
import SettingsDemo from "./demos/settings"
import SliderDemo from "./demos/slider"

export default function ExampleComponents() {
  return (
    <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10 gap-5 not-prose">
      <div className="flex flex-col gap-5">
        <SettingsDemo />
        <InputGroupDemo />
        <CollapsibleDemo />
        <SliderDemo />
        <AlertDemo />
        <InputGroupTextareaDemo />
      </div>
      <div className="lg:flex hidden flex-col gap-5">
        <ChatDemo />
        <ItemsDemo />
      </div>
      <div className="flex flex-col gap-5 max-sm:order-first">
        <ChartBarMultiple />
        <div className="max-sm:hidden">
          <ScrollAreaDemo />
        </div>
      </div>
    </div>
  )
}
