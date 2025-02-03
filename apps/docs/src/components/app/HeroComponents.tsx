import { Marquee } from "@devnomic/marquee"
import { Terminal } from "lucide-react"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Input } from "@/components/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function HeroComponents() {
  return (
    <div
      aria-hidden="true"
      className="grid grid-cols-2 h-[100dvh] m1000:hidden w-[750px] m1600:w-[650px] m1500:w-[400px] m1500:right-32 m1200:w-[330px] m1100:right-2 m1500:grid-cols-1 right-2 absolute top-0 portrait:h-[100svh] overflow-y-hidden gap-5"
    >
      <div className="max-w-full">
        <Marquee
          direction="up"
          className="flex flex-col w-full max-w-full h-full overflow-hidden pr-1 gap-5"
          pauseOnHover
        >
          <CardExample />
          <AlertExample />
          <AccordionExample />
          <InputOTPExample />
          <ResizableExample />
          <ScrollAreaExample />
          <SliderExample />
          <BreadcrumbExample />
          <RadioGroupExample />
          <ContextMenuExample />
          <CheckboxExample />
          <CarouselExample />
        </Marquee>
      </div>
      <div className="max-w-full m1500:hidden">
        <Marquee
          direction="up"
          className="flex flex-col w-full max-w-full h-full overflow-hidden pr-1 gap-5"
          reverse
          pauseOnHover
        >
          <CarouselExample />
          <ScrollAreaExample />
          <AlertExample />
          <ContextMenuExample />
          <RadioGroupExample />
          <BreadcrumbExample />
          <AccordionExample />
          <CheckboxExample />
          <InputOTPExample />
          <SliderExample />
          <ResizableExample />
          <CardExample />
        </Marquee>
      </div>
    </div>
  )
}

const CardExample = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger
                className="bg-white text-black dark:bg-secondaryBlack dark:text-white"
                id="framework"
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button>Cancel</Button>
      <Button variant="neutral">Deploy</Button>
    </CardFooter>
  </Card>
)

const AlertExample = () => (
  <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Alert</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the cli.
    </AlertDescription>
  </Alert>
)

const AccordionExample = () => (
  <Accordion className="w-full" type="single" collapsible>
    <AccordionItem className="max-w-full" value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

const InputOTPExample = () => (
  <div className="bg-main w-full flex-col border-2 border-black shadow-light py-4 flex items-center justify-center rounded-base">
    <p className="mb-4 text-lg text-text">Your OTP code is:</p>

    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  </div>
)

const ResizableExample = () => (
  <ResizablePanelGroup
    direction="horizontal"
    className="rounded-base max-w-md max-h-[200px] min-h-[200px] border-2 border-border text-text dark:border-darkBorder shadow-light dark:shadow-dark"
  >
    <ResizablePanel defaultSize={50}>
      <div className="flex h-full items-center justify-center bg-main p-6">
        <span className="font-base">One</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center bg-main p-6">
            <span className="font-base">Two</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center bg-main p-6">
            <span className="font-base">Three</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
)

const ScrollAreaExample = () => (
  <ScrollArea className="rounded-base h-[150px] w-full text-text border-2 border-border dark:border-darkBorder bg-main p-4 shadow-light dark:shadow-dark">
    Jokester began sneaking into the castle in the middle of the night and
    leaving jokes all over the place: under the king&apos;s pillow, in his soup,
    even in the royal toilet. The king was furious, but he couldn&apos;t seem to
    stop Jokester. And then, one day, the people of the kingdom discovered that
    the jokes left by Jokester were so funny that they couldn&apos;t help but
    laugh. And once they started laughing, they couldn&apos;t stop.
  </ScrollArea>
)

const SliderExample = () => (
  <div className="bg-main w-full border-2 border-black shadow-light p-4 py-6 flex items-center justify-center rounded-base">
    <Slider defaultValue={[33]} max={100} step={1} />
  </div>
)

const BreadcrumbExample = () => (
  <div className="bg-main w-full border-2 border-black shadow-light p-4 flex items-center justify-center rounded-base">
    <Breadcrumb>
      <BreadcrumbList className="gap-1 sm:gap-1 dark:text-text">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/shadcn/components/button">
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Button</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
)

const RadioGroupExample = () => (
  <div className="bg-main w-full border-2 border-black dark:text-text shadow-light p-4 flex items-center justify-center rounded-base">
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem className="dark:text-text" value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="dark:text-text"
          value="comfortable"
          id="r2"
        />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className="dark:text-text" value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  </div>
)

const CheckboxExample = () => (
  <div className="bg-main w-full border-2 border-black dark:text-text shadow-light p-4 flex items-center justify-center rounded-base">
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </div>
)

const CarouselExample = () => (
  <Carousel className="w-full mx-auto max-w-[200px]">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="p-[10px]">
            <Card className="shadow-none">
              <CardContent className="flex aspect-square items-center justify-center p-4">
                <span className="text-3xl font-base">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)

const ContextMenuExample = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-border dark:border-darkText border-dashed text-sm font-base">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent className="w-64">
      <ContextMenuItem inset>
        Back
        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem inset disabled>
        Forward
        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem inset>
        Reload
        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>
            Save Page As...
            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Create Shortcut...</ContextMenuItem>
          <ContextMenuItem>Name Window...</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Developer Tools</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem checked>
        Show Bookmarks Bar
        <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
      <ContextMenuSeparator />
      <ContextMenuRadioGroup value="pedro">
        <ContextMenuLabel inset>People</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
        <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuContent>
  </ContextMenu>
)
