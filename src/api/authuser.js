import Base from './base'

export default class AuthUser extends Base {
  static async postAuth (name, card_id) {
    const data = {
      name,
      card_id
    }
    const res = await this.post({ url: `/my/authuser`, data })
    return res.data
  }

  // static async postAuthImage (face_photo) {
  //   const res = await this.post({ url: `/my/authimage`, data:{face_photo} })
  //   return res.data
  // }
  //
  // static async postAuthImage1 (word_photo) {
  //   const res = await this.post({ url: `/my/authimage1`, data:{word_photo} })
  //   return res.data
  // }
}
