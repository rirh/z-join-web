// import i18next from 'i18next'
import Cookies from 'js-cookie'
import { EnumValues } from 'enum-values'
import { createBrowserHistory } from 'history'
import { Lang, DEFAULT_LANG } from '../consts'
const COOKIE_LANG: string = 'lang';
const ONE_YEAR = 365

export function setLang(nextLang: Lang) {
  const preLang = getLang()

  Cookies.set(COOKIE_LANG, nextLang, { expires: ONE_YEAR })

  // i18next.changeLanguage(lang) // existing <Link /> would not update automatically (sucks) so that full reload is required as below
  // TODO: any better solution?
  window.location.assign(
    window.location.pathname.replace(new RegExp(`^/${preLang}`), `/${nextLang}`)
  )
}

export function getLang(): Lang {
  const curLang = Cookies.get('lang')
  const history = createBrowserHistory()
  const path = history.location.pathname
  const prefix = path.split('/')[1]

  const isPrefixValid =
    prefix && !!EnumValues.getNameFromValue<Lang>(Lang, prefix as any)

  const isWhitelistedLang =
    curLang && !!EnumValues.getNameFromValue<Lang>(Lang, curLang as any)

  const lang = isPrefixValid
    ? (prefix as Lang)
    : isWhitelistedLang
      ? (curLang as Lang)
      : DEFAULT_LANG

  if ((lang as string) !== curLang) {
    Cookies.set(COOKIE_LANG, lang, { expires: ONE_YEAR })
  }

  if (!isPrefixValid) {
    history.push(`/${lang}/${path.replace(/^\//, '')}`)
  }

  return lang
}
