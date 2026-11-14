import { useLang } from '../i18n'

const SearchBox = ({ query, onQuery, className = '' }) => {
  const { t } = useLang()
  return (
    <input
      type="search"
      value={query}
      onChange={(e) => onQuery(e.target.value)}
      placeholder={t('search')}
      aria-label={t('search')}
      className={`rounded-md border border-line bg-surface px-3 text-sm outline-none focus:border-leaf-600 ${className}`}
    />
  )
}

export default SearchBox
