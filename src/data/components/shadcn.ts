import AccordionDemo from '@/components/shadcn/examples/accordion'
import AlertDialogDemo from '@/components/shadcn/examples/alert-dialog'
import AlertDemo from '@/components/shadcn/examples/alert'
import AvatarDemo from '@/components/shadcn/examples/avatar'
import BadgeDemo from '@/components/shadcn/examples/badge'
import BreadcrumbDemo from '@/components/shadcn/examples/breadcrumb'
import ButtonDemo from '@/components/shadcn/examples/button'
import CalendarDemo from '@/components/shadcn/examples/calendar'
import CardDemo from '@/components/shadcn/examples/card'
import CarouselDemo from '@/components/shadcn/examples/carousel'
import CheckboxDemo from '@/components/shadcn/examples/checkbox'
import CollapsibleDemo from '@/components/shadcn/examples/collapsible'
import ComboboxDemo from '@/components/shadcn/examples/combobox'
import CommandDemo from '@/components/shadcn/examples/command'
import ContextMenuDemo from '@/components/shadcn/examples/context-menu'
import DatePickerDemo from '@/components/shadcn/examples/date-picker'
import DataTableDemo from '@/components/shadcn/examples/data-table'
import DialogDemo from '@/components/shadcn/examples/dialog'
import DrawerDemo from '@/components/shadcn/examples/drawer'
import DropdownMenuDemo from '@/components/shadcn/examples/dropdown-menu'
import FormDemo from '@/components/shadcn/examples/form'
import HoverCardDemo from '@/components/shadcn/examples/hover-card'
import InputOTPDemo from '@/components/shadcn/examples/input-otp'
import InputDemo from '@/components/shadcn/examples/input'
import LabelDemo from '@/components/shadcn/examples/label'
import MenubarDemo from '@/components/shadcn/examples/menubar'
import NavigationMenuDemo from '@/components/shadcn/examples/navigation-menu'
import PaginationDemo from '@/components/shadcn/examples/pagination'
import PopoverDemo from '@/components/shadcn/examples/popover'
import ProgressDemo from '@/components/shadcn/examples/progress'
import RadioGroupDemo from '@/components/shadcn/examples/radio-group'
import ResizableDemo from '@/components/shadcn/examples/resizable'
import ScrollAreaDemo from '@/components/shadcn/examples/scroll-area'
import SelectDemo from '@/components/shadcn/examples/select'
import SheetDemo from '@/components/shadcn/examples/sheet'
import SkeletonDemo from '@/components/shadcn/examples/skeleton'
import SliderDemo from '@/components/shadcn/examples/slider'
import SwitchDemo from '@/components/shadcn/examples/switch'
import TableDemo from '@/components/shadcn/examples/table'
import TabsDemo from '@/components/shadcn/examples/tabs'
import TextareaDemo from '@/components/shadcn/examples/textarea'
import ToastDemo from '@/components/shadcn/examples/toast'
import TooltipDemo from '@/components/shadcn/examples/tooltip'

type Component = {
  name: string
  url: string
  exampleComponent: any
  prevComponent?: string
  nextComponent?: string
}

