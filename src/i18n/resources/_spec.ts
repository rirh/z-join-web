import { ResourceKey } from 'i18next'

import { I18N_NS as home } from 'src/pages/Home/_i18n'
// import { I18N_NS as login } from 'src/pages/Login/_i18n'
// import { I18N_NS as restPassword } from 'src/pages/RestPassword/_i18n'
// import { I18N_NS as header } from 'src/components/Header/_i18n'

/* Example:
  type Namespaces =
  | typeof module1
  | typeof module2
  | typeof module3
  | typeof module4
  | typeof module5
 */
type Namespaces =
  | typeof home
  // | typeof login
  // | typeof restPassword
  // | typeof header


export type Spec = Record<Namespaces, ResourceKey>
