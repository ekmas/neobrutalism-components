import AccordionMarkdown from '@/markdown/shadcn/components/accordion.mdx'
import AlertDialogMarkdown from '@/markdown/shadcn/components/alert-dialog.mdx'
import AlertMarkdown from '@/markdown/shadcn/components/alert.mdx'
import AvatarMarkdown from '@/markdown/shadcn/components/avatar.mdx'
import BadgeMarkdown from '@/markdown/shadcn/components/badge.mdx'
import BreadcrumbMarkdown from '@/markdown/shadcn/components/breadcrumb.mdx'
import ButtonMarkdown from '@/markdown/shadcn/components/button.mdx'
import CalendarMarkdown from '@/markdown/shadcn/components/calendar.mdx'
import CardMarkdown from '@/markdown/shadcn/components/card.mdx'
import CarouselMarkdown from '@/markdown/shadcn/components/carousel.mdx'
import CheckboxMarkdown from '@/markdown/shadcn/components/checkbox.mdx'
import CollapsibleMarkdown from '@/markdown/shadcn/components/collapsible.mdx'
import ComboboxMarkdown from '@/markdown/shadcn/components/combobox.mdx'
import CommandMarkdown from '@/markdown/shadcn/components/command.mdx'
import ContextMenuMarkdown from '@/markdown/shadcn/components/context-menu.mdx'
import DataTableMarkdown from '@/markdown/shadcn/components/data-table.mdx'
import DatePickerMarkdown from '@/markdown/shadcn/components/date-picker.mdx'
import DialogMarkdown from '@/markdown/shadcn/components/dialog.mdx'
import DrawerMarkdown from '@/markdown/shadcn/components/drawer.mdx'
import DropdownMenuMarkdown from '@/markdown/shadcn/components/dropdown-menu.mdx'
import FormMarkdown from '@/markdown/shadcn/components/form.mdx'
import HoverCardMarkdown from '@/markdown/shadcn/components/hover-card.mdx'
import InputOTPMarkdown from '@/markdown/shadcn/components/input-otp.mdx'
import InputMarkdown from '@/markdown/shadcn/components/input.mdx'
import LabelMarkdown from '@/markdown/shadcn/components/label.mdx'
import MenubarMarkdown from '@/markdown/shadcn/components/menubar.mdx'
import NavigationMenuMarkdown from '@/markdown/shadcn/components/navigation-menu.mdx'
import PaginationMarkdown from '@/markdown/shadcn/components/pagination.mdx'
import PopoverMarkdown from '@/markdown/shadcn/components/popover.mdx'
import ProgressMarkdown from '@/markdown/shadcn/components/progress.mdx'
import RadioGroupMarkdown from '@/markdown/shadcn/components/radio-group.mdx'
import ResizableMarkdown from '@/markdown/shadcn/components/resizable.mdx'
import ScrollAreaMarkdown from '@/markdown/shadcn/components/scroll-area.mdx'
import SelectMarkdown from '@/markdown/shadcn/components/select.mdx'
import SheetMarkdown from '@/markdown/shadcn/components/sheet.mdx'
import SkeletonMarkdown from '@/markdown/shadcn/components/skeleton.mdx'
import SliderMarkdown from '@/markdown/shadcn/components/slider.mdx'
import SwitchMarkdown from '@/markdown/shadcn/components/switch.mdx'
import TableMarkdown from '@/markdown/shadcn/components/table.mdx'
import TabsMarkdown from '@/markdown/shadcn/components/tabs.mdx'
import TextareaMarkdown from '@/markdown/shadcn/components/textarea.mdx'
import ToastMarkdown from '@/markdown/shadcn/components/toast.mdx'
import TooltipMarkdown from '@/markdown/shadcn/components/tooltip.mdx'

import AccordionDemo from '@/components/shadcn/examples/accordion'
import AlertDemo from '@/components/shadcn/examples/alert'
import AlertDialogDemo from '@/components/shadcn/examples/alert-dialog'
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
import DataTableDemo from '@/components/shadcn/examples/data-table'
import DatePickerDemo from '@/components/shadcn/examples/date-picker'
import DialogDemo from '@/components/shadcn/examples/dialog'
import DrawerDemo from '@/components/shadcn/examples/drawer'
import DropdownMenuDemo from '@/components/shadcn/examples/dropdown-menu'
import FormDemo from '@/components/shadcn/examples/form'
import HoverCardDemo from '@/components/shadcn/examples/hover-card'
import InputDemo from '@/components/shadcn/examples/input'
import InputOTPDemo from '@/components/shadcn/examples/input-otp'
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
  markdown: React.ComponentType
  exampleComponent: React.ComponentType
  prevComponent?: string
  nextComponent?: string
}

