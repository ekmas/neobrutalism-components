import AccordionDemo from "@/examples/ui/accordion"
import AlertDemo from "@/examples/ui/alert"
import AlertDialogDemo from "@/examples/ui/alert-dialog"
import AlertDescriptionOnlyDemo from "@/examples/ui/alert/description-only"
import AlertDestructiveDemo from "@/examples/ui/alert/destructive"
import AlertIconDescriptionDemo from "@/examples/ui/alert/icon-description"
import AlertIconTitleDemo from "@/examples/ui/alert/icon-title"
import AlertLongDescriptionDemo from "@/examples/ui/alert/long-description"
import AlertLongTitleDemo from "@/examples/ui/alert/long-title"
import AlertLongTitleAndDescriptionDemo from "@/examples/ui/alert/long-title-and-description"
import AlertWithButtonDemo from "@/examples/ui/alert/with-button"
import AvatarDemo from "@/examples/ui/avatar"
import AvatarFallbackDemo from "@/examples/ui/avatar/fallback"
import BadgeDemo from "@/examples/ui/badge"
import BadgeNeutralDemo from "@/examples/ui/badge/neutral"
import BadgeWithIconDemo from "@/examples/ui/badge/with-icon"
import BreadcrumbDemo from "@/examples/ui/breadcrumb"
import ButtonDemo from "@/examples/ui/button"
import ButtonIconDemo from "@/examples/ui/button/icon"
import ButtonNeutralDemo from "@/examples/ui/button/neutral"
import ButtonNoShadowDemo from "@/examples/ui/button/no-shadow"
import ButtonReverseDemo from "@/examples/ui/button/reverse"
import ButtonWithIconDemo from "@/examples/ui/button/with-icon"
import CalendarDemo from "@/examples/ui/calendar/index"
import CalendarRangeDemo from "@/examples/ui/calendar/range"
import CardDemo from "@/examples/ui/card"
import CarouselDemo from "@/examples/ui/carousel"
import CheckboxDemo from "@/examples/ui/checkbox"
import CollapsibleDemo from "@/examples/ui/collapsible"
import ComboboxDemo from "@/examples/ui/combobox"
import ComboboxMultiselectDemo from "@/examples/ui/combobox/multiselect"
import ComboboxTimezonesDemo from "@/examples/ui/combobox/timezones"
import ComboboxUsersDemo from "@/examples/ui/combobox/users"
import CommandDemo from "@/examples/ui/command"
import ContextMenuDemo from "@/examples/ui/context-menu"
import DataTableDemo from "@/examples/ui/data-table"
import DatePickerDemo from "@/examples/ui/date-picker"
import DialogDemo from "@/examples/ui/dialog"
import DialogWithScrollableContent from "@/examples/ui/dialog/scrollable-content"
import DialogWithStickyFooter from "@/examples/ui/dialog/sticky-footer"
import DrawerDemo from "@/examples/ui/drawer"
import DrawerWithScrollableContent from "@/examples/ui/drawer/scrollable-content"
import DropdownMenuDemo from "@/examples/ui/dropdown-menu"
import DropdownMenuCheckboxes from "@/examples/ui/dropdown-menu/checkboxes"
import DropdownMenuRadioGroupDemo from "@/examples/ui/dropdown-menu/radio"
import FormDemo from "@/examples/ui/form"
import HoverCardDemo from "@/examples/ui/hover-card"
import ImageCardDemo from "@/examples/ui/image-card"
import InputDemo from "@/examples/ui/input"
import InputOTPDemo from "@/examples/ui/input-otp"
import InputDisabledDemo from "@/examples/ui/input/disabled"
import InputFileDemo from "@/examples/ui/input/file"
import InputWithButtonDemo from "@/examples/ui/input/with-button"
import InputWithLabelDemo from "@/examples/ui/input/with-label"
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
import SelectDisabledDemo from "@/examples/ui/select/disabled"
import SelectLargeListDemo from "@/examples/ui/select/large-list"
import SelectWithIconDemo from "@/examples/ui/select/with-icon"
import SheetDemo from "@/examples/ui/sheet"
import SheetSideDemo from "@/examples/ui/sheet/side"
import SkeletonDemo from "@/examples/ui/skeleton"
import SliderDemo from "@/examples/ui/slider"
import SliderControlled from "@/examples/ui/slider/controlled"
import TwoThumbsSliderDemo from "@/examples/ui/slider/two-thumbs"
import VerticalSliderDemo from "@/examples/ui/slider/vertical"
import SonnerDemo from "@/examples/ui/sonner"
import SonnerActionDemo from "@/examples/ui/sonner/action"
import SonnerCancelDemo from "@/examples/ui/sonner/cancel"
import SonnerErrorDemo from "@/examples/ui/sonner/error"
import SonnerInfoDemo from "@/examples/ui/sonner/info"
import SonnerPromiseDemo from "@/examples/ui/sonner/promise"
import SonnerSuccessDemo from "@/examples/ui/sonner/success"
import SonnerWarningDemo from "@/examples/ui/sonner/warning"
import SwitchDemo from "@/examples/ui/switch"
import TableDemo from "@/examples/ui/table"
import TabsDemo from "@/examples/ui/tabs"
import TextareaDemo from "@/examples/ui/textarea"
import TooltipDemo from "@/examples/ui/tooltip"

