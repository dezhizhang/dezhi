'use strict';

const Controller = require('egg').Controller;

class ClientController extends Controller {
  async index() {
    const pageSize = 10;
      let page = this.ctx.query.page || 1;
      let list = await this.ctx.model.Article.find({'classify':'1'}).limit(pageSize).skip((page - 1) * pageSize).sort({'add_time':-1}); 
      await this.ctx.render("/default/client",{
        list
      });
  }
}

module.exports = ClientController;
