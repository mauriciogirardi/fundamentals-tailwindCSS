'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './root'
import { twMerge } from 'tailwind-merge'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      className={twMerge(
        'group flex w-full flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm',
        'hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500 focus:border-violet-300 focus:ring-2 focus:ring-violet-100',
        'dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-violet-400',
      )}
      htmlFor={id}
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 dark:border-zinc-500 dark:bg-zinc-600 dark:group-hover:border-violet-400">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600 dark:text-zinc-300 dark:group-hover:text-violet-400" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700 dark:text-violet-500">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
