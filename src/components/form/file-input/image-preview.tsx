'use client'

import { User } from 'lucide-react'
import { useFileInput } from './root'
import { useMemo } from 'react'
import Image from 'next/image'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) return null

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-zinc-800">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-400" />
      </div>
    )
  }

  return (
    <Image
      className="h-16 w-16 rounded-full object-cover"
      src={previewURL}
      alt=""
      width={64}
      height={64}
    />
  )
}
