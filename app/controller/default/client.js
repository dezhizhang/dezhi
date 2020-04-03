'use strict';

const Controller = require('egg').Controller;

class ClientController extends Controller {
  async index() {
    await this.ctx.render("/default/client");
  }
}

module.exports = ClientController;
