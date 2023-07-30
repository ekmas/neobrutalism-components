'use client'
import { useState } from 'react'

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState('Tab 1')
  const tabsArray = ['Tab 1', 'Tab 2', 'Tab 3']

  return (
    <div className="w-[374px] rounded-md">
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
