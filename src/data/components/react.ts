import AccordionExample from '@/components/react/examples/AccordionExample'
import AlertExample from '@/components/react/examples/AlertExample'
import AvatarExample from '@/components/react/examples/AvatarExample'
import BadgeExample from '@/components/react/examples/BadgeExample'
import ButtonExample from '@/components/react/examples/ButtonExample'
import CheckboxExample from '@/components/react/examples/CheckboxExample'
import DrawerExample from '@/components/react/examples/DrawerExample'
import DropdownExample from '@/components/react/examples/DropdownExample'
import ImageCardExample from '@/components/react/examples/ImageCardExample'
import InputExample from '@/components/react/examples/InputExample'
import MarqueeExample from '@/components/react/examples/MarqueeExample'
import ModalExample from '@/components/react/examples/ModalExample'
import NewsletterExample from '@/components/react/examples/NewsletterExample'
import RadioGroupExample from '@/components/react/examples/RadioGroupExample'
import RangeSliderExample from '@/components/react/examples/RangeSliderExample'
import SelectExample from '@/components/react/examples/SelectExample'
import TabsExample from '@/components/react/examples/TabsExample'
import TextareaExample from '@/components/react/examples/TextareaExample'
import ToggleSwitchExample from '@/components/react/examples/ToggleSwitchExample'
import TooltipExample from '@/components/react/examples/TooltIpExample'

type Component = {
  name: string
  exampleComponent?: any
  prevComponent?: string
  nextComponent?: string
}

const REACT_COMPONENTS: Component[] = [
  {
    name: 'Accordion',
    exampleComponent: AccordionExample,
    nextComponent: 'Alert',
  },
  {
    name: 'Alert',
    exampleComponent: AlertExample,
    prevComponent: 'Accordion',
    nextComponent: 'Avatar',
  },
  {
    name: 'Avatar',
    exampleComponent: AvatarExample,
    prevComponent: 'Alert',
    nextComponent: 'Badge',
  },
  {
    name: 'Badge',
    exampleComponent: BadgeExample,
    prevComponent: 'Avatar',
    nextComponent: 'Button',
  },
  {
    name: 'Button',
    exampleComponent: ButtonExample,
    prevComponent: 'Badge',
    nextComponent: 'Checkbox',
  },
  {
    name: 'Checkbox',
    exampleComponent: CheckboxExample,
    prevComponent: 'Button',
    nextComponent: 'Drawer',
  },
  {
    name: 'Drawer',
    exampleComponent: DrawerExample,
    prevComponent: 'Checkbox',
    nextComponent: 'Dropdown',
  },
  {
    name: 'Dropdown',
    exampleComponent: DropdownExample,
    prevComponent: 'Drawer',
    nextComponent: 'ImageCard',
  },
  {
    name: 'ImageCard',
    exampleComponent: ImageCardExample,
    prevComponent: 'Dropdown',
    nextComponent: 'Input',
  },
  {
    name: 'Input',
    exampleComponent: InputExample,
    prevComponent: 'ImageCard',
    nextComponent: 'Marquee',
  },
  {
    name: 'Marquee',
    exampleComponent: MarqueeExample,
    prevComponent: 'Input',
    nextComponent: 'Modal',
  },
  {
    name: 'Modal',
    exampleComponent: ModalExample,
    prevComponent: 'Marquee',
    nextComponent: 'Newsletter',
  },
  {
    name: 'Newsletter',
    exampleComponent: NewsletterExample,
    prevComponent: 'Modal',
    nextComponent: 'RadioGroup',
  },
  {
    name: 'RadioGroup',
    exampleComponent: RadioGroupExample,
    prevComponent: 'Newsletter',
    nextComponent: 'RangeSlider',
  },
  {
    name: 'RangeSlider',
    exampleComponent: RangeSliderExample,
    prevComponent: 'RadioGroup',
    nextComponent: 'Select',
  },
  {
    name: 'Select',
    exampleComponent: SelectExample,
    prevComponent: 'RangeSlider',
    nextComponent: 'Tabs',
  },
  {
    name: 'Tabs',
    exampleComponent: TabsExample,
    prevComponent: 'Select',
    nextComponent: 'Textarea',
  },
  {
    name: 'Textarea',
    exampleComponent: TextareaExample,
    prevComponent: 'Tabs',
    nextComponent: 'ToggleSwitch',
  },
  {
    name: 'ToggleSwitch',
    exampleComponent: ToggleSwitchExample,
    prevComponent: 'Textarea',
    nextComponent: 'Tooltip',
  },
  {
    name: 'Tooltip',
    exampleComponent: TooltipExample,
    prevComponent: 'ToggleSwitch',
  },
]

export default REACT_COMPONENTS
