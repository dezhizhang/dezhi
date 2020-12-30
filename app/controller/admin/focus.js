'use strict';

const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');
class FocusController extends BaseController {
    async index() {
        let list = await this.ctx.model.Focus.find();
        await this.ctx.render('/admin/focus/index',{
            list
        });
    }
    async add() {
        await this.ctx.render('/admin/focus/add');
    }
    async doAdd() {
        let result = {};
        try{
            result = await this.service.upload.uploadImg();
        } catch(error) {
            throw error;
        }
        let admin =new this.ctx.model.Focus(result);
        await admin.save();
        await this.success('/admin/focus','增加轮播图成功');
    }
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteOne(id,'Focus');
    }
}

module.exports = FocusController;
