import Accordion from '@/components/react/components/Accordion'
import Alert from '@/components/react/components/Alert'
import Avatar from '@/components/react/components/Avatar'
import Badge from '@/components/react/components/Badge'
import Button from '@/components/react/components/Button'
import Checkbox from '@/components/react/components/Checkbox'
import Drawer from '@/components/react/components/Drawer'
import Dropdown from '@/components/react/components/Dropdown'
import ImageCard from '@/components/react/components/ImageCard'
import Input from '@/components/react/components/Input'
import Marquee from '@/components/react/components/Marquee'
import Modal from '@/components/react/components/Modal'
import Newsletter from '@/components/react/components/Newsletter'
import RadioGroup from '@/components/react/components/RadioGroup'
import RangeSlider from '@/components/react/components/RangeSlider'
import Select from '@/components/react/components/Select'
import Tabs from '@/components/react/components/Tabs'
import Textarea from '@/components/react/components/Textarea'
import ToggleSwitch from '@/components/react/components/ToggleSwitch'
import Tooltip from '@/components/react/components/Tooltip'

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

type ComponentObj = {
  name: string
  component: any
  exampleComponent?: any
  prevComponent?: string
  nextComponent?: string
}

const REACT_COMPONENTS: ComponentObj[] = [
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

export default REACT_COMPONENTS
