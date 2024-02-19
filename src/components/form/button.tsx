import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'disabled:cursor-not-allowed disabled:opacity/70',
    'dark:focus-visible:ring-violet-400',
    'active:opacity/80',
  ],
  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white enabled:hover:bg-violet-700 dark:bg-violet-500',
      outline:
        'border border-zinc-300 text-zinc-700 enabled:hover:bg-zinc-100 dark: border-zinc-400 dark:text-zinc-300 dark:enabled:hover:bg-zinc-800',
      ghost:
        'rounded-md px-2 enabled:hover:bg-zinc-100 shadow-none text-zinc-500 dark:enabled:hover:bg-zinc-800 dark:text-zinc-300',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />
}
