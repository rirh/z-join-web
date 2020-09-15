# Internationalization (i18n)

## Brief intro

There are various front-end i18n solutions while most of them can be categorized into 2 genres:

- Compilation-based. e.g. [i18n-webpack-plugin](https://www.npmjs.com/package/i18n-webpack-plugin).

- Runtime-based. e.g. [react-intl](https://www.npmjs.com/package/react-intl).

Runtime-based solution prevails in many aspects because of its simplicity and flexibility. Among the most popular libs, [i18next](https://github.com/i18next/i18next) might be the [best choice](https://www.i18next.com/overview/comparison-to-others) so that [react-i18next](https://github.com/i18next/react-i18next) is introduced.

## Quickstart

Please skim through [Quick start | react-i18next](https://react.i18next.com/guides/quick-start).

## Our patterns

i18next provides an official plugin [i18next-http-backend](https://www.i18next.com/how-to/add-or-load-translations) which implies the file structure of translation files (a.k.a. **_resources_**). However, this is hardly a decent solution from maintainability and scalability perspective.

After doing some researches, we figured out a better approach to handle resources by leveraging TypeScript's `typeof`. (Please note, we could still use `i18next-http-backend` after compilation with some tweaks :)

### Any _resources_ should be modular

For example, there is an `_i18n` folder in `user` module which is self-explanatory.

```bash
_i18n
  ├── _spec.ts   # The spec
  ├── en.ts      # English translation file
  ├── index.ts   # Exports `I18N` (a type-safe key-mirrored object) and `I18N_NS` (namespace, a string)
  └── zh.ts      # Chinese translation file
```

( Tips: please don't forget to import your modular resources in `src/i18n/resources`. )

### Any resources should be spec-ed

At the moment we have `en` and `zh`, both are derived from `_spec` and **guarded** by `typeof`. By doing this, any further refactoring is effortless.

**NEVER use string literals.**

```ts
t('trans_key') // impossible to refactor by IDE intellisense
```

### Any _keys_ should be in `snake_case`

This enables us to easily distinguish a translation key from a variable name (usually in `camelCase`).

```ts
// Bad
export const _spec = {
  pleaseEnterYourEmail: '',
  pleaseEnterYourPwd: ''
}

// Good
export const _spec = {
  please_enter_your_email: '',
  please_enter_your_pwd: ''
}
```

### Avoid ES6 destructuring

```ts
// Verbose but easy to refactor
t(I18N.user._common.username)
t(I18N.user._common.password)
t(I18N.user.login.notice)
t(I18N.user.login.submit)

// Succinct but hard to refactor / search
const {
  _common: { username, password },
  login: { notice, submit }
} = I18N.user
t(username)
t(password)
t(notice)
t(submit)
```

### Avoid passing multiple namespaces

Although [useTranslation](https://react.i18next.com/latest/usetranslation-hook#loading-namespaces) supports loading multiple namespaces, we'd better load namespaces one by one.

```ts
import { I18N as I18N_USER, I18N_NS as I18N_NS_USER } from '../user/_i18n'
import { I18N as I18N_SHOP, I18N_NS as I18N_NS_SHOP } from '../shop/_i18n'

// Bad
const { t } = useTranslation([I18N_NS_USER, I18N_NS_SHOP])
t(I18N_USER.xxx.xxx)
t(`${I18N_NS_SHOP}:${I18N_SHOP.yyy.yyy}`) // Need to provide the namespace prefix, sucks!

// Good
const { t as user$t } = useTranslation(I18N_NS_USER)
const { t as shop$t } = useTranslation(I18N_NS_SHOP)
user$t(I18N_USER.xxx.xxx)
shop$t(I18N_SHOP.yyy.yyy)
```

### Avoid missing `document.title`

We introduce [react-helmet-async](https://github.com/staylor/react-helmet-async) for this purpose.

For convention, please place the relevant fields in `_seo`.

```ts
export const en: typeof _spec = {
  _common: {...},
  login: {
    _seo: {
      title: 'Login',
      desc: '...'
    },
    login: 'Sign in'
  },
  register: {
    _seo: {
      title: 'Register',
      desc: '...'
    },
    create_acct: 'Create account'
  }
}
```

### Avoid missing accessibility (a11y) `aria-*` labels

Not only for the people in need (with a screen reader) but also for potential unit / integration testings in the future.

### Use English as the primary language during development

English translation text is usually longer than its Chinese counterpart and is more likely to overflow.

## Resources

- [i18next documentation](https://www.i18next.com/)
