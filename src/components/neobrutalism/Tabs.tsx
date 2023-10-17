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
        return (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? '#a36ec4' : '#bc95d4',
            }}
            className="cursor-pointer border-2 border-black px-6 py-3 text-center font-bold transition-colors first:rounded-ss-md last:rounded-se-md"
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
