import { useLang } from '../i18n'

const fmt = (n) => (n == null ? '–' : n.toLocaleString('en-US'))

// One size column. Screen readers hear "Small: 800" / "Large: not available" instead of bare numbers.
const Price = ({ label, value, strong, na }) => (
  <span className={`w-16 text-right ${strong ? 'font-semibold' : 'text-muted'}`}>
    <span className="sr-only">{label}: </span>
    {value == null ? (
      <>
        <span aria-hidden="true">–</span>
        <span className="sr-only">{na}</span>
      </>
    ) : (
      fmt(value)
    )}
  </span>
)

const MenuSection = ({ section }) => {
  const { t, dish, title, note } = useLang()
  const headingId = `${section.id}-title`

  return (
    <section
      id={section.id}
      aria-labelledby={headingId}
      className="py-8 print:break-inside-avoid print:py-3"
    >
      <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h2 id={headingId} className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            {title(section)}
          </h2>
          {section.note && <span className="text-sm text-muted">{note(section)}</span>}
        </div>
        {section.sizes && (
          <div className="flex text-xs font-medium uppercase tracking-wider text-muted" aria-hidden="true">
            <span className="w-16 text-right">{t('small')}</span>
            <span className="w-16 text-right">{t('large')}</span>
          </div>
        )}
      </div>

      <ul className="divide-y divide-line">
        {section.items.map((item) => (
          <li key={item.name} className="flex items-center justify-between gap-4 py-3.5 print:py-1.5">
            <span className="text-[15px] sm:text-base">{dish(item.name)}</span>
            {section.sizes ? (
              <span className="flex tabular-nums">
                <Price label={t('small')} value={item.s} na={t('na')} />
                <Price label={t('large')} value={item.l} strong na={t('na')} />
              </span>
            ) : (
              <span className="font-semibold tabular-nums">{fmt(item.price)}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export const CurrencyNote = () => {
  const { t } = useLang()
  return <p className="pt-6 text-sm text-muted print:break-inside-avoid">{t('currency')}</p>
}

export default MenuSection
