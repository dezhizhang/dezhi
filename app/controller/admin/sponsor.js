'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        await this.ctx.render('/admin/sponsor/index');
    }
    async add() {
        await this.ctx.render('/admin/sponsor/add');
    }
}

module.exports = HomeController;
