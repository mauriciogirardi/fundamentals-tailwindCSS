'use client'

import { Menu, Search } from 'lucide-react'
import { Input } from '../form/input'
import { Logo } from '../logo'
import { MainNavigation } from './main-navigation'
import { NavFooter } from './main-navigation/nav-footer'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../form/button'
import { twMerge } from 'tailwind-merge'

const schemaSearch = z.object({
  q: z.string().optional(),
})

type SearchParam = z.infer<typeof schemaSearch>

export function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false)
  const route = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('q')

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const { register, handleSubmit } = useForm<SearchParam>({
    resolver: zodResolver(schemaSearch),
    defaultValues: {
      q: search ?? '',
    },
  })

  function handleSearch({ q }: SearchParam) {
    if (!q) {
      route.push(pathname)
      return
    }
    route.push(pathname + '?' + createQueryString('q', q))
  }

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
        <form onSubmit={handleSubmit(handleSearch)} className="mb-4">
          <Input.Root>
            <Input.Prefix>
              <Search className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              type="text"
              placeholder="Search"
              {...register('q')}
            />
          </Input.Root>
        </form>

        <MainNavigation handleOpenMenu={handleOpenMenu} />
        <NavFooter handleOpenMenu={handleOpenMenu} />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
