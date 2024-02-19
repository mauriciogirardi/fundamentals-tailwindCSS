import { Trigger } from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

type TabItemsProps = {
  tab: string
  value?: string
  disabled?: boolean
  isSelected?: boolean
  tabIndex?: number
}

export function TabItems({
  tab,
  value,
  disabled = false,
  isSelected = false,
  tabIndex,
}: TabItemsProps) {
  const tabValue = value ?? tab.toLocaleLowerCase()
  return (
    <Trigger
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none enabled:hover:text-violet-700 disabled:cursor-not-allowed disabled:text-zinc-300 data-[state=active]:text-violet-700 dark:text-zinc-300 dark:enabled:hover:text-violet-500 dark:data-[state=active]:text-violet-500"
      value={tabValue}
      disabled={disabled}
      tabIndex={tabIndex}
    >
      <span className="whitespace-nowrap group-focus-visible:right-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {tab}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-500"
        />
      )}
    </Trigger>
  )
}
