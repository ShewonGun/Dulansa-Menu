import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import SearchBox from './SearchBox'

// Sticky dish selector: scrollable category tabs with scroll-spy (search sits beside it on wider screens).
const CategoryNav = ({ categories, query, onQuery }) => {
  const [active, setActive] = useState(categories[0]?.id)
  const barRef = useRef(null)
  const { title } = useLang()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-90px 0px -65% 0px' },
    )
    categories.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [categories])

  // Keep the active tab visible inside the scrolling bar.
  useEffect(() => {
    barRef.current
      ?.querySelector(`[data-id="${active}"]`)
      ?.scrollIntoView({ inline: 'center', block: 'nearest' })
  }, [active])

  return (
    <div className="sticky top-0 z-10 border-b border-line bg-paper/95 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-2">
        <nav ref={barRef} className="flex flex-1 gap-1 overflow-x-auto [scrollbar-width:none]" aria-label="Menu categories">
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
