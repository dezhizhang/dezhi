'use strict';

const Controller = require('egg').Controller;

class DetailController extends Controller {
    async index() {
        let article_id = this.ctx.query.id;
        await this.ctx.render('/admin/detail/index',{
            article_id,
        });
    }
    async add() {
        let article_id = this.ctx.query.id;
        await this.ctx.render('/admin/detail/add',{
            article_id
        });
    }
}

module.exports = DetailController;
