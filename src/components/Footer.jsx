import { restaurant } from '../data/menu'
import { useLang } from '../i18n'

const Footer = () => {
  const { t } = useLang()
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-10 text-center">
        <p className="font-serif text-lg font-semibold">{t('name')}</p>
        <p className="mt-1 text-sm text-muted">{t('location')}</p>
        <p className="mt-3 text-sm text-muted">
          {t('orders')}:{' '}
          <a href={`tel:${restaurant.phone.replace(/\s/g, '')}`} className="inline-block py-2 font-medium text-accent hover:underline">
            {restaurant.phone}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
