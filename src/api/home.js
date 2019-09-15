import Base from './base'

export default class Home extends Base {
  static async getList (page) {
    const res = await this.get({ url: `/home/job/?format=json&page=${page}` })
    return res.data.results
  }

  static async getDetail(detail_id) {
    const res = await this.get({ url: `/home/job/${detail_id}/?format=json` })
    return res.data
  }

  static async getMyList (page) {
    const res = await this.get({ url: `/home/myjob/?format=json&page=${page}` })
    return res.data.results
  }

  static async postCreate (name, company, price, job_number, place, eat, live, company_info, job_require) {
    const data = {
      name,
      company,
      price,
      job_number,
      place,
      eat,
      live,
      company_info,
      job_require
    }
    const res = await this.post({ url: `/home/myjob/`, data})
    return res.data
  }

  static async putCreate (job_id, name, company, price, job_number, place, eat, live, company_info, job_require) {
    const data = {
      name,
      company,
      price,
      place,
      job_number,
      eat,
      live,
      company_info,
      job_require
    }
    const res = await this.put({ url: `/home/myjob/${job_id}/`, data})
    return res.data
  }
}
