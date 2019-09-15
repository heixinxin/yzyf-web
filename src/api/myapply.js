import Base from './base'

export default class myApply extends Base {
  static async getApply () {
    const res = await this.get({ url: `/my/apply` })
    return res.data
  }

}
