'use strict';

const Controller = require('egg').Controller;

class LinuxController extends Controller {
  async index() {
    let list = await this.ctx.model.Article.find({'classify':'3'});
    await this.ctx.render('/default/linux',{
      list
    })
  }
}

module.exports = LinuxController;
