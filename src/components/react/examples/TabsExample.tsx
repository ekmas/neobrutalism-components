'use client'

import { useState } from 'react'

import Tabs from '@/components/react/components/Tabs'

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState('Tab 1')
  const tabsArray = ['Tab 1', 'Tab 2', 'Tab 3']

  return (
    <div className="max-w-[350px] rounded-base w-full">
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabsArray={tabsArray}
      />
      <div className="max-w-full rounded-b-base border-2 border-black bg-white p-5 font-base">
        {activeTab === 'Tab 1' && (
          <div>
            <h3>Tab 1</h3>

            <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
        )}
        {activeTab === 'Tab 2' && (
          <div>
            <h3>Tab 2</h3>

            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        )}
        {activeTab === 'Tab 3' && (
          <div>
            <h3>Tab 3</h3>

            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              necessitatibus!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
