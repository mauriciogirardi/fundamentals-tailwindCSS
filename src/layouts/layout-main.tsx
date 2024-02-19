'use client'

import { AnimationPage } from '@/components/animation-page'
import { ReactNode, Suspense } from 'react'

type LayoutMainProps = {
  children: ReactNode
}

export function LayoutMain({ children }: LayoutMainProps) {
  return (
    <Suspense>
      <AnimationPage>{children}</AnimationPage>
    </Suspense>
  )
}
