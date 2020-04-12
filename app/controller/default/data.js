'use strict';

const Controller = require('egg').Controller;

class DataController extends Controller {
  async index() {
    let list = await this.ctx.model.Article.find({'classify':'4'});
    await this.ctx.render("/default/data",{
      list
    });
  }
}

module.exports = DataController;
