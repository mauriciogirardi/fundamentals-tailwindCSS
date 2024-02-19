export function UsedSpaceWidget() {
  return (
    <div className="space-y-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-200">
          Used space
        </span>
        <p className="text-sm/5 text-violet-500 dark:text-zinc-400">
          Your team used 80% of your available space. Need more?
        </p>
      </div>
      <div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
        <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-500" />
      </div>
      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-violet-500 enabled:hover:text-violet-700 dark:text-zinc-300 dark:enabled:hover:text-zinc-100"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-violet-700 enabled:hover:text-violet-900 dark:text-zinc-400 dark:enabled:hover:text-zinc-300"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
