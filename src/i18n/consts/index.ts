/**
 * References:
 * - https://support.google.com/webmasters/answer/189077#language-codes
 * - https://support.google.com/webmasters/answer/182192
 */
export enum Lang {
  En = 'en', // American English should be fine
  Zh = 'zh' // Simplified Chinese should be fine
}

// TODO: should we save the user lang preference to DB? If that so, we might need to store it in Redux
export const DEFAULT_LANG = Lang.En

export const AVAILABLE_LANGS = [
  {
    value: Lang.En,
    label: 'ENGLISH'
  },
  {
    value: Lang.Zh,
    label: '中文简体'
  }
]

export const AVAILABLE_LANGS_MAP: { [key: string]: string } = {
  [Lang.En]: 'ENGLISH',
  [Lang.Zh]: '中文简体'
}
