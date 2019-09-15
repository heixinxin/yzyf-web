import Base from './base'

export default class Feedback extends Base {
  static async postFeedback (feedback) {
    const res = await this.post({ url: `/my/feedback`, data: {feedback} })
    return res.data
  }

}