const SHADCN_COMPONENTS: Component[] = [
  {
    name: 'Accordion',
    markdown: AccordionMarkdown,
    exampleComponent: AccordionDemo,
    nextComponent: 'alert-dialog',
  },
  {
    name: 'Alert Dialog',
    markdown: AlertDialogMarkdown,
    exampleComponent: AlertDialogDemo,
    prevComponent: 'accordion',
    nextComponent: 'alert',
  },
  {
    name: 'Alert',
    markdown: AlertMarkdown,
    exampleComponent: AlertDemo,
    prevComponent: 'alert-dialog',
    nextComponent: 'avatar',
  },
  {
    name: 'Avatar',
    markdown: AvatarMarkdown,
    exampleComponent: AvatarDemo,
    prevComponent: 'alert',
    nextComponent: 'badge',
  },
  {
    name: 'Badge',
    markdown: BadgeMarkdown,
    exampleComponent: BadgeDemo,
    prevComponent: 'avatar',
    nextComponent: 'breadcrumb',
  },
  {
    name: 'Breadcrumb',
    markdown: BreadcrumbMarkdown,
    exampleComponent: BreadcrumbDemo,
    prevComponent: 'badge',
    nextComponent: 'button',
  },
  {
    name: 'Button',
    markdown: ButtonMarkdown,
    exampleComponent: ButtonDemo,
    prevComponent: 'breadcrumb',
    nextComponent: 'calendar',
  },
  {
    name: 'Calendar',
    markdown: CalendarMarkdown,
    exampleComponent: CalendarDemo,
    prevComponent: 'button',
    nextComponent: 'card',
  },
  {
    name: 'Card',
    markdown: CardMarkdown,
    exampleComponent: CardDemo,
    prevComponent: 'calendar',
    nextComponent: 'carousel',
  },
  {
    name: 'Carousel',
    markdown: CarouselMarkdown,
    exampleComponent: CarouselDemo,
    prevComponent: 'card',
    nextComponent: 'checkbox',
  },
  {
    name: 'Checkbox',
    markdown: CheckboxMarkdown,
    exampleComponent: CheckboxDemo,
    prevComponent: 'carousel',
    nextComponent: 'collapsible',
  },
  {
    name: 'Collapsible',
    markdown: CollapsibleMarkdown,
    exampleComponent: CollapsibleDemo,
    prevComponent: 'checkbox',
    nextComponent: 'combobox',
  },
  {
    name: 'Combobox',
    markdown: ComboboxMarkdown,
    exampleComponent: ComboboxDemo,
    prevComponent: 'collapsible',
    nextComponent: 'command',
  },
  {
    name: 'Command',
    markdown: CommandMarkdown,
    exampleComponent: CommandDemo,
    prevComponent: 'combobox',
    nextComponent: 'context-menu',
  },
  {
    name: 'Context Menu',
    markdown: ContextMenuMarkdown,
    exampleComponent: ContextMenuDemo,
    prevComponent: 'command',
    nextComponent: 'date-picker',
  },
  {
    name: 'Date Picker',
    markdown: DatePickerMarkdown,
    exampleComponent: DatePickerDemo,
    prevComponent: 'context-menu',
    nextComponent: 'data-table',
  },
  {
    name: 'Data Table',
    markdown: DataTableMarkdown,
    exampleComponent: DataTableDemo,
    prevComponent: 'date-picker',
    nextComponent: 'dialog',
  },
  {
    name: 'Dialog',
    markdown: DialogMarkdown,
    exampleComponent: DialogDemo,
    prevComponent: 'data-table',
    nextComponent: 'drawer',
  },
  {
    name: 'Drawer',
    markdown: DrawerMarkdown,
    exampleComponent: DrawerDemo,
    prevComponent: 'dialog',
    nextComponent: 'dropdown-menu',
  },
  {
    name: 'Dropdown Menu',
    markdown: DropdownMenuMarkdown,
    exampleComponent: DropdownMenuDemo,
    prevComponent: 'drawer',
    nextComponent: 'form',
  },
  {
    name: 'Form',
    markdown: FormMarkdown,
    exampleComponent: FormDemo,
    prevComponent: 'dropdown-menu',
    nextComponent: 'hover-card',
  },
  {
    name: 'Hover Card',
    markdown: HoverCardMarkdown,
    exampleComponent: HoverCardDemo,
    prevComponent: 'form',
    nextComponent: 'input-otp',
  },
  {
    name: 'Input Otp',
    markdown: InputOTPMarkdown,
    exampleComponent: InputOTPDemo,
    prevComponent: 'hover-card',
    nextComponent: 'input',
  },
  {
    name: 'Input',
    markdown: InputMarkdown,
    exampleComponent: InputDemo,
    prevComponent: 'input-otp',
    nextComponent: 'label',
  },
  {
    name: 'Label',
    markdown: LabelMarkdown,
    exampleComponent: LabelDemo,
    prevComponent: 'input',
    nextComponent: 'menubar',
  },
  {
    name: 'Menubar',
    markdown: MenubarMarkdown,
    exampleComponent: MenubarDemo,
    prevComponent: 'label',
    nextComponent: 'navigation-menu',
  },
  {
    name: 'Navigation Menu',
    markdown: NavigationMenuMarkdown,
    exampleComponent: NavigationMenuDemo,
    prevComponent: 'menubar',
    nextComponent: 'pagination',
  },
  {
    name: 'Pagination',
    markdown: PaginationMarkdown,
    exampleComponent: PaginationDemo,
    prevComponent: 'navigation-menu',
    nextComponent: 'popover',
  },
  {
    name: 'Popover',
    markdown: PopoverMarkdown,
    exampleComponent: PopoverDemo,
    prevComponent: 'pagination',
    nextComponent: 'progress',
  },
  {
    name: 'Progress',
    markdown: ProgressMarkdown,
    exampleComponent: ProgressDemo,
    prevComponent: 'popover',
    nextComponent: 'radio-group',
  },
  {
    name: 'Radio Group',
    markdown: RadioGroupMarkdown,
    exampleComponent: RadioGroupDemo,
    prevComponent: 'progress',
    nextComponent: 'resizable',
  },
  {
    name: 'Resizable',
    markdown: ResizableMarkdown,
    exampleComponent: ResizableDemo,
    prevComponent: 'radio-group',
    nextComponent: 'scroll-area',
  },
  {
    name: 'Scroll Area',
    markdown: ScrollAreaMarkdown,
    exampleComponent: ScrollAreaDemo,
    prevComponent: 'resizable',
    nextComponent: 'select',
  },
  {
    name: 'Select',
    markdown: SelectMarkdown,
    exampleComponent: SelectDemo,
    prevComponent: 'scroll-area',
    nextComponent: 'sheet',
  },
  {
    name: 'Sheet',
    markdown: SheetMarkdown,
    exampleComponent: SheetDemo,
    prevComponent: 'select',
    nextComponent: 'skeleton',
  },
  {
    name: 'Skeleton',
    markdown: SkeletonMarkdown,
    exampleComponent: SkeletonDemo,
    prevComponent: 'sheet',
    nextComponent: 'slider',
  },
  {
    name: 'Slider',
    markdown: SliderMarkdown,
    exampleComponent: SliderDemo,
    prevComponent: 'skeleton',
    nextComponent: 'switch',
  },
  {
    name: 'Switch',
    markdown: SwitchMarkdown,
    exampleComponent: SwitchDemo,
    prevComponent: 'slider',
    nextComponent: 'table',
  },
  {
    name: 'Table',
    markdown: TableMarkdown,
    exampleComponent: TableDemo,
    prevComponent: 'switch',
    nextComponent: 'tabs',
  },
  {
    name: 'Tabs',
    markdown: TabsMarkdown,
    exampleComponent: TabsDemo,
    prevComponent: 'table',
    nextComponent: 'textarea',
  },
  {
    name: 'Textarea',
    markdown: TextareaMarkdown,
    exampleComponent: TextareaDemo,
    prevComponent: 'tabs',
    nextComponent: 'toast',
  },
  {
    name: 'Toast',
    markdown: ToastMarkdown,
    exampleComponent: ToastDemo,
    prevComponent: 'textarea',
    nextComponent: 'tooltip',
  },
  {
    name: 'Tooltip',
    markdown: TooltipMarkdown,
    exampleComponent: TooltipDemo,
    prevComponent: 'toast',
  },
]

export default SHADCN_COMPONENTS
