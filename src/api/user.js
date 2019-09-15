import Base from './base'

export default class User extends Base {
  static async postToken (username, password) {
    const data = {
      username,
      password
    }
    const res = await this.post({ url: '/api-token-auth', data })
    return res.data
  }

  static async postLogin(username, password){
    const data = {
      username,
      password
    }
    const res = await this.post({ url: '/login', data })
    return res.data
  }

  static async postRegister(username, password, alipay){
    const data = {
      username,
      password,
      alipay
    }
    const res = await this.post({ url: '/register', data})
    return res.data
  }

  static async getUser () {
    const res = await this.get({ url: '/getuser' })
    return res.data
  }

  static async postPwd (password) {
    const res = await this.post({ url: '/modifyPwd', data: {password} })
    console.log(res)
    return res.data
  }
}
