import Message from '@/components/message/'
import { paramsign } from './md5'
import { sendemailcaptcha } from './api/console'

export default function ({ store, $axios, redirect }, inject) {
  $axios.interceptors.request.use(
    request => {
      if (request.data != null) {
        console.log(request.data)
        request.data = paramsign(request.data)
      }
      if (store.state.token != null) {
        request.headers['X-Token'] = store.state.token
        console.log("X-Token" + request.headers['X-Token'])
      }
      return request
    },
    error => {
      console.log(error) //for debug
      return Promise.reject(error)
    }
  )
  $axios.interceptors.response.use(
    response => {
      const res = response.data
      if (res.code === 0) {
        return res
      } else if (res.code === 17) {
        redirect('/login')
      } else {
        Message.error(res.message || 'Error')
      }
      return Promise.reject(new Error(res.message || 'Error'))
    },
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )
  inject('sendemailcaptcha', params => $axios(sendemailcaptcha(params)))
}