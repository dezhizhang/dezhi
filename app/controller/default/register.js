'use strict';

const BaseController = require('./base');

class HomeController extends BaseController {
    async index() {
        await this.ctx.render('/default/register');
    }
    //注册提交
    async doRegister() {
        const register = this.ctx.request.body;
        const { password,email,code } = register;
        if(code.toUpperCase() !==  this.ctx.session.code.toUpperCase()) {
            await this.error('/register','验证码不正确！');
            return;
        }
        const user = await this.ctx.model.User.find({'email':email});
        if(user.length > 0) {
            await this.error('/','当前用户以存在您可以去登录');
            return
        }
        register.password = await this.service.tools.md5(password);
        const result = new this.ctx.model.User(register);
        await result.save();
        await this.success('/','注册成功可以去登录了'); 
    }
}

module.exports = HomeController;
