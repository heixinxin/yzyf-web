import Base from './base'

export default class EditUser extends Base {
  static async putUsername (username) {
    const res = await this.put({ url: '/getuser', data: {username} })
    return res.data
  }

  static async putGender (gender) {
    const res = await this.put({ url: '/putGender', data: {gender} })
    return res.data
  }

  static async putEmail (email) {
    const res = await this.put({ url: '/putEmail', data: {email} })
    return res.data
  }

}
