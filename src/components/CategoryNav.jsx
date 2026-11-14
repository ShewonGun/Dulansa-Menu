import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import SearchBox from './SearchBox'

// Sticky dish selector: scrollable category tabs with scroll-spy (search sits beside it on wider screens).
const CategoryNav = ({ categories, query, onQuery }) => {
  const [active, setActive] = useState(categories[0]?.id)
  const barRef = useRef(null)
  const { title } = useLang()

  useEffect(() => {
    // At the very bottom of the page the last (short) section can never reach the highlight line,
    // so highlight the last visible category instead.
    const lastId = () => [...categories].reverse().find((c) => document.getElementById(c.id))?.id
    const atBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

    const observer = new IntersectionObserver(
      (entries) => {
        if (atBottom()) return setActive(lastId())
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-90px 0px -65% 0px' },
    )
    categories.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })

    // Back above the first section (near the top of the page): highlight the first category again.
    const onScroll = () => {
      if (atBottom()) return setActive(lastId())
      const first = categories.find((c) => document.getElementById(c.id))
      if (first && document.getElementById(first.id).getBoundingClientRect().top > window.innerHeight * 0.35) {
        setActive(first.id)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [categories])

  // Keep the active tab centred inside the scrolling tab strip.
  // Scroll only the strip sideways: scrollIntoView() would also nudge the whole page up/down.
  useEffect(() => {
    const bar = barRef.current
    const tab = bar?.querySelector(`[data-id="${active}"]`)
    if (!bar || !tab) return
    const b = bar.getBoundingClientRect()
    const r = tab.getBoundingClientRect()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Absolute target (not "move by N"): if several tabs change in quick succession, e.g. after the
    // back-to-top button, the last call always wins instead of earlier moves piling up.
    const target = bar.scrollLeft + (r.left - b.left) - (b.width - r.width) / 2
    bar.scrollTo({ left: Math.max(0, target), behavior: reduce ? 'auto' : 'smooth' })
  }, [active])

  return (
    // Plain `bg-paper` (no "/95" opacity): the opacity version compiles to a fixed light colour on older
    // phone browsers, which then ignore dark mode.
    <div className="sticky top-0 z-10 border-b border-line bg-paper print:hidden">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-2">
        <nav ref={barRef} className="flex flex-1 gap-1 no-scrollbar overflow-x-auto overscroll-x-contain" aria-label="Menu categories">
          {categories.map((c) => (
            <a
              key={c.id}
              data-id={c.id}
              href={`#${c.id}`}
              aria-current={active === c.id ? 'true' : undefined}
              className={`shrink-0 rounded-md px-3 py-2 text-sm font-medium focus-visible:-outline-offset-2 ${
                active === c.id ? 'bg-leaf-50 text-accent' : 'text-muted hover:text-ink'
              }`}
            >
              {title(c)}
            </a>
          ))}
        </nav>
        <SearchBox query={query} onQuery={onQuery} className="hidden w-48 shrink-0 py-1.5 sm:block" />
      </div>
    </div>
  )
}

export default CategoryNav
