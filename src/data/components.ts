import Accordion from '@/components/neobrutalism/Accordion'
import Alert from '@/components/neobrutalism/Alert'
import Avatar from '@/components/neobrutalism/Avatar'
import Badge from '@/components/neobrutalism/Badge'
import Button from '@/components/neobrutalism/Button'
import Checkbox from '@/components/neobrutalism/Checkbox'
import Drawer from '@/components/neobrutalism/Drawer'
import Dropdown from '@/components/neobrutalism/Dropdown'
import ImageCard from '@/components/neobrutalism/ImageCard'
import Input from '@/components/neobrutalism/Input'
import Marquee from '@/components/neobrutalism/Marquee'
import Modal from '@/components/neobrutalism/Modal'
import Newsletter from '@/components/neobrutalism/Newsletter'
import RadioGroup from '@/components/neobrutalism/RadioGroup'
import RangeSlider from '@/components/neobrutalism/RangeSlider'
import Select from '@/components/neobrutalism/Select'
import Tabs from '@/components/neobrutalism/Tabs'
import Textarea from '@/components/neobrutalism/Textarea'
import ToggleSwitch from '@/components/neobrutalism/ToggleSwitch'
import Tooltip from '@/components/neobrutalism/Tooltip'

import AccordionExample from '@/components/neobrutalism-examples/AccordionExample'
import AlertExample from '@/components/neobrutalism-examples/AlertExample'
import AvatarExample from '@/components/neobrutalism-examples/AvatarExample'
import BadgeExample from '@/components/neobrutalism-examples/BadgeExample'
import ButtonExample from '@/components/neobrutalism-examples/ButtonExample'
import CheckboxExample from '@/components/neobrutalism-examples/CheckboxExample'
import DrawerExample from '@/components/neobrutalism-examples/DrawerExample'
import DropdownExample from '@/components/neobrutalism-examples/DropdownExample'
import ImageCardExample from '@/components/neobrutalism-examples/ImageCardExample'
import InputExample from '@/components/neobrutalism-examples/InputExample'
import MarqueeExample from '@/components/neobrutalism-examples/MarqueeExample'
import ModalExample from '@/components/neobrutalism-examples/ModalExample'
import NewsletterExample from '@/components/neobrutalism-examples/NewsletterExample'
import RadioGroupExample from '@/components/neobrutalism-examples/RadioGroupExample'
import RangeSliderExample from '@/components/neobrutalism-examples/RangeSliderExample'
import SelectExample from '@/components/neobrutalism-examples/SelectExample'
import TabsExample from '@/components/neobrutalism-examples/TabsExample'
import TextareaExample from '@/components/neobrutalism-examples/TextareaExample'
import ToggleSwitchExample from '@/components/neobrutalism-examples/ToggleSwitchExample'
import TooltipExample from '@/components/neobrutalism-examples/TooltIpExample'

type ComponentObj = {
  name: string
  component: any
  exampleComponent?: any
  prevComponent?: string
  nextComponent?: string
}

const components: ComponentObj[] = [
  {
    name: 'Accordion',
    component: Accordion,
    exampleComponent: AccordionExample,
    nextComponent: 'Alert',
  },
  {
    name: 'Alert',
    component: Alert,
    exampleComponent: AlertExample,
    prevComponent: 'Accordion',
    nextComponent: 'Avatar',
  },
  {
    name: 'Avatar',
    component: Avatar,
    exampleComponent: AvatarExample,
    prevComponent: 'Alert',
    nextComponent: 'Badge',
  },
  {
    name: 'Badge',
    component: Badge,
    exampleComponent: BadgeExample,
    prevComponent: 'Avatar',
    nextComponent: 'Button',
  },
  {
    name: 'Button',
    component: Button,
    exampleComponent: ButtonExample,
    prevComponent: 'Badge',
    nextComponent: 'Checkbox',
  },
  {
    name: 'Checkbox',
    component: Checkbox,
    exampleComponent: CheckboxExample,
    prevComponent: 'Button',
    nextComponent: 'Drawer',
  },
  {
    name: 'Drawer',
    component: Drawer,
    exampleComponent: DrawerExample,
    prevComponent: 'Checkbox',
    nextComponent: 'Dropdown',
  },
  {
    name: 'Dropdown',
    component: Dropdown,
    exampleComponent: DropdownExample,
    prevComponent: 'Drawer',
    nextComponent: 'ImageCard',
  },
  {
    name: 'ImageCard',
    component: ImageCard,
    exampleComponent: ImageCardExample,
    prevComponent: 'Dropdown',
    nextComponent: 'Input',
  },
  {
    name: 'Input',
    component: Input,
    exampleComponent: InputExample,
    prevComponent: 'ImageCard',
    nextComponent: 'Marquee',
  },
  {
    name: 'Marquee',
    component: Marquee,
    exampleComponent: MarqueeExample,
    prevComponent: 'Input',
    nextComponent: 'Modal',
  },
  {
    name: 'Modal',
    component: Modal,
    exampleComponent: ModalExample,
    prevComponent: 'Marquee',
    nextComponent: 'Newsletter',
  },
  {
    name: 'Newsletter',
    component: Newsletter,
    exampleComponent: NewsletterExample,
    prevComponent: 'Modal',
    nextComponent: 'RadioGroup',
  },
  {
    name: 'RadioGroup',
    component: RadioGroup,
    exampleComponent: RadioGroupExample,
    prevComponent: 'Newsletter',
    nextComponent: 'RangeSlider',
  },
  {
    name: 'RangeSlider',
    component: RangeSlider,
    exampleComponent: RangeSliderExample,
    prevComponent: 'RadioGroup',
    nextComponent: 'Select',
  },
  {
    name: 'Select',
    component: Select,
    exampleComponent: SelectExample,
    prevComponent: 'RangeSlider',
    nextComponent: 'Tabs',
  },
  {
    name: 'Tabs',
    component: Tabs,
    exampleComponent: TabsExample,
    prevComponent: 'Select',
    nextComponent: 'Textarea',
  },
  {
    name: 'Textarea',
    component: Textarea,
    exampleComponent: TextareaExample,
    prevComponent: 'Tabs',
    nextComponent: 'ToggleSwitch',
  },
  {
    name: 'ToggleSwitch',
    component: ToggleSwitch,
    exampleComponent: ToggleSwitchExample,
    prevComponent: 'Textarea',
    nextComponent: 'Tooltip',
  },
  {
    name: 'Tooltip',
    component: Tooltip,
    exampleComponent: TooltipExample,
    prevComponent: 'ToggleSwitch',
  },
]

export default components
