import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from './form/button'

export function Profile() {
  return (
    <div className="flex items-center gap-3 pb-6 2xl:pb-0">
      <Image
        src="https://github.com/mauriciogirardi.png"
        alt="Mauricio Girardi"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />

      <div className="flex flex-1 flex-col">
        <p className="max-w-[150px] truncate text-sm font-semibold text-zinc-700 lg:max-w-[180px] dark:text-zinc-200">
          Mauricio Girardi
        </p>
        <a
          href="mailto:devmauriciogirardi@gmail.com"
          className="max-w-[150px] truncate text-xs text-zinc-500 lg:max-w-[180px] dark:text-zinc-300"
        >
          devmauriciogirardi@gmail.com
        </a>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
      </Button>
    </div>
  )
}
