'use strict';

const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');

class ManagerController extends BaseController {
    async index() {
        let list = await this.ctx.model.Admin.find();
        await this.ctx.render('/admin/manager/index',{
            list
        })
    }
    async add() {
        await this.ctx.render('/admin/manager/add');
    }
    //增加管理员
    async doAdd() {
        let result = {};
        try{
            result = await this.ctx.service.upload.uploadImg();
        } catch(error) {
            throw error;
        }
        let data = await this.ctx.model.Admin.find({'email':result.email});
        if(data.length > 0) {
            await this.error('/admin/manager/add','管理员以存在');
            return;
        }
        let password = await this.ctx.service.tools.md5(result.password);
        let admin =new this.ctx.model.Admin({password,...result});
        await admin.save();
        await this.success('/admin/manager','增加管理员成功');
    }
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteOne(id,'Admin');
    }
}

module.exports = ManagerController;
