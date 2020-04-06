'use strict';

const Controller = require('egg').Controller;

class ClientController extends Controller {
  async index() {
    let list = await this.ctx.model.Article.find({'classify':'1'});
    await this.ctx.render("/default/client",{
      list
    });
  }
}

module.exports = ClientController;
