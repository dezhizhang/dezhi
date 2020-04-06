'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let { article_id,name } = this.ctx.query;
    let result = await this.ctx.model.Detail.find({'article_id':article_id});
    console.log(result);

    await this.ctx.render('/default/detail',{
      result:result[0],
      title:name
    })
  }
}

module.exports = HomeController;
