import { ClassValue } from 'clsx'

import { cn } from '@/lib/utils'

type Props = {
  className?: ClassValue
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}

export default function Input({
  className,
  value,
  setValue,
  placeholder,
}: Props) {
  return (
    <input
      className={cn(
        'rounded-base bg-white dark:bg-secondaryBlack border-2 border-border dark:border-darkBorder p-[10px] font-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none',
        className,
      )}
      type="text"
      name="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      aria-label={placeholder}
    />
  )
}
