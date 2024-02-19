import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { Button } from '../button'
import { formatBytes } from '@/utils/format-bytes'
import { twMerge } from 'tailwind-merge'
import { VariantProps, tv } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border p-4 border-zinc-200',
    icon: 'rounded-full border-4 p-2 border-violet-100 bg-violet-200 text-violet-600 dark:border-zinc-500 dark:text-violet-300 dark:bg-zinc-800',
    deleteBtn: 'text-zinc-500',
  },
  variants: {
    state: {
      progress: {
        container:
          'bg-violet-25 border-violet-200 dark:bg-zinc-950 dark:border-zinc-800',
        icon: 'animate-pulse',
      },
      complete: {
        container: 'border-violet-500',
        icon: '',
      },
      error: {
        container:
          'border-error-200 bg-error-25 dark:bg-zinc-950 dark:border-zinc-800',
        icon: 'border-error-100 bg-error-200 text-error-600',
        deleteBtn: 'text-error-700 enabled:hover:text-error-900',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

type FileItemProps = VariantProps<typeof fileItem> & {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteBtn } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 dark:text-error-500 text-sm font-medium">
              Upload failed, please try again.
            </span>
            <span className="text-error-700 dark:text-error-500 text-xs">
              {name}
            </span>
          </div>

          <button
            type="button"
            className="text-error-700 dark:text-error-500 enabled:hover:text-error-900 dark:enabled:hover:text-error-600 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {name}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
              <div
                className={twMerge(
                  'h-2 rounded-full bg-violet-600',
                  state === 'complete' ? 'w-full' : 'w-4/5',
                )}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteBtn()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
