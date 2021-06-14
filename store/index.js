export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh',
  token: null,
})

export const mutations = {
  Set_locale (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  Set_token (state, token) {
    state.token = token
  },
}