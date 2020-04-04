'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    await this.ctx.render('/admin/user/index');
  }
  async add() {
      await this.ctx.render('/admin/user/add');
      
  }
}

module.exports = UserController;
