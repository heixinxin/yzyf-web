import Base from './base'

export default class ApplyJob extends Base {
  static async getApply (job, name, gender, age, card_id, number) {
    const data = {
      job,
      name,
      gender,
      age,
      card_id,
      number
    }
    const res = await this.post({ url: `/home/apply`, data })
    return res.data
  }
}
