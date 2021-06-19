import Message from '@/components/message/'
import { paramsign } from './md5'
import { sendemailcaptcha, registerbycaptcha, loginbypassword, getuserinfo, loginout, getprojectinfo, gethostinfo } from './api/console'

export default function ({ app, store, $axios, redirect }, inject) {
  $axios.interceptors.request.use(
    request => {
      if (request.data != null) {
        console.log(request.data)
        request.data = paramsign(request.data)
      }
      const token = app.$cookies.get('User-Token')
      if (token != null) {
        request.headers['X-Token'] = token
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
      console.log('response:' + JSON.stringify(response.baseURL) + "|res:" + JSON.stringify(res))
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
  inject('sendemailcaptcha', params => { return $axios(sendemailcaptcha(params)) })
  inject('registerbycaptcha', params => { return $axios(registerbycaptcha(params)) })
  inject('loginbypassword', params => { return $axios(loginbypassword(params)) })
  inject('getuserinfo', params => { return $axios(getuserinfo(params)) })
  inject('loginout', params => { return $axios(loginout(params)) })
  inject('getprojectinfo', params => { return $axios(getprojectinfo(params)) })
  inject('gethostinfo', params => { return $axios(gethostinfo(params)) })
}