type Component = {
  name: string
  exampleComponent: React.ComponentType
  examples?: Record<string, React.ComponentType>
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
    examples: {
      default: AlertDemo,
      destructive: AlertDestructiveDemo,
      "icon-description": AlertIconDescriptionDemo,
      "description-only": AlertDescriptionOnlyDemo,
      "icon-title": AlertIconTitleDemo,
      "long-description": AlertLongDescriptionDemo,
      "long-title": AlertLongTitleDemo,
      "long-title-and-description": AlertLongTitleAndDescriptionDemo,
      "with-button": AlertWithButtonDemo,
    },
  },
  {
    name: "Avatar",
    exampleComponent: AvatarDemo,
    examples: {
      default: AvatarDemo,
      fallback: AvatarFallbackDemo,
    },
  },
  {
    name: "Badge",
    exampleComponent: BadgeDemo,
    examples: {
      default: BadgeDemo,
      neutral: BadgeNeutralDemo,
      "with-icon": BadgeWithIconDemo,
    },
  },
  {
    name: "Breadcrumb",
    exampleComponent: BreadcrumbDemo,
  },
  {
    name: "Button",
    exampleComponent: ButtonDemo,
    examples: {
      default: ButtonDemo,
      reverse: ButtonReverseDemo,
      noShadow: ButtonNoShadowDemo,
      neutral: ButtonNeutralDemo,
      "with-icon": ButtonWithIconDemo,
      icon: ButtonIconDemo,
    },
  },
  {
    name: "Calendar",
    exampleComponent: CalendarDemo,
    examples: {
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
    examples: {
      default: ComboboxDemo,
      users: ComboboxUsersDemo,
      timezones: ComboboxTimezonesDemo,
      multiselect: ComboboxMultiselectDemo,
    },
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
    examples: {
      default: DialogDemo,
      "scrollable-content": DialogWithScrollableContent,
      "sticky-footer": DialogWithStickyFooter,
    },
  },
  {
    name: "Drawer",
    exampleComponent: DrawerDemo,
    examples: {
      default: DrawerDemo,
      "scrollable-content": DrawerWithScrollableContent,
    },
  },
  {
    name: "Dropdown Menu",
    exampleComponent: DropdownMenuDemo,
    examples: {
      default: DropdownMenuDemo,
      checkboxes: DropdownMenuCheckboxes,
      radio: DropdownMenuRadioGroupDemo,
    },
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
    examples: {
      default: InputDemo,
      file: InputFileDemo,
      disabled: InputDisabledDemo,
      "with-label": InputWithLabelDemo,
      "with-button": InputWithButtonDemo,
    },
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
    examples: {
      default: SelectDemo,
      "large-list": SelectLargeListDemo,
      disabled: SelectDisabledDemo,
      "with-icon": SelectWithIconDemo,
    },
  },
  {
    name: "Sheet",
    exampleComponent: SheetDemo,
    examples: {
      default: SheetDemo,
      side: SheetSideDemo,
    },
  },
  {
    name: "Skeleton",
    exampleComponent: SkeletonDemo,
  },
  {
    name: "Slider",
    exampleComponent: SliderDemo,
    examples: {
      default: SliderDemo,
      "two-thumbs": TwoThumbsSliderDemo,
      vertical: VerticalSliderDemo,
      controlled: SliderControlled,
    },
  },
  {
    name: "Sonner",
    exampleComponent: SonnerDemo,
    examples: {
      default: SonnerDemo,
      success: SonnerSuccessDemo,
      info: SonnerInfoDemo,
      warning: SonnerWarningDemo,
      error: SonnerErrorDemo,
      action: SonnerActionDemo,
      cancel: SonnerCancelDemo,
      promise: SonnerPromiseDemo,
    },
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
