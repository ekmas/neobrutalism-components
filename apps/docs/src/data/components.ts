import AccordionMarkdown from "@/markdown/components/accordion.mdx"
import AlertDialogMarkdown from "@/markdown/components/alert-dialog.mdx"
import AlertMarkdown from "@/markdown/components/alert.mdx"
import AvatarMarkdown from "@/markdown/components/avatar.mdx"
import BadgeMarkdown from "@/markdown/components/badge.mdx"
import BreadcrumbMarkdown from "@/markdown/components/breadcrumb.mdx"
import ButtonMarkdown from "@/markdown/components/button.mdx"
import CalendarMarkdown from "@/markdown/components/calendar.mdx"
import CardMarkdown from "@/markdown/components/card.mdx"
import CarouselMarkdown from "@/markdown/components/carousel.mdx"
import CheckboxMarkdown from "@/markdown/components/checkbox.mdx"
import CollapsibleMarkdown from "@/markdown/components/collapsible.mdx"
import ComboboxMarkdown from "@/markdown/components/combobox.mdx"
import CommandMarkdown from "@/markdown/components/command.mdx"
import ContextMenuMarkdown from "@/markdown/components/context-menu.mdx"
import DataTableMarkdown from "@/markdown/components/data-table.mdx"
import DatePickerMarkdown from "@/markdown/components/date-picker.mdx"
import DialogMarkdown from "@/markdown/components/dialog.mdx"
import DrawerMarkdown from "@/markdown/components/drawer.mdx"
import DropdownMenuMarkdown from "@/markdown/components/dropdown-menu.mdx"
import FormMarkdown from "@/markdown/components/form.mdx"
import HoverCardMarkdown from "@/markdown/components/hover-card.mdx"
import ImageCardMarkdown from "@/markdown/components/image-card.mdx"
import InputOTPMarkdown from "@/markdown/components/input-otp.mdx"
import InputMarkdown from "@/markdown/components/input.mdx"
import LabelMarkdown from "@/markdown/components/label.mdx"
import MarqueeMarkdown from "@/markdown/components/marquee.mdx"
import MenubarMarkdown from "@/markdown/components/menubar.mdx"
import NavigationMenuMarkdown from "@/markdown/components/navigation-menu.mdx"
import PaginationMarkdown from "@/markdown/components/pagination.mdx"
import PopoverMarkdown from "@/markdown/components/popover.mdx"
import ProgressMarkdown from "@/markdown/components/progress.mdx"
import RadioGroupMarkdown from "@/markdown/components/radio-group.mdx"
import ResizableMarkdown from "@/markdown/components/resizable.mdx"
import ScrollAreaMarkdown from "@/markdown/components/scroll-area.mdx"
import SelectMarkdown from "@/markdown/components/select.mdx"
import SheetMarkdown from "@/markdown/components/sheet.mdx"
import SkeletonMarkdown from "@/markdown/components/skeleton.mdx"
import SliderMarkdown from "@/markdown/components/slider.mdx"
import SwitchMarkdown from "@/markdown/components/switch.mdx"
import TableMarkdown from "@/markdown/components/table.mdx"
import TabsMarkdown from "@/markdown/components/tabs.mdx"
import TextareaMarkdown from "@/markdown/components/textarea.mdx"
import ToastMarkdown from "@/markdown/components/toast.mdx"
import TooltipMarkdown from "@/markdown/components/tooltip.mdx"

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
import SwitchDemo from "@/components/examples/ui/switch"
import TableDemo from "@/components/examples/ui/table"
import TabsDemo from "@/components/examples/ui/tabs"
import TextareaDemo from "@/components/examples/ui/textarea"
import ToastDemo from "@/components/examples/ui/toast"
import TooltipDemo from "@/components/examples/ui/tooltip"

type Component = {
  name: string
  markdown: React.ComponentType
  exampleComponent: React.ComponentType
  prevComponent?: string
  nextComponent?: string
  notShadcn?: boolean
}

