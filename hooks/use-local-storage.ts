import { useCallback, useEffect, useState } from 'react'

/**
 * Persists state to `localStorage`, keyed by `key`, and keeps it in sync
 * with React state.
 *
 * SSR-safe: on the server (and on first client render, to avoid a
 * hydration mismatch) it returns `initialValue`. The stored value is read
 * once, after mount.
 *
 * @example
 * const [draft, setDraft, clearDraft] = useLocalStorage('contact-draft', { name: '', email: '' })
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // Read the persisted value once we're on the client.
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const item = window.localStorage.getItem(key)
      if (item !== null) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.warn(`useLocalStorage: failed to read key "${key}"`, error)
    }
    // Only run on mount / when the key itself changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value
        try {
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
          }
        } catch (error) {
          console.warn(`useLocalStorage: failed to write key "${key}"`, error)
        }
        return valueToStore
      })
    },
    [key]
  )

  const clearValue = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      console.warn(`useLocalStorage: failed to clear key "${key}"`, error)
    }
    setStoredValue(initialValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return [storedValue, setValue, clearValue]
}
