'use strict';

const Controller = require('egg').Controller;

class ServerController extends Controller {
  async index() {
    await this.ctx.render('/default/back');
  }
}

module.exports = ServerController;
