// import { ChevronDown } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type NavLinkProps = LinkProps & {
  children: ReactNode
  icon: ElementType
  isSelected?: boolean
  onClick?: () => void
}

export function NavLink({
  children,
  icon: Icon,
  isSelected = false,
  onClick,
  ...props
}: NavLinkProps) {
  return (
    <button className="flex w-full outline-none" onClick={onClick}>
      <Link
        className={twMerge(
          isSelected && ' bg-violet-50 dark:bg-zinc-800',
          'group flex w-full items-center gap-3 rounded px-3 py-2 outline-none hover:bg-violet-50',
          'hover:dark:bg-zinc-800',
        )}
        {...props}
      >
        <Icon
          className={twMerge(
            isSelected
              ? 'text-violet-500 dark:text-violet-400'
              : 'text-zinc-500',
            'h-5 w-5',
          )}
        />
        <span
          className={twMerge(
            isSelected
              ? 'text-violet-500 dark:text-violet-400'
              : 'text-zinc-700 dark:text-zinc-300',
            'font-medium group-hover:text-violet-500 dark:group-hover:text-violet-400',
          )}
        >
          {children}
        </span>
        {/* <ChevronDown
        className={twMerge(
          isSelected ? 'text-violet-500' : 'text-zinc-400',
          'ml-auto h-5 w-5 group-hover:text-violet-500',
          )}
        /> */}
      </Link>
    </button>
  )
}
