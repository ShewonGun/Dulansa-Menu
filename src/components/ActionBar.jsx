import { useLang } from '../i18n'
import { useTheme } from '../theme'

const LANGS = [
  ['en', 'EN'],
  ['si', 'සිං'],
]

const iconBtn =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-leaf-50 text-muted hover:text-ink'

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

// Page-level actions: language, theme, share and print. Kept apart from the dish selector.
const ActionBar = () => {
  const { lang, setLang, t } = useLang()
  const { dark, toggle } = useTheme()
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${t('name')} – ${t('menu')}\n${window.location.href.split('#')[0]}`,
  )}`

  return (
    <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 pt-4 print:hidden">
      <div className="flex rounded-md bg-leaf-50 p-1" role="group" aria-label="Language">
        {LANGS.map(([code, label]) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`rounded px-3 py-1.5 text-sm font-semibold ${
              lang === code ? 'bg-surface text-accent shadow-sm' : 'text-muted hover:text-ink'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button type="button" onClick={toggle} aria-label={t('theme')} title={t('theme')} className={iconBtn}>
          <Icon>
            {dark ? (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </>
            ) : (
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            )}
          </Icon>
        </button>

        <a href={shareUrl} target="_blank" rel="noopener noreferrer" aria-label={t('share')} title={t('share')} className={iconBtn}>
          <Icon>
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
          </Icon>
        </a>

        <button type="button" onClick={() => window.print()} aria-label={t('print')} title={t('print')} className={iconBtn}>
          <Icon>
            <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect x="6" y="14" width="12" height="8" />
          </Icon>
        </button>
      </div>
    </div>
  )
}

export default ActionBar
