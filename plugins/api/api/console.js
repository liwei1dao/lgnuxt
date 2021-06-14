

export function sendemailcaptcha (data) {
  return {
    url: '/lego/api/sendemailcaptcha',
    method: 'post',
    data
  }
}

export function registerbycaptcha (data) {
  return {
    url: '/lego/user/registerbycaptcha',
    method: 'post',
    data
  }
}

export function loginbycaptcha (data) {
  return {
    url: '/lego/user/loginbycaptcha',
    method: 'post',
    data
  }
}

export function loginbypassword (data) {
  return {
    url: '/lego/user/loginbypassword',
    method: 'post',
    data
  }
}

export function getuserinfo (data) {
  return {
    url: '/lego/user/getuserinfo',
    method: 'post',
    data
  }
}


export function loginout (data) {
  return {
    url: '/lego/user/loginout',
    method: 'post',
    data
  }
}


export function getprojectinfo (data) {
  return {
    url: '/lego/console/getprojectinfo',
    method: 'post',
    data
  }
}

export function gethostinfo (data) {
  return {
    url: '/lego/console/gethostinfo',
    method: 'post',
    data
  }
}

export function getcpuinfo (data) {
  return {
    url: '/lego/console/getcpuinfo',
    method: 'post',
    data
  }
}

export function getmemoryinfo (data) {
  return {
    url: '/lego/console/getmemoryinfo',
    method: 'post',
    data
  }
}

export function gethostmonitordata (data) {
  return {
    url: '/lego/console/gethostmonitordata',
    method: 'post',
    data
  }
}


export function getconsolecluster (data) {
  return {
    url: '/lego/console/getconsolecluster',
    method: 'post',
    data
  }
}

export function setservicesetting (data) {
  return {
    url: '/lego/console/setservicesetting',
    method: 'post',
    data
  }
}


export function setmodulesetting (data) {
  return {
    url: '/lego/console/setmodulesetting',
    method: 'post',
    data
  }
}