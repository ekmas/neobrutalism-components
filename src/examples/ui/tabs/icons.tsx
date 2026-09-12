import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsIconsDemo() {
  return (
    <Tabs defaultValue="preview" className="w-fit">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
