'use client'

import { useState } from 'react'

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState('Tab 1')
  const tabsArray = ['Tab 1', 'Tab 2', 'Tab 3']

  return (
    <div className="w-[374px] rounded-base m750:w-[274px] m400:w-[214px]">
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
          const bg = activeTab === tab ? 'bg-mainAccent' : 'bg-main'

          return (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`${bg} cursor-pointer border-2 border-black px-6 py-3 text-center font-bold transition-colors first:rounded-ss-base last:rounded-se-base m750:px-5 m400:px-2`}
            >
              {tab}
            </button>
          )
        })}
      </div>
      <div className="max-w-full rounded-b-base border-2 border-black bg-white p-5 font-bold">
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