const SHADCN_COMPONENTS: Component[] = [
  {
    name: 'Accordion',
    url: 'accordion',
    exampleComponent: AccordionDemo,
    nextComponent: 'alert-dialog',
  },
  {
    name: 'Alert Dialog',
    url: 'alert-dialog',
    exampleComponent: AlertDialogDemo,
    prevComponent: 'accordion',
    nextComponent: 'alert',
  },
  {
    name: 'Alert',
    url: 'alert',
    exampleComponent: AlertDemo,
    prevComponent: 'alert-dialog',
    nextComponent: 'avatar',
  },
  {
    name: 'Avatar',
    url: 'avatar',
    exampleComponent: AvatarDemo,
    prevComponent: 'alert',
    nextComponent: 'badge',
  },
  {
    name: 'Badge',
    url: 'badge',
    exampleComponent: BadgeDemo,
    prevComponent: 'avatar',
    nextComponent: 'breadcrumb',
  },
  {
    name: 'Breadcrumb',
    url: 'breadcrumb',
    exampleComponent: BreadcrumbDemo,
    prevComponent: 'badge',
    nextComponent: 'button',
  },
  {
    name: 'Button',
    url: 'button',
    exampleComponent: ButtonDemo,
    prevComponent: 'breadcrumb',
    nextComponent: 'calendar',
  },
  {
    name: 'Calendar',
    url: 'calendar',
    exampleComponent: CalendarDemo,
    prevComponent: 'button',
    nextComponent: 'card',
  },
  {
    name: 'Card',
    url: 'card',
    exampleComponent: CardDemo,
    prevComponent: 'calendar',
    nextComponent: 'carousel',
  },
  {
    name: 'Carousel',
    url: 'carousel',
    exampleComponent: CarouselDemo,
    prevComponent: 'card',
    nextComponent: 'checkbox',
  },
  {
    name: 'Checkbox',
    url: 'checkbox',
    exampleComponent: CheckboxDemo,
    prevComponent: 'carousel',
    nextComponent: 'collapsible',
  },
  {
    name: 'Collapsible',
    url: 'collapsible',
    exampleComponent: CollapsibleDemo,
    prevComponent: 'checkbox',
    nextComponent: 'combobox',
  },
  {
    name: 'Combobox',
    url: 'combobox',
    exampleComponent: ComboboxDemo,
    prevComponent: 'collapsible',
    nextComponent: 'command',
  },
  {
    name: 'Command',
    url: 'command',
    exampleComponent: CommandDemo,
    prevComponent: 'combobox',
    nextComponent: 'context-menu',
  },
  {
    name: 'Context Menu',
    url: 'context-menu',
    exampleComponent: ContextMenuDemo,
    prevComponent: 'command',
    nextComponent: 'date-picker',
  },
  {
    name: 'Date Picker',
    url: 'date-picker',
    exampleComponent: DatePickerDemo,
    prevComponent: 'context-menu',
    nextComponent: 'data-table',
  },
  {
    name: 'Data Table',
    url: 'data-table',
    exampleComponent: DataTableDemo,
    prevComponent: 'date-picker',
    nextComponent: 'dialog',
  },
  {
    name: 'Dialog',
    url: 'dialog',
    exampleComponent: DialogDemo,
    prevComponent: 'data-table',
    nextComponent: 'drawer',
  },
  {
    name: 'Drawer',
    url: 'drawer',
    exampleComponent: DrawerDemo,
    prevComponent: 'dialog',
    nextComponent: 'dropdown-menu',
  },
  {
    name: 'Dropdown Menu',
    url: 'dropdown-menu',
    exampleComponent: DropdownMenuDemo,
    prevComponent: 'drawer',
    nextComponent: 'form',
  },
  {
    name: 'Form',
    url: 'form',
    exampleComponent: FormDemo,
    prevComponent: 'dropdown-menu',
    nextComponent: 'hover-card',
  },
  {
    name: 'Hover Card',
    url: 'hover-card',
    exampleComponent: HoverCardDemo,
    prevComponent: 'form',
    nextComponent: 'input-otp',
  },
  {
    name: 'Input OTP',
    url: 'input-otp',
    exampleComponent: InputOTPDemo,
    prevComponent: 'hover-card',
    nextComponent: 'input',
  },
  {
    name: 'Input',
    url: 'input',
    exampleComponent: InputDemo,
    prevComponent: 'input-otp',
    nextComponent: 'label',
  },
  {
    name: 'Label',
    url: 'label',
    exampleComponent: LabelDemo,
    prevComponent: 'input',
    nextComponent: 'menubar',
  },
  {
    name: 'Menubar',
    url: 'menubar',
    exampleComponent: MenubarDemo,
    prevComponent: 'label',
    nextComponent: 'navigation-menu',
  },
  {
    name: 'Navigation Menu',
    url: 'navigation-menu',
    exampleComponent: NavigationMenuDemo,
    prevComponent: 'menubar',
    nextComponent: 'pagination',
  },
  {
    name: 'Pagination',
    url: 'pagination',
    exampleComponent: PaginationDemo,
    prevComponent: 'navigation-menu',
    nextComponent: 'popover',
  },
  {
    name: 'Popover',
    url: 'popover',
    exampleComponent: PopoverDemo,
    prevComponent: 'pagination',
    nextComponent: 'progress',
  },
  {
    name: 'Progress',
    url: 'progress',
    exampleComponent: ProgressDemo,
    prevComponent: 'popover',
    nextComponent: 'radio-group',
  },
  {
    name: 'Radio Group',
    url: 'radio-group',
    exampleComponent: RadioGroupDemo,
    prevComponent: 'progress',
    nextComponent: 'resizable',
  },
  {
    name: 'Resizable',
    url: 'resizable',
    exampleComponent: ResizableDemo,
    prevComponent: 'radio-group',
    nextComponent: 'scroll-area',
  },
  {
    name: 'Scroll Area',
    url: 'scroll-area',
    exampleComponent: ScrollAreaDemo,
    prevComponent: 'resizable',
    nextComponent: 'select',
  },
  {
    name: 'Select',
    url: 'select',
    exampleComponent: SelectDemo,
    prevComponent: 'scroll-area',
    nextComponent: 'sheet',
  },
  {
    name: 'Sheet',
    url: 'sheet',
    exampleComponent: SheetDemo,
    prevComponent: 'select',
    nextComponent: 'skeleton',
  },
  {
    name: 'Skeleton',
    url: 'skeleton',
    exampleComponent: SkeletonDemo,
    prevComponent: 'sheet',
    nextComponent: 'slider',
  },
  {
    name: 'Slider',
    url: 'slider',
    exampleComponent: SliderDemo,
    prevComponent: 'skeleton',
    nextComponent: 'switch',
  },
  {
    name: 'Switch',
    url: 'switch',
    exampleComponent: SwitchDemo,
    prevComponent: 'slider',
    nextComponent: 'table',
  },
  {
    name: 'Table',
    url: 'table',
    exampleComponent: TableDemo,
    prevComponent: 'switch',
    nextComponent: 'tabs',
  },
  {
    name: 'Tabs',
    url: 'tabs',
    exampleComponent: TabsDemo,
    prevComponent: 'table',
    nextComponent: 'textarea',
  },
  {
    name: 'Textarea',
    url: 'textarea',
    exampleComponent: TextareaDemo,
    prevComponent: 'tabs',
    nextComponent: 'toast',
  },
  {
    name: 'Toast',
    url: 'toast',
    exampleComponent: ToastDemo,
    prevComponent: 'textarea',
    nextComponent: 'tooltip',
  },
  {
    name: 'Tooltip',
    url: 'tooltip',
    exampleComponent: TooltipDemo,
    prevComponent: 'toast',
  },
];

export default SHADCN_COMPONENTS
