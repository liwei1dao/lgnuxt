
export default function ({ app, $axios, redirect }) {
    const API = {};
    API.getPublicKey = function (params) {
      return $axios({
        url: '/api/serviceConvergeRsa',
        method: 'get',
        data: params,
        headers: {
          'encrypt': 1
        },
      })
    };
  
    API.getServiceList = function (data, header={}) {
      return $axios({
        url: `/api/getServiceConvergeList`,
        method: 'get',
        params: data,
        headers: header
      })
    };
    app.api = API;
  }