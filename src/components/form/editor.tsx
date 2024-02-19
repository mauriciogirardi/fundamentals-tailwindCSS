'use client'

import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

export function Editor() {
  const [value, setValue] = useState<string | undefined>('')

  return (
    <div className="focus-within:ring-3 rounded-lg focus-within:border-violet-300 focus-within:ring-violet-100">
      <MDEditor value={value} onChange={setValue} />
    </div>
  )
}
