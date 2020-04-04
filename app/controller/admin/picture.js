'use strict';

const Controller = require('egg').Controller;

class PictureController extends Controller {
    async index() {
        await this.ctx.render('/admin/picture/index');
    }
    async add() {
        await this.ctx.render('/admin/picture/add');
    }
}

module.exports = PictureController;
