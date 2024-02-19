import { Cog, LifeBuoy } from 'lucide-react'
import { NavLink } from './nav-link'
import { UsedSpaceWidget } from '@/components/used-space-widget'
import { Profile } from '@/components/profile'
import { usePathname } from 'next/navigation'

type NavFooterProps = {
  handleOpenMenu: (open: boolean) => void
}

export function NavFooter({ handleOpenMenu }: NavFooterProps) {
  const pathname = usePathname()

  return (
    <div className="mt-auto space-y-6">
      <nav className="space-y-0.5">
        <NavLink
          href="/support"
          icon={LifeBuoy}
          isSelected={pathname === '/support'}
          onClick={() => handleOpenMenu(false)}
        >
          Support
        </NavLink>
        <NavLink
          href="/settings"
          icon={Cog}
          isSelected={pathname === '/settings'}
          onClick={() => handleOpenMenu(false)}
        >
          Settings
        </NavLink>
      </nav>
      <UsedSpaceWidget />
      <div className="h-px bg-zinc-200 dark:bg-zinc-600" />
      <Profile />
    </div>
  )
}
