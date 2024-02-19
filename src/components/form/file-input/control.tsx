'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return
    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      className="sr-only"
      type="file"
      id={id}
      multiple={multiple}
      onChange={handleFileSelected}
      {...props}
    />
  )
}
