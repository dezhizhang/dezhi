'use strict';

const Controller = require('egg').Controller;

class MobileController extends Controller {
  async index() {
    let list = await this.ctx.model.Article.find({'classify':'5'});
    await this.ctx.render('/default/mobile',{
      list
    })
  }
}

module.exports = MobileController;
