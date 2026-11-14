import { useEffect, useState } from 'react'
import { useLang } from '../i18n'

// Floating button that appears once the guest has scrolled well down the menu.
const BackToTop = () => {
  const [show, setShow] = useState(false)
  const { t } = useLang()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label={t('top')}
      title={t('top')}
      className="fixed bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-leaf-600 text-white shadow-md hover:bg-leaf-700 print:hidden"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

export default BackToTop
