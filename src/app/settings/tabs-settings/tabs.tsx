'use client'
import * as T from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItems } from './tab-items'
import { useState } from 'react'
import { TabMyDetails } from './tab-my-details'
import { AnimationPage } from '@/components/animation-page'

const tabLists = [
  { tab: 'My Details', content: <TabMyDetails /> },
  { tab: 'Profile', content: null },
  { tab: 'Password', content: null },
  { tab: 'Team', content: null },
  { tab: 'Plan', content: null },
  { tab: 'Billing', content: null },
  { tab: 'Email', content: null },
  { tab: 'Notifications', content: null },
  { tab: 'Integrations', content: null },
  { tab: 'API', content: null },
]

export function Tabs() {
  const [activeTab, setActiveTab] = useState('my details')
  return (
    <T.Root value={activeTab} onValueChange={setActiveTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <T.List className="mt-6 flex w-full items-end gap-4 border-b border-zinc-200 dark:border-zinc-600">
            {tabLists.map(({ tab }, index) => (
              <TabItems
                key={tab}
                tab={tab}
                isSelected={activeTab === tab.toLocaleLowerCase()}
                tabIndex={index + 1}
              />
            ))}
          </T.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100 dark:bg-zinc-600"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300 dark:bg-zinc-700" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      {tabLists.map(({ tab, content }) => (
        <AnimationPage key={tab} id={tab}>
          <T.Content value={tab.toLocaleLowerCase()}>
            {content || (
              <h2 className="mt-6 text-lg font-medium text-zinc-500 dark:text-zinc-300">
                {tab}
              </h2>
            )}
          </T.Content>
        </AnimationPage>
      ))}
    </T.Root>
  )
}
