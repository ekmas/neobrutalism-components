import Checkbox from '../components/Checkbox'

export default function CheckboxExample() {
  return (
    <div className="rounded-base border-2 border-border dark:border-darkBorder bg-main p-10 py-5 shadow-light dark:shadow-dark">
      <Checkbox item="item 1" />
      <Checkbox item="item 2" />
      <Checkbox item="item 3" />
    </div>
  )
}
