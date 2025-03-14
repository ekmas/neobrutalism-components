import AccordionDemo from "@/components/examples/ui/accordion"
import AlertDemo from "@/components/examples/ui/alert"
import AlertDialogDemo from "@/components/examples/ui/alert-dialog"
import AvatarDemo from "@/components/examples/ui/avatar"
import BadgeDemo from "@/components/examples/ui/badge"
import BreadcrumbDemo from "@/components/examples/ui/breadcrumb"
import ButtonDemo from "@/components/examples/ui/button"
import CalendarDemo from "@/components/examples/ui/calendar"
import CardDemo from "@/components/examples/ui/card"
import CarouselDemo from "@/components/examples/ui/carousel"
import CheckboxDemo from "@/components/examples/ui/checkbox"
import CollapsibleDemo from "@/components/examples/ui/collapsible"
import ComboboxDemo from "@/components/examples/ui/combobox"
import CommandDemo from "@/components/examples/ui/command"
import ContextMenuDemo from "@/components/examples/ui/context-menu"
import DataTableDemo from "@/components/examples/ui/data-table"
import DatePickerDemo from "@/components/examples/ui/date-picker"
import DialogDemo from "@/components/examples/ui/dialog"
import DrawerDemo from "@/components/examples/ui/drawer"
import DropdownMenuDemo from "@/components/examples/ui/dropdown-menu"
import FormDemo from "@/components/examples/ui/form"
import HoverCardDemo from "@/components/examples/ui/hover-card"
import ImageCardDemo from "@/components/examples/ui/image-card"
import InputDemo from "@/components/examples/ui/input"
import InputOTPDemo from "@/components/examples/ui/input-otp"
import LabelDemo from "@/components/examples/ui/label"
import MarqueeDemo from "@/components/examples/ui/marquee"
import MenubarDemo from "@/components/examples/ui/menubar"
import NavigationMenuDemo from "@/components/examples/ui/navigation-menu"
import PaginationDemo from "@/components/examples/ui/pagination"
import PopoverDemo from "@/components/examples/ui/popover"
import ProgressDemo from "@/components/examples/ui/progress"
import RadioGroupDemo from "@/components/examples/ui/radio-group"
import ResizableDemo from "@/components/examples/ui/resizable"
import ScrollAreaDemo from "@/components/examples/ui/scroll-area"
import SelectDemo from "@/components/examples/ui/select"
import SheetDemo from "@/components/examples/ui/sheet"
import SkeletonDemo from "@/components/examples/ui/skeleton"
import SliderDemo from "@/components/examples/ui/slider"
import SonnerDemo from "@/components/examples/ui/sonner"
import SwitchDemo from "@/components/examples/ui/switch"
import TableDemo from "@/components/examples/ui/table"
import TabsDemo from "@/components/examples/ui/tabs"
import TextareaDemo from "@/components/examples/ui/textarea"
import TooltipDemo from "@/components/examples/ui/tooltip"

type Component = {
  name: string
  exampleComponent: React.ComponentType
  notShadcn?: boolean
}

const COMPONENTS: Component[] = [
  {
    name: "Accordion",
    exampleComponent: AccordionDemo,
  },
  {
    name: "Alert Dialog",
    exampleComponent: AlertDialogDemo,
  },
  {
    name: "Alert",
    exampleComponent: AlertDemo,
  },
  {
    name: "Avatar",
    exampleComponent: AvatarDemo,
  },
  {
    name: "Badge",
    exampleComponent: BadgeDemo,
  },
  {
    name: "Breadcrumb",
    exampleComponent: BreadcrumbDemo,
  },
  {
    name: "Button",
    exampleComponent: ButtonDemo,
  },
  {
    name: "Calendar",
    exampleComponent: CalendarDemo,
  },
  {
    name: "Card",
    exampleComponent: CardDemo,
  },
  {
    name: "Carousel",
    exampleComponent: CarouselDemo,
  },
  {
    name: "Checkbox",
    exampleComponent: CheckboxDemo,
  },
  {
    name: "Collapsible",
    exampleComponent: CollapsibleDemo,
  },
  {
    name: "Combobox",
    exampleComponent: ComboboxDemo,
  },
  {
    name: "Command",
    exampleComponent: CommandDemo,
  },
  {
    name: "Context Menu",
    exampleComponent: ContextMenuDemo,
  },
  {
    name: "Date Picker",
    exampleComponent: DatePickerDemo,
  },
  {
    name: "Data Table",
    exampleComponent: DataTableDemo,
  },
  {
    name: "Dialog",
    exampleComponent: DialogDemo,
  },
  {
    name: "Drawer",
    exampleComponent: DrawerDemo,
  },
  {
    name: "Dropdown Menu",
    exampleComponent: DropdownMenuDemo,
  },
  {
    name: "Form",
    exampleComponent: FormDemo,
  },
  {
    name: "Hover Card",
    exampleComponent: HoverCardDemo,
  },
  {
    name: "Image Card",
    exampleComponent: ImageCardDemo,
    notShadcn: true,
  },
  {
    name: "Input Otp",
    exampleComponent: InputOTPDemo,
  },
  {
    name: "Input",
    exampleComponent: InputDemo,
  },
  {
    name: "Label",
    exampleComponent: LabelDemo,
  },
  {
    name: "Marquee",
    exampleComponent: MarqueeDemo,
    notShadcn: true,
  },
  {
    name: "Menubar",
    exampleComponent: MenubarDemo,
  },
  {
    name: "Navigation Menu",
    exampleComponent: NavigationMenuDemo,
  },
  {
    name: "Pagination",
    exampleComponent: PaginationDemo,
  },
  {
    name: "Popover",
    exampleComponent: PopoverDemo,
  },
  {
    name: "Progress",
    exampleComponent: ProgressDemo,
  },
  {
    name: "Radio Group",
    exampleComponent: RadioGroupDemo,
  },
  {
    name: "Resizable",
    exampleComponent: ResizableDemo,
  },
  {
    name: "Scroll Area",
    exampleComponent: ScrollAreaDemo,
  },
  {
    name: "Select",
    exampleComponent: SelectDemo,
  },
  {
    name: "Sheet",
    exampleComponent: SheetDemo,
  },
  {
    name: "Skeleton",
    exampleComponent: SkeletonDemo,
  },
  {
    name: "Slider",
    exampleComponent: SliderDemo,
  },
  {
    name: "Sonner",
    exampleComponent: SonnerDemo,
  },
  {
    name: "Switch",
    exampleComponent: SwitchDemo,
  },
  {
    name: "Table",
    exampleComponent: TableDemo,
  },
  {
    name: "Tabs",
    exampleComponent: TabsDemo,
  },
  {
    name: "Textarea",
    exampleComponent: TextareaDemo,
  },
  {
    name: "Tooltip",
    exampleComponent: TooltipDemo,
  },
]

export default COMPONENTS
