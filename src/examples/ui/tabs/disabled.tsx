import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsDisabledDemo() {
  return (
    <Tabs defaultValue="home" className="w-fit">
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
