/**
 * HERO BACKGROUND MEDIA — edit this file to control what the hero shows.
 *
 * 1. Put your files in /public (e.g. /public/hero/banner.jpg or
 *    /public/videos/intro.mp4).
 * 2. Add an entry to `heroMedia` below.
 * 3. Save. Nothing else needs to change.
 *
 * Only entries that are "active" right now are used, so you can prepare
 * things ahead of time and have them appear (and disappear) on the dates
 * you choose. If no entry is active, the hero looks exactly as it did
 * before (no background media).
 */

export type HeroMediaItem = {
  type: 'image' | 'video'
  /** Path inside /public, e.g. '/hero/banner.jpg' or '/videos/intro.mp4' */
  src: string
  /** Videos only: still image shown while loading (and for visitors who
   *  prefer reduced motion). Strongly recommended. */
  poster?: string
  /** First day this should show, e.g. '2026-12-01' or '2026-12-01T09:00'. Omit = already live. */
  startDate?: string
  /** Last day this should show (a plain date includes that whole day). Omit = never expires. */
  endDate?: string
  /** Rotation only: seconds an image stays on screen (default 6). Videos play to the end. */
  duration?: number
  /** Set to false to switch an entry off without deleting it. */
  enabled?: boolean
}

export const heroMedia: HeroMediaItem[] = [
  // ---- Examples (remove the // to use) ----
  // { type: 'image', src: '/hero/banner.jpg' },
  //
  // { type: 'video', src: '/videos/intro.mp4', poster: '/hero/intro-poster.jpg' },
  //
  // Christmas banner that only shows Dec 15 – Dec 31:
  // { type: 'image', src: '/hero/christmas.jpg', startDate: '2026-12-15', endDate: '2026-12-31' },
  { type: 'image', src: '/banner.jpg' },
//   { type: 'video', src: '/intro.mp4' },

]

export const heroMediaSettings = {
  /** 'first'  = show the first active entry only.
   *  'rotate' = cycle through every active entry, one after another. */
  mode: 'first' as 'first' | 'rotate',
  /** How dark the layer over the media is (0–1). Raise it if text is hard to read. */
  overlayOpacity: 0.65,
}

function parse(value: string, endOfDay: boolean) {
  const dateOnly = value.length === 10
  return new Date(dateOnly ? `${value}T${endOfDay ? '23:59:59' : '00:00:00'}` : value)
}

export function isActive(item: HeroMediaItem, now: Date = new Date()) {
  if (item.enabled === false) return false
  if (item.startDate && now < parse(item.startDate, false)) return false
  if (item.endDate && now > parse(item.endDate, true)) return false
  return true
}