const COMPONENTS: Component[] = [
  {
    name: "Accordion",
    markdown: AccordionMarkdown,
    exampleComponent: AccordionDemo,
    nextComponent: "alert-dialog",
  },
  {
    name: "Alert Dialog",
    markdown: AlertDialogMarkdown,
    exampleComponent: AlertDialogDemo,
    prevComponent: "accordion",
    nextComponent: "alert",
  },
  {
    name: "Alert",
    markdown: AlertMarkdown,
    exampleComponent: AlertDemo,
    prevComponent: "alert-dialog",
    nextComponent: "avatar",
  },
  {
    name: "Avatar",
    markdown: AvatarMarkdown,
    exampleComponent: AvatarDemo,
    prevComponent: "alert",
    nextComponent: "badge",
  },
  {
    name: "Badge",
    markdown: BadgeMarkdown,
    exampleComponent: BadgeDemo,
    prevComponent: "avatar",
    nextComponent: "breadcrumb",
  },
  {
    name: "Breadcrumb",
    markdown: BreadcrumbMarkdown,
    exampleComponent: BreadcrumbDemo,
    prevComponent: "badge",
    nextComponent: "button",
  },
  {
    name: "Button",
    markdown: ButtonMarkdown,
    exampleComponent: ButtonDemo,
    prevComponent: "breadcrumb",
    nextComponent: "calendar",
  },
  {
    name: "Calendar",
    markdown: CalendarMarkdown,
    exampleComponent: CalendarDemo,
    prevComponent: "button",
    nextComponent: "card",
  },
  {
    name: "Card",
    markdown: CardMarkdown,
    exampleComponent: CardDemo,
    prevComponent: "calendar",
    nextComponent: "carousel",
  },
  {
    name: "Carousel",
    markdown: CarouselMarkdown,
    exampleComponent: CarouselDemo,
    prevComponent: "card",
    nextComponent: "checkbox",
  },
  {
    name: "Checkbox",
    markdown: CheckboxMarkdown,
    exampleComponent: CheckboxDemo,
    prevComponent: "carousel",
    nextComponent: "collapsible",
  },
  {
    name: "Collapsible",
    markdown: CollapsibleMarkdown,
    exampleComponent: CollapsibleDemo,
    prevComponent: "checkbox",
    nextComponent: "combobox",
  },
  {
    name: "Combobox",
    markdown: ComboboxMarkdown,
    exampleComponent: ComboboxDemo,
    prevComponent: "collapsible",
    nextComponent: "command",
  },
  {
    name: "Command",
    markdown: CommandMarkdown,
    exampleComponent: CommandDemo,
    prevComponent: "combobox",
    nextComponent: "context-menu",
  },
  {
    name: "Context Menu",
    markdown: ContextMenuMarkdown,
    exampleComponent: ContextMenuDemo,
    prevComponent: "command",
    nextComponent: "date-picker",
  },
  {
    name: "Date Picker",
    markdown: DatePickerMarkdown,
    exampleComponent: DatePickerDemo,
    prevComponent: "context-menu",
    nextComponent: "data-table",
  },
  {
    name: "Data Table",
    markdown: DataTableMarkdown,
    exampleComponent: DataTableDemo,
    prevComponent: "date-picker",
    nextComponent: "dialog",
  },
  {
    name: "Dialog",
    markdown: DialogMarkdown,
    exampleComponent: DialogDemo,
    prevComponent: "data-table",
    nextComponent: "drawer",
  },
  {
    name: "Drawer",
    markdown: DrawerMarkdown,
    exampleComponent: DrawerDemo,
    prevComponent: "dialog",
    nextComponent: "dropdown-menu",
  },
  {
    name: "Dropdown Menu",
    markdown: DropdownMenuMarkdown,
    exampleComponent: DropdownMenuDemo,
    prevComponent: "drawer",
    nextComponent: "form",
  },
  {
    name: "Form",
    markdown: FormMarkdown,
    exampleComponent: FormDemo,
    prevComponent: "dropdown-menu",
    nextComponent: "hover-card",
  },
  {
    name: "Hover Card",
    markdown: HoverCardMarkdown,
    exampleComponent: HoverCardDemo,
    prevComponent: "form",
    nextComponent: "image-card",
  },
  {
    name: "Image Card",
    markdown: ImageCardMarkdown,
    exampleComponent: ImageCardDemo,
    prevComponent: "hover-card",
    nextComponent: "input-otp",
    notShadcn: true,
  },
  {
    name: "Input Otp",
    markdown: InputOTPMarkdown,
    exampleComponent: InputOTPDemo,
    prevComponent: "image-card",
    nextComponent: "input",
  },
  {
    name: "Input",
    markdown: InputMarkdown,
    exampleComponent: InputDemo,
    prevComponent: "input-otp",
    nextComponent: "label",
  },
  {
    name: "Label",
    markdown: LabelMarkdown,
    exampleComponent: LabelDemo,
    prevComponent: "input",
    nextComponent: "marquee",
  },
  {
    name: "Marquee",
    markdown: MarqueeMarkdown,
    exampleComponent: MarqueeDemo,
    prevComponent: "label",
    nextComponent: "menubar",
    notShadcn: true,
  },
  {
    name: "Menubar",
    markdown: MenubarMarkdown,
    exampleComponent: MenubarDemo,
    prevComponent: "marquee",
    nextComponent: "navigation-menu",
  },
  {
    name: "Navigation Menu",
    markdown: NavigationMenuMarkdown,
    exampleComponent: NavigationMenuDemo,
    prevComponent: "menubar",
    nextComponent: "pagination",
  },
  {
    name: "Pagination",
    markdown: PaginationMarkdown,
    exampleComponent: PaginationDemo,
    prevComponent: "navigation-menu",
    nextComponent: "popover",
  },
  {
    name: "Popover",
    markdown: PopoverMarkdown,
    exampleComponent: PopoverDemo,
    prevComponent: "pagination",
    nextComponent: "progress",
  },
  {
    name: "Progress",
    markdown: ProgressMarkdown,
    exampleComponent: ProgressDemo,
    prevComponent: "popover",
    nextComponent: "radio-group",
  },
  {
    name: "Radio Group",
    markdown: RadioGroupMarkdown,
    exampleComponent: RadioGroupDemo,
    prevComponent: "progress",
    nextComponent: "resizable",
  },
  {
    name: "Resizable",
    markdown: ResizableMarkdown,
    exampleComponent: ResizableDemo,
    prevComponent: "radio-group",
    nextComponent: "scroll-area",
  },
  {
    name: "Scroll Area",
    markdown: ScrollAreaMarkdown,
    exampleComponent: ScrollAreaDemo,
    prevComponent: "resizable",
    nextComponent: "select",
  },
  {
    name: "Select",
    markdown: SelectMarkdown,
    exampleComponent: SelectDemo,
    prevComponent: "scroll-area",
    nextComponent: "sheet",
  },
  {
    name: "Sheet",
    markdown: SheetMarkdown,
    exampleComponent: SheetDemo,
    prevComponent: "select",
    nextComponent: "skeleton",
  },
  {
    name: "Skeleton",
    markdown: SkeletonMarkdown,
    exampleComponent: SkeletonDemo,
    prevComponent: "sheet",
    nextComponent: "slider",
  },
  {
    name: "Slider",
    markdown: SliderMarkdown,
    exampleComponent: SliderDemo,
    prevComponent: "skeleton",
    nextComponent: "switch",
  },
  {
    name: "Switch",
    markdown: SwitchMarkdown,
    exampleComponent: SwitchDemo,
    prevComponent: "slider",
    nextComponent: "table",
  },
  {
    name: "Table",
    markdown: TableMarkdown,
    exampleComponent: TableDemo,
    prevComponent: "switch",
    nextComponent: "tabs",
  },
  {
    name: "Tabs",
    markdown: TabsMarkdown,
    exampleComponent: TabsDemo,
    prevComponent: "table",
    nextComponent: "textarea",
  },
  {
    name: "Textarea",
    markdown: TextareaMarkdown,
    exampleComponent: TextareaDemo,
    prevComponent: "tabs",
    nextComponent: "toast",
  },
  {
    name: "Toast",
    markdown: ToastMarkdown,
    exampleComponent: ToastDemo,
    prevComponent: "textarea",
    nextComponent: "tooltip",
  },
  {
    name: "Tooltip",
    markdown: TooltipMarkdown,
    exampleComponent: TooltipDemo,
    prevComponent: "toast",
  },
]

export default COMPONENTS
