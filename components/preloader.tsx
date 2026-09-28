'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

// The splash always shows for at least MIN_MS so the logo animation can
// play, waits for the page's `load` event, and gives up waiting after
// MAX_MS so a slow asset can never trap visitors on the loading screen.
const MIN_MS = 1800
const MAX_MS = 6000

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let loaded = document.readyState === 'complete'
    let finished = false
    let hideTimeout: ReturnType<typeof setTimeout> | undefined

    const onLoad = () => {
      loaded = true
    }
    window.addEventListener('load', onLoad)

    const tick = setInterval(() => {
      const elapsed = performance.now() - start
      // Creep towards 90% while the page is still loading, then fill up.
      const ceiling = loaded ? 100 : 90
      const next = Math.min(ceiling, (elapsed / MIN_MS) * ceiling)
      setProgress((prev) => Math.max(prev, next))

      if (!finished && ((loaded && elapsed >= MIN_MS) || elapsed >= MAX_MS)) {
        finished = true
        clearInterval(tick)
        setProgress(100)
        hideTimeout = setTimeout(() => setVisible(false), 300)
      }
    }, 50)

    return () => {
      clearInterval(tick)
      clearTimeout(hideTimeout)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  // Keep the page from scrolling underneath the splash screen.
  useEffect(() => {
    if (!visible) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [visible])

  return (
    <>
      {/* Without JavaScript the splash could never be dismissed. */}
      <noscript>
        <style>{'#site-preloader{display:none!important}'}</style>
      </noscript>
      <AnimatePresence>
        {visible && (
          <motion.div
            id="site-preloader"
            role="status"
            aria-live="polite"
            aria-label="Loading Julius Tech Hub"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          >
            <div className="absolute inset-0 grid-pattern pointer-events-none" />
            <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-3xl animate-pulse-glow pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <Image
                src="/logo-full.svg"
                alt="Julius Tech Hub"
                width={320}
                height={208}
                priority
                className="w-56 sm:w-72 h-auto"
              />
            </motion.div>

            <div className="relative mt-10 h-[3px] w-48 sm:w-64 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 transition-[width] duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="sr-only">Loading…</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}