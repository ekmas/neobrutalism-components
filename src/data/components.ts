import Accordion from '@/components/neobrutalism/Accordion'
import Alert from '@/components/neobrutalism/Alert'
import Avatar from '@/components/neobrutalism/Avatar'
import Badge from '@/components/neobrutalism/Badge'
import Button from '@/components/neobrutalism/Button'
import Card from '@/components/neobrutalism/Card'
import Drawer from '@/components/neobrutalism/Drawer'
import Dropdown from '@/components/neobrutalism/Dropdown'
import ImageCard from '@/components/neobrutalism/ImageCard'
import Input from '@/components/neobrutalism/Input'
import Marquee from '@/components/neobrutalism/Marquee'
import Modal from '@/components/neobrutalism/Modal'
import Newsletter from '@/components/neobrutalism/Newsletter'
import Select from '@/components/neobrutalism/Select'
import Tabs from '@/components/neobrutalism/Tabs'
import Textarea from '@/components/neobrutalism/Textarea'
import Tooltip from '@/components/neobrutalism/Tooltip'

type ComponentObj = {
  name: string
  component: any
}

const components: ComponentObj[] = [
  {
    name: 'Accordion',
    component: Accordion,
  },
  {
    name: 'Alert',
    component: Alert,
  },
  {
    name: 'Avatar',
    component: Avatar,
  },
  {
    name: 'Badge',
    component: Badge,
  },
  {
    name: 'Button',
    component: Button,
  },
  {
    name: 'Card',
    component: Card,
  },
  {
    name: 'Drawer',
    component: Drawer,
  },
  {
    name: 'Dropdown',
    component: Dropdown,
  },
  {
    name: 'ImageCard',
    component: ImageCard,
  },
  {
    name: 'Input',
    component: Input,
  },
  {
    name: 'Marquee',
    component: Marquee,
  },
  {
    name: 'Modal',
    component: Modal,
  },
  {
    name: 'Newsletter',
    component: Newsletter,
  },
  {
    name: 'Select',
    component: Select,
  },
  {
    name: 'Tabs',
    component: Tabs,
  },
  {
    name: 'Textarea',
    component: Textarea,
  },
  {
    name: 'Tooltip',
    component: Tooltip,
  },
]
export default components
