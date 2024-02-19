import { Loader2Icon } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200">
      <Loader2Icon className="h-12 w-12 animate-spin" />
      <p>Loading...</p>
    </div>
  )
}
