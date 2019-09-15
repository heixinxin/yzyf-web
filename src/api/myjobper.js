import Base from './base'

export default class myjobper extends Base {
  static async getJobPer (job_id) {
    const res = await this.get({ url: `/my/perjob/${job_id}` })
    return res.data
  }

  static async getStatus (pro_id) {
    const res = await this.get({ url: `/my/status/${pro_id}` })
    return res.data
  }
}
