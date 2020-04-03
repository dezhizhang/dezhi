'use strict';

const Controller = require('egg').Controller;

class FrontController extends Controller {
  async index() {
    await this.ctx.render("/default/front");
  }
}

module.exports = FrontController;
