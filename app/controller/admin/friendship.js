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
        await this.ctx.render('/admin/friendship/add');
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
        await this.success('/admin/article','增加文章成功')
    }
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteOne(id,'Article');
    }
}

module.exports = ArticleController;
