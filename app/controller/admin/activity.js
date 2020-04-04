'use strict';

const Controller = require('egg').Controller;

class ActivityController extends Controller {
    async index() {
       await this.ctx.render('/admin/activity/index');
    }
    async add() {
        await this.ctx.render('/admin/activity/add');
    }
}

module.exports = ActivityController;
