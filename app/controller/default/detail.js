'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let { article_id,name } = this.ctx.query;
    let list = await this.ctx.model.Detail.find({'article_id':article_id});
    await this.ctx.render('/default/detail',{
      content:list[0].content,
      title:name,
      list:list
    })
  }
}

module.exports = HomeController;
