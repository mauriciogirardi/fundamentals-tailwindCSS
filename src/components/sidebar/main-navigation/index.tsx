import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavLink } from './nav-link'
import { usePathname } from 'next/navigation'

const menus = [
  {
    icon: Home,
    href: '/',
    label: 'Home',
  },
  {
    icon: BarChart,
    href: '/dashboard',
    label: 'Dashboard',
  },
  {
    icon: SquareStack,
    href: '/projects',
    label: 'Projects',
  },
  {
    icon: CheckSquare,
    href: '/tasks',
    label: 'Tasks',
  },
  {
    icon: Flag,
    href: '/reporting',
    label: 'Reporting',
  },
  {
    icon: Users,
    href: '/users',
    label: 'Users',
  },
]

type MainNavigationProps = {
  handleOpenMenu: (open: boolean) => void
}

export function MainNavigation({ handleOpenMenu }: MainNavigationProps) {
  const pathname = usePathname()

  return (
    <nav className="space-y-0.5">
      {menus.map(({ href, icon: Icon, label }) => {
        return (
          <NavLink
            key={href}
            href={href}
            icon={Icon}
            isSelected={pathname === href}
            onClick={() => handleOpenMenu(false)}
          >
            {label}
          </NavLink>
        )
      })}
    </nav>
  )
}
