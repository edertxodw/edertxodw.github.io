export const i18n = {
  defaultLocale: 'es',
  locales: ['es', 'en', 'eu'],
} as const

export type Locale = (typeof i18n)['locales'][number]
