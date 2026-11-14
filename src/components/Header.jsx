import { restaurant } from '../data/menu'
import { useLang } from '../i18n'

const Header = () => {
  const { t } = useLang()
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:py-20 print:py-6">
        {/* Both logos are in the page; CSS shows the one that matches the current theme. */}
        <img src="/images/logo-light.png" alt="" width="360" height="348" className="logo-light mx-auto mb-6 h-20 w-auto sm:h-24 print:h-16" />
        <img src="/images/logo-dark.png" alt="" width="360" height="348" className="logo-dark mx-auto mb-6 h-20 w-auto sm:h-24" />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {t('menu')}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-6xl print:text-3xl">
          {t('name')}
        </h1>
        <a
          href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-leaf-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-leaf-700 print:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
          {t('call')} · {restaurant.phone}
        </a>
        <p className="mt-3 hidden text-sm font-medium print:block">{restaurant.phone}</p>
      </div>
    </header>
  )
}

export default Header
