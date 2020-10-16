'use strict';

const Controller = require('egg').Controller;

const BaseController = require('./base');

class HomeController extends BaseController {
  async index() {
    await this.ctx.render('/default/login');
  }
  //登录提交
  async doLogin() {
    const login = await this.ctx.request.body;
    const { email,password,code } = login;
    if(code.toUpperCase() !== this.ctx.session.code.toUpperCase()) {
      await this.error('/login','验证码不正确');
      return;
    }
    login.password = await this.ctx.service.tools.md5(password);
    let user = await this.ctx.model.User.find({'email':email,'password':login.password});
    console.log('user',user);
    if(user.length <= 0) {
      await this.error('/login','用户名或密码不正确');
      return;
    }
    this.ctx.userInfo = user[0];
    await this.success('/','登录成功')
  }
}

module.exports = HomeController;
