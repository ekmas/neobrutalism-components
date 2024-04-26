import { ClassValue } from 'clsx'

import { cn } from '@/lib/utils'

type Props = {
  className?: ClassValue
  tabsArray: string[]
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export default function Tabs({
  className,
  tabsArray,
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div
      style={{
        gridTemplateColumns: Array(tabsArray.length)
          .fill('x')
          .map(() => '1fr')
          .join(' '),
      }}
      className={cn('grid w-full rounded-base text-sm sm:text-base', className)}
    >
      {tabsArray.map((tab, index) => {
        const bg = activeTab === tab ? 'bg-mainAccent' : 'bg-main'

        return (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer border-2 border-black py-2 text-center font-bold transition-colors first:rounded-ss-base last:rounded-se-base ${bg}`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
