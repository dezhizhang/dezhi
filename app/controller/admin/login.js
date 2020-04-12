'use strict';

const BaseController = require('./base');
class LoginController extends BaseController {
  async index() {
    await this.ctx.render('/admin/login');
  }
  async doLogin() {
    let { emial,password,code } = this.ctx.request.body;
    password = await this.service.tools.md5(password);
    if(code.toUpperCase() == this.ctx.session.code.toUpperCase()) {
        let result = await this.ctx.model.Admin.find({'emial':emial,'password':password});
        if(result.length > 0) {
            //保存用户信息
            this.ctx.session.userInfo = result[0];
            //跳转到用户中心
            this.ctx.redirect('/admin/manager'); 
        } else {
            await this.error('/admin/login','用户名或密码不正确')
        }

    } else {
      await this.error('/admin/login','验证码不正确');
    }
  }
}

module.exports = LoginController;
