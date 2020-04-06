'use strict';

const Controller = require('egg').Controller;

class ServerController extends Controller {
  async index() {
    let list = await this.ctx.model.Article.find({'classify':'2'});
    await this.ctx.render('/default/server',{
      list
    });
  }
}

module.exports = ServerController;
