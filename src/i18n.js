import { createContext, useContext } from 'react'
import { dishesSi, sectionsSi } from './data/si'
import { ui } from './strings'

export const LangContext = createContext({ lang: 'en', setLang: () => {} })

// Returns the active language plus helpers that translate UI text, dish names and sections.
export const useLang = () => {
  const { lang, setLang } = useContext(LangContext)
  const si = lang === 'si'
  return {
    lang,
    setLang,
    t: (key, arg) => {
      const v = ui[lang][key]
      return typeof v === 'function' ? v(arg) : v
    },
    dish: (name) => (si ? dishesSi[name] ?? name : name),
    title: (s) => (si ? sectionsSi[s.id]?.title ?? s.title : s.title),
    note: (s) => (si ? sectionsSi[s.id]?.note ?? s.note : s.note),
  }
}
