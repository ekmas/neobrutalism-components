import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsVerticalDemo() {
  return (
    <Tabs defaultValue="account" orientation="vertical" className="w-fit">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
