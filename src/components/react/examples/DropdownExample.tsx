import Dropdown from '@/components/react/components/Dropdown'

export default function DropdownExample() {
  const items = [
    {
      name: 'Youtube',
      link: 'https://www.youtube.com',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com',
    },
    {
      name: 'Google',
      link: 'https://www.google.com',
    },
  ]

  return <Dropdown text={'Links'} items={items} />
}
