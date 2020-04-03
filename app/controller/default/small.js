'use strict';

const Controller = require('egg').Controller;

class SmallController extends Controller {
  async index() {
    await this.ctx.render('/default/small')
  }
}

module.exports = SmallController;
