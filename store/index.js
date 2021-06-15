export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh',
  user: null,
})

export const mutations = {
  Set_locale (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  Set_user: (state, user) => {
    if (user != null) {
      state.user = user
    } else {
      state.user = null
    }
  },
}