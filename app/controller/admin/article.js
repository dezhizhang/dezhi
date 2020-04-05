'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async index() {
        await this.ctx.render('/admin/article/index');
    }
    async add() {
        await this.ctx.render('/admin/article/add');
    }
}

module.exports = ArticleController;
