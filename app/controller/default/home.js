'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        let focus = await this.ctx.model.Focus.find();
        let article = await this.ctx.model.Article.find(); 
        await this.ctx.render("/default/index",{
            focus,
            article
        })
    }
}
module.exports = HomeController;
