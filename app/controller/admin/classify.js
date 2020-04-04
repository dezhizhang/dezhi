'use strict';

const Controller = require('egg').Controller;

class ClassifyController extends Controller {
  async index() {
      await this.ctx.render('/admin/classify/index');
  }
  async add() {
      await this.ctx.render('/admin/classify/add')
  }
}

module.exports = ClassifyController;
