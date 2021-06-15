export default function ({ app, redirect, store }) {
  if (!store.state.user) {
    app.$getuserinfo(null).then(response => {
      const { data } = response
      app.$cookies.set('User-Token', data.Token)
      store.commit('Set_user', data)
      return
    }).catch(error => {
      console.log("error:" + error)
      app.$message.error(error.message)
      return redirect('/login');
    })
  }
}