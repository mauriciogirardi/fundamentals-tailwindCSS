'use client'

import { Menu, Search } from 'lucide-react'
import { Input } from '../form/input'
import { Logo } from '../logo'
import { MainNavigation } from './main-navigation'
import { NavFooter } from './main-navigation/nav-footer'
import { useCallback, useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../form/button'
import { twMerge } from 'tailwind-merge'

export function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = useCallback((open: boolean) => {
    setOpenMenu(open)
  }, [])

  return (
    <Collapsible.Root
      open={openMenu}
      onOpenChange={handleOpenMenu}
      className={twMerge(
        'fixed left-0 top-0 z-20 flex w-full flex-col gap-6 overflow-y-auto border-b border-zinc-200 bg-white p-4 lg:border-b-0',
        'lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0',
        'data-[state=open]:bottom-0',
        'dark:border-zinc-500 dark:bg-zinc-900',
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex h-full flex-col data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control type="text" placeholder="Search" />
        </Input.Root>

        <MainNavigation handleOpenMenu={handleOpenMenu} />
        <NavFooter handleOpenMenu={handleOpenMenu} />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
