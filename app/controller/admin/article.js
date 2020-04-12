'use strict';

const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');

class ArticleController extends BaseController {
    async index() {
        let list = await this.ctx.model.Article.find();
        await this.ctx.render('/admin/article/index',{
            list
        });
    }
    async add() {
        await this.ctx.render('/admin/article/add');
    }
    async doAdd() {
        let parts = this.ctx.multipart({ autoFields: true });
        let files = {};               
        let stream;
        while ((stream = await parts()) != null) {
            if (!stream.filename) {          
                break;
            }       
            let fieldname = stream.fieldname;  //file表单的名字
            //上传图片的目录
            let dir=await this.service.tools.getUploadFile(stream.filename);
            let target = dir.uploadDir;
            let writeStream = fs.createWriteStream(target);
            await pump(stream, writeStream);  
            files=Object.assign(files,{
                [fieldname]:dir.saveDir    
            })
            
        }  
        let article =new this.ctx.model.Article(Object.assign(files,parts.field));
        await article.save();
        this.ctx.body = {
            code:200,
            msg:"增加轮播图成功"
        }
    }
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteOne(id,'Article');
    }
}

module.exports = ArticleController;
