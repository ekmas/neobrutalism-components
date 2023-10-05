type Props = {
  tabsArray: string[]
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export default function Tabs({ tabsArray, activeTab, setActiveTab }: Props) {
  return (
    <div
      style={{
        gridTemplateColumns: Array(tabsArray.length)
          .fill('x')
          .map((tab: any) => '1fr')
          .join(' '),
      }}
      className="grid w-[500px] rounded-md"
    >
      {tabsArray.map((tab, index) => {
        let borderRadius = ''

        if (index === 0) {
          borderRadius = 'rounded-ss-md'
        } else if (index === tabsArray.length - 1) {
          borderRadius = 'rounded-se-md'
        }

        return (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? '#bc95d4' : '#b482d3',
            }}
            className={`border-2 border-black px-6 py-3 text-center ${borderRadius} cursor-pointer font-bold transition-colors`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
