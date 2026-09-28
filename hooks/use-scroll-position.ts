import { useEffect, useState } from 'react'

/**
 * Tracks the window's vertical scroll position.
 *
 * Reads `window.scrollY` on mount and updates on scroll, using a
 * passive listener so it never blocks the browser's own scroll handling.
 *
 * @param threshold - optional scrollY value; when provided, the hook
 *   also returns `scrolledPastThreshold` (useful for e.g. a nav bar
 *   that changes style after the user scrolls past 50px).
 */
export function useScrollPosition(threshold = 0) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Set the initial value in case the page loads already scrolled
    // (e.g. anchor link navigation or a refresh mid-page).
    setScrollY(window.scrollY)

    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    scrollY,
    scrolledPastThreshold: scrollY > threshold,
  }
}
