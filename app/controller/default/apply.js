'use strict';

const BaseController = require('./base');
class HomeController extends BaseController {
    async index() {
        await this.ctx.render('/default/apply');
    }
    //申情
    async doApply() {
        let apply = this.ctx.request.body;
        if(!this.ctx.session.userInfo){
            await this.error('/login','你还没有登录');
            return
        }
        const friendship = new this.ctx.model.Friendship(apply);
        await friendship.save();
        await this.success('/','申请成功');
        console.log();
        console.log('apply',apply);
    }
}

module.exports = HomeController;
