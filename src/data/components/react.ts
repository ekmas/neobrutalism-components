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
import RangeSliderMarkdown from '@/markdown/react/components/RangeSlider.mdx'
import SelectMarkdown from '@/markdown/react/components/Select.mdx'
import TabsMarkdown from '@/markdown/react/components/Tabs.mdx'
import TextareaMarkdown from '@/markdown/react/components/Textarea.mdx'
import ToggleSwitchMarkdown from '@/markdown/react/components/ToggleSwitch.mdx'
import TooltipMarkdown from '@/markdown/react/components/Tooltip.mdx'

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
    nextComponent: 'Alert',
  },
  {
    name: 'Alert',
    markdown: AlertMarkdown,
    exampleComponent: AlertExample,
    prevComponent: 'Accordion',
    nextComponent: 'Avatar',
  },
  {
    name: 'Avatar',
    markdown: AvatarMarkdown,
    exampleComponent: AvatarExample,
    prevComponent: 'Alert',
    nextComponent: 'Badge',
  },
  {
    name: 'Badge',
    markdown: BadgeMarkdown,
    exampleComponent: BadgeExample,
    prevComponent: 'Avatar',
    nextComponent: 'Button',
  },
  {
    name: 'Button',
    markdown: ButtonMarkdown,
    exampleComponent: ButtonExample,
    prevComponent: 'Badge',
    nextComponent: 'Checkbox',
  },
  {
    name: 'Checkbox',
    markdown: CheckboxMarkdown,
    exampleComponent: CheckboxExample,
    prevComponent: 'Button',
    nextComponent: 'Drawer',
  },
  {
    name: 'Drawer',
    markdown: DrawerMarkdown,
    exampleComponent: DrawerExample,
    prevComponent: 'Checkbox',
    nextComponent: 'Dropdown',
  },
  {
    name: 'Dropdown',
    markdown: DropdownMarkdown,
    exampleComponent: DropdownExample,
    prevComponent: 'Drawer',
    nextComponent: 'ImageCard',
  },
  {
    name: 'ImageCard',
    markdown: ImageCardMarkdown,
    exampleComponent: ImageCardExample,
    prevComponent: 'Dropdown',
    nextComponent: 'Input',
  },
  {
    name: 'Input',
    markdown: InputMarkdown,
    exampleComponent: InputExample,
    prevComponent: 'ImageCard',
    nextComponent: 'Marquee',
  },
  {
    name: 'Marquee',
    markdown: MarqueeMarkdown,
    exampleComponent: MarqueeExample,
    prevComponent: 'Input',
    nextComponent: 'Modal',
  },
  {
    name: 'Modal',
    markdown: ModalMarkdown,
    exampleComponent: ModalExample,
    prevComponent: 'Marquee',
    nextComponent: 'Newsletter',
  },
  {
    name: 'Newsletter',
    markdown: NewsletterMarkdown,
    exampleComponent: NewsletterExample,
    prevComponent: 'Modal',
    nextComponent: 'RadioGroup',
  },
  {
    name: 'RadioGroup',
    markdown: RadioGroupMarkdown,
    exampleComponent: RadioGroupExample,
    prevComponent: 'Newsletter',
    nextComponent: 'RangeSlider',
  },
  {
    name: 'RangeSlider',
    markdown: RangeSliderMarkdown,
    exampleComponent: RangeSliderExample,
    prevComponent: 'RadioGroup',
    nextComponent: 'Select',
  },
  {
    name: 'Select',
    markdown: SelectMarkdown,
    exampleComponent: SelectExample,
    prevComponent: 'RangeSlider',
    nextComponent: 'Tabs',
  },
  {
    name: 'Tabs',
    markdown: TabsMarkdown,
    exampleComponent: TabsExample,
    prevComponent: 'Select',
    nextComponent: 'Textarea',
  },
  {
    name: 'Textarea',
    markdown: TextareaMarkdown,
    exampleComponent: TextareaExample,
    prevComponent: 'Tabs',
    nextComponent: 'ToggleSwitch',
  },
  {
    name: 'ToggleSwitch',
    markdown: ToggleSwitchMarkdown,
    exampleComponent: ToggleSwitchExample,
    prevComponent: 'Textarea',
    nextComponent: 'Tooltip',
  },
  {
    name: 'Tooltip',
    markdown: TooltipMarkdown,
    exampleComponent: TooltipExample,
    prevComponent: 'ToggleSwitch',
  },
]

export default REACT_COMPONENTS
