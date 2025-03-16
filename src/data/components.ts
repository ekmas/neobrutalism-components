import AccordionDemo from "@/examples/ui/accordion"
import AlertDemo from "@/examples/ui/alert"
import AlertDialogDemo from "@/examples/ui/alert-dialog"
import AlertDestructiveDemo from "@/examples/ui/alert/destructive"
import AvatarDemo from "@/examples/ui/avatar"
import BadgeDemo from "@/examples/ui/badge"
import BadgeNeutralDemo from "@/examples/ui/badge/neutral"
import BreadcrumbDemo from "@/examples/ui/breadcrumb"
import ButtonDemo from "@/examples/ui/button"
import ButtonNeutralDemo from "@/examples/ui/button/neutral"
import ButtonNoShadowDemo from "@/examples/ui/button/no-shadow"
import ButtonReverseDemo from "@/examples/ui/button/reverse"
import CalendarDemo from "@/examples/ui/calendar/index"
import CalendarRangeDemo from "@/examples/ui/calendar/range"
import CardDemo from "@/examples/ui/card"
import CarouselDemo from "@/examples/ui/carousel"
import CheckboxDemo from "@/examples/ui/checkbox"
import CollapsibleDemo from "@/examples/ui/collapsible"
import ComboboxDemo from "@/examples/ui/combobox"
import CommandDemo from "@/examples/ui/command"
import ContextMenuDemo from "@/examples/ui/context-menu"
import DataTableDemo from "@/examples/ui/data-table"
import DatePickerDemo from "@/examples/ui/date-picker"
import DialogDemo from "@/examples/ui/dialog"
import DrawerDemo from "@/examples/ui/drawer"
import DropdownMenuDemo from "@/examples/ui/dropdown-menu"
import FormDemo from "@/examples/ui/form"
import HoverCardDemo from "@/examples/ui/hover-card"
import ImageCardDemo from "@/examples/ui/image-card"
import InputDemo from "@/examples/ui/input"
import InputOTPDemo from "@/examples/ui/input-otp"
import LabelDemo from "@/examples/ui/label"
import MarqueeDemo from "@/examples/ui/marquee"
import MenubarDemo from "@/examples/ui/menubar"
import NavigationMenuDemo from "@/examples/ui/navigation-menu"
import PaginationDemo from "@/examples/ui/pagination"
import PopoverDemo from "@/examples/ui/popover"
import ProgressDemo from "@/examples/ui/progress"
import RadioGroupDemo from "@/examples/ui/radio-group"
import ResizableDemo from "@/examples/ui/resizable"
import ScrollAreaDemo from "@/examples/ui/scroll-area"
import SelectDemo from "@/examples/ui/select"
import SheetDemo from "@/examples/ui/sheet"
import SkeletonDemo from "@/examples/ui/skeleton"
import SliderDemo from "@/examples/ui/slider"
import SonnerDemo from "@/examples/ui/sonner"
import SwitchDemo from "@/examples/ui/switch"
import TableDemo from "@/examples/ui/table"
import TabsDemo from "@/examples/ui/tabs"
import TextareaDemo from "@/examples/ui/textarea"
import TooltipDemo from "@/examples/ui/tooltip"

type Component = {
  name: string
  exampleComponent: React.ComponentType
  variants?: Record<string, React.ComponentType>
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
    variants: {
      default: AlertDemo,
      destructive: AlertDestructiveDemo,
    },
  },
  {
    name: "Avatar",
    exampleComponent: AvatarDemo,
  },
  {
    name: "Badge",
    exampleComponent: BadgeDemo,
    variants: {
      default: BadgeDemo,
      neutral: BadgeNeutralDemo,
    },
  },
  {
    name: "Breadcrumb",
    exampleComponent: BreadcrumbDemo,
  },
  {
    name: "Button",
    exampleComponent: ButtonDemo,
    variants: {
      default: ButtonDemo,
      reverse: ButtonReverseDemo,
      noShadow: ButtonNoShadowDemo,
      neutral: ButtonNeutralDemo,
    },
  },
  {
    name: "Calendar",
    exampleComponent: CalendarDemo,
    variants: {
      default: CalendarDemo,
      range: CalendarRangeDemo,
    },
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
