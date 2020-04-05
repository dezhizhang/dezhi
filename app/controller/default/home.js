'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        let focus = await this.ctx.model.Focus.find();
        console.log(focus);
        
        await this.ctx.render("/default/index",{
            focus,
        })
    }
}

module.exports = HomeController;
