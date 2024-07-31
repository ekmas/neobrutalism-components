'use client'

import { Menu } from 'lucide-react'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import {
  MAIN_SIDEBAR,
  MOBILE_REACT_SIDEBAR,
  MOBILE_SHADCN_SIDEBAR,
} from '@/data/sidebar-links'

import Drawer from '@/components/react/components/Drawer'

import { cn } from '@/lib/utils'

export default function MobileDrawer() {
  const router = useRouter()
  const pathname = usePathname()

  const ACTIVE_SIDEBAR = pathname.includes('/docs')
    ? MAIN_SIDEBAR
    : pathname.includes('/react')
    ? MOBILE_REACT_SIDEBAR
    : pathname.includes('/shadcn')
    ? MOBILE_SHADCN_SIDEBAR
    : MAIN_SIDEBAR

  const [isDrawerActive, setIsDrawerActive] = useState(false)

  const handleLinkClick = (path: string) => {
    setIsDrawerActive(false)
    router.push(path)
  }

  return (
    <>
      <div className="hidden w-[172px] m900:block m800:w-[44px] m400:w-9">
        <button
          onClick={() => setIsDrawerActive(true)}
          className="flex items-center justify-center rounded-base border-2 border-border dark:border-darkBorder p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          <Menu className="h-6 w-6 m500:h-4 m500:w-4" />
        </button>
      </div>

      <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
        <div className="scrollbar h-full w-full overflow-y-auto bg-white dark:bg-darkNavBg">
          {ACTIVE_SIDEBAR.map((item, id) => {
            return typeof item === 'string' ? (
              <div
                key={id}
                className="sidebaritem block border-b-4 border-r-4 border-border dark:border-darkBorder p-4 text-xl font-heading m800:p-4 m800:text-base"
              >
                {item}
              </div>
            ) : (
              <button
                key={id}
                onClick={() => {
                  handleLinkClick(item.href)
                }}
                className={cn(
                  'sidebaritem block w-full border-b-4 border-r-4 border-border dark:border-darkBorder p-4 pl-7 text-left text-lg font-base text-black/90 dark:text-darkText/90 hover:bg-main50 dark:hover:text-text m800:p-4 m800:pl-6 m800:text-base',
                  item.href === pathname &&
                    'bg-main dark:text-text hover:bg-main',
                )}
              >
                {item.text}
              </button>
            )
          })}
          {/* <button
            onClick={() => {
              handleLinkClick('/templates')
            }}
            className={cn(
              'sidebaritem block w-full border-b-4 border-r-4 border-border dark:border-darkBorder p-4 pl-7 text-left text-lg font-base text-black/90 dark:text-darkText/90 hover:bg-main50 dark:hover:text-text m800:p-4 m800:pl-6 m800:text-base',
              pathname === '/templates' &&
                'bg-main dark:text-text hover:bg-main',
            )}
          >
            Templates
          </button> */}
        </div>
      </Drawer>
    </>
  )
}
