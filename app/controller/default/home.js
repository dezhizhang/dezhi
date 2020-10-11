'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        let page = this.ctx.query.page || 1;
        let pageSize = 10;
        let focus = await this.ctx.model.Focus.find();
        let count = await this.ctx.model.Article.count();
        this.ctx.state.friendship = await this.ctx.model.Friendship.find();
        let article = await this.ctx.model.Article.find().limit(pageSize).skip((page - 1) * pageSize).sort({'add_time':1}); 
        await this.ctx.render("/default/index",{
            focus,
            article,
            count
        })
    }
}
module.exports = HomeController;
