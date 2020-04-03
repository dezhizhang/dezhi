'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {
  async index() {
    await this.ctx.render('/default/about');
  }
}

module.exports = AboutController;
