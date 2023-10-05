'use client'
import { useState } from 'react'

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState('Tab 1')
  const tabsArray = ['Tab 1', 'Tab 2', 'Tab 3']

  return (
    <div className="w-[374px] rounded-md m750:w-[274px] m400:w-[214px]">
      <div
        style={{
          gridTemplateColumns: Array(tabsArray.length)
            .fill('x')
            .map((tab: any) => '1fr')
            .join(' '),
        }}
        className="grid w-full"
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
              className={`border-2 border-black px-6 py-3 text-center m750:px-5 m400:px-2 ${borderRadius} cursor-pointer font-bold transition-colors`}
            >
              {tab}
            </button>
          )
        })}
      </div>
      <div className="max-w-full border-2 border-black bg-white p-5 font-bold">
        {activeTab === 'Tab 1' && (
          <div>
            <h3>Tab 1</h3>

            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        )}
        {activeTab === 'Tab 2' && (
          <div>
            <h3>Tab 2</h3>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        )}
        {activeTab === 'Tab 3' && (
          <div>
            <h3>Tab 3</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              necessitatibus!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
