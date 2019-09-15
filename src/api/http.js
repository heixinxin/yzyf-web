import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.timeout = 5000
// axios.defaults.transformRequest = [function (data, headers) {
//   // if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
//   //   // 把一个参数对象格式化为一个字符串
//   //   return qs.stringify(data)
//   // } else
//   if (headers['Content-Type'] === 'multipart/form-data;charset=UTF-8') {
//     return data
//   } else {
//     headers['Content-Type'] = 'application/json'
//   }
//   return JSON.stringify(data)
// }]
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token')
  let base = process.env.API_HOST  || 'http://127.0.0.1:8000'
  if (config.url[0] === '/') {
    config.url = base + config.url
  }
  console.log(config.url)
  if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    config.headers.Authorization = "Token "+token;
  }
  config.headers = Object.assign({
    'Content-Type': 'application/json; charset=utf-8'
  }, config.headers)

  return config
}, function (error) {
// todo 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应得数据做点什么
  return response
}, function (error) {
  // todo 对响应错误做点什么
  return Promise.reject(error)
})

// 封装 http
export default class Http {
  static async request (method = `GET`, url, header = {}, data = {}) {
    const options = {
      url,
      method,
      header,
      data
    }
    return axios(options)
  }

  static get ({ url, header = {}, data = {} }) {
    return this.request('GET', url, header, data)
  }

  static put ({ url, header = {}, data = {} }) {
    return this.request('PUT', url, header, data)
  }

  static post ({ url, header = {}, data = {} }) {
    return this.request('POST', url, header, data)
  }

  static patch ({ url, header = {}, data = {} }) {
    return this.request('PATCH', url, header, data)
  }

  static delete ({ url, header = {}, data = {} }) {
    return this.request('DELETE', url, header, data)
  }
}
