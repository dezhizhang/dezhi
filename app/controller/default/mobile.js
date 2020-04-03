'use strict';

const Controller = require('egg').Controller;

class MobileController extends Controller {
  async index() {
      await this.ctx.render('/default/mobile')
  }
}

module.exports = MobileController;
