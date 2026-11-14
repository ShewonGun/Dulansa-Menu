import { useEffect, useMemo, useState } from 'react'
import { menu } from './data/menu'
import { dishesSi } from './data/si'
import { LangContext, useLang } from './i18n'
import ActionBar from './components/ActionBar'
import CategoryNav from './components/CategoryNav'
import SearchBox from './components/SearchBox'
import Header from './components/Header'
import MenuSection, { CurrencyNote } from './components/MenuSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

const readLang = () => {
  try {
    return localStorage.getItem('lang') === 'si' ? 'si' : 'en'
  } catch {
    return 'en'
  }
}

const Page = () => {
  const [query, setQuery] = useState('')
  const { t } = useLang()

  // Filter by search text in either language; hide sections with no matches.
  const sections = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return menu
    return menu
      .map((s) => ({
        ...s,
        items: s.items.filter(
          (i) => i.name.toLowerCase().includes(q) || (dishesSi[i.name] ?? '').includes(q),
        ),
      }))
      .filter((s) => s.items.length)
  }, [query])

  return (
    <div className="print-frame min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-30 focus:rounded-md focus:bg-leaf-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white print:hidden"
      >
        {t('skip')}
      </a>
      <ActionBar />
      <Header />
      {/* On phones the search box gets its own full-width row; on wider screens it sits in the sticky bar. */}
      <div className="px-5 py-4 sm:hidden print:hidden">
        <SearchBox query={query} onQuery={setQuery} className="w-full py-2.5" />
      </div>
      <CategoryNav categories={menu} query={query} onQuery={setQuery} />
      {/* Announces the number of matches to screen readers while searching. */}
      <p className="sr-only" role="status" aria-live="polite">
        {query.trim() ? t('results', sections.reduce((n, s) => n + s.items.length, 0)) : ''}
      </p>
      <main id="main" tabIndex={-1} className="outline-none mx-auto max-w-3xl px-5 pb-16 print:max-w-none print:columns-2 print:gap-10 print:px-0 print:pb-0 print:text-[13px]">
        {sections.length ? (
          sections.map((s) => <MenuSection key={s.id} section={s} />)
        ) : (
          <p className="py-20 text-center text-muted">{t('noMatch', query)}</p>
        )}
        <CurrencyNote />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

const App = () => {
  const [lang, setLangState] = useState(readLang)

  const setLang = (l) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* storage unavailable; the choice just won't persist */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Page />
    </LangContext.Provider>
  )
}

export default App
