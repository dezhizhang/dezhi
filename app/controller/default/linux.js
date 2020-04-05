'use strict';

const Controller = require('egg').Controller;

class LinuxController extends Controller {
  async index() {
    await this.ctx.render('/default/linux')
  }
}

module.exports = LinuxController;
