import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'pl'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
})