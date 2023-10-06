import Accordion from '@/components/neobrutalism/Accordion'
import Alert from '@/components/neobrutalism/Alert'
import Avatar from '@/components/neobrutalism/Avatar'
import Badge from '@/components/neobrutalism/Badge'
import Button from '@/components/neobrutalism/Button'
import Card from '@/components/neobrutalism/Card'
import Checkbox from '@/components/neobrutalism/Checkbox'
import Drawer from '@/components/neobrutalism/Drawer'
import Dropdown from '@/components/neobrutalism/Dropdown'
import ImageCard from '@/components/neobrutalism/ImageCard'
import Input from '@/components/neobrutalism/Input'
import Marquee from '@/components/neobrutalism/Marquee'
import Modal from '@/components/neobrutalism/Modal'
import Newsletter from '@/components/neobrutalism/Newsletter'
import RadioGroup from '@/components/neobrutalism/RadioGroup'
import Select from '@/components/neobrutalism/Select'
import Tabs from '@/components/neobrutalism/Tabs'
import Textarea from '@/components/neobrutalism/Textarea'
import Tooltip from '@/components/neobrutalism/Tooltip'

import AccordionExample from '@/components/neobrutalism-examples/AccordionExample'
import AlertExample from '@/components/neobrutalism-examples/AlertExample'
import AvatarExample from '@/components/neobrutalism-examples/AvatarExample'
import BadgeExample from '@/components/neobrutalism-examples/BadgeExample'
import ButtonExample from '@/components/neobrutalism-examples/ButtonExample'
import CardExample from '@/components/neobrutalism-examples/CardExample'
import CheckboxExample from '@/components/neobrutalism-examples/CheckboxExample'
import DrawerExample from '@/components/neobrutalism-examples/DrawerExample'
import DropdownExample from '@/components/neobrutalism-examples/DropdownExample'
import ImageCardExample from '@/components/neobrutalism-examples/ImageCardExample'
import InputExample from '@/components/neobrutalism-examples/InputExample'
import MarqueeExample from '@/components/neobrutalism-examples/MarqueeExample'
import ModalExample from '@/components/neobrutalism-examples/ModalExample'
import NewsletterExample from '@/components/neobrutalism-examples/NewsletterExample'
import RadioGroupExample from '@/components/neobrutalism-examples/RadioGroupExample'
import SelectExample from '@/components/neobrutalism-examples/SelectExample'
import TabsExample from '@/components/neobrutalism-examples/TabsExample'
import TextareaExample from '@/components/neobrutalism-examples/TextareaExample'
import TooltipExample from '@/components/neobrutalism-examples/TooltIpExample'

type ComponentObj = {
  name: string
  component: any
  exampleComponent?: any
}

const components: ComponentObj[] = [
  {
    name: 'Accordion',
    component: Accordion,
    exampleComponent: AccordionExample,
  },
  {
    name: 'Alert',
    component: Alert,
    exampleComponent: AlertExample,
  },
  {
    name: 'Avatar',
    component: Avatar,
    exampleComponent: AvatarExample,
  },
  {
    name: 'Badge',
    component: Badge,
    exampleComponent: BadgeExample,
  },
  {
    name: 'Button',
    component: Button,
    exampleComponent: ButtonExample,
  },
  {
    name: 'Card',
    component: Card,
    exampleComponent: CardExample,
  },
  {
    name: 'Checkbox',
    component: Checkbox,
    exampleComponent: CheckboxExample,
  },
  {
    name: 'Drawer',
    component: Drawer,
    exampleComponent: DrawerExample,
  },
  {
    name: 'Dropdown',
    component: Dropdown,
    exampleComponent: DropdownExample,
  },
  {
    name: 'ImageCard',
    component: ImageCard,
    exampleComponent: ImageCardExample,
  },
  {
    name: 'Input',
    component: Input,
    exampleComponent: InputExample,
  },
  {
    name: 'Marquee',
    component: Marquee,
    exampleComponent: MarqueeExample,
  },
  {
    name: 'Modal',
    component: Modal,
    exampleComponent: ModalExample,
  },
  {
    name: 'Newsletter',
    component: Newsletter,
    exampleComponent: NewsletterExample,
  },
  {
    name: 'RadioGroup',
    component: RadioGroup,
    exampleComponent: RadioGroupExample,
  },
  {
    name: 'Select',
    component: Select,
    exampleComponent: SelectExample,
  },
  {
    name: 'Tabs',
    component: Tabs,
    exampleComponent: TabsExample,
  },
  {
    name: 'Textarea',
    component: Textarea,
    exampleComponent: TextareaExample,
  },
  {
    name: 'Tooltip',
    component: Tooltip,
    exampleComponent: TooltipExample,
  },
]
export default components
