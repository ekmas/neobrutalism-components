type Props = {
  tabsArray: string[]
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export default function Tabs({ tabsArray, activeTab, setActiveTab }: Props) {
  return (
    <div className="w-max rounded-md">
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
            className={`border-2 border-black bg-red-500 px-10 py-3 ${borderRadius} cursor-pointer font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
