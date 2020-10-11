'use strict';

const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');

class FriendshipController extends BaseController {
    async index() {
        const pageSize = 10;
        let page = this.ctx.query.page || 1;
        let count = await this.ctx.model.Friendship.find().count();
        let list = await this.ctx.model.Friendship.find().limit(pageSize).skip((page - 1) * pageSize).sort({'add_time':-1});
       
        await this.ctx.render('/admin/friendship/index',{
            list,
            count
        });
    }
    async add() {
        await this.ctx.render('/admin/friendship/add');
    }
    async doAdd() {
        let result = await this.ctx.request.body;
        let friendship = new this.ctx.model.Friendship(result);
        await friendship.save();
        await this.success('/admin/friendship','增加友情成功');
    }
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteOne(id,'Article');
    }
}

module.exports = FriendshipController;
