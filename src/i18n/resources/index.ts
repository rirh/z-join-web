import { Resource } from 'i18next'
import { Lang } from '../consts'
import { en } from './en'
import { zh } from './zh'

// TODO: SSR and lazy load based on `req.headers.lang` or cookies, etc
export const resources: Resource = {
  [Lang.En]: en,
  [Lang.Zh]: zh
}
