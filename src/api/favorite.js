import Base from './base'

export default class favorite extends Base {
  static async getFavorite (job_id) {
    const res = await this.get({ url: `/my/favorite/${job_id}` })
    return res.data
  }

  static async postFavorite (job_id) {
    const res = await this.post({ url: `/my/favorite`, data: {job_id} })
    return res.data
  }

  static async getList () {
    const res = await this.get({ url: `/my/favoritelist` })
    return res.data
  }
}
