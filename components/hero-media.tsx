'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { heroMedia, heroMediaSettings, isActive, type HeroMediaItem } from '@/lib/hero-media'
import { useMediaQuery } from '@/hooks/use-media-query'

/**
 * Background image/video layer for the hero. What it shows is controlled
 * entirely from lib/hero-media.ts.
 */
export default function HeroMedia() {
  const [items, setItems] = useState<HeroMediaItem[]>([])
  const [index, setIndex] = useState(0)
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  // Decide what's active on the client, so "today's date" is the visitor's
  // current date and never a stale build-time value.
  useEffect(() => {
    const active = heroMedia.filter((item) => isActive(item))
    setItems(heroMediaSettings.mode === 'rotate' ? active : active.slice(0, 1))
    setIndex(0)
  }, [])

  
  const current = items.length ? items[index % items.length] : undefined
  const rotating = items.length > 1

  const next = () => setIndex((i) => (i + 1) % items.length)

  // Images advance on a timer; videos advance when they finish playing.
  useEffect(() => {
    if (!rotating || !current) return
    if (current.type === 'video' && !reducedMotion) return
    const timer = setTimeout(next, (current.duration ?? 6) * 1000)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, rotating, current, reducedMotion])

  if (!current) return null

  const still = current.type === 'image' ? current.src : current.poster
  const showVideo = current.type === 'video' && !reducedMotion

  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        <motion.div
          key={`${index}-${current.src}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {showVideo ? (
            <video
              src={current.src}
              poster={current.poster}
              autoPlay
              muted
              playsInline
              loop={!rotating}
              preload="auto"
              onEnded={rotating ? next : undefined}
              className="h-full w-full object-cover"
            />
          ) : (
            still && <Image src={still} alt="" fill priority sizes="100vw" className="object-cover" />
          )}
        </motion.div>
      </AnimatePresence>
      {/* Keeps the headline readable on top of any image or video. */}
      <div className="absolute inset-0 bg-background" style={{ opacity: heroMediaSettings.overlayOpacity }} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
