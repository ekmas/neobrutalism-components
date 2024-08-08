import AccordionMarkdown from '@/markdown/react/components/Accordion.mdx'
import AlertMarkdown from '@/markdown/react/components/Alert.mdx'
import AvatarMarkdown from '@/markdown/react/components/Avatar.mdx'
import BadgeMarkdown from '@/markdown/react/components/Badge.mdx'
import ButtonMarkdown from '@/markdown/react/components/Button.mdx'
import CheckboxMarkdown from '@/markdown/react/components/Checkbox.mdx'
import DrawerMarkdown from '@/markdown/react/components/Drawer.mdx'
import DropdownMarkdown from '@/markdown/react/components/Dropdown.mdx'
import ImageCardMarkdown from '@/markdown/react/components/ImageCard.mdx'
import InputMarkdown from '@/markdown/react/components/Input.mdx'
import MarqueeMarkdown from '@/markdown/react/components/Marquee.mdx'
import ModalMarkdown from '@/markdown/react/components/Modal.mdx'
import NewsletterMarkdown from '@/markdown/react/components/Newsletter.mdx'
import RadioGroupMarkdown from '@/markdown/react/components/RadioGroup.mdx'
import SelectMarkdown from '@/markdown/react/components/Select.mdx'
import TabsMarkdown from '@/markdown/react/components/Tabs.mdx'
import TextareaMarkdown from '@/markdown/react/components/Textarea.mdx'
import ToggleSwitchMarkdown from '@/markdown/react/components/ToggleSwitch.mdx'

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
import SelectExample from '@/components/react/examples/SelectExample'
import TabsExample from '@/components/react/examples/TabsExample'
import TextareaExample from '@/components/react/examples/TextareaExample'
import ToggleSwitchExample from '@/components/react/examples/ToggleSwitchExample'

type Component = {
  name: string
  markdown: React.ComponentType
  exampleComponent: React.ComponentType
  prevComponent?: string
  nextComponent?: string
}

const REACT_COMPONENTS: Component[] = [
  {
    name: 'Accordion',
    markdown: AccordionMarkdown,
    exampleComponent: AccordionExample,
    nextComponent: 'alert',
  },
  {
    name: 'Alert',
    markdown: AlertMarkdown,
    exampleComponent: AlertExample,
    prevComponent: 'accordion',
    nextComponent: 'avatar',
  },
  {
    name: 'Avatar',
    markdown: AvatarMarkdown,
    exampleComponent: AvatarExample,
    prevComponent: 'alert',
    nextComponent: 'badge',
  },
  {
    name: 'Badge',
    markdown: BadgeMarkdown,
    exampleComponent: BadgeExample,
    prevComponent: 'avatar',
    nextComponent: 'button',
  },
  {
    name: 'Button',
    markdown: ButtonMarkdown,
    exampleComponent: ButtonExample,
    prevComponent: 'badge',
    nextComponent: 'checkbox',
  },
  {
    name: 'Checkbox',
    markdown: CheckboxMarkdown,
    exampleComponent: CheckboxExample,
    prevComponent: 'button',
    nextComponent: 'drawer',
  },
  {
    name: 'Drawer',
    markdown: DrawerMarkdown,
    exampleComponent: DrawerExample,
    prevComponent: 'checkbox',
    nextComponent: 'dropdown',
  },
  {
    name: 'Dropdown',
    markdown: DropdownMarkdown,
    exampleComponent: DropdownExample,
    prevComponent: 'drawer',
    nextComponent: 'image-card',
  },
  {
    name: 'Image Card',
    markdown: ImageCardMarkdown,
    exampleComponent: ImageCardExample,
    prevComponent: 'dropdown',
    nextComponent: 'input',
  },
  {
    name: 'Input',
    markdown: InputMarkdown,
    exampleComponent: InputExample,
    prevComponent: 'image-card',
    nextComponent: 'marquee',
  },
  {
    name: 'Marquee',
    markdown: MarqueeMarkdown,
    exampleComponent: MarqueeExample,
    prevComponent: 'input',
    nextComponent: 'modal',
  },
  {
    name: 'Modal',
    markdown: ModalMarkdown,
    exampleComponent: ModalExample,
    prevComponent: 'marquee',
    nextComponent: 'newsletter',
  },
  {
    name: 'Newsletter',
    markdown: NewsletterMarkdown,
    exampleComponent: NewsletterExample,
    prevComponent: 'modal',
    nextComponent: 'radio-group',
  },
  {
    name: 'Radio Group',
    markdown: RadioGroupMarkdown,
    exampleComponent: RadioGroupExample,
    prevComponent: 'newsletter',
    nextComponent: 'select',
  },
  {
    name: 'Select',
    markdown: SelectMarkdown,
    exampleComponent: SelectExample,
    prevComponent: 'radio-group',
    nextComponent: 'tabs',
  },
  {
    name: 'Tabs',
    markdown: TabsMarkdown,
    exampleComponent: TabsExample,
    prevComponent: 'select',
    nextComponent: 'textarea',
  },
  {
    name: 'Textarea',
    markdown: TextareaMarkdown,
    exampleComponent: TextareaExample,
    prevComponent: 'tabs',
    nextComponent: 'toggle-switch',
  },
  {
    name: 'Toggle Switch',
    markdown: ToggleSwitchMarkdown,
    exampleComponent: ToggleSwitchExample,
    prevComponent: 'textarea',
  },
]

export default REACT_COMPONENTS
