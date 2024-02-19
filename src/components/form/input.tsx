import { ComponentProps, forwardRef } from 'react'

type InputProps = ComponentProps<'div'>
type InputPrefixProps = ComponentProps<'div'>
type InputControlProps = ComponentProps<'input'>

function Prefix(props: InputPrefixProps) {
  return <div {...props}></div>
}

const Control = forwardRef<HTMLInputElement, InputControlProps>(
  (props, ref) => (
    <input
      ref={ref}
      className="group w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100  dark:placeholder-zinc-400"
      {...props}
    />
  ),
)

Control.displayName = 'Control'

function Root(props: InputProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100 dark:border-zinc-600 dark:focus-within:ring-violet-400"
      {...props}
    />
  )
}

export const Input = {
  Prefix,
  Control,
  Root,
}
