import { useEffect, useState } from 'react'

const KEY = 'theme'
const query = '(prefers-color-scheme: dark)'

const readChoice = () => {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

// Follows the device setting until the guest taps the toggle; then their choice is remembered.
export const useTheme = () => {
  const [choice, setChoice] = useState(readChoice)
  const [systemDark, setSystemDark] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setSystemDark(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (choice) root.dataset.theme = choice
    else delete root.dataset.theme
  }, [choice])

  const dark = choice ? choice === 'dark' : systemDark

  // Keep the phone's status-bar colour in step with the page background.
  // Both tags are set so it works even when the guest's choice differs from the device setting.
  useEffect(() => {
    const color = dark ? '#121714' : '#faf8f4'
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', color))
  }, [dark])

  const toggle = () => {
    const next = dark ? 'light' : 'dark'
    setChoice(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* storage unavailable; choice just won't persist */
    }
  }

  return { dark, toggle }
}
