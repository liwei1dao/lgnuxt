export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh'
})

export const mutations = {
  Set_locale (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}