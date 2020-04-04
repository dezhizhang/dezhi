'use strict';

const Controller = require('egg').Controller;

class FeedbackController extends Controller {
  async index() {
      await this.ctx.render('/admin/feedback/index')
  }
}

module.exports = FeedbackController;
