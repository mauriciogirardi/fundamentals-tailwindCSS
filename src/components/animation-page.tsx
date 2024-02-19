import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

type AnimationPageProps = {
  children: ReactNode
  id?: string
}

export function AnimationPage({ children, id = 'single' }: AnimationPageProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
