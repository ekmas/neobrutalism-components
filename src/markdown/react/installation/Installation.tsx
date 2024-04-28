'use client'

import { useState } from 'react'

import Code from '@/components/app/Code'
import Tabs from '@/components/react/components/Tabs'

export default function Installation() {
  const packageManagers = ['npm', 'yarn', 'pnpm', 'bun']

  const packages = 'clsx tailwind-merge lucide-react'

  const code: {
    [key in (typeof packageManagers)[number]]: string
  } = {
    npm: `npm i ${packages}`,
    yarn: `yarn add ${packages}`,
    pnpm: `pnpm add ${packages}`,
    bun: `bun add ${packages}`,
  }
  const [activeTab, setActiveTab] = useState('npm')

  const cn = `import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

  return (
    <div className="my-10">
      <div className="shadow-base rounded-base">
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabsArray={packageManagers}
        />

        <Code className="mt-0" code={code[activeTab]} limitedHeight={false} />
      </div>

      <div className="mt-14">
        <p>
          After you&apos;re done create <code>lib/utils.ts</code> inside your
          project and paste <code>cn</code> helper function to it. It makes
          easier to add tailwind classes conditionally.
        </p>

        <Code name="lib/utils.ts" code={cn} limitedHeight={false} />
      </div>
    </div>
  )
}
