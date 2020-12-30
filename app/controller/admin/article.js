'use strict';

const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');

class ArticleController extends BaseController {
    async index() {
        const pageSize = 10;
        let page = this.ctx.query.page || 1;
        let count = await this.ctx.model.Article.find().count();
       
        let list = await this.ctx.model.Article.find().limit(pageSize).skip((page - 1) * pageSize).sort({'add_time':-1});
      
        await this.ctx.render('/admin/article/index',{
            list,
            count
        });
    }
    async add() {
        await this.ctx.render('/admin/article/add');
    }
    async doAdd() {
        let result = {};
        try{
            result = await this.ctx.service.upload.uploadImg();
        }catch(error) {
            throw error;
        }
        let article =new this.ctx.model.Article(result);
        await article.save();
        await this.success('/admin/article','增加文章成功')
    }
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteOne(id,'Article');
    }
}

module.exports = ArticleController;
