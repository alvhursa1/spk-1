// components/AnimatedLayout.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const pageVariants = {
  initial: { y: '-100vh' },
  in: { y: 0 },
  out: { y: '100vh' },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

const backdropVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
}

const backdropTransition = {
  duration: 0.3
}

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen"
        >
          {children}
        </motion.div>
        <motion.div
          key={`backdrop-${pathname}`}
          initial="initial"
          animate="in"
          exit="out"
          variants={backdropVariants}
          transition={backdropTransition}
          className="fixed inset-0 bg-black pointer-events-none"
          style={{ zIndex: -1 }}
        />
      </AnimatePresence>
    </div>
  )
